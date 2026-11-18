export const householdPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 1500,
    period: "month",
    description: "Perfect for small households ready to start composting.",
    features: [
      "1 × 20L collection bin provided",
      "Weekly doorstep pickup",
      "Monthly impact summary email",
      "GreenPoints rewards",
      "WhatsApp support"
    ],
    notIncluded: ["Priority pickup windows", "Detailed impact PDF report", "Free compost sample"],
    popular: false,
    cta: "Start Basic Plan"
  },
  {
    id: "premium",
    name: "Premium",
    price: 3000,
    period: "month",
    description: "For eco-conscious households who want maximum impact.",
    features: [
      "1 × 50L collection bin provided",
      "Twice-weekly priority pickup",
      "Monthly detailed impact PDF report",
      "GreenPoints rewards (2×)",
      "Free 2kg compost sample quarterly",
      "WhatsApp + Phone support",
      "App access with live GPS tracking"
    ],
    notIncluded: [],
    popular: true,
    cta: "Start Premium Plan"
  }
];

export const businessPlans = [
  {
    id: "restaurant",
    name: "Restaurant",
    price: 8000,
    period: "month",
    minPrice: true,
    description: "For cafés, restaurants and food courts.",
    features: [
      "2 × 120L heavy-duty bins",
      "Daily or tri-weekly pickup (flexible)",
      "Monthly waste analytics dashboard",
      "ESG/CSR report data export",
      "Dedicated account manager",
      "10% volume discount (12-month contract)",
      "ScrapCycle partner badge"
    ],
    popular: false,
    cta: "Get Restaurant Plan"
  },
  {
    id: "hotel",
    name: "Hotel / Resort",
    price: 25000,
    period: "month",
    minPrice: true,
    description: "Enterprise solution for hotels and resorts.",
    features: [
      "Custom bin count and sizes",
      "Daily guaranteed pickup",
      "Real-time waste analytics dashboard",
      "Full ESG / GRI reporting support",
      "Dedicated account manager + on-site support",
      "10% volume discount (12-month contract)",
      "Annual staff training workshop",
      "Carbon offset certificates",
      "ScrapCycle Gold Partner badge"
    ],
    popular: true,
    cta: "Get Hotel Plan"
  }
];
