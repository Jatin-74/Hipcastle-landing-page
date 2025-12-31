"use client";
import { ArrowRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="bg-stone-950 py-32 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Typography Art */}
        <div className="relative">
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                Quiet <br/>
                <span className="italic font-light text-stone-500">Consistency.</span>
            </h2>
            
            <div className="mt-12 space-y-10">
                {/* Point 01 */}
                <div className="flex gap-6">
                    <span className="text-stone-600 font-mono text-xl">01</span>
                    <div>
                        <h3 className="text-lg font-bold text-stone-200 mb-2">300+ GSM Cotton</h3>
                        <p className="text-stone-400 leading-relaxed max-w-sm">
                            Most tees are 160 GSM. Ours are double the weight to survive 150+ washes without losing shape.
                        </p>
                    </div>
                </div>

                {/* Point 02 */}
                <div className="flex gap-6">
                    <span className="text-stone-600 font-mono text-xl">02</span>
                    <div>
                        <h3 className="text-lg font-bold text-stone-200 mb-2">Intentional Fit</h3>
                        <p className="text-stone-400 leading-relaxed max-w-sm">
                            Relaxed, functional cuts designed to move with you through life's phases.
                        </p>
                    </div>
                </div>
            </div>

            {/* VISIBLE SOLID BUTTON */}
            <div className="mt-14">
                <button className="flex items-center gap-3 px-8 py-4 bg-white text-stone-950 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-200 transition-all shadow-lg hover:gap-4">
                    Read Full Manifesto
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>

        {/* Right: The "Visual" */}
        <div className="relative h-[600px] bg-stone-900 rounded-sm overflow-hidden flex items-center justify-center border border-stone-800">
            <div className="text-center p-10">
                <span className="block font-mono text-xs text-stone-500 tracking-widest mb-4">THE HEAVY DUTY TEE</span>
                <div className="w-64 h-80 bg-stone-800 shadow-2xl mx-auto flex items-center justify-center text-stone-600 border border-stone-700">
                    Product Image
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}