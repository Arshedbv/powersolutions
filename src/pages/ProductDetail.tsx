import { useParams, useNavigate } from "react-router-dom";
import { companies } from "../data/companies";
import { CompanyCard } from "@/components/CompanyCard";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useMemo } from "react";

export const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  // ✅ Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId]);

  const bg = isDark ? "bg-[#0a1628]" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-500";
  const cardBg = isDark
    ? "bg-[#0d1f3c] border-white/10 hover:border-blue-500/40"
    : "bg-slate-50 border-slate-200 hover:border-blue-300";

  // ✅ Find companies offering this product
  const matchingCompanies = companies.filter((company) =>
    company.products.some((p) => p.id === productId)
  );

  if (!matchingCompanies.length) {
    return (
      <div className="p-20 text-center text-lg font-semibold">
        Product not found
      </div>
    );
  }

  const product =
    matchingCompanies[0].products.find((p) => p.id === productId);

  // ✅ Unique other products (no duplicates)
  const otherProducts = useMemo(() => {
    const all = matchingCompanies.flatMap((company) =>
      company.products.filter((p) => p.id !== productId)
    );

    const uniqueMap = new Map();
    all.forEach((p) => {
      if (!uniqueMap.has(p.id)) {
        uniqueMap.set(p.id, p);
      }
    });

    return Array.from(uniqueMap.values()).slice(0, 6);
  }, [matchingCompanies, productId]);

  return (
    <section className={`${bg} relative py-24 overflow-hidden`}>
      {/* ✅ Gradient Top Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 w-full h-px"
          style={{
            background: isDark
              ? "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)"
              : "linear-gradient(90deg, transparent, rgba(37,99,235,0.15), transparent)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ Back Button */}
        <button
          onClick={() => navigate(-1)}
          className={`mb-10 text-sm font-semibold transition ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          ← Back to Products
        </button>

        {/* ✅ Product Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-24 items-center"
        >
          {/* ✅ Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src={product?.image}
              alt={product?.name}
              loading="lazy"
              className="w-full h-full object-contain p-8"
              style={{ filter: isDark ? "brightness(0.9)" : "none" }}
            />
          </div>

          {/* ✅ Content */}
          <div>
            <div
              className={`text-xs font-semibold tracking-widest uppercase mb-3 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {product?.category}
            </div>

            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 ${textPrimary}`}
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {product?.name}
            </h1>

            <p className={`text-lg leading-relaxed mb-8 ${textSecondary}`}>
              {product?.description}
            </p>

            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              Request Quote
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* ✅ Companies Offering */}
        <div className="mb-24">
          <h2
            className={`text-3xl font-bold mb-10 ${textPrimary}`}
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Companies Offering This Product
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {matchingCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>

        {/* ✅ Related Products */}
        {otherProducts.length > 0 && (
          <div>
            <h2
              className={`text-3xl font-bold mb-10 ${textPrimary}`}
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Related Products
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherProducts.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => navigate(`/product/${p.id}`)}
                  className={`group rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 ${cardBg}`}
                >
                  <div className="h-40 flex items-center justify-center p-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h4
                      className={`text-lg font-bold mb-2 ${textPrimary}`}
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {p.name}
                    </h4>

                    <span
                      className={`text-xs font-medium uppercase tracking-wide ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {p.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};