import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Clock, 
  Award, 
  Hammer, 
  Building2, 
  CloudLightning,
  ChevronRight,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632759162351-375eaa13f00b?auto=format&fit=crop&q=80&w=2000" 
            alt="New roof installation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-current" /> [City]'s Most Trusted Roofer
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                THE LAST ROOF <br />
                <span className="text-red-600">YOU’LL EVER BUY.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                GAF Master Elite certified installers providing the highest level of protection for your family. $0 down financing and 50-year non-prorated warranties.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/estimate" 
                  className="bg-red-600 text-white px-8 py-5 rounded-md font-black text-lg uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-2xl shadow-red-600/20 flex items-center justify-center gap-2 group"
                >
                  Get Free Estimate <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:5550123" 
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-md font-black text-lg uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> (555) 000-1234
                </a>
              </div>

              {/* Hero Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Better_Business_Bureau_logo.svg/2560px-Better_Business_Bureau_logo.svg.png" alt="BBB" className="h-8 invert" referrerPolicy="no-referrer" />
                <div className="flex items-center gap-2 text-white font-bold">
                  <Shield className="w-6 h-6 text-red-600" /> GAF MASTER ELITE
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" /> 5.0 GOOGLE RATING
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 py-10 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-black text-slate-900 leading-none">FULLY INSURED</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">$2M Liability Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-red-600" />
              <div>
                <div className="font-black text-slate-900 leading-none">24/7 EMERGENCY</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Rapid Leak Response</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-black text-slate-900 leading-none">50-YEAR WARRANTY</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Non-Prorated Protection</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-500" />
              <div>
                <div className="font-black text-slate-900 leading-none">1,000+ REVIEWS</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Local 5-Star Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              COMPLETE ROOFING SOLUTIONS.
            </h3>
            <p className="text-lg text-slate-600 font-medium">
              From minor repairs to full commercial replacements, we provide 5-star service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-red-600 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800" 
                  alt="Residential Roofing" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <Hammer className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Residential Roofing</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Protect your home with premium shingle, metal, or tile roofing. Expert installation with lifetime warranties.
                </p>
                <Link to="/residential" className="inline-flex items-center gap-2 font-black text-red-600 uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Commercial */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-red-600 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                  alt="Commercial Roofing" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <Building2 className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Commercial Roofing</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Durable flat roof solutions for businesses. TPO, EPDM, and coating systems designed for longevity.
                </p>
                <Link to="/commercial" className="inline-flex items-center gap-2 font-black text-red-600 uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Storm Damage */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-red-600 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&q=80&w=800" 
                  alt="Storm Damage" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <CloudLightning className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Storm Damage</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Hail or wind damage? We handle the insurance claims process from start to finish. Free claim audits.
                </p>
                <Link to="/storm" className="inline-flex items-center gap-2 font-black text-red-600 uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 -skew-x-12 translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">Why Elite Roof Pro?</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
                WE TREAT YOUR HOME <br />
                <span className="text-red-600">LIKE OUR OWN.</span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-red-600 p-4 rounded-xl shrink-0 h-fit">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Master Elite Certified</h4>
                    <p className="text-slate-400">Only 2% of roofers reach this status. It means you get the best materials and the best warranties in the industry.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 h-fit">
                    <Hammer className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Expert Craftsmanship</h4>
                    <p className="text-slate-400">Our crews are factory-trained and highly specialized. We don't just install roofs; we build protection systems.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 h-fit">
                    <Star className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Local & Family Owned</h4>
                    <p className="text-slate-400">We aren't a national franchise. We live here, work here, and stand by every project we complete.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/5 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Roofing Crew" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 bg-red-600 p-8 rounded-2xl shadow-2xl z-20 hidden md:block"
              >
                <div className="text-5xl font-black mb-1">25+</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Service</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">Real Reviews</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              WHAT YOUR NEIGHBORS SAY.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100" />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">
                  "Elite Roof Pro was incredible. They handled the entire insurance claim for our hail damage and the new roof looks amazing. The crew was fast and cleaned up every single nail!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-black text-slate-900">John D.</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Homeowner in [City]</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 font-black text-slate-900 uppercase tracking-widest hover:text-red-600 transition-colors">
              Read More 5-Star Reviews <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              READY TO PROTECT <br />
              YOUR BIGGEST INVESTMENT?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Get a detailed roof inspection and estimate within 24 hours. No pressure, no hidden fees, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/estimate" 
                className="bg-red-600 text-white px-10 py-6 rounded-md font-black text-xl uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-xl"
              >
                Request Free Estimate
              </Link>
              <a 
                href="tel:5550123" 
                className="bg-white/10 text-white border border-white/20 px-10 py-6 rounded-md font-black text-xl uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" /> (555) 000-1234
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> $0 Down Financing</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Free Inspections</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 24/7 Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
