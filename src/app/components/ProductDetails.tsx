"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Anchor, Hammer, RefreshCcw } from "lucide-react";

export default function ProductDetails() {
  return (
    <section className="bg-white text-stone-900 py-32 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Fixed Alignment */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block font-sans text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-6"
          >
            Construction Breakdown
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl leading-tight mb-6"
          >
            300+ GSM. <br/>
            <span className="italic text-stone-400">Zero Compromises.</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-stone-500 text-lg font-light max-w-xl"
          >
            Most t-shirts are 140 GSM and last 20 washes. HIPCASTLE is 300+ GSM and lasts 150+ washes. We don't make thin shirts.
          </motion.p>
        </div>

        {/* The Grid - Covering Materials, Construction, QC, and Repair */}
        <div className="border-t border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-stone-200 border-b border-stone-200">
            
            {/* 1. Material (Section 2) */}
            <SpecItem 
                number="01" 
                icon={<Anchor className="w-5 h-5" />} 
                title="150+ Washes" 
                desc="Standard tees die after 20 washes. Ours barely break in. Heavyweight cotton that softens with age." 
                delay={0.1} 
            />

            {/* 2. Construction (Section 3) */}
            <SpecItem 
                number="02" 
                icon={<Hammer className="w-5 h-5" />} 
                title="Reinforced Seams" 
                desc="Double-needle ribbed collar won't stretch. Shoulder seams built to survive backpack weight." 
                delay={0.2} 
            />

            {/* 3. QC (Section 5) */}
            <SpecItem 
                number="03" 
                icon={<ShieldCheck className="w-5 h-5" />} 
                title="Double-Checked" 
                desc="Every single piece is inspected before shipping. No loose threads. No exceptions." 
                delay={0.3} 
            />

            {/* 4. Durability Promise (Section 6) */}
            <SpecItem 
                number="04" 
                icon={<RefreshCcw className="w-5 h-5" />} 
                title="Repair Program" 
                desc="5+ Year Lifespan. Coming 2025: The official HIPCASTLE Repair Program." 
                delay={0.4} 
            />

          </div>
        </div>

      </div>
    </section>
  );
}

function SpecItem({ number, icon, title, desc, delay }: { number: string, icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group py-12 md:px-8 hover:bg-stone-50 transition-colors duration-500"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="font-serif text-3xl text-stone-300 group-hover:text-stone-900 transition-colors">{number}</span>
        <div className="text-stone-400 group-hover:text-stone-900 transition-colors">{icon}</div>
      </div>
      <h3 className="font-serif text-xl text-stone-900 mb-4">{title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed font-light pr-4">{desc}</p>
    </motion.div>
  )
}