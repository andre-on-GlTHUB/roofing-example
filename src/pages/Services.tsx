import React from 'react';
import { motion } from 'motion/react';
import { Hammer, Building2, CloudLightning, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Residential Roofing",
      description: "Full replacements and new installations for homeowners using premium GAF materials.",
      icon: Hammer,
      link: "/residential",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Commercial Roofing",
      description: "Specialized flat roof solutions including TPO, EPDM, and industrial coatings.",
      icon: Building2,
      link: "/commercial",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Roof Repair",
      description: "Fast, reliable leak detection and repair to extend the life of your current roof.",
      icon: Shield,
      link: "/repair",
      image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Storm Damage",
      description: "Expert insurance claim assistance and restoration after hail or wind events.",
      icon: CloudLightning,
      link: "/storm",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-slate-50">
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            OUR ROOFING <br />
            <span className="text-red-600">EXPERTISE.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From minor leaks to major industrial projects, Elite Roof Pro delivers excellence across every discipline of roofing.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/3">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 sm:w-2/3">
                  <div className="bg-red-600/10 p-3 rounded-xl w-fit mb-6">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center gap-2 font-black text-red-600 uppercase tracking-widest text-sm hover:gap-4 transition-all">
                    Service Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
