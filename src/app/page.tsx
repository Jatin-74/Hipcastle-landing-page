import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import OurCause from "./components/OurCause";
import ProductGrid from "./components/ProductGrid";
import Categories from "./components/Categories";
import DurabilitySlider from "./components/DurabilitySlider";
import ProductDetails from "./components/ProductDetails"; // Updated
import CommunityWall from "./components/CommunityWall";
import Journal from "./components/Journal"; // NEW
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <OurCause />
      <ProductGrid />
      <Categories />
      <DurabilitySlider />
      <ProductDetails /> {/* Updated with Construction Breakdown */}
      <CommunityWall />
      <Newsletter />
      <Journal /> {/* Added Builders Journal */}
      <Founder />
      <Footer />
    </main>
  );
}