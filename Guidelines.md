# Cartoon Portfolio - Development Guidelines

## 🚀 Project Overview

A modern, responsive portfolio website built with Next.js, featuring cartoon/anime styling with smooth animations powered by Framer Motion. The project showcases frontend development skills with a unique visual design.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Notifications**: Sonner
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── HeroSection.tsx   # Landing section
│   ├── Biography.tsx     # About section
│   ├── Portfolio.tsx     # Projects section
│   ├── Resume.tsx        # Skills & experience
│   ├── Contact.tsx       # Contact form
│   └── LoadingScreen.tsx # Loading animation
└── styles/
    └── globals.css       # Global styles & Tailwind config
```

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Access at: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🌐 Deployment

### Vercel Deployment

1. **Connect to Vercel**:
   - Push code to GitHub/GitLab
   - Connect repository to Vercel
   - Vercel will auto-detect Next.js

2. **Environment Variables** (if needed):
   - Add in Vercel dashboard under Settings > Environment Variables

3. **Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy**:
   - Vercel will automatically deploy on push to main branch
   - Preview deployments for pull requests

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## 🎨 Design System

### Color Palette
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Background: Slate-50 to Blue-50 gradient
- Text: Black (#000000)
- Borders: Black (#000000)

### Typography
- Font Family: Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800, 900

### Animations
- Entrance animations with Framer Motion
- Hover effects with scale and translate
- Loading screen with progress animation
- Smooth page transitions

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: >= 1024px

### Layout Adaptations
- **Mobile**: Single navigation bar with hamburger menu
- **Tablet**: Compact sidebar with reduced spacing
- **Desktop**: Full sidebar with expanded content

## 🔧 Performance Optimizations

### Implemented
- React.memo for component memoization
- useCallback for function memoization
- useMemo for expensive calculations
- Optimized re-renders in Sidebar component
- GPU-accelerated animations
- Image optimization with Next.js

### Best Practices
- Lazy loading for components
- Optimized bundle size
- Efficient state management
- Minimal re-renders

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Navigation functionality
- [ ] Form submissions
- [ ] Animation performance
- [ ] Accessibility features
- [ ] Cross-browser compatibility

## 📝 Code Style

### TypeScript
- Strict mode enabled
- Proper type definitions
- Interface-first approach

### React
- Functional components with hooks
- Proper prop typing
- Memoization where beneficial

### CSS/Tailwind
- Utility-first approach
- Custom animations in globals.css
- Responsive design patterns

## 🚀 Performance Metrics

### Target Metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

### Monitoring
- Use Vercel Analytics
- Monitor Core Web Vitals
- Track user interactions

## 🔒 Security

### Implemented
- Content Security Policy
- Secure headers
- Input validation
- XSS protection

### Best Practices
- Regular dependency updates
- Security audits
- HTTPS enforcement

## 📊 Analytics

### Recommended Tools
- Vercel Analytics
- Google Analytics 4
- Hotjar for user behavior

## 🎯 SEO

### Optimizations
- Meta tags in layout.tsx
- Semantic HTML structure
- Alt text for images
- Open Graph tags
- Structured data

## 🔄 Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor performance metrics
- Review and optimize code
- Update content as needed

### Version Control
- Feature branch workflow
- Semantic versioning
- Changelog maintenance

## 📞 Support

For issues or questions:
- Check existing documentation
- Review component structure
- Test in different environments
- Monitor console for errors

---

**Built with ❤️ by Patan Sahil Khan**
