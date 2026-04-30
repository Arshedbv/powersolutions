import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { companies } from "../data/companies";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const CompanyPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { isDark } = useTheme();

    const company = companies.find((c) => c.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(12);

    if (!company) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl">
                Company not found
            </div>
        );
    }

    /* ==============================
       FILTER LOGIC
    ============================== */

    const categories = useMemo(() => {
        const unique = new Set(company.products.map((p) => p.category));
        return ["all", ...Array.from(unique)];
    }, [company.products]);

    const filteredProducts = useMemo(() => {
        return company.products.filter((product) => {
            const matchesSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory =
                category === "all" || product.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [search, category, company.products]);

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    /* ==============================
       THEME
    ============================== */

    const bg = isDark ? "bg-[#0a1628]" : "bg-white";
    const textPrimary = isDark ? "text-white" : "text-slate-900";
    const textSecondary = isDark ? "text-slate-400" : "text-slate-500";
    const inputBg = isDark
        ? "bg-[#0d1f3c] border-white/10 text-white"
        : "bg-slate-100 border-slate-200 text-slate-900";

    const cardBg = isDark
        ? "bg-[#0d1f3c] border-white/10 hover:border-blue-500/40"
        : "bg-slate-50 border-slate-200 hover:border-blue-300";

    return (
        <PageTransition>
            <section className={`${bg} relative py-24 md:py-32 overflow-hidden`}>
                {/* Brand Glow */}
                <div
                    className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 pointer-events-none"
                    style={{ background: company.brandColor }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* ==============================
             HEADER
          ============================== */}

                    <div className="mb-12 text-center">
                        <img src={company.logo} className="h-20 mx-auto mb-6" />
                        <h1
                            className={`text-4xl md:text-5xl font-bold ${textPrimary}`}
                            style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                            {company.name}
                        </h1>
                        <p className={`mt-4 max-w-2xl mx-auto ${textSecondary}`}>
                            {company.description}
                        </p>
                    </div>

                    {/* ==============================
             SEARCH & FILTER
          ============================== */}

                    <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-1/2">
                            <Search className="absolute left-3 top-3 w-4 h-4 opacity-60" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none ${inputBg}`}
                            />
                        </div>

                        {/* Category */}
                        <select
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                setVisibleCount(12);
                            }}
                            className={`w-full md:w-auto px-4 py-3 rounded-xl border outline-none ${inputBg}`}
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat === "all" ? "All Categories" : cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Product Count */}
                    <div className={`mb-6 text-sm ${textSecondary}`}>
                        Showing {filteredProducts.length} products
                    </div>

                    {/* ==============================
             PRODUCTS GRID
          ============================== */}

                    {visibleProducts.length === 0 ? (
                        <div className="text-center py-20 text-lg text-slate-400">
                            No products found.
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {visibleProducts.map((product, i) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ y: -6 }}
                                        onClick={() => navigate(`/product/${product.id}`)}
                                        className={`group relative rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 ${cardBg}`}
                                    >
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3
                                                className={`text-lg font-bold mb-2 ${textPrimary}`}
                                                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                                            >
                                                {product.name}
                                            </h3>

                                            <p
                                                className={`text-sm mb-4 line-clamp-2 ${textSecondary}`}
                                            >
                                                {product.description}
                                            </p>

                                            <button
                                                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${isDark
                                                        ? "bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white"
                                                        : "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
                                                    }`}
                                            >
                                                View Details
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Load More */}
                            {visibleCount < filteredProducts.length && (
                                <div className="mt-14 text-center">
                                    <button
                                        onClick={() => setVisibleCount((prev) => prev + 12)}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </PageTransition>
    );
};