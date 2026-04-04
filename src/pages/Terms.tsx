import React from 'react';
import { Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-4 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
        
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-slate-100">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900">Last Updated: April 4, 2026</p>
            
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on Elite Roof Professional's website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">3. Disclaimer</h2>
              <p>The materials on Elite Roof Professional's website are provided on an 'as is' basis. Elite Roof Professional makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">4. Limitations</h2>
              <p>In no event shall Elite Roof Professional or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Elite Roof Professional's website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">5. Governing Law</h2>
              <p>Any claim relating to Elite Roof Professional's website shall be governed by the laws of the State without regard to its conflict of law provisions.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
