"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react"; // Removed 'Play' import
import { useRef } from "react";

const categories = [
  { id: 1, title: "Waves Tee", category: "Street", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2544&auto=format&fit=crop" },
  { id: 2, title: "Growth Hoodie", category: "Signature", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2680&auto=format&fit=crop" },
  { id: 3, title: "Heavy Duty", category: "Core", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2520&auto=format&fit=crop" },
  { id: 4, title: "New Chapter", category: "Oversized", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2515&auto=format&fit=crop" },
  { id: 5, title: "Unbreakable", category: "Essential", image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=2670&auto=format&fit=crop" },
  { id: 6, title: "Urban Vest", category: "Summer", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2572&auto=format&fit=crop" },
  { id: 7, title: "The Classic", category: "Minimal", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" },
  { id: 8, title: "Night Ops", category: "Blackout", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop" },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Handler
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Distance to scroll
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Navigation Buttons */}
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

        {/* Scrollable Container */}
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
              {/* Image Card */}
              <div className="relative aspect-[9/16] bg-stone-100 overflow-hidden rounded-sm">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Text Content */}
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