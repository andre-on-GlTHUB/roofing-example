import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, ArrowRight, Clock, Star, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Repair() {
  return (
    <div className="bg-white">
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=2000" 
            alt="Roof repair" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              EXPERT ROOF <br />
              <span className="text-red-600">REPAIR SERVICES.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Don't let a small leak become a major expense. Our rapid-response team identifies and fixes issues before they compromise your home.
            </p>
            <a href="tel:5550123" className="bg-red-600 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all inline-flex items-center gap-2">
              Call for Repair <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">
                PRECISION LEAK <br />DETECTION.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Water travels in mysterious ways. Our technicians use advanced thermal imaging and moisture meters to find the true source of your leak, ensuring the repair is done right the first time.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <span className="font-bold text-slate-700">Missing or Damaged Shingles</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <span className="font-bold text-slate-700">Leaking Skylights & Chimneys</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <span className="font-bold text-slate-700">Failed Flashing & Sealants</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-red-600">Repair vs. Replace?</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We always prioritize repair when it's the most cost-effective and safe option for your home. We'll provide a transparent assessment of your roof's remaining life.
              </p>
              <Link to="/estimate" className="w-full bg-white text-slate-900 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
                Get Free Assessment <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
