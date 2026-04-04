import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, CheckCircle, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Financing() {
  return (
    <div className="bg-white">
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            ROOFING <br />
            <span className="text-red-600">FINANCING.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get the roof you need today with flexible payment plans. $0 down options and low monthly payments available for all credit types.
          </p>
          <button className="bg-red-600 text-white px-10 py-5 rounded-md font-black text-xl uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-xl">
            Prequalify Now
          </button>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center">
              <div className="bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">$0 Down</h3>
              <p className="text-slate-600 leading-relaxed">Start your project with zero out-of-pocket costs. We handle the initial funding.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center">
              <div className="bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Low Monthly</h3>
              <p className="text-slate-600 leading-relaxed">Plans starting as low as $99/month. Choose a term that fits your budget.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center">
              <div className="bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Easy Approval</h3>
              <p className="text-slate-600 leading-relaxed">Simple online application with instant decisions. High approval rates.</p>
            </div>
          </div>

          <div className="mt-24 bg-slate-900 rounded-3xl p-12 md:p-20 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">DON'T WAIT FOR THE NEXT STORM.</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">A leaking roof can cause thousands in secondary damage. Protect your home now and pay over time.</p>
            <Link to="/estimate" className="inline-flex items-center gap-2 font-black text-red-600 uppercase tracking-widest text-lg hover:gap-4 transition-all">
              Get Started with Financing <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
