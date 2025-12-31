"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Philosophy",
    title: "I Failed 12th Grade. Here’s What It Taught Me About Building.",
    date: "Dec 28, 2025"
  },
  {
    category: "Founder Stories",
    title: "The 60-Day Backpack Test: Why I Refused to Make Thin T-Shirts.",
    date: "Dec 15, 2025"
  },
  {
    category: "Customer Wins",
    title: "Rajesh Wore One HIPCASTLE Tee for 45 Days During Startup Launch.",
    date: "Nov 30, 2025"
  }
];

export default function Journal() {
  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900">The Builders Journal</h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:text-stone-500 transition-colors">
            Read All <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-300 pt-12">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="mb-4 flex items-center gap-4">
                 <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 border border-stone-200 px-2 py-1 rounded-full">{article.category}</span>
                 <span className="text-[10px] font-sans text-stone-400 uppercase tracking-widest">{article.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-stone-900 leading-snug group-hover:text-stone-600 transition-colors">
                {article.title}
              </h3>
              <div className="mt-6 w-8 h-px bg-stone-300 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}