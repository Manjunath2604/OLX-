import React, { useState, useMemo } from "react";
import ScreenSwitcher from "./components/common/ScreenSwitcher";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// Screen 1: Homepage
import HeroBanner from "./components/home/HeroBanner";
import CategoryPills from "./components/home/CategoryPills";
import ValueProps from "./components/home/ValueProps";
import PromoBanner from "./components/home/PromoBanner";
import ProductGrid from "./components/listing/ProductGrid";

// Screen 2: Listing
import CategoryTabs from "./components/listing/CategoryTabs";
import FilterSidebar from "./components/listing/FilterSidebar";

// Screen 3: Vendor Dashboard
import VendorSidebar from "./components/dashboard/VendorSidebar";
import VendorHeader from "./components/dashboard/VendorHeader";
import StatCards from "./components/dashboard/StatCards";
import RevenueChart from "./components/dashboard/RevenueChart";
import OrderStatusList from "./components/dashboard/OrderStatusList";
import RecentOrdersTable from "./components/dashboard/RecentOrdersTable";
import CategoryPieChart from "./components/dashboard/CategoryPieChart";

// Screen 4: Product Details
import ImageGallery from "./components/product/ImageGallery";
import ProductInfo from "./components/product/ProductInfo";
import TabbedDetails from "./components/product/TabbedDetails";
import ChatModal from "./components/product/ChatModal";

// Screen 5: Checkout
import CheckoutStepper from "./components/checkout/CheckoutStepper";
import ShippingAddress from "./components/checkout/ShippingAddress";
import OrderSummary from "./components/checkout/OrderSummary";
import SuccessModal from "./components/checkout/SuccessModal";

// Screen 6: Mobile App Showcase
import MobileShowcase from "./components/mobile/MobileShowcase";

// Data
import { products } from "./data/products";
import { ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Selected product for Details and Checkout
  const [selectedProduct, setSelectedProduct] = useState(products[1]); // Default to iPhone 15 Pro

  // Listing Filters
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedConditions, setSelectedConditions] = useState(["New", "Like New", "Used"]);
  const [selectedShipping, setSelectedShipping] = useState("worldwide");
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  // Checkout state
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [shippingTier, setShippingTier] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingFormData, setShippingFormData] = useState({
    country: "United States",
    fullName: "Emma Wilson",
    address: "123 Market Street",
    city: "New York",
    state: "NY",
    zip: "10001"
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Chat modal state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatSeller, setChatSeller] = useState(null);

  // Dashboard active tab
  const [dashboardTab, setDashboardTab] = useState("dashboard");

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category match
      if (selectedCategory !== "all") {
        const catMap = {
          vehicles: "Vehicles",
          mobiles: "Mobiles",
          electronics: "Electronics",
          furniture: "Furniture",
          fashion: "Fashion",
          realestate: "Real Estate"
        };
        const target = catMap[selectedCategory] || selectedCategory;
        if (p.category.toLowerCase() !== target.toLowerCase()) return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchLoc = p.location.toLowerCase().includes(q);
        if (!matchTitle && !matchCat && !matchLoc) return false;
      }

      // Price match
      if (maxPrice < 5000 && p.price > maxPrice) return false;

      // Condition match
      if (selectedConditions.length > 0 && !selectedConditions.includes(p.condition)) {
        return false;
      }

      // Rating match
      if (selectedRating && p.rating < selectedRating) return false;

      return true;
    });
  }, [searchQuery, selectedCategory, maxPrice, selectedConditions, selectedRating, selectedRegion]);

  const toggleCondition = (cond) => {
    setSelectedConditions((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]
    );
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setMaxPrice(5000);
    setSelectedConditions(["New", "Like New", "Used"]);
    setSelectedShipping("worldwide");
    setSelectedRating(null);
    setSelectedRegion("All Regions");
    setSearchQuery("");
  };

  // Handlers
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentScreen("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setCurrentScreen("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenChat = (seller) => {
    setChatSeller(seller);
    setIsChatOpen(true);
  };

  const shippingFees = {
    standard: 20,
    express: 45,
    priority: 65
  };
  const currentShippingFee = shippingFees[shippingTier] || 20;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Persistent Prototype Switcher (Screens 1 to 6) */}
      <ScreenSwitcher currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />

      {/* Screen 3: Vendor Dashboard has its own distinct full-bleed studio layout */}
      {currentScreen === "dashboard" ? (
        <div className="flex flex-1 min-h-[calc(100vh-40px)] bg-slate-100">
          <VendorSidebar
            activeTab={dashboardTab}
            setActiveTab={setDashboardTab}
            setCurrentScreen={setCurrentScreen}
          />
          <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
            <VendorHeader setCurrentScreen={setCurrentScreen} />
            <main className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1">
              <StatCards />

              {/* Charts & Status Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                  <RevenueChart />
                </div>
                <div className="lg:col-span-4">
                  <OrderStatusList />
                </div>
              </div>

              {/* Recent Orders & Category Share Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <RecentOrdersTable />
                </div>
                <div className="lg:col-span-5">
                  <CategoryPieChart />
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <>
          {/* Global Header for all other screens */}
          <Header
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            cartCount={2}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <main className="flex-1">
            {/* SCREEN 1: HOMEPAGE – GLOBAL MARKETPLACE */}
            {currentScreen === "home" && (
              <div className="animate-fade-in">
                <HeroBanner
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onSearch={() => setCurrentScreen("listing")}
                  setCurrentScreen={setCurrentScreen}
                  setSelectedCategory={setSelectedCategory}
                />

                <CategoryPills
                  onSelectCategory={(catId) => {
                    setSelectedCategory(catId);
                    setCurrentScreen("listing");
                  }}
                />

                <ValueProps />

                {/* Featured Deals on Homepage */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        Featured Global Listings
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Hand-picked, verified items ready for immediate international dispatch
                      </p>
                    </div>

                    <button
                      onClick={() => setCurrentScreen("listing")}
                      className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer shadow-2xs"
                    >
                      <span>Explore All Products</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#f95721]" />
                    </button>
                  </div>

                  <ProductGrid
                    products={products.slice(0, 6)}
                    onSelectProduct={handleSelectProduct}
                  />
                </section>

                <PromoBanner setCurrentScreen={setCurrentScreen} />
              </div>
            )}

            {/* SCREEN 2: PRODUCT LISTING – BROWSE & DISCOVER */}
            {currentScreen === "listing" && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
                {/* Horizontal Category Filter Pills */}
                <div className="mb-6">
                  <CategoryTabs
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Faceted Filters */}
                  <div className="lg:col-span-3">
                    <FilterSidebar
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                      maxPrice={maxPrice}
                      setMaxPrice={setMaxPrice}
                      selectedConditions={selectedConditions}
                      toggleCondition={toggleCondition}
                      selectedShipping={selectedShipping}
                      setSelectedShipping={setSelectedShipping}
                      selectedRating={selectedRating}
                      setSelectedRating={setSelectedRating}
                      selectedRegion={selectedRegion}
                      setSelectedRegion={setSelectedRegion}
                      resetFilters={resetFilters}
                    />
                  </div>

                  {/* Right Product Grid */}
                  <div className="lg:col-span-9 space-y-4">
                    <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-slate-200 text-xs">
                      <span className="font-semibold text-slate-600">
                        Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> results
                      </span>
                      <div className="flex items-center space-x-2 text-slate-500">
                        <span>Sort by:</span>
                        <select className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
                          <option>Recommended</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Highest Rated</option>
                        </select>
                      </div>
                    </div>

                    <ProductGrid
                      products={filteredProducts}
                      onSelectProduct={handleSelectProduct}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: PRODUCT DETAILS – BUY WITH CONFIDENCE */}
            {currentScreen === "product" && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6 overflow-x-auto">
                  <button onClick={() => setCurrentScreen("home")} className="hover:text-[#f95721] cursor-pointer">
                    Home
                  </button>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  <button onClick={() => setCurrentScreen("listing")} className="hover:text-[#f95721] cursor-pointer">
                    {selectedProduct.category}
                  </button>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-800 font-semibold truncate">{selectedProduct.title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Gallery */}
                  <div className="lg:col-span-7">
                    <ImageGallery images={selectedProduct.images} title={selectedProduct.title} />
                  </div>

                  {/* Right Product Buy Information */}
                  <div className="lg:col-span-5">
                    <ProductInfo
                      product={selectedProduct}
                      onBuyNow={handleBuyNow}
                      onChatSeller={handleOpenChat}
                    />
                  </div>
                </div>

                {/* Bottom Specifications & Tabs */}
                <TabbedDetails product={selectedProduct} />
              </div>
            )}

            {/* SCREEN 5: CHECKOUT – SECURE GLOBAL TRANSACTIONS */}
            {currentScreen === "checkout" && (
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
                <CheckoutStepper currentStep={checkoutStep} setStep={setCheckoutStep} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
                  {/* Left Column: Address & Shipping */}
                  <div className="lg:col-span-7">
                    <ShippingAddress
                      formData={shippingFormData}
                      setFormData={setShippingFormData}
                      selectedShippingTier={shippingTier}
                      setSelectedShippingTier={setShippingTier}
                    />
                  </div>

                  {/* Right Column: Order Summary & Escrow CTA */}
                  <div className="lg:col-span-5">
                    <OrderSummary
                      product={selectedProduct}
                      shippingFee={currentShippingFee}
                      customsFee={45}
                      paymentMethod={paymentMethod}
                      setPaymentMethod={setPaymentMethod}
                      onPay={() => setIsSuccessModalOpen(true)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 6: MOBILE APP – ON THE GO, ANYWHERE */}
            {currentScreen === "mobile" && (
              <div className="animate-fade-in">
                <MobileShowcase onSelectProduct={handleSelectProduct} />
              </div>
            )}
          </main>

          {/* Global Footer */}
          <Footer setCurrentScreen={setCurrentScreen} />
        </>
      )}

      {/* Global Modals */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
          setCurrentScreen("home");
        }}
        onViewDashboard={() => {
          setIsSuccessModalOpen(false);
          setCurrentScreen("dashboard");
        }}
        total={(selectedProduct?.price || 780) + currentShippingFee + 45}
      />

      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        seller={chatSeller || selectedProduct.seller}
        product={selectedProduct}
      />
    </div>
  );
}
