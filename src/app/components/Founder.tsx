"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Founder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); 

  return (
    <section id="founder" ref={containerRef} className="py-32 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        <div className="md:col-span-5 relative aspect-[3/4] bg-stone-800 overflow-hidden">
           {/* UPDATE: Ensure you have an image named 'founder.jpg' in your public folder */}
           <motion.div 
             style={{ y }} 
             className="absolute inset-0 -top-10 -bottom-10 bg-[url('/founder.jpg')] bg-cover bg-center grayscale opacity-80" 
           />
           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-serif italic text-2xl">Avinash Chate</p>
              <p className="text-xs font-sans tracking-widest text-stone-400 uppercase mt-1">Founder & Builder</p>
           </div>
        </div>

        <motion.div 
          className="md:col-span-7 space-y-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-sans tracking-[0.2em] text-stone-500 uppercase block">Founder's Note</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            "I repeated 12th grade.<br/> I got detained in engineering."
          </h2>
          <div className="space-y-6 text-lg text-stone-400 font-light leading-relaxed border-l border-stone-700 pl-8">
            <p>
              Then I built a 3 crore training company. I spent 10 years training JSW Steel execs and RBI officers.
            </p>
            <p className="text-white">
              I realized that real growth happens quietly, consistently. It's not about the hype.
              <strong> Hipcastle is the uniform for that journey.</strong>
            </p>
            <p>
              We designed the Growth Tee when I lived out of a backpack for 60 days. I needed something that survived 20 consecutive wears.
            </p>
          </div>
          
          <div className="pt-6">
             <p className="font-serif italic text-4xl text-stone-600">Avinash.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}