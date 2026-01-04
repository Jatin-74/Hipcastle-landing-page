"use client";
import { motion } from "framer-motion";

export default function OurCause() {
  return (
    <section id="manifesto">
      
      {/* SECTION 1: OUR CAUSE */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 pr-8"
          >
            <span className="text-xs font-sans tracking-[0.2em] text-stone-400 uppercase block mb-4">Our Cause</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              Real growth comes from <span className="italic text-stone-500">alignment</span>, not attention.
            </h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              The world is incredibly loud. We focus on the things that last: <strong>Character. Consistency. Clarity.</strong>
            </p>

            <button className="text-xs font-bold tracking-[0.2em] uppercase border-b border-stone-900 pb-2 hover:text-stone-500 hover:border-stone-500 transition-colors">
                Read More
            </button>

          </motion.div>
          
          {/* IMAGE 1: OUR CAUSE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-stone-100"
          >
            {/* UPDATE: Ensure you have an image named 'our-cause.jpg' in public/cause/ */}
            <div className="absolute inset-0 bg-[url('/cause/our-cause.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: THE ORIGIN */}
      <div className="bg-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE 2: THE ORIGIN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-stone-800 order-2 lg:order-1"
          >
             {/* UPDATE: Ensure you have an image named 'origin.jpg' in public/cause/ */}
             <div className="absolute inset-0 bg-[url('/cause/origin.jpg')] bg-cover bg-center grayscale opacity-80" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 pl-0 lg:pl-8 order-1 lg:order-2"
          >
            <span className="text-xs font-sans tracking-[0.2em] text-stone-500 uppercase block mb-4">The Origin</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              We noticed a gap in <span className="italic text-stone-500">connection.</span>
            </h2>
            <p className="text-lg text-stone-400 font-light leading-relaxed">
               HIPCASTLE started with a simple realization: There are plenty of fashion options, but not much meaning behind them.
            </p>
            
            <div className="bg-stone-800/50 p-8 border-l border-stone-600">
                <p className="text-stone-300 italic font-serif text-lg">
                   "We created HIPCASTLE to help people slow down, look inward, and reconnect with who they really are underneath the noise."
                </p>
            </div>
            
            <button className="text-xs font-bold tracking-[0.2em] uppercase border-b border-white pb-2 hover:text-stone-400 hover:border-stone-400 transition-colors">
                 Read Full Story
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  );
}