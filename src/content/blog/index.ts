import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
  content: string;
  isNew: boolean;
  relatedPosts?: string[];
  relatedSolutions?: string[];
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  // Find the first --- block anywhere in the file (content engine may include a preamble)
  const match = raw.match(/---\n([\s\S]*?)\n---\n?([\s\S]*)/);
  if (!match) return { data: {}, content: raw.trim() };

  const yaml = match[1];
  // Content is everything after the closing --- (skip any preamble before the first ---)
  const content = match[2].trim();
  const data: Record<string, unknown> = {};

  for (const line of yaml.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();

    if (val.startsWith("[")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
    } else if (/^\d+$/.test(val)) {
      data[key] = parseInt(val, 10);
    } else {
      // Handle "N minutes" readingTime format
      const minutesMatch = val.match(/^(\d+)\s+minutes?$/i);
      if (minutesMatch) {
        data[key] = parseInt(minutesMatch[1], 10);
      } else {
        data[key] = val.replace(/^['"]|['"]$/g, "");
      }
    }
  }

  return { data, content };
}

function isValidPost(data: Record<string, unknown>, slug: string): boolean {
  // Require at minimum a title and date; reject UUID-only slugs with no explicit slug field
  if (!data.title || !data.date) return false;
  // Skip posts where the only slug would be a UUID filename (content engine draft output)
  if (!data.slug && /^[0-9a-f-]{36}$/.test(slug)) return false;
  return true;
}

function isRecentPost(dateStr: string): boolean {
  const postDate = new Date(dateStr);
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return postDate >= sevenDaysAgo && postDate <= now;
}

function loadBlogPosts(): BlogPost[] {
  const dir = path.join(process.cwd(), "content", "blog");

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .flatMap((file): BlogPost[] => {
      try {
        const raw = fs.readFileSync(path.join(dir, file), "utf-8");
        const { data, content } = parseFrontmatter(raw);
        const filenameSlug = path.basename(file, ".md");
        const slug = (data.slug as string) || filenameSlug;

        if (!isValidPost(data, filenameSlug)) return [];

        return [
          {
            slug,
            title: (data.title as string) ?? "",
            excerpt: (data.excerpt as string) ?? "",
            date: (data.date as string) ?? "",
            category: (data.category as string) ?? "",
            tags: (data.tags as string[]) ?? [],
            readingTime: (data.readingTime as number) ?? 5,
            content,
            isNew: isRecentPost((data.date as string) ?? ""),
            relatedPosts: data.relatedPosts as string[] | undefined,
            relatedSolutions: data.relatedSolutions as string[] | undefined,
          },
        ];
      } catch {
        return [];
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const blogPosts: BlogPost[] = loadBlogPosts();

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
