"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      {/* CONTENT WRAPPER - Added pt-32 to push content down */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white pt-32">
        
        {/* Headline - Slower Animations */}
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="block"
          >
            Clothes for
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="block italic text-stone-200"
          >
            who you're becoming.
          </motion.span>
        </h1>

        {/* Subhead - Slower Fade In */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="max-w-xl mx-auto text-lg text-stone-300 font-light leading-relaxed mb-12"
        >
          Growth isn't linear. Neither are our clothes. <br/>
          <span className="text-white font-semibold">300+ GSM. Double-Stitched. Built for the sprint.</span>
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pb-12"
        >
          {/* Shop Now - Scale + Shadow on Hover */}
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-stone-900 font-sans text-xs font-bold tracking-[0.2em] uppercase shadow-lg min-w-[200px]"
          >
            Shop Now
          </motion.button>
          
          {/* Explore - Scale + Background Fill on Hover */}
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white text-white font-sans text-xs font-bold tracking-[0.2em] uppercase min-w-[200px]"
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}