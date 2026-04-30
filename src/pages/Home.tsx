import { About } from "@/components/About";
import { AllProducts } from "@/components/AllProducts";
import { Approach } from "@/components/Approach";
import { Capabilities } from "@/components/Capabilities";
import { CompanyProducts } from "@/components/CompanyProducts";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GlowOrb } from "@/components/GlowOrb";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { useTheme } from "@/hooks/useTheme";

export const Home = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <PageTransition>
            <div className="relative min-h-screen overflow-x-hidden">
                <GlowOrb isDark={isDark} />

                <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

                <main className="relative z-10">
                    <Hero isDark={isDark} />
                    <About isDark={isDark} />
                    <Services isDark={isDark} />
                    {/* <CompanyProducts isDark={isDark} /> */}
                    <AllProducts isDark={isDark} />
                    {/* <Products isDark={isDark} /> */}
                    <Capabilities isDark={isDark} />
                    <Approach isDark={isDark} />
                    <Contact isDark={isDark} />
                </main>

                <Footer isDark={isDark} />
            </div>
        </PageTransition>
    );
};

export default Home;