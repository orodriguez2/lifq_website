const WARRANTY_CATEGORIES = [
  {
    category: "Kitchen appliances",
    items: [
      { name: "Refrigerator", typicalWarranty: "1 year parts & labor, 5 years sealed system" },
      { name: "Dishwasher", typicalWarranty: "1 year parts & labor" },
      { name: "Microwave", typicalWarranty: "1 year parts & labor" },
      { name: "Oven / range / cooktop", typicalWarranty: "1 year parts & labor" },
      { name: "Garbage disposal", typicalWarranty: "2–5 years depending on brand" },
      { name: "Coffee maker / espresso machine", typicalWarranty: "1–2 years" },
    ],
  },
  {
    category: "Laundry",
    items: [
      { name: "Washing machine", typicalWarranty: "1 year parts & labor, 10 years motor" },
      { name: "Dryer", typicalWarranty: "1 year parts & labor" },
    ],
  },
  {
    category: "HVAC and home systems",
    items: [
      { name: "Furnace / heating system", typicalWarranty: "5–10 years on heat exchanger" },
      { name: "Central air conditioner", typicalWarranty: "5–10 years on compressor" },
      { name: "Water heater", typicalWarranty: "6–12 years depending on model" },
      { name: "Sump pump", typicalWarranty: "1–3 years" },
      { name: "Water softener", typicalWarranty: "1–10 years depending on brand" },
    ],
  },
  {
    category: "Electronics",
    items: [
      { name: "Television", typicalWarranty: "1 year (often extended by credit card)" },
      { name: "Laptop / computer", typicalWarranty: "1 year (often extended by credit card)" },
      { name: "Smartphone", typicalWarranty: "1 year manufacturer" },
      { name: "Tablet", typicalWarranty: "1 year manufacturer" },
      { name: "Printer", typicalWarranty: "1 year" },
      { name: "Gaming console", typicalWarranty: "1 year" },
    ],
  },
  {
    category: "Tools and outdoor",
    items: [
      { name: "Lawn mower / riding mower", typicalWarranty: "2–3 years" },
      { name: "Power tools (drill, saw, etc.)", typicalWarranty: "1–5 years depending on brand" },
      { name: "Pressure washer", typicalWarranty: "1–2 years" },
      { name: "Generator", typicalWarranty: "2–3 years" },
    ],
  },
  {
    category: "Smart home and other",
    items: [
      { name: "Smart thermostat", typicalWarranty: "1–2 years" },
      { name: "Security system / cameras", typicalWarranty: "1–2 years" },
      { name: "Garage door opener", typicalWarranty: "1–3 years on motor" },
      { name: "Vacuum cleaner", typicalWarranty: "1–5 years" },
    ],
  },
];

export function WarrantyGuide() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-xl bg-[#FB8C00]/5 border border-[#FB8C00]/20 p-4 mb-8">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium" style={{ color: "#0D2A47" }}>Tip:</span> Check your credit
          card benefits — most premium cards automatically extend manufacturer warranties by 1–2 years
          at no cost. This applies to everything on this list.
        </p>
      </div>

      <div className="space-y-8">
        {WARRANTY_CATEGORIES.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {cat.category}
            </h3>
            <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-4 px-4 py-3 bg-card">
                  <span className="text-sm font-medium" style={{ color: "#0D2A47" }}>
                    {item.name}
                  </span>
                  <span className="text-xs text-muted-foreground text-right shrink-0 max-w-[55%]">
                    {item.typicalWarranty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-sm font-medium mb-1" style={{ color: "#0D2A47" }}>
          Stop tracking warranties manually
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          LifQ reads your warranty documents and tracks expiration dates automatically — with reminders
          before anything expires.
        </p>
        <a
          href="/beta-signup"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-medium hover:bg-[#1565C0] transition-colors"
        >
          Request beta access →
        </a>
      </div>
    </div>
  );
}
