"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav
      // FIXED: Added the missing closing backtick and brace below
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-stone-900/90 backdrop-blur-xl border-stone-800 py-4 shadow-2xl" 
          : "bg-stone-950/20 backdrop-blur-md border-white/10 py-6" 
      }`} 
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <Link href="/" className="font-serif font-bold text-2xl tracking-tighter text-white">
          HIPCASTLE.
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {["Collection", "Manifesto", "Founder"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="group relative">
              <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-stone-300 transition-colors group-hover:text-white">
                {item}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-8 text-white">
          <button className="hidden md:block text-xs font-bold tracking-[0.15em] uppercase text-stone-300 hover:text-white transition-colors">
            Login
          </button>
          
          <button className="flex items-center space-x-2 group">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-stone-300 group-hover:text-white transition-colors">
              Cart
            </span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold bg-white text-stone-900 transition-transform group-hover:scale-110">
              0
            </span>
          </button>

          <button className="md:hidden text-white hover:text-stone-300 transition-colors">
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}