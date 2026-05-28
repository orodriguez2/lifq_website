import { Container } from "@/components/layout/Container";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import {
  ShieldCheck, Bell, FileText, CreditCard, BarChart2, DollarSign, Calendar, Users,
  List, RefreshCw, Zap, Search, TrendingDown, Shield, PieChart, Gift, AlertCircle,
  BookOpen, Plane, Clock, Car, FileCheck, Map, Heart, Lock, CheckCircle, TrendingUp,
  LifeBuoy,
} from "lucide-react";
import type { Solution } from "@/content/solutions/types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "shield-check": ShieldCheck,
  "bell": Bell,
  "file-text": FileText,
  "credit-card": CreditCard,
  "bar-chart": BarChart2,
  "dollar-sign": DollarSign,
  "calendar": Calendar,
  "users": Users,
  "list": List,
  "refresh-cw": RefreshCw,
  "zap": Zap,
  "search": Search,
  "trending-down": TrendingDown,
  "shield": Shield,
  "pie-chart": PieChart,
  "gift": Gift,
  "alert-circle": AlertCircle,
  "book-open": BookOpen,
  "plane": Plane,
  "clock": Clock,
  "car": Car,
  "file-check": FileCheck,
  "map": Map,
  "heart": Heart,
  "lock": Lock,
  "check-circle": CheckCircle,
  "trending-up": TrendingUp,
  "life-buoy": LifeBuoy,
};

interface Props {
  benefits: Solution["benefits"];
}

export function SolutionBenefits({ benefits }: Props) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <FadeUp className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-heading font-medium"
            style={{ color: "#0D2A47" }}
          >
            What you get with LifQ
          </h2>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = ICON_MAP[benefit.icon] ?? Shield;
            return (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl border border-border bg-card h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3
                    className="text-sm font-heading font-medium mb-2"
                    style={{ color: "#0D2A47" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
