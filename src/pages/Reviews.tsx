import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Reviews() {
  const reviews = [
    { id: 1, name: "Sarah Jenkins", location: "Cityville", text: "Elite Roof Pro was fantastic. They were professional, clean, and finished our full roof replacement in just two days. Highly recommend!", rating: 5 },
    { id: 2, name: "Michael Chen", location: "Westside", text: "After the big hail storm, I didn't know where to start. They handled the insurance claim and got us a beautiful new roof for just our deductible.", rating: 5 },
    { id: 3, name: "David Miller", location: "Downtown", text: "Great commercial roofing team. They repaired our warehouse roof without disrupting our operations. Very professional crew.", rating: 5 },
    { id: 4, name: "Amanda Ross", location: "North Hills", text: "The financing options made it possible for us to get a new roof before the rainy season. The process was so easy.", rating: 5 },
    { id: 5, name: "Robert Wilson", location: "South Park", text: "Fast response for a small leak repair. They didn't try to sell me a whole new roof, just fixed what was broken. Honest guys.", rating: 5 },
    { id: 6, name: "Jessica Taylor", location: "East End", text: "Best roofing experience I've ever had. The communication was excellent from start to finish.", rating: 5 },
  ];

  return (
    <div className="bg-slate-50">
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            CUSTOMER <br />
            <span className="text-red-600">TESTIMONIALS.</span>
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-8 h-8 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. See why over 1,000 local homeowners and businesses trust Elite Roof Pro.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <motion.div 
                key={review.id}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-50" />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div>
                  <div className="font-black text-slate-900">{review.name}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{review.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-black mb-6">Ready to be our next 5-star review?</h2>
            <Link to="/estimate" className="bg-red-600 text-white px-10 py-5 rounded-md font-black text-xl uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all inline-flex items-center gap-2">
              Get Your Free Estimate <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
