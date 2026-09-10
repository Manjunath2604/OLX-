export const categories = [
  { id: "all", name: "All", icon: "LayoutGrid", count: 1240 },
  { id: "vehicles", name: "Cars & Vehicles", shortName: "Vehicles", icon: "Car", count: 342 },
  { id: "mobiles", name: "Mobiles & Tablets", shortName: "Mobiles", icon: "Smartphone", count: 512 },
  { id: "electronics", name: "Electronics", shortName: "Electronics", icon: "Tv", count: 820 },
  { id: "furniture", name: "Home & Furniture", shortName: "Furniture", icon: "Sofa", count: 415 },
  { id: "fashion", name: "Fashion", shortName: "Fashion", icon: "Shirt", count: 930 },
  { id: "realestate", name: "Real Estate", shortName: "Real Estate", icon: "Home", count: 184 },
  { id: "jobs", name: "Jobs", shortName: "Jobs", icon: "Briefcase", count: 210 },
  { id: "more", name: "More", shortName: "More", icon: "MoreHorizontal", count: 560 }
];

export const filterOptions = {
  conditions: ["New", "Like New", "Used"],
  shippingTypes: [
    { id: "worldwide", label: "Worldwide" },
    { id: "local", label: "Local Only" }
  ],
  ratings: [
    { stars: 5, label: "5 & Up" },
    { stars: 4, label: "4 & Up" },
    { stars: 3, label: "3 & Up" },
    { stars: 2, label: "2 & Up" }
  ],
  regions: [
    "All Regions",
    "North America",
    "Europe",
    "Asia Pacific",
    "Middle East",
    "Latin America"
  ]
};
