// src/components/CompanyProducts.tsx

import { companies } from "../data/companies";
import { CompanyCard } from "./CompanyCard";
import { motion } from "framer-motion";

interface Props {
    isDark: boolean;
}

export const CompanyProducts: React.FC<Props> = ({ isDark }) => {
    const bg = isDark ? "bg-[#0a1628]" : "bg-white";
    const textPrimary = isDark ? "text-white" : "text-slate-900";
    const textSecondary = isDark ? "text-slate-400" : "text-slate-500";

    return (
        <section
            id="companies"
            className={`${bg} relative py-24 md:py-32 overflow-hidden`}
        >
            {/* Top Gradient Line */}
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span
                        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? "text-blue-400" : "text-blue-600"
                            }`}
                    >
                        <span className="w-8 h-px bg-current" />
                        Our Principals
                        <span className="w-8 h-px bg-current" />
                    </span>

                    <h2
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${textPrimary}`}
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                        Trusted{" "}
                        <span
                            className={isDark ? "gradient-text" : "gradient-text-blue"}
                        >
                            Global
                        </span>{" "}
                        Brands
                    </h2>

                    <p
                        className={`mt-4 text-lg max-w-2xl mx-auto ${textSecondary}`}
                    >
                        We partner with leading global manufacturers to deliver reliable
                        industrial and automation solutions.
                    </p>
                </motion.div>

                {/* Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {companies.map((company, i) => (
                        <motion.div
                            key={company.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.08,
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <CompanyCard company={company} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};