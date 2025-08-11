import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { services } from '../data/services';

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      <Helmet>
        <title>Services - EasyAuto | Auto Marketing Services</title>
        <meta name="description" content="Pick what you need—each service is plug-and-play. Websites, SEO, ads, funnels, WhatsApp marketing, and creative content for auto businesses." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-blue to-asphalt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionHeader
            title="Our Services"
            description="Pick what you need—each service is plug-and-play"
            centered
            className="text-white"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-racing-red to-signal-yellow rounded-2xl flex items-center justify-center mb-4">
                    {/* Dynamic icon rendering */}
                    <div className="w-8 h-8 text-white">
                      {service.icon === 'Globe' && '🌐'}
                      {service.icon === 'Search' && '🔍'}
                      {service.icon === 'Megaphone' && '📢'}
                      {service.icon === 'Zap' && '⚡'}
                      {service.icon === 'MessageCircle' && '💬'}
                      {service.icon === 'Camera' && '📷'}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-asphalt mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <button
                    onClick={() => toggleService(service.id)}
                    className="flex items-center space-x-2 text-racing-red hover:text-racing-red/80 transition-colors duration-200"
                  >
                    <span className="font-medium">Learn more</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedService === service.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>

                {/* Service Details Drawer */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100 overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50">
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-asphalt mb-3">What's included:</h4>
                          <ul className="space-y-2">
                            {service.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="flex items-start space-x-2">
                                <Check className="w-4 h-4 text-signal-yellow mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* KPI Examples */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-asphalt mb-3">Expected results:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.kpiExamples.map((kpi, kpiIndex) => (
                              <span
                                key={kpiIndex}
                                className="px-3 py-1 bg-gradient-to-r from-racing-red to-signal-yellow text-white text-sm rounded-full font-medium"
                              >
                                {kpi}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Service Image Placeholder */}
                        <div className="bg-gradient-to-br from-electric-blue to-racing-red rounded-xl p-8 text-center text-white">
                          <div className="text-4xl mb-2">🚗</div>
                          <p className="text-sm opacity-90">{service.title}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-asphalt mb-6">
              Ready to get more leads?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss which services will work best for your auto business and create a custom plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" href="https://wa.me/971567191045" target="_blank" rel="noopener noreferrer">
                Get Free Consultation
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/pricing">
                View Pricing
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
