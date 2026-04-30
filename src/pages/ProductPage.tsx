import { useParams } from "react-router-dom";
import { companies } from "../data/companies";
import { PageTransition } from "@/components/PageTransition";

export const ProductPage = () => {
    const { id, productId } = useParams();

    const company = companies.find((c) => c.id === id);
    const product = company?.products.find((p) => p.id === productId);

    if (!company || !product)
        return <div className="p-20">Product not found</div>;

    return (
        <PageTransition>
            <div className="min-h-screen py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-sm text-gray-500 mb-2">
                        {company.name}
                    </h2>

                    <h1 className="text-4xl font-bold mb-6">
                        {product.name}
                    </h1>

                    <p className="text-gray-600 mb-8">
                        {product.description}
                    </p>

                    <a
                        href="#contact"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                        Request Quote
                    </a>
                </div>
            </div>
        </PageTransition>
    );
};