import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { pricingTiers, compareFeatures } from '../data/pricing';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - EasyAuto | Auto Marketing Services</title>
        <meta name="description" content="Clear plans. Cancel anytime. Choose from Starter, Growth, Pro, or Enterprise plans for your auto business marketing needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-blue to-asphalt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionHeader
            title="Pricing"
            description="Clear plans. Cancel anytime."
            centered
            className="text-white"
          />
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative glass-card rounded-2xl p-8 ${
                  tier.popular ? 'ring-2 ring-signal-yellow shadow-xl' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-racing-red to-signal-yellow text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-asphalt mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  

                </div>



                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-signal-yellow mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  href="/contact"
                  className="w-full"
                  variant={tier.popular ? 'primary' : 'secondary'}
                >
                  Get Started
                </CTAButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Get answers to common questions about our pricing and services"
            centered
          />
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Is there a setup fee?",
                answer: "Yes, there's a one-time setup fee for each plan. This covers initial configuration, training, and getting your campaigns up and running."
              },
              {
                question: "What's included in the lead volume estimates?",
                answer: "Lead volume estimates are based on average performance across similar auto businesses. Actual results may vary based on your market, competition, and budget."
              },
              {
                question: "Do you offer custom plans?",
                answer: "Yes, our Enterprise plan is fully customizable. We can create a plan tailored to your specific needs, budget, and goals."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-asphalt mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-racing-red to-signal-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to start getting more leads?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choose the plan that fits your business and start seeing results in as little as 7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="/contact"
                size="lg"
                className="bg-white text-racing-red hover:bg-gray-100"
              >
                Get Started Today
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                href="/contact"
                className="border-white text-white hover:bg-white hover:text-racing-red"
              >
                Schedule a Call
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
