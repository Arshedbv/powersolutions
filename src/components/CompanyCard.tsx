// src/components/CompanyCard.tsx

import { useNavigate } from "react-router-dom";
import { Company } from "../data/companies";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
    company: Company;
}

export const CompanyCard = ({ company }: Props) => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={() => navigate(`/company/${company.id}`)}
            className="relative rounded-3xl border overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            style={{
                borderColor: hovered ? company.brandColor : "rgba(0,0,0,0.08)",
            }}
        >
            {/* Brand Glow Background */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: hovered ? 0.15 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{
                    background: `radial-gradient(circle at center, ${company.brandColor}, transparent 70%)`,
                }}
            />

            {/* Logo */}
            <div className="relative h-40 flex items-center justify-center p-6">
                <motion.img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 object-contain"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            {/* Company Name */}
            <div className="pb-6 text-center relative">
                <h3
                    className="text-lg font-bold tracking-tight transition-colors duration-300"
                    style={{
                        color: hovered ? company.brandColor : "#0f172a",
                    }}
                >
                    {company.name}
                </h3>
            </div>

            {/* Hover Overlay */}
            {hovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center"
                    style={{
                        backgroundColor: `${company.brandColor}E6`,
                        color: "white",
                    }}
                >
                    <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-center opacity-80">
                        Top Products
                    </h4>

                    {company.products.slice(0, 3).map((product) => (
                        <p key={product.id} className="text-sm text-center mb-2">
                            • {product.name}
                        </p>
                    ))}

                    <p className="text-xs text-center mt-4 opacity-70">
                        Click to explore →
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
};