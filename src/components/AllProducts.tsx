import { useMemo, useState, useEffect } from "react";
import { companies } from "../data/companies";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight, SlidersHorizontal } from "lucide-react";

interface Props {
  isDark: boolean;
}

export const AllProducts: React.FC<Props> = ({ isDark }) => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const getInitialCount = () =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 8 : 12;

  const [visibleCount, setVisibleCount] = useState(getInitialCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getInitialCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bg = isDark ? "bg-[#0a1628]" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-500";
  const cardBg = isDark
    ? "bg-[#0d1f3c] border-white/10 hover:border-blue-500/40"
    : "bg-slate-50 border-slate-200 hover:border-blue-300";

  const allProducts = useMemo(() => {
    return companies.flatMap((company) =>
      company.products.map((product) => ({
        ...product,
        companyId: company.id,
        companyName: company.name,
        brandColor: company.brandColor,
      }))
    );
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(allProducts.map((p) => p.category));
    return ["All", ...Array.from(unique)];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    let products =
      selectedCategory === "All"
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory);

    if (searchQuery.trim()) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  }, [allProducts, selectedCategory, searchQuery]);

  useEffect(() => {
    setVisibleCount(getInitialCount());
  }, [selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className={`${bg} relative py-24 md:py-32`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ Header */}
        <div className="mb-10 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary}`}>
            Explore Our <span className="gradient-text-blue">Industrial</span>{" "}
            Products
          </h2>
          <p className={`mt-4 text-lg ${textSecondary}`}>
            Browse automation and industrial solutions.
          </p>
        </div>

        {/* ✅ Mobile Controls */}
        <div className="md:hidden mb-6 space-y-3">

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          {/* Filter Button */}
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold"
          >
            <SlidersHorizontal size={16} />
            {selectedCategory}
          </button>

          {/* ✅ Inline Expandable Categories */}
          <AnimatePresence>
            {showFilter && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <div className="flex flex-col max-h-64 overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowFilter(false);
                      }}
                      className={`text-left px-4 py-3 text-sm transition
                        ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "hover:bg-slate-100 text-slate-700"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ✅ Desktop Categories */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase transition
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product, i) => (
            <motion.div
              key={product.id + product.companyId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/product/${product.id}`)}
              className={`rounded-2xl border cursor-pointer overflow-hidden ${cardBg}`}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <div className="text-xs uppercase text-blue-600 mb-2">
                  {product.category}
                </div>

                <h3 className={`font-bold mb-2 ${textPrimary}`}>
                  {product.name}
                </h3>

                <p className={`text-sm mb-4 line-clamp-2 ${textSecondary}`}>
                  {product.description}
                </p>

                <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold">
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Show More */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Show More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};