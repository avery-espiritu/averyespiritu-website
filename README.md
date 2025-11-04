# Avery Espiritu - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This site showcases my work as a Brown University Computer Science student, software engineer, teaching assistant, and community leader.

## 🎨 Design Philosophy

The website combines technical precision with warmth, featuring:
- **Soft pastel color palette** (blues, lavenders, neutrals)
- **Clean, minimal design** with modern UI components
- **Responsive layout** optimized for all devices
- **Accessibility-first** approach with semantic HTML and ARIA labels
- **Professional yet approachable** aesthetic

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel / GitHub Pages

## 📁 Project Structure

```
averyespiritu-website/
├── app/                      # Next.js pages
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── projects/            # Projects page
│   ├── experience/          # Experience page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Reusable UI components
│   ├── home/               # Home page components
│   ├── about/              # About page components
│   ├── projects/           # Project components
│   ├── experience/         # Experience components
│   └── contact/            # Contact components
├── data/                    # Content data
│   ├── projects.ts         # Project information
│   ├── experience.ts       # Work/teaching experience
│   └── about.ts            # Bio and values
├── public/                  # Static assets
│   ├── images/             # Images and photos
│   └── resume/             # Resume PDF
└── DESIGN.md               # Design documentation

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   cd averyespiritu-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory (static export).

## 📝 Customization Guide

### 1. Update Personal Information

Edit the data files in the `data/` directory:

**data/about.ts**
- Update name, tagline, bio
- Modify education details
- Add your values and interests

**data/projects.ts**
- Add your projects with descriptions, technologies, and impact metrics
- Include links to live demos and GitHub repos

**data/experience.ts**
- Update work experience, teaching roles, and leadership positions
- Add responsibilities and skills for each role

### 2. Add Images

**Headshot**: Place your professional photo at `public/images/headshot.jpg`

**Project Images**: Add project screenshots to `public/images/projects/`
- project1.jpg, project2.jpg, etc.

**Resume**: Add your resume PDF to `public/resume/resume.pdf`

### 3. Update Contact Information

Edit the following files:

**components/layout/Footer.tsx**
- Update email, LinkedIn, and GitHub URLs

**app/contact/page.tsx**
- Update contact methods with your real information

### 4. Customize Colors

Edit `tailwind.config.ts` to change the color palette:
- `primary`: Main brand color
- `accent`: Secondary accent color
- `neutral`: Gray tones
- `success`: For highlighting positive metrics

### 5. Modify Content

All page content is in the `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About Me
- `app/projects/page.tsx` - Projects
- `app/experience/page.tsx` - Experience
- `app/contact/page.tsx` - Contact

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

**Custom Domain**: Add your domain in Vercel project settings

### Option 2: GitHub Pages

1. Enable GitHub Pages in your repository settings
2. Push to the `main` branch
3. GitHub Actions will automatically build and deploy
4. Site will be available at `https://[username].github.io/averyespiritu-website`

**Note**: The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`

### Manual Deployment

```bash
npm run build
# Upload the `out/` directory to any static hosting service
```

## 📱 Pages Overview

### Home (/)
- Hero section with name and tagline
- Quick stats about education and roles
- Featured projects preview

### About Me (/about)
- Professional headshot
- Detailed bio and background
- Education at Brown University
- Core values and interests

### Projects (/projects)
- Gallery of 5 featured projects
- Each with description, role, technologies, and impact metrics
- Links to live demos and GitHub repos

### Experience (/experience)
- Work experience (TrueMark AI)
- Teaching roles (CS410, CS200)
- Leadership positions (Bruno Fellow, Orientation)

### Contact (/contact)
- Email, LinkedIn, GitHub links
- Resume download
- Current availability information

## 🎯 Features

✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **Accessible** - WCAG 2.1 compliant with ARIA labels  
✅ **Fast Performance** - Optimized images and code splitting  
✅ **Modern UI** - Clean design with smooth transitions  
✅ **Easy to Customize** - Organized component structure  

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📚 Documentation

- **Design Document**: See `DESIGN.md` for detailed design specifications, wireframes, and component structure
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

## 🤝 Contributing

This is a personal portfolio website, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 💡 Tips

1. **Replace placeholder content** with your actual information
2. **Add real images** for projects and headshot
3. **Update social links** in Footer and Contact page
4. **Customize colors** to match your personal brand
5. **Keep it updated** with new projects and experiences
6. **Test on multiple devices** before deploying
7. **Optimize images** for faster loading (use WebP format)

## 📞 Support

For questions or issues, please open an issue on GitHub or contact me at avery@example.com

---

Built with ❤️ by Avery Espiritu | [LinkedIn](https://linkedin.com/in/averyespiritu) | [GitHub](https://github.com/avery-espiritu)
