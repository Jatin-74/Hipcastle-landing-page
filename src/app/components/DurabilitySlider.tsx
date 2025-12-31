"use client";
import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { GripVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DurabilitySlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  };

  const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-32 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Text Side */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block border-b border-stone-700 pb-1">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-stone-400">Field Test Record</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            The Promise vs. <br/>
            <span className="italic text-stone-500">The Proof.</span>
          </h2>
          
          <p className="text-stone-400 font-light leading-relaxed text-lg">
            We don't just design for the showroom. We design for the 150th wear. 
            Drag the slider to see how our heavy-duty cotton holds its character after a year of use.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-800">
             <div>
                <p className="font-serif text-3xl text-white">0%</p>
                <p className="text-xs font-sans font-bold tracking-widest text-stone-500 uppercase mt-1">Collar Sag</p>
             </div>
             <div>
                <p className="font-serif text-3xl text-white">100%</p>
                <p className="text-xs font-sans font-bold tracking-widest text-stone-500 uppercase mt-1">Character Gained</p>
             </div>
          </div>
        </div>

        {/* The Slider */}
        <div className="order-1 lg:order-2 relative group">
             
            <div 
            ref={containerRef}
            className="relative h-[600px] w-full cursor-col-resize select-none overflow-hidden rounded-sm shadow-2xl bg-stone-800"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            >
            {/* RIGHT SIDE (Background): Day 365 */}
            <div className="absolute inset-0 h-full w-full">
                <img 
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" 
                    alt="Day 365" 
                    className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 opacity-80"
                />
                
                {/* Editorial Annotations - Repositioned to prevent cutting off */}
                {/* Moved left from 60% to 50% */}
                <EditorialNote top="25%" left="50%" label="Collar Structure: Intact" visible={sliderPosition < 50} />
                {/* Kept at 30% */}
                <EditorialNote top="50%" left="30%" label="Fabric: Softened, Not Thinned" visible={sliderPosition < 30} />
                {/* Moved left from 70% to 55% */}
                <EditorialNote top="75%" left="55%" label="Hem: Zero Twist" visible={sliderPosition < 55} />

                <div className="absolute bottom-6 right-6 text-white text-xs font-bold tracking-widest uppercase border border-white/30 px-3 py-1 bg-black/40 backdrop-blur-sm">
                    Day 365 • Field Tested
                </div>
            </div>

            {/* LEFT SIDE (Foreground): Day 1 */}
            <div 
                className="absolute inset-0 h-full w-full overflow-hidden bg-white"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" 
                alt="Day 1" 
                className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute top-6 left-6 text-stone-900 text-xs font-bold tracking-widest uppercase bg-white/90 px-3 py-1 shadow-sm">
                   Day 01 • Unboxing
                </div>
            </div>

            {/* The Handle */}
            <div 
                className="absolute inset-y-0 w-px bg-white cursor-col-resize z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-stone-900 transition-transform group-hover:scale-110">
                    <GripVertical className="w-4 h-4" />
                </div>
            </div>

            </div>
        </div>

      </div>
    </section>
  );
}

// Helper Component
function EditorialNote({ top, left, label, visible }: { top: string, left: string, label: string, visible: boolean }) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div 
                    className="absolute flex items-center gap-3"
                    style={{ top, left }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-2 h-2 bg-white rounded-full shadow-lg" />
                    <div className="w-8 h-px bg-white/50" />
                    {/* Added whitespace-nowrap to ensure text stays on one line */}
                    <div className="bg-black/80 backdrop-blur-md px-3 py-2 border-l border-white/30 whitespace-nowrap">
                        <span className="font-serif italic text-white text-sm">{label}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}