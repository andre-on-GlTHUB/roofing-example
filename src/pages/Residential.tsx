import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, ArrowRight, Hammer, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Residential() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=2000" 
            alt="Residential roof" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              RESIDENTIAL <br />
              <span className="text-red-600">ROOFING EXPERTS.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Premium protection for your family's biggest investment. From architectural shingles to modern metal systems, we deliver lifetime quality.
            </p>
            <Link to="/estimate" className="bg-red-600 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all inline-flex items-center gap-2">
              Get Free Inspection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">
                THE LAST ROOF YOU'LL <br />EVER NEED TO BUY.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a GAF Master Elite contractor, we offer the Golden Pledge Warranty—the strongest in the industry. Our residential roofing systems are designed to withstand [State]'s toughest weather while enhancing your home's curb appeal.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Architectural Shingle Systems",
                  "Standing Seam Metal Roofing",
                  "Luxury Slate & Tile Options",
                  "Gutter & Downspout Integration",
                  "Attic Ventilation Optimization"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-slate-700">
                    <CheckCircle className="w-5 h-5 text-red-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1632759162351-375eaa13f00b?auto=format&fit=crop&q=80&w=600" alt="Roofing 1" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=600" alt="Roofing 2" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
