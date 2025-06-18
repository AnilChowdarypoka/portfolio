# Data Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, and a professional design showcasing data engineering expertise.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark theme
- **Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Components**: Dynamic navigation, image modals, and hover effects
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd data-engineer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Option 1: Deploy via Vercel Dashboard**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect it's a Vite project
   - Deploy!

2. **Option 2: Deploy via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

### Deploy to Netlify

1. **Option 1: Deploy via Netlify Dashboard**
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

2. **Option 2: Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

### Manual Build

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   ├── awards/
│   │   ├── certifications/
│   │   └── education/
│   ├── _redirects          # Netlify routing
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.tsx
│   │   ├── Navbar.tsx
│   │   └── TechStack.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vercel.json            # Vercel configuration
├── vite.config.ts         # Vite configuration
└── package.json
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic deployment. All configuration is handled in the code.

### Customization

1. **Update Personal Information**: Modify the content in `src/App.tsx`
2. **Change Images**: Replace images in `public/images/`
3. **Update Colors**: Modify Tailwind classes or CSS variables
4. **Add Sections**: Extend the component structure in `App.tsx`

## 📱 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: Compressed and optimized
- **Loading**: Lazy loading for better performance

## 🔒 Security

- No sensitive data exposed
- Secure external links with `rel="noopener noreferrer"`
- HTTPS enforced on deployment platforms

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: venkata.kumar517@gmail.com
- **LinkedIn**: [pvakc](https://www.linkedin.com/in/pvakc/)
- **GitHub**: [AnilChowdarypoka](https://github.com/AnilChowdarypoka)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS # venkata-poka-portfolio
