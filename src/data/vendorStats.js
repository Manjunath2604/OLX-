export const vendorStats = {
  kpis: [
    {
      id: "listings",
      label: "Total Listings",
      value: "48",
      growth: "+12%",
      positive: true,
      icon: "Tag"
    },
    {
      id: "views",
      label: "Total Views",
      value: "12,640",
      growth: "+18%",
      positive: true,
      icon: "Eye"
    },
    {
      id: "orders",
      label: "Total Orders",
      value: "126",
      growth: "+25%",
      positive: true,
      icon: "ShoppingBag"
    },
    {
      id: "revenue",
      label: "Total Revenue",
      value: "$8,420",
      growth: "+20%",
      positive: true,
      icon: "DollarSign"
    }
  ],
  revenueTrends: {
    "Last 6 Months": [
      { month: "Jan", amount: 4200 },
      { month: "Feb", amount: 4800 },
      { month: "Mar", amount: 5300 },
      { month: "Apr", amount: 5100 },
      { month: "May", amount: 6240, activePoint: true, tooltip: "$6,240 May 2026" },
      { month: "Jun", amount: 6800 },
      { month: "Jul", amount: 7200 },
      { month: "Aug", amount: 7900 },
      { month: "Sep", amount: 8420 }
    ],
    "Last 30 Days": [
      { month: "W1", amount: 1800 },
      { month: "W2", amount: 2150 },
      { month: "W3", amount: 2400 },
      { month: "W4", amount: 2070 }
    ],
    "This Year": [
      { month: "Q1", amount: 14300 },
      { month: "Q2", amount: 18140 },
      { month: "Q3", amount: 23520 }
    ]
  },
  orderStatusCounts: [
    { label: "Pending", count: 12, color: "bg-amber-400", textColor: "text-amber-600" },
    { label: "Processing", count: 28, color: "bg-blue-500", textColor: "text-blue-600" },
    { label: "Shipped", count: 64, color: "bg-indigo-500", textColor: "text-indigo-600" },
    { label: "Delivered", count: 98, color: "bg-emerald-500", textColor: "text-emerald-600" },
    { label: "Cancelled", count: 6, color: "bg-rose-500", textColor: "text-rose-600" }
  ],
  recentOrders: [
    {
      id: "ORD-9421",
      product: "iPhone 15 Pro",
      buyer: "Emma Wilson",
      amount: "$780",
      status: "Processing",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      date: "Sep 10, 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "ORD-9420",
      product: "Dining Table Set",
      buyer: "Liam Chen",
      amount: "$460",
      status: "Shipped",
      statusColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      date: "Sep 09, 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "ORD-9419",
      product: "Nike Shoes Air Max",
      buyer: "Sophia Kim",
      amount: "$120",
      status: "Delivered",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      date: "Sep 08, 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "ORD-9418",
      product: "Modern Sofa",
      buyer: "David Ross",
      amount: "$320",
      status: "Processing",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      date: "Sep 08, 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    }
  ],
  topCategories: [
    { name: "Electronics", percentage: 35, color: "#3B82F6", hexBg: "bg-blue-500" },
    { name: "Home & Furniture", percentage: 25, color: "#10B981", hexBg: "bg-emerald-500" },
    { name: "Fashion", percentage: 18, color: "#F59E0B", hexBg: "bg-amber-500" },
    { name: "Vehicles", percentage: 12, color: "#8B5CF6", hexBg: "bg-purple-500" },
    { name: "Others", percentage: 10, color: "#94A3B8", hexBg: "bg-slate-400" }
  ]
};
