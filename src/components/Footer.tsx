import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { createWhatsAppLink } from '../lib/utils';
import CarLogo from './CarLogo';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Website Design',
    'SEO & GBP',
    'Social Media Ads',
    'WhatsApp Marketing',
    'Creative Content',
    'Lead Generation'
  ];

  const contactInfo = [
    { icon: Phone, text: '056 719 1045' },
    { icon: MapPin, text: 'Dubai, UAE' }
  ];



  const whatsappMessage = "Hi! I'm interested in your auto marketing services. Can you help me get more leads?";

  return (
    <footer className="bg-asphalt text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <CarLogo size={40} className="text-orange-500" />
              <span className="text-white font-bold text-2xl">EasyAuto</span>
            </div>
            <p className="text-white/70 mb-6">
              Want more customers? We're here to help. Contact us today.
            </p>
            <a
              href={createWhatsAppLink('+971567191045', whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-racing-red to-signal-yellow text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-5 h-5 text-signal-yellow" />
                  <span className="text-white/70">{contact.text}</span>
                </li>
              ))}
            </ul>
            

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 EasyAuto LLC FZE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
