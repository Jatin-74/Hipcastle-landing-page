"use client";
import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-20 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
            
            {/* Left: Brand & Socials */}
            <div>
                <h2 className="font-serif text-2xl text-white mb-6">HIPCASTLE.</h2>
                
                {/* Social Icons Replaced Here */}
                <div className="flex gap-6 text-stone-500">
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Right: Badge */}
            <div className="relative group cursor-pointer">
                {/* Rotating Text Badge */}
                <div className="w-32 h-32 rounded-full border border-stone-800 flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                    <svg viewBox="0 0 100 100" width="100" height="100" className="absolute top-0 left-0 w-full h-full">
                        <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                        <text className="text-[11px] font-bold uppercase fill-stone-500 tracking-widest">
                            <textPath href="#curve">
                                • Founder Approved • Est 2025 • 
                            </textPath>
                        </text>
                    </svg>
                </div>
                {/* Center Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif italic text-xl text-stone-600 group-hover:text-white transition-colors">AC</span>
                </div>
            </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-900 text-[10px] uppercase tracking-widest flex justify-between">
            <span>© 2025 Hipcastle • Manipal</span>
            <span>Built for Builders</span>
        </div>
    </footer>
  );
}