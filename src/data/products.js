export const products = [
  {
    id: "prod-1",
    title: "Toyota Fortuner 2021",
    price: 32500,
    originalPrice: 35000,
    category: "Vehicles",
    subcategory: "Cars & SUVs",
    location: "Dubai, UAE",
    countryCode: "AE",
    rating: 4.8,
    reviewsCount: 124,
    ordersCount: 18,
    isFeatured: true,
    isVerifiedSeller: true,
    isTopRated: true,
    condition: "Used",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 2,
    seller: {
      name: "Emirates Auto Trading",
      location: "Dubai, UAE",
      memberSince: "2021",
      responseRate: "98%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "2021 Toyota Fortuner 2.7L EXR 4WD in immaculate condition. Full agency service records available, no accident history. GCC Specs.",
    features: [
      "2.7L Dual VVT-i 4-Cylinder Engine",
      "6-Speed Automatic Transmission",
      "7-Seater Leather Interior",
      "Reverse Camera & Parking Sensors",
      "Cruise Control & Dual Climate A/C"
    ]
  },
  {
    id: "prod-2",
    title: "iPhone 15 Pro 256GB",
    price: 780,
    originalPrice: 999,
    localPriceEstimate: "approx ₹64,800",
    category: "Mobiles",
    subcategory: "Smartphones",
    location: "Singapore",
    countryCode: "SG",
    rating: 4.9,
    reviewsCount: 89,
    ordersCount: 120,
    isFeatured: true,
    isVerifiedSeller: true,
    isTopRated: true,
    condition: "Like New",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 14,
    seller: {
      name: "TechWorld Store",
      location: "Singapore",
      memberSince: "2023",
      responseRate: "99%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "iPhone 15 Pro with 256GB storage. Excellent condition, barely used. Comes with original box, braided USB-C cable, and valid global warranty. Factory unlocked for all international GSM & CDMA carriers.",
    features: [
      "256GB High-Speed NVMe Storage",
      "A17 Pro 3nm Flagship Chip",
      "6.1\" Super Retina XDR Display with ProMotion 120Hz",
      "Aerospace-Grade Titanium Frame",
      "48MP Triple Camera with 3x Telephoto",
      "iOS 17 Pre-installed & Upgradable",
      "Original Accessories & Box Included"
    ]
  },
  {
    id: "prod-3",
    title: "Modern Sofa 3-Seater",
    price: 320,
    originalPrice: 480,
    category: "Furniture",
    subcategory: "Living Room",
    location: "Berlin, Germany",
    countryCode: "DE",
    rating: 4.9,
    reviewsCount: 210,
    ordersCount: 94,
    isFeatured: false,
    isVerifiedSeller: true,
    isTopRated: true,
    condition: "New",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 8,
    seller: {
      name: "Nordic Living Studio",
      location: "Berlin, Germany",
      memberSince: "2022",
      responseRate: "97%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Minimalist Scandinavian design 3-seater sofa wrapped in premium stain-resistant woven fabric. Solid beech wood legs and high-density supportive foam cushions.",
    features: [
      "Premium spill-resistant linen blend",
      "FSC-certified solid hardwood frame",
      "High resilience pocket-sprung cushions",
      "Removable & washable cushion covers"
    ]
  },
  {
    id: "prod-4",
    title: "MacBook Air M2 13.6\"",
    price: 850,
    originalPrice: 1099,
    category: "Electronics",
    subcategory: "Laptops & Computers",
    location: "New York, USA",
    countryCode: "US",
    rating: 4.7,
    reviewsCount: 56,
    ordersCount: 65,
    isFeatured: true,
    isVerifiedSeller: true,
    isTopRated: false,
    condition: "Like New",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 5,
    seller: {
      name: "Empire Gadgets LLC",
      location: "New York, USA",
      memberSince: "2020",
      responseRate: "99%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Apple MacBook Air with M2 chip (8-core CPU, 8-core GPU), 8GB Unified Memory, 256GB SSD, Midnight finish. 100% battery health, zero scratches, original 30W charger included.",
    features: [
      "Apple M2 chip with 8-core CPU & 8-core GPU",
      "13.6\" Liquid Retina Display with True Tone",
      "1080p FaceTime HD camera",
      "MagSafe 3 charging port + dual Thunderbolt ports",
      "Up to 18 hours battery life"
    ]
  },
  {
    id: "prod-5",
    title: "Women's Leather Handbag",
    price: 120,
    originalPrice: 190,
    category: "Fashion",
    subcategory: "Bags & Accessories",
    location: "Paris, France",
    countryCode: "FR",
    rating: 4.5,
    reviewsCount: 74,
    ordersCount: 142,
    isFeatured: false,
    isVerifiedSeller: true,
    isTopRated: false,
    condition: "New",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 22,
    seller: {
      name: "Atelier Parisien",
      location: "Paris, France",
      memberSince: "2022",
      responseRate: "95%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Handcrafted genuine Italian calfskin leather handbag designed in Paris. Includes adjustable cross-body strap, polished gold-tone hardware, and protective dust bag.",
    features: [
      "100% genuine full-grain Italian leather",
      "Reinforced luxury stitching",
      "Internal zippered pocket & phone slot",
      "Detachable and adjustable shoulder strap"
    ]
  },
  {
    id: "prod-6",
    title: "Dining Table Set (6 Chairs)",
    price: 460,
    originalPrice: 650,
    category: "Furniture",
    subcategory: "Dining Room",
    location: "Melbourne, Australia",
    countryCode: "AU",
    rating: 4.6,
    reviewsCount: 91,
    ordersCount: 38,
    isFeatured: false,
    isVerifiedSeller: true,
    isTopRated: true,
    condition: "New",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 6,
    seller: {
      name: "Aussie Homecraft Co.",
      location: "Melbourne, Australia",
      memberSince: "2023",
      responseRate: "96%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Contemporary solid oak dining table with 6 matching upholstered ergonomic chairs. Natural wood grain finish with durable protective lacquer.",
    features: [
      "Solid white oak construction",
      "Includes 6 high-comfort padded chairs",
      "Water-resistant matte polyurethane finish",
      "Easy 20-minute assembly"
    ]
  },
  {
    id: "prod-7",
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 290,
    originalPrice: 399,
    category: "Electronics",
    subcategory: "Audio",
    location: "London, UK",
    countryCode: "GB",
    rating: 4.9,
    reviewsCount: 185,
    ordersCount: 240,
    isFeatured: true,
    isVerifiedSeller: true,
    isTopRated: true,
    condition: "New",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 19,
    seller: {
      name: "Sonic Audio UK",
      location: "London, UK",
      memberSince: "2021",
      responseRate: "100%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Industry-leading noise cancelling with two processors and 8 microphones. Up to 30 hours battery life with quick charging, ultra-comfortable lightweight design.",
    features: [
      "Integrated Processor V1 & HD Noise Cancelling Processor QN1",
      "Auto NC Optimizer",
      "Multipoint Bluetooth connection",
      "30-hour battery life with USB-PD fast charging"
    ]
  },
  {
    id: "prod-8",
    title: "Nike Air Max 270 Sneakers",
    price: 130,
    originalPrice: 160,
    category: "Fashion",
    subcategory: "Footwear",
    location: "Tokyo, Japan",
    countryCode: "JP",
    rating: 4.7,
    reviewsCount: 112,
    ordersCount: 188,
    isFeatured: false,
    isVerifiedSeller: true,
    isTopRated: true,
    condition: "New",
    shipping: "Worldwide",
    inStock: true,
    stockCount: 35,
    seller: {
      name: "Tokyo Kicks Hub",
      location: "Tokyo, Japan",
      memberSince: "2020",
      responseRate: "98%",
      verified: true
    },
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Nike Air Max 270 delivers unbeatable, all-day comfort with the biggest heel Max Air unit yet. Lightweight, breathable mesh upper.",
    features: [
      "Extra-large Max Air heel unit",
      "Breathable engineered mesh upper",
      "Dual-density foam sole",
      "100% authentic with Japanese retail tag"
    ]
  }
];
