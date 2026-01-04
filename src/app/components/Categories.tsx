"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react"; 
import { useRef } from "react";

// UPDATE: Replace these with your files in public/categories/
const categories = [
  { id: 1, title: "Absolute Growth", category: "Street", image: "/categories/waves.jpg" },
  { id: 2, title: "Unbreakable", category: "Signature", image: "/categories/hoodie.jpg" },
  { id: 3, title: "New Chapter", category: "Core", image: "/categories/heavy.jpg" },
  { id: 4, title: "Purpose", category: "Oversized", image: "/categories/chapter.jpg" },
  { id: 5, title: "Growth", category: "Essential", image: "/categories/unbreakable.jpg" },
  { id: 6, title: "Waves", category: "Summer", image: "/categories/vest.jpg" },
  { id: 7, title: "Magnetize Future", category: "Minimal", image: "/categories/Screenshot 2026-01-04 181258.png" },
  { id: 8, title: "Progress", category: "Blackout", image: "/categories/Screenshot 2026-01-04 181338.png" },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-stone-400 uppercase mb-2 block">Curated Vibes</span>
            <h2 className="font-serif text-3xl text-stone-900">Watch & Buy</h2>
          </div>
          
          <div className="flex gap-2">
            <button 
                onClick={() => scroll('left')}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
            >
                <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
            >
                <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[220px] snap-start relative group cursor-pointer"
            >
        
              <div className="relative aspect-[9/16] bg-stone-100 overflow-hidden rounded-sm">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
         
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

               
                <div className="absolute bottom-4 left-4 z-20">
                    <p className="font-sans text-[9px] font-bold tracking-widest text-stone-300 uppercase mb-1">{item.category}</p>
                    <h3 className="font-serif text-lg text-white leading-none">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}