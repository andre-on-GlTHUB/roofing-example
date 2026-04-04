import React from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, Shield, Star, Award, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Residential', path: '/residential' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Services', path: '/services' },
    { name: 'Financing', path: '/financing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Emergency Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> 24/7 Emergency Leak Repair
          </span>
          <a href="tel:5550123" className="flex items-center gap-1 hover:underline">
            <Phone className="w-4 h-4" /> (555) 000-1234
          </a>
          <span className="hidden md:inline bg-white/20 px-2 py-0.5 rounded text-xs">
            $0 Down Financing Available
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-100 sticky top-[40px] sm:top-[32px] z-40 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 block leading-none">ELITE ROOF</span>
              <span className="text-xs font-bold text-red-600 tracking-[0.2em] uppercase leading-none">Professional</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-red-600",
                  location.pathname === link.path ? "text-red-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link 
              to="/estimate" 
              className="bg-slate-900 text-white px-6 py-3 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg hover:shadow-red-600/20 active:scale-95"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-32 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-tighter text-slate-900 hover:text-red-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/estimate" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-red-600 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-widest"
              >
                Get Free Estimate
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-8 h-8 text-red-600" />
                <span className="text-2xl font-black tracking-tighter">ELITE ROOF</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Providing premium residential and commercial roofing solutions since 1998. GAF Master Elite certified and locally owned.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 p-2 rounded hover:bg-red-600 transition-colors cursor-pointer">
                  <Star className="w-5 h-5" />
                </div>
                <div className="bg-white/10 p-2 rounded hover:bg-red-600 transition-colors cursor-pointer">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-red-600">Our Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link to="/residential" className="hover:text-white transition-colors">Residential Roofing</Link></li>
                <li><Link to="/commercial" className="hover:text-white transition-colors">Commercial Roofing</Link></li>
                <li><Link to="/repair" className="hover:text-white transition-colors">Roof Repair & Maintenance</Link></li>
                <li><Link to="/storm" className="hover:text-white transition-colors">Storm Damage Restoration</Link></li>
                <li><Link to="/inspection" className="hover:text-white transition-colors">Free Roof Inspections</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-red-600">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                  <span>123 Roofing Way, Suite 100<br />Cityville, ST 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600 shrink-0" />
                  <span>(555) 000-1234</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600 shrink-0" />
                  <span>info@eliteroofpro.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter/Trust */}
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-red-600">Trust & Safety</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-bold">Fully Licensed & $2M Insured</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-bold">GAF Master Elite Certified</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-bold">A+ BBB Rated Business</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2026 Elite Roof Professional. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex">
        <a 
          href="tel:5550123" 
          className="flex-1 bg-red-600 text-white py-4 flex items-center justify-center gap-2 font-black uppercase tracking-widest"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <Link 
          to="/estimate" 
          className="flex-1 bg-slate-900 text-white py-4 flex items-center justify-center gap-2 font-black uppercase tracking-widest border-l border-white/10"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
