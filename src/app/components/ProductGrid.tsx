"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { useRef } from "react";

// UPDATE: Replace the filenames below with your actual image names inside public/products/
const products = [
  { id: 1, name: "Palm in the Dark Blue", color: "Cotton Blend", price: "₹747", image: "/products/Screenshot 2026-01-04 174340.png" },
  { id: 2, name: "Square Abstract", color: "Cotton Blend", price: "₹868", image: "/products/Screenshot 2026-01-04 174432.png" },
  { id: 3, name: "Win Anyway", color: "100% Cotton", price: "₹897", image: "/products/Screenshot 2026-01-04 174539.png" },
  { id: 4, name: "Motion Creates Growth", color: "100% Cotton", price: "₹957", image: "/products/Screenshot 2026-01-04 174655.png" },
  { id: 5, name: "Dark Green Red Checked", color: "Cotton Blend", price: "₹1,177", image: "/products/Screenshot 2026-01-04 175136.png" },
];

export default function ProductGrid() {
  return (
    <section id="collection" className="py-32 bg-stone-100 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
           <span className="text-xs font-sans font-bold tracking-[0.2em] text-stone-400 uppercase mb-2 block">New Arrivals</span>
           <h2 className="font-serif text-4xl md:text-5xl text-stone-900">The Collection</h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase cursor-pointer hover:text-stone-500 transition-colors">
            Drag to Explore <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="relative w-full">
       
        {/* Removed white gradients as requested previously */}

        <motion.div 
            className="flex gap-6 px-6" // Reduced gap from gap-8 to gap-6 for better spacing with smaller cards
            animate={{ x: [0, -1000] }} 
            transition={{ 
                repeat: Infinity, 
                duration: 10, 
                ease: "linear" 
            }}
            whileHover={{ animationPlayState: "paused" }} 
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
            // UPDATED WIDTHS HERE: Reduced from 300px/400px to 220px/280px
            className="min-w-[220px] md:min-w-[280px] group cursor-pointer relative"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden mb-6">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/90 backdrop-blur text-black px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all flex items-center gap-2 shadow-2xl translate-y-4 group-hover:translate-y-0 duration-300">
                        <Plus className="w-3 h-3" /> Quick View
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-start px-2">
                <div>
                    <h3 className="font-serif text-lg text-stone-900 leading-none">{product.name}</h3>
                    <p className="text-stone-500 text-xs mt-2">{product.color}</p>
                </div>
                <span className="font-sans font-bold text-xs text-stone-900">{product.price}</span>
            </div>
        </motion.div>
    )
}