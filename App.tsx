import React, { useState } from 'react';
import { SERVICES, WHY_CHOOSE_US, HERO_HEADLINE, HERO_SUBHEAD, CONTACT_CTA, CONTACT_SUB, COMPANY_NAME } from './constants';
import { Button } from './components/Button';
import { MapPin, Phone, Mail, ChevronDown, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const details = formData.get('details') as string;

    // Construct WhatsApp message
    const message = `✨ *NEW QUOTE REQUEST* ✨\n\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone:* ${phone}\n` +
      `🎯 *Service:* ${service}\n` +
      `📝 *Details:* ${details || 'Not provided'}\n\n` +
      `🚀 _Looking forward to working with Gowtham Digitals!_`;

    // WhatsApp business number (from contact section)
    const whatsappNumber = '7989538551'; // +91 78423 24252 without +91 and spaces

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-matte-black font-sans text-white selection:bg-gold-500 selection:text-black">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-matte-black/90 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display text-2xl font-bold text-white tracking-widest uppercase">
            Gowtham<span className="text-gold-500">Digitals</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300 uppercase tracking-widest">
            <button onClick={() => scrollToSection('services')} className="hover:text-gold-500 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">Services</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-gold-500 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">Why Us</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gold-500 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">Contact</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex py-2 px-4 text-xs">Get Quote</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Industrial Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-matte-black to-matte-black"></div>
          <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 inline-block border border-gold-500/50 px-4 py-1 rounded-full bg-gold-500/10 backdrop-blur-sm animate-fade-in-up">
            <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">Premium Publicity Works</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-2xl">
            {HERO_HEADLINE}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {HERO_SUBHEAD}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button onClick={() => scrollToSection('services')}>Explore Services</Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>Contact Sales</Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-gold-500/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#151515] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-4 border-gold-500 pl-6">
            <h2 className="font-display text-4xl font-bold text-white uppercase mb-2">Our Expertise</h2>
            <p className="text-gray-400">Comprehensive industrial printing solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="group relative bg-matte-gray p-8 border border-gray-800 hover:border-gold-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(255,215,0,0.2)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-6 p-4 bg-black/30 inline-block rounded border border-gray-800 group-hover:border-gold-500 group-hover:bg-gold-500/10 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-500">
                  <div className="text-gold-500 group-hover:text-gold-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs font-medium text-gray-300 bg-[#252525] px-3 py-1 rounded border border-gray-700 group-hover:border-gold-500/30 group-hover:bg-black transition-all duration-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-matte-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gold-500 uppercase mb-4">Why Gowtham Digitals?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We define excellence in printing through precision, material quality, and durability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="mb-6 p-6 rounded-full border-2 border-gold-500/20 bg-[#1A1A1A] group-hover:border-gold-500/60 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-500 group-hover:-translate-y-2">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-gold-500 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#151515] to-matte-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <div>
              <h2 className="font-display text-5xl font-bold text-white mb-6 leading-tight">
                {CONTACT_CTA}
              </h2>
              <p className="text-xl text-gold-500 mb-12 font-light">
                {CONTACT_SUB}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-matte-gray rounded border border-gold-500/30 group-hover:border-gold-500 group-hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-300">
                    <MapPin className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1 group-hover:text-gold-500 transition-colors">Visit Our Workshop</h4>
                    <p className="text-gray-400 mb-3">
                      LB Nagar Metro Station — 3-6-65 & 66, Near Siri Nagar,<br /> Opp. Pillar No. 1668
                      Hyderabad, Telangana 500074
                    </p>
                    <a
                      href="https://maps.app.goo.gl/unFKCbIoHFfG9L8jk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold-500 text-sm font-semibold hover:text-gold-400 transition-colors group"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-matte-gray rounded border border-gold-500/30 group-hover:border-gold-500 group-hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-300">
                    <Phone className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1 group-hover:text-gold-500 transition-colors">Call for Estimates</h4>
                    <p className="text-gray-400">+91 79895 38551</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-matte-gray rounded border border-gold-500/30 group-hover:border-gold-500 group-hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-300">
                    <Mail className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1 group-hover:text-gold-500 transition-colors">Email Us</h4>
                    <p className="text-gray-400">gowthamdigitals28@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-matte-gray p-8 md:p-10 rounded-xl border border-gold-500/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-gold-500/30">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-display font-bold text-white">Request a Quote</h3>
                <MessageCircle className="w-6 h-6 text-green-500" />
                <span className="text-xs text-gray-400 uppercase tracking-wide">(WhatsApp)</span>
              </div>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gold-500 uppercase tracking-wider">Name</label>
                    <input type="text" name="name" required className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:shadow-[0_0_10px_rgba(255,215,0,0.2)] outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gold-500 uppercase tracking-wider">Phone</label>
                    <input type="tel" name="phone" required className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:shadow-[0_0_10px_rgba(255,215,0,0.2)] outline-none transition-all" placeholder="+91..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold-500 uppercase tracking-wider">Service Needed</label>
                  <select name="service" className="w-full bg-[#111] border border-gray-700 rounded p-3 text-gray-300 focus:border-gold-500 focus:shadow-[0_0_10px_rgba(255,215,0,0.2)] outline-none transition-all">
                    <option>Flex Printing</option>
                    <option>Vinyl / Sticker</option>
                    <option>LED Signage Board</option>
                    <option>Hoardings</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold-500 uppercase tracking-wider">Project Details</label>
                  <textarea name="details" className="w-full bg-[#111] border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:shadow-[0_0_10px_rgba(255,215,0,0.2)] outline-none transition-all h-32" placeholder="Dimensions, quantity, location..."></textarea>
                </div>
                <Button className="w-full" isLoading={isSubmitting}>
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-center text-gray-400 text-sm mb-4">Or fill our detailed Google Form</p>
                <a
                  href="https://forms.gle/SnhBYLQxnDErnyEx6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4" />
                    Open Google Form
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display text-xl font-bold text-white">{COMPANY_NAME}</h4>
            <p className="text-gray-500 text-sm mt-2">High-Tech Industrial Printing Solutions.</p>
          </div>
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Gowtham Digitals. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;