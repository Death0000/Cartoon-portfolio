# 🎨 Cartoon Portfolio

A modern, responsive portfolio website with cartoon/anime styling built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations, interactive components, and a unique visual design.

![Portfolio Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Cartoon+Portfolio+Preview)

## ✨ Features

- 🎭 **Cartoon/Anime Styling** - Unique visual design with comic-style elements
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 🎯 **Performance Optimized** - React.memo, useCallback, and useMemo for efficiency
- 🎨 **Modern UI Components** - Built with Radix UI and Tailwind CSS
- 🔔 **Interactive Notifications** - Toast notifications with Sonner
- 📊 **Loading Screen** - Animated loading experience
- 🎪 **Interactive Navigation** - Smooth section transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Notifications**: Sonner
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cartoon-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── ui/               # Reusable UI components (Radix UI)
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

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Configure DNS settings

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel CLI
npm install -g vercel
vercel --prod
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Background**: Slate-50 to Blue-50 gradient
- **Text**: Black (#000000)
- **Borders**: Black (#000000)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Animations
- Entrance animations with Framer Motion
- Hover effects with scale and translate
- Loading screen with progress animation
- Smooth page transitions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: >= 1024px

### Layout Adaptations
- **Mobile**: Single navigation bar with hamburger menu
- **Tablet**: Compact sidebar with reduced spacing
- **Desktop**: Full sidebar with expanded content

## 🔧 Performance Optimizations

### Implemented
- ✅ React.memo for component memoization
- ✅ useCallback for function memoization
- ✅ useMemo for expensive calculations
- ✅ Optimized re-renders in Sidebar component
- ✅ GPU-accelerated animations
- ✅ Image optimization with Next.js

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Navigation functionality
- [ ] Form submissions
- [ ] Animation performance
- [ ] Accessibility features
- [ ] Cross-browser compatibility

## 📊 Analytics & SEO

### SEO Optimizations
- Meta tags in layout.tsx
- Semantic HTML structure
- Alt text for images
- Open Graph tags
- Structured data

### Analytics Tools
- Vercel Analytics
- Google Analytics 4
- Hotjar for user behavior

## 🔒 Security

### Implemented
- Content Security Policy
- Secure headers
- Input validation
- XSS protection

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static site
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Radix UI** for accessible components
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Next.js** for the amazing framework

## 📞 Support

For support, email [your-email@example.com](mailto:your-email@example.com) or create an issue in this repository.

---

**Built with ❤️ by Patan Sahil Khan**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cartoon-portfolio) 