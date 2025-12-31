"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { useRef } from "react";

const products = [
  { id: 1, name: "The Heavy Duty Tee", color: "Charcoal", price: "₹1,499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" },
  { id: 2, name: "Growth Hoodie", color: "Off-White", price: "₹3,499", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop" },
  { id: 3, name: "Structure Oversized", color: "Sage", price: "₹1,699", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop" },
  { id: 4, name: "The Daily Vest", color: "Black", price: "₹999", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2678&auto=format&fit=crop"},
  { id: 5, name: "The Heavy Duty Tee", color: "Charcoal", price: "₹1,499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" },
];

export default function ProductGrid() {
  return (
    <section id="collection" className="py-32 bg-stone-100 overflow-hidden relative">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
           <span className="text-xs font-sans font-bold tracking-[0.2em] text-stone-400 uppercase mb-2 block">New Arrivals</span>
           <h2 className="font-serif text-4xl md:text-5xl text-stone-900">The Collection</h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase cursor-pointer hover:text-stone-500 transition-colors">
            Drag to Explore <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative w-full">
        {/* Gradient Fade for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none" />

        <motion.div 
            className="flex gap-8 px-6"
            animate={{ x: [0, -1000] }} // Move Left
            transition={{ 
                repeat: Infinity, 
                duration: 25, // Speed of scroll
                ease: "linear" 
            }}
            whileHover={{ animationPlayState: "paused" }} // Stop on Hover
        >
            {products.map((product, i) => (
                <ProductCard key={`${product.id}-${i}`} product={product} />
            ))}
            {products.map((product, i) => (
                <ProductCard key={`${product.id}-dup-${i}`} product={product} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
    return (
        <motion.div 
            className="min-w-[300px] md:min-w-[400px] group cursor-pointer relative"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden mb-6">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/90 backdrop-blur text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all flex items-center gap-2 shadow-2xl translate-y-4 group-hover:translate-y-0 duration-300">
                        <Plus className="w-4 h-4" /> Quick View
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-start px-2">
                <div>
                    <h3 className="font-serif text-xl text-stone-900 leading-none">{product.name}</h3>
                    <p className="text-stone-500 text-sm mt-2">{product.color}</p>
                </div>
                <span className="font-sans font-bold text-sm text-stone-900">{product.price}</span>
            </div>
        </motion.div>
    )
}