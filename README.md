# EasyAuto - Auto B2B Marketing Site

A lively, car-first marketing website for auto businesses (wrap/tint/PPF, garages, paint/body, service contracts) built with React, TypeScript, and Tailwind CSS.

## 🚗 Features

- **4 Complete Pages**: Home, Services, Pricing, Contact
- **Car-First Design**: Auto-specific visuals and content throughout
- **Premium Glassy UI**: Modern glassmorphism design with bold colors
- **High Conversion**: Sales-focused copy and clear CTAs
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Smooth Animations**: Framer Motion for tasteful micro-interactions
- **SEO Optimized**: React Helmet for meta tags and Open Graph

## 🎨 Design System

### Color Palette
- **Asphalt Black** (#0A0A0B) - Primary background
- **Racing Red** (#FF2B2B) - Primary accent
- **Signal Yellow** (#FFD233) - Secondary accent
- **Electric Blue** (#2F80FF) - Tertiary accent
- **Gunmetal** (#1C1F26) - Dark accents

### Typography
- **Headlines**: Strong display fonts for impact
- **Body**: Clean sans-serif for readability
- **Spacing**: Big, breathable layouts

### Components
- Glass cards with backdrop blur
- Rounded corners (rounded-2xl)
- Soft shadows and hover effects
- Gradient buttons and accents

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **SEO**: React Helmet Async

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx     # Navigation with sticky positioning
│   ├── Footer.tsx     # Footer with links and WhatsApp
│   ├── CTAButton.tsx  # Call-to-action button variants
│   ├── MetricChip.tsx # KPI display with count-up
│   └── SectionHeader.tsx # Section headers with animations
├── pages/              # Page components
│   ├── Home.tsx       # Landing page with hero and sections
│   ├── Services.tsx   # Service offerings with detail drawers
│   ├── Pricing.tsx    # Pricing tiers and comparison
│   └── Contact.tsx    # Contact form and office info
├── data/               # Content data files
│   ├── metrics.ts     # KPI numbers and proof data
│   ├── services.ts    # Service definitions and features
│   └── pricing.ts     # Pricing tiers and comparison matrix
├── lib/                # Utility functions
│   └── utils.ts       # Helper functions and class merging
├── App.tsx            # Main app with routing
└── main.tsx           # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auto-b2b-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 Pages Overview

### 🏠 Home
- Hero section with "More booked jobs. Less slow days."
- Pain → Outcome transformation cards
- What We Do service grid (6 services)
- How It Works 3-step process
- Proof metrics with count-up animations
- Final CTA for free growth plan

### 🔧 Services
- 6 service cards with expandable detail drawers
- Each service includes features, KPIs, and auto imagery
- Interactive accordion-style information display

### 💰 Pricing
- 4 pricing tiers (Starter, Growth, Pro, Enterprise)
- Feature comparison table
- FAQ section
- Clear CTAs for each tier

### 📞 Contact
- Contact form with auto-business specific fields
- WhatsApp deep-link integration
- Office information and hours
- Location placeholder for map integration

## 🎯 Key Components

### CTAButton
- Primary (gradient red→yellow) and secondary variants
- Multiple sizes (sm, md, lg)
- Hover animations and micro-interactions

### MetricChip
- Count-up animation on view
- Color-coded by metric type
- Glass card design with backdrop blur

### SectionHeader
- Eyebrow text, title, and description
- Staggered animation sequence
- Centered or left-aligned options

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'asphalt': '#0A0A0B',
  'racing-red': '#FF2B2B',
  'signal-yellow': '#FFD233',
  'electric-blue': '#2F80FF',
  'gunmetal': '#1C1F26',
}
```

### Content
Update data files in `src/data/` to modify:
- Service offerings
- Pricing tiers
- KPI metrics
- Contact information

### Styling
Modify `src/index.css` for:
- Custom CSS variables
- Additional utility classes
- Component-specific styles

## 📊 Performance

- **Lighthouse Score**: Target ≥90
- **Bundle Size**: Optimized with Vite
- **Images**: Placeholder gradients (replace with actual auto imagery)
- **Animations**: Hardware-accelerated with Framer Motion

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript strict mode enabled
- ESLint configuration for React
- Prettier formatting (recommended)

## 🚗 Auto-Specific Features

- **Car-First Content**: All copy and visuals focused on auto industry
- **Service-Specific**: Wrap, tint, PPF, garage, paint/body services
- **Industry KPIs**: Lead generation, CPL reduction, booking increases
- **WhatsApp Integration**: Primary communication channel for auto businesses
- **Local SEO Focus**: Google Business Profile and local search optimization

## 📈 Conversion Optimization

- **Clear CTAs**: "Get Free Plan", "See Pricing", "WhatsApp Us"
- **Social Proof**: Customer ratings and testimonials
- **Pain Points**: Addresses common auto business challenges
- **Value Proposition**: "Turn clicks into car bays"
- **Free Offer**: 24-hour growth plan delivery

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

This project is proprietary software. All rights reserved.

## 🤝 Support

For questions or support, contact the development team or refer to the project documentation.

---

**Built with ❤️ for auto businesses that want to grow faster.**
