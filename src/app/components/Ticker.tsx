"use client";
import { motion } from "framer-motion";

export default function Ticker() {
  const tickerSentences = [
    { start: "Growth isn’t linear", end: "neither are our clothes" },
    { start: "Built for the sprint", end: "define your era" },
    { start: "Silence the noise", end: "wear your ambition" },
    { start: "Crafted for now", end: "designed for forever" },
  ];

  // Uniform gap ensures the distance is identical everywhere
  const uniformGap = "gap-24"; 

  return (
    <section className="bg-stone-900 text-white py-6 overflow-hidden border-y border-stone-800 relative z-20">
      <div className="flex">
        
        {/* MOVING TRACK */}
        <motion.div 
          className={`flex ${uniformGap} pr-24`} 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} 
          transition={{ 
            repeat: Infinity, 
            duration: 60, 
            ease: "linear" 
          }}
          style={{ width: "max-content" }} 
        >
          {/* Render content 4x for seamless loop */}
          {[...tickerSentences, ...tickerSentences, ...tickerSentences, ...tickerSentences].map((item, i) => (
            
            // CONTAINER: Holds Start + Arrow + End + Arrow
            <div key={i} className={`flex items-center ${uniformGap} opacity-80`}>
                
                {/* 1. Serif Start */}
                <span className="font-serif italic text-2xl tracking-wide text-stone-400 whitespace-nowrap">
                    {item.start}
                </span>

                {/* 2. Middle Arrow (New) */}
                <span className="text-stone-700">→</span>
                
                {/* 3. Sans End */}
                <span className="font-sans font-bold text-xs tracking-[0.25em] uppercase text-white whitespace-nowrap">
                    {item.end}
                </span>

                {/* 4. End Arrow (Separator for next quote) */}
                <span className="text-stone-700">→</span>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}