"use client";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative py-32 bg-stone-900 overflow-hidden">
      
      {/* Background Texture/Image */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Join the <span className="italic text-stone-500">Inner Circle.</span>
        </h2>
        <p className="text-stone-400 text-lg font-light mb-10 max-w-xl mx-auto">
          We don't do spam. We drop new collections to our members 24 hours before the public. 
          Plus, get early access to the 2026 Repair Program.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-1 bg-white/5 border border-white/20 text-white px-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-white transition-colors placeholder:text-stone-600"
          />
          <button className="bg-white text-stone-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-stone-200 transition-colors flex items-center justify-center gap-2">
            Join <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        
        <p className="mt-6 text-[10px] text-stone-600 uppercase tracking-widest">
          Join 12,000+ Builders • Unsubscribe Anytime
        </p>
      </div>

    </section>
  );
}