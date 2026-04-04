/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Estimate from './pages/Estimate';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Services from './pages/Services';
import Financing from './pages/Financing';
import Gallery from './pages/Gallery';
import Repair from './pages/Repair';
import Storm from './pages/Storm';
import Reviews from './pages/Reviews';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/services" element={<Services />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Estimate />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/storm" element={<Storm />} />
          <Route path="/inspection" element={<Estimate />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}




