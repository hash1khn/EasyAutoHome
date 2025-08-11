import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { createWhatsAppLink } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    whatsapp: '',
    services: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const whatsappMessage = `Hi! I'm ${formData.name} from ${formData.company} in ${formData.city}. I'm interested in ${formData.services} with a budget of ${formData.budget}. Can you help me get more leads?`;

  const serviceOptions = [
    'Website Design',
    'SEO & Google Business Profile',
    'Social Media Ads',
    'WhatsApp Marketing',
    'Creative Content',
    'Full Package'
  ];

  const budgetOptions = [
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  return (
    <>
      <Helmet>
        <title>Contact - EasyAuto | Get Your Free Growth Plan</title>
        <meta name="description" content="Ready to get more leads? Contact us for a free consultation and growth plan for your auto business. We'll help you turn clicks into car bays." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-blue to-asphalt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionHeader
            title="Contact Us"
            description="Ready to get more leads? Let's discuss your auto business growth strategy"
            centered
            className="text-white"
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-asphalt mb-6">Get Your Free Growth Plan</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll create a customized marketing strategy for your auto business. 
                Get your free plan in 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-transparent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-transparent transition-colors duration-200"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-transparent transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                    Services Interested In *
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select services</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-racing-red focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center">
                  <a
                    href={createWhatsAppLink(formData.whatsapp || '5551234567', whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    WhatsApp Us
                  </a>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:pl-8"
            >
              <div className="glass-card rounded-2xl p-8 h-fit">
                <h3 className="text-2xl font-bold text-asphalt mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-racing-red to-signal-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-asphalt">Phone</h4>
                      <p className="text-gray-600">056 719 1045</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-racing-red to-signal-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-asphalt">Email</h4>
                      <p className="text-gray-600">hello@easyauto.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-racing-red to-signal-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-asphalt">Office</h4>
                      <p className="text-gray-600">Dubai, UAE</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-racing-red to-signal-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-asphalt">Office Hours</h4>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM GST</p>
                      <p className="text-gray-600">Sat: 10AM-4PM GST</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <h4 className="font-semibold text-asphalt mb-3">Our Location</h4>
                  <div className="w-full h-48 bg-gradient-to-br from-electric-blue to-racing-red rounded-xl flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🗺️</div>
                      <p className="text-sm">Dubai, UAE</p>
                      <p className="text-xs opacity-80">Interactive map coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Contact;
