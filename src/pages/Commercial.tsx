import React from 'react';
import { motion } from 'motion/react';
import { Building2, Shield, CheckCircle, ArrowRight, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Commercial() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            alt="Commercial building" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              COMMERCIAL <br />
              <span className="text-red-600">ROOFING SOLUTIONS.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Protecting your business, assets, and bottom line. High-performance flat roof systems with NDL warranties and expert project management.
            </p>
            <Link to="/estimate" className="bg-red-600 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all inline-flex items-center gap-2">
              Schedule Site Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000" alt="Commercial roof" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">
                ENGINEERED FOR <br />LONG-TERM ROI.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand that commercial roofing is a business decision. Our team specializes in TPO, EPDM, and high-solids silicone coatings that extend the life of your roof while reducing energy costs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">TPO & PVC Systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">EPDM Rubber Roofing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">Silicone Roof Coatings</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-bold text-slate-700">Preventative Maintenance</span>
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-2">
                  <Award className="w-6 h-6 text-red-600" />
                  <span className="font-black text-slate-900 uppercase tracking-widest">NDL Warranties Available</span>
                </div>
                <p className="text-sm text-slate-500">We offer No Dollar Limit warranties backed by major manufacturers for up to 30 years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
