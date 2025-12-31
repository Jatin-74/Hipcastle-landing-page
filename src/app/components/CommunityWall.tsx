"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const photos = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop", // Gym
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop", // Gym
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop", // Lifestyle
    "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2728&auto=format&fit=crop", // Workout
];

export default function CommunityWall() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Built by You.</h2>
            <p className="text-stone-500">Join 1,200+ builders wearing Hipcastle. Tag us @hipcastle.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((src, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative aspect-[4/5] overflow-hidden bg-stone-100 cursor-pointer"
                >
                    <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Customer" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Instagram className="text-white w-6 h-6" />
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}