# 🌐 Leimarics - Crafting Digital Success

> Professional web development services for growing businesses. Modern, high-performing websites that drive real results.

**Tagline:** *We Build, You Grow* 🚀

![Leimarics](https://img.shields.io/badge/Leimarics-Crafting_Digital_Success-FF6B9D?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Development](#development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

Leimarics is a modern web development agency website built with cutting-edge technologies. This project showcases:

- **Modern Design:** Clean, professional UI with smooth animations
- **Full-Stack:** Next.js 14 frontend + Express.js backend
- **CMS Integration:** Contentful for easy content management
- **Database:** PostgreSQL with Prisma ORM
- **Type Safety:** TypeScript throughout
- **Responsive:** Mobile-first design approach

**Live Demo:** [Leimarics.com](https://Leimarics.com) *(coming soon)*

---

## ✨ Features

### 🎨 Frontend Features
- ✅ **Hero Section** - Animated hero with floating cards
- ✅ **Services** - Three-tier pricing (Basic, Business, E-commerce)
- ✅ **Portfolio** - Project showcase with category filters
- ✅ **About** - Company information and mission
- ✅ **Process** - 5-step workflow visualization
- ✅ **Testimonials** - Client reviews with 5-star ratings
- ✅ **Contact Form** - Validated form with email notifications
- ✅ **FAQ** - Collapsible accordion for common questions
- ✅ **Responsive Navbar** - Mobile menu with smooth scroll
- ✅ **Footer** - Links, contact info, and social media

### 🔧 Backend Features
- ✅ **Contact API** - Form submission handling
- ✅ **Newsletter** - Email subscription management
- ✅ **Database** - PostgreSQL with Prisma ORM
- ✅ **Email Service** - Nodemailer integration
- ✅ **Validation** - Zod schema validation
- ✅ **Error Handling** - Centralized error middleware
- ✅ **Rate Limiting** - Protection against abuse

### 🚀 Technical Features
- ✅ **SSR/SSG** - Server-side and static generation
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Fast Performance** - Lighthouse score 90+
- ✅ **Image Optimization** - next/image with lazy loading
- ✅ **Code Splitting** - Automatic bundle optimization
- ✅ **Git Workflow** - Feature branches and staging

---

## 🛠️ Tech Stack

### Frontend
```
Next.js 14          - React framework with App Router
TypeScript          - Type safety
Tailwind CSS        - Utility-first CSS
Framer Motion       - Animations
React Hook Form     - Form handling
Zod                 - Schema validation
Lucide Icons        - Icon library
```

### Backend
```
Node.js 20+         - JavaScript runtime
Express.js          - Web framework
TypeScript          - Type safety
Prisma              - ORM for PostgreSQL
PostgreSQL          - Relational database
Nodemailer          - Email service
Zod                 - Validation
```

### CMS & Services
```
Contentful          - Headless CMS
Supabase            - PostgreSQL hosting
Vercel              - Frontend hosting
AWS                 - Production hosting
```

### Development Tools
```
pnpm                - Package manager
ESLint              - Linting
Prettier            - Code formatting
Git                 - Version control
VS Code             - IDE
```

---

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** 20.x or higher ([Download](https://nodejs.org/))
- **pnpm** 8.x or higher (`npm install -g pnpm`)
- **Git** ([Download](https://git-scm.com/))
- **PostgreSQL** 15+ (optional for local dev)
- **VS Code** (recommended)

### Required Accounts
- [GitHub](https://github.com) - Version control
- [Vercel](https://vercel.com) - Frontend hosting
- [Supabase](https://supabase.com) - Database hosting
- [Contentful](https://contentful.com) - CMS (optional)

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/trailblazer04/Leimarics.git
cd Leimarics
```

### 2. Install Dependencies
```bash
# Frontend
cd frontend
pnpm install

# Backend
cd ../backend
pnpm install
```

### 3. Setup Environment Variables
```bash
# Frontend
cd frontend
cp .env.example .env.local
# Edit .env.local with your values

# Backend
cd ../backend
cp .env.example .env
# Edit .env with your values
```

### 4. Setup Database
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start Development Servers
```bash
# Terminal 1: Frontend
cd frontend
pnpm dev
# Opens at http://localhost:3000

# Terminal 2: Backend
cd backend
pnpm dev
# Runs at http://localhost:3001
```

### 6. Open Browser

Navigate to: **http://localhost:3000**

🎉 **You're ready to develop!**

---

## 📁 Project Structure
```
Leimarics/
├── frontend/                 # Next.js 14 Application
│   ├── app/
│   │   ├── layout.tsx       # Root layout (Navbar + Footer)
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── services/        # Services page
│   │   ├── portfolio/       # Portfolio pages
│   │   ├── contact/         # Contact page
│   │   └── api/             # API routes
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── sections/        # Page sections
│   │   └── layout/          # Layout components
│   ├── lib/                 # Utility functions
│   ├── .env.local           # Frontend environment (gitignored)
│   ├── .env.example         # Environment template
│   ├── package.json
│   ├── tailwind.config.ts
│   └── next.config.js
│
├── backend/                  # Express.js API
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Express middleware
│   │   ├── config/          # Configuration
│   │   └── server.ts        # Entry point
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   ├── .env                 # Backend environment (gitignored)
│   ├── .env.example         # Environment template
│   └── package.json
│
├── docs/                     # Documentation
│   ├── TECH-STACK.md
│   ├── DEPLOYMENT.md
│   └── API.md
│
├── .gitignore
├── README.md                 # This file
└── LICENSE
```

---

## 🔐 Environment Setup

### Frontend Environment Variables

**File:** `frontend/.env.local`
```env
# Contentful CMS
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_delivery_token

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:3001

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Backend Environment Variables

**File:** `backend/.env`
```env
# Server Configuration
NODE_ENV=development
PORT=3001

# Frontend URL (CORS)
FRONTEND_URL=http://localhost:3000

# Database (Supabase)
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.xxxxx.supabase.co:5432/postgres
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key

# Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM="Leimarics <your_email@gmail.com>"
NOTIFICATION_EMAIL=leofrancis6988@gmail.com
```

### How to Get API Keys

#### Supabase (Database)
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Create new project: "Leimarics"
3. Settings → Database → Copy connection string
4. Settings → API → Copy URL and keys

#### Contentful (CMS)
1. Go to [contentful.com](https://contentful.com)
2. Create new space: "Leimarics"
3. Settings → API keys → Add API key
4. Copy Space ID and Delivery Token

#### Gmail (Email)
1. Enable 2FA on your Google account
2. Go to: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate app password for "Mail"
4. Use this password in `SMTP_PASS`

---

## 💻 Development

### Frontend Development
```bash
cd frontend

# Start dev server
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start

# Lint code
pnpm lint

# Type check
pnpm type-check
```

### Backend Development
```bash
cd backend

# Start dev server with hot reload
pnpm dev

# Build TypeScript
pnpm build

# Run production server
pnpm start

# Database commands
npx prisma studio          # Open database GUI
npx prisma generate        # Generate Prisma client
npx prisma migrate dev     # Run migrations

# Lint
pnpm lint
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
# Merge to main after review
```

---

## 🚢 Deployment

### Quick Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy frontend
cd frontend
vercel

# Follow prompts
# Live in 2 minutes! 🎉
```

### Production Deploy to AWS

See detailed guide: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

**Summary:**
1. **Frontend:** S3 + CloudFront
2. **Backend:** EC2 + Nginx
3. **Database:** Supabase (managed)
4. **DNS:** Route 53

**Estimated Cost:** $15-30/month

---

## 🐛 Troubleshooting

### Common Issues

#### "Module not found"
```bash
# Solution: Install dependencies
pnpm install
```

#### "Database connection failed"
```bash
# Check DATABASE_URL in .env
# Test connection
npx prisma studio
```

#### "Port 3000 already in use"
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 pnpm dev
```

#### "Images not loading"
```bash
# Check next.config.js has correct domains
# Restart dev server after config changes
```

#### Build fails on Vercel
- Check all environment variables are set
- View build logs for specific errors
- Test `pnpm build` locally first

### Still Stuck?

1. Check [GitHub Issues](https://github.com/yourusername/Leimarics/issues)
2. Read [documentation](docs/)
3. Contact: leofrancis6988@gmail.com

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing`)
5. **Open** Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Keep functions small and focused

---

## 📄 License

This project is licensed under the **MIT License**.
```
MIT License

Copyright (c) 2026 Leimarics

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

**Leimarics** - Crafting Digital Success

- **Website:** [Leimarics.com](https://Leimarics.com) *(coming soon)*
- **Email:** leofrancis6988@gmail.com
- **Phone:** +91 7499216988
- **Location:** Seraulim, Goa 403708, India

**Developer:** Leo Francis

- **GitHub:** [@leofrancis](https://github.com/leofrancis)
- **LinkedIn:** [linkedin.com/in/leofrancis](https://linkedin.com/in/leofrancis)

---

## 🌟 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Vercel** - Seamless deployment platform
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Beautiful animations
- **Supabase** - Postgres made easy
- **Contentful** - Powerful headless CMS

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/yourusername/Leimarics?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/Leimarics?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/Leimarics)
![Last Commit](https://img.shields.io/github/last-commit/yourusername/Leimarics)

---

<div align="center">

**Made with ❤️ by Leimarics**

*We Build, You Grow* 🚀

[⬆ Back to Top](#-Leimarics---crafting-digital-success)

</div>