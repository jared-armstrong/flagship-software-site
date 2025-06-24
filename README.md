# Flagship Software Site

A modern, responsive website for Flagship Software - a cutting-edge software design company. Built with Next.js 15+, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15+ with App Router
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Built-in theme switching with next-themes
- **Component Library**: Comprehensive UI components with shadcn/ui
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Performance**: Optimized images, code splitting, and fast loading times

## 📦 Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes
- **Animations**: CSS animations and Framer Motion

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flagship-software-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Layout.tsx        # Main layout wrapper
│   ├── Navigation.tsx    # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── ThemeProvider.tsx # Theme provider
│   └── ThemeToggle.tsx   # Theme toggle button
├── hooks/                # Custom React hooks
├── public/               # Static assets
├── shared/               # Shared utilities and schemas
└── server/               # Backend API (if needed)
```

## 🎨 Design System

The project uses a consistent design system with:

- **Colors**: HSL-based color palette with dark mode support
- **Typography**: Inter font family with responsive sizing
- **Spacing**: Consistent spacing scale using Tailwind's spacing utilities
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and micro-interactions

## 📱 Pages

- **Home**: Hero section, company introduction, featured products, latest blog posts
- **Products**: Showcase of software solutions with detailed descriptions
- **Blog**: Articles and insights about software design and development
- **Contact**: Contact form and company information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check` - Type checking with TypeScript

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any other hosting platform that supports Next.js.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Environment Variables

No environment variables are required for basic functionality. Add any API keys or configuration as needed.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@flagshipsoftware.com
- Website: https://flagshipsoftware.com

---

Built with ❤️ by Flagship Software 