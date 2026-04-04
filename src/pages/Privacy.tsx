import React from 'react';
import { Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-4 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
        
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-slate-100">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900">Last Updated: April 4, 2026</p>
            
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you request an estimate, schedule an inspection, or contact us for services. This may include your name, email address, phone number, and property address.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, including to process your requests for estimates and to communicate with you about your roofing projects.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">3. Sharing of Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">4. Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">5. Contact Us</h2>
              <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
              <ul className="mt-4 space-y-2 font-bold text-slate-900">
                <li>Elite Roof Professional</li>
                <li>123 Roofing Way, Suite 100</li>
                <li>Cityville, ST 12345</li>
                <li>info@eliteroofpro.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
