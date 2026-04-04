import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, Phone, Mail, MapPin, Clock, Star, Send } from 'lucide-react';

export default function Estimate() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg mx-4 border border-slate-100"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">THANK YOU!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Your request has been received. One of our roofing specialists will contact you within 24 hours to schedule your free inspection.
          </p>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-500 uppercase tracking-widest">
            Emergency? Call us directly at (555) 000-1234
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Trust & Info */}
          <div>
            <h1 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">Request An Estimate</h1>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              GET YOUR FREE <br />
              <span className="text-red-600">ROOF AUDIT.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
              Our expert inspectors will provide a detailed assessment of your roof's condition, material options, and a transparent, no-obligation quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600 border border-slate-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-black text-slate-900">Fast Response</div>
                  <div className="text-sm text-slate-500">Quotes delivered within 24-48 hours.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600 border border-slate-100">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-black text-slate-900">No Pressure</div>
                  <div className="text-sm text-slate-500">Expert advice with zero sales pressure.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600 border border-slate-100">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-black text-slate-900">Local Experts</div>
                  <div className="text-sm text-slate-500">Serving [City] with pride for 25+ years.</div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-xl font-black mb-4">Need Immediate Help?</h4>
              <p className="text-slate-400 mb-6">For emergency repairs or storm damage, call our 24/7 dispatch line.</p>
              <a href="tel:5550123" className="text-3xl font-black text-red-600 flex items-center gap-3">
                <Phone className="w-8 h-8" /> (555) 000-1234
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Property Address</label>
                <input 
                  required
                  type="text" 
                  placeholder="123 Main St, City, ST"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Service Needed</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all appearance-none">
                  <option>Full Roof Replacement</option>
                  <option>Roof Repair</option>
                  <option>Storm Damage Inspection</option>
                  <option>Commercial Roofing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Additional Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your roof issues..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 text-white py-5 rounded-lg font-black text-lg uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-2"
              >
                Send Request <Send className="w-5 h-5" />
              </button>

              <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
                By submitting, you agree to be contacted by Elite Roof Pro. We never sell your data.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
