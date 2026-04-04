import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const projects = [
    { id: 1, title: "Modern Slate Replacement", category: "Residential", image: "https://images.unsplash.com/photo-1632759162351-375eaa13f00b?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Industrial TPO Install", category: "Commercial", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Architectural Shingle", category: "Residential", image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Retail Center Coating", category: "Commercial", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Standing Seam Metal", category: "Residential", image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Storm Damage Restoration", category: "Residential", image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            OUR LOCAL <br />
            <span className="text-red-600">PROJECTS.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Take a look at the quality craftsmanship we deliver to homes and businesses across the region.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl aspect-square"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="text-xs font-black text-red-600 uppercase tracking-widest mb-2">{project.category}</div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/estimate" className="bg-red-600 text-white px-10 py-5 rounded-md font-black text-xl uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
