import React from 'react';
import { motion } from 'motion/react';
import { CloudLightning, Shield, CheckCircle, ArrowRight, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Storm() {
  return (
    <div className="bg-white">
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&q=80&w=2000" 
            alt="Storm damage" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              STORM DAMAGE <br />
              <span className="text-red-600">RESTORATION.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Hail or wind damage? We are your advocates in the insurance claims process. Get a free claim audit and expert restoration.
            </p>
            <Link to="/estimate" className="bg-red-600 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all inline-flex items-center gap-2">
              Free Claim Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">
                WE HANDLE THE <br />PAPERWORK.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigating an insurance claim can be overwhelming. Our HAAG certified inspectors provide the detailed documentation your adjuster needs to ensure your claim is approved for the full value of the damage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">Detailed Damage Reports</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">Adjuster Meeting Support</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">Supplement Management</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">Full Restoration Install</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000" alt="Hail damage" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Claim Advocacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
