import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Film, 
  Zap, 
  Globe, 
  Search, 
  Megaphone, 
  MessageCircle, 
  Camera,
  ArrowRight,
  MessageCircle as MessageIcon
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import MetricChip from '../components/MetricChip';
import SilkBackground from '../components/SilkBackground';
import { metrics, heroMetrics } from '../data/metrics';

const Home = () => {
  const painOutcomeCards = [
    {
      pain: 'No Customers?',
      outcome: 'We find them',
      icon: Wrench,
      color: 'racing-red'
    },
    {
      pain: 'Low Season Hurting?',
      outcome: 'We got you',
      icon: Film,
      color: 'signal-yellow'
    },
    {
      pain: 'Cheap Clients?',
      outcome: 'No longer',
      icon: Zap,
      color: 'electric-blue'
    }
  ];

  const whatWeDoItems = [
    {
      icon: Globe,
      title: 'Websites that convert',
      description: 'Mobile-first, WhatsApp-integrated sites'
    },
    {
      icon: Search,
      title: 'SEO + Google Business Profile',
      description: 'Rank higher in local search results'
    },
    {
      icon: Megaphone,
      title: 'Meta / TikTok / Google Ads',
      description: 'Creative campaigns that drive results'
    },
    {
      icon: Zap,
      title: 'Funnels + Landing Pages',
      description: 'High-converting lead capture systems'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Mass Send & CRM',
      description: 'Automated client re-engagement'
    },
    {
      icon: Camera,
      title: 'Photo/Video Creative',
      description: 'Auto-specific visual content'
    }
  ];

  const howItWorksSteps = [
    {
      step: 'Plan',
      description: 'Audit + offer + goals',
      icon: '📋'
    },
    {
      step: 'Launch',
      description: 'Site/funnel + ads + tracking',
      icon: '🚀'
    },
    {
      step: 'Scale',
      description: 'Creatives + budget + automation',
      icon: '📈'
    }
  ];

  return (
    <>
      <Helmet>
        <title>EasyAuto - Turn Clicks into Car Bays | Auto Marketing Services</title>
        <meta name="description" content="Websites, ads, SEO & WhatsApp outreach for tint, wrap, PPF and garages. Get more booked jobs, less slow days." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'transparent' }}>
        {/* Silk Background */}
        <SilkBackground 
          speed={3.7} 
          scale={0.8} 
          color="#1E40AF" 
          noiseIntensity={1.5} 
          rotation={0}
        />
        

        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                More bookings.
                <br />
                <span className="gradient-text">More money.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
                No hassle. Just results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <CTAButton size="lg" href="https://wa.me/971567191045" target="_blank" rel="noopener noreferrer">
                  Get Free Plan
                </CTAButton>
                <CTAButton variant="secondary" size="lg" href="/pricing">
                  See Pricing
                </CTAButton>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[
                    '/images/faces/Face.jpeg',
                    '/images/faces/Face (1).jpeg',
                    '/images/faces/Face (2).jpeg'
                  ].map((face, i) => (
                    <img 
                      key={i} 
                      src={face} 
                      alt={`Customer ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-signal-yellow">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                  <span className="text-white/80 text-sm">From 100+ ratings</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Hero Video */}
                <video
                  className="w-full h-96 lg:h-[500px] rounded-3xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/Homepage_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                                 {/* Floating KPI Chips */}
                 {heroMetrics.map((metric, index) => (
                   <motion.div
                     key={metric.value}
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                     className={`absolute rounded-2xl p-3 text-sm font-bold shadow-2xl backdrop-blur-md ${
                       index === 0 ? 'top-4 -left-4' :
                       index === 1 ? 'top-1/2 -right-4' :
                       'bottom-4 -left-4'
                     }`}
                     style={{
                       backgroundColor: `var(--tw-${metric.color}-opacity-95)`,
                       color: 'white',
                       border: '2px solid rgba(255, 255, 255, 0.3)',
                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                     }}
                   >
                     <div className="text-lg font-bold">{metric.value}</div>
                     <div className="text-xs opacity-90 font-medium">{metric.label}</div>
                   </motion.div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain → Outcome Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="More Jobs. Less Empty Bays."
            description="We know the auto game, getting you leads is second nature."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painOutcomeCards.map((card, index) => (
              <motion.div
                key={card.pain}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${card.color}/10`}>
                  <card.icon className={`w-8 h-8 text-${card.color}`} />
                </div>
                <h3 className="text-xl font-bold text-asphalt mb-2">{card.pain}</h3>
                <div className="text-2xl font-bold text-signal-yellow mb-2">→</div>
                <h4 className="text-lg font-semibold text-asphalt">{card.outcome}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Do"
            description="We build you a fully custom growth plan"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-racing-red to-signal-yellow rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-asphalt mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            description="Simple 3-step process to make more money"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-racing-red to-signal-yellow rounded-full flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-asphalt mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-asphalt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Proof in Numbers"
            description="Real results from real auto businesses"
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.id} className="glass-card rounded-2xl p-4 border border-white/30 backdrop-blur-md bg-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                    <metric.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm font-medium text-white/80">{metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-racing-red to-signal-yellow rounded-3xl p-12 text-center text-white"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <MessageIcon className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get a free growth plan in 24 hours
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No commitment, no pressure. Just a roadmap to more leads and bookings.
            </p>
            <CTAButton size="lg" href="https://wa.me/971567191045" target="_blank" rel="noopener noreferrer" className="bg-white text-racing-red hover:bg-gray-100 shadow-xl">
              Get Started
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
