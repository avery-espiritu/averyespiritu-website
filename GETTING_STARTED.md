# Getting Started with Your Portfolio Website

Welcome! This guide will help you customize and launch your portfolio website.

---

## 🎯 What You Have

A complete, professional portfolio website with:
- ✅ 5 pages (Home, About, Projects, Experience, Contact)
- ✅ Modern design with soft pastel colors
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Ready to deploy to Vercel or GitHub Pages
- ✅ Easy to customize

---

## 🚀 Three Steps to Launch

### Step 1: Install (1 minute)

```bash
cd averyespiritu-website
npm install
```

### Step 2: Customize (10-30 minutes)

**Required changes** - Replace placeholder content with your info:

1. **Open `data/about.ts`**
   - Update your name and tagline
   - Write your bio (3 paragraphs)
   - Add your education details
   - List your values and interests

2. **Open `data/projects.ts`**
   - Replace with your actual projects
   - Update titles, descriptions, technologies
   - Add GitHub/demo links

3. **Open `data/experience.ts`**
   - Update work experience details
   - Add your teaching/TA roles
   - Include leadership positions

4. **Update contact info**:
   - `components/layout/Footer.tsx` - Change social links
   - `app/contact/page.tsx` - Update email, LinkedIn, GitHub

5. **Add your images**:
   ```
   public/images/headshot.jpg          ← Your photo
   public/images/projects/project1.jpg ← Project screenshots
   public/resume/resume.pdf            ← Your resume
   ```

### Step 3: Deploy (2 minutes)

**Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/averyespiritu-website.git
git push -u origin main
```

**Deploy to Vercel**:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repo
4. Click "Deploy"

🎉 **Done!** Your site is live!

---

## 📁 Project Structure Explained

```
averyespiritu-website/
│
├── app/                          # Pages (what users see)
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About Me page
│   ├── projects/page.tsx        # Projects page
│   ├── experience/page.tsx      # Experience page
│   ├── contact/page.tsx         # Contact page
│   ├── layout.tsx               # Site layout (Navbar + Footer)
│   └── globals.css              # Global styles
│
├── components/                   # Reusable UI pieces
│   ├── layout/                  # Navbar, Footer
│   ├── ui/                      # Buttons, Cards, Badges
│   ├── home/                    # Home page components
│   ├── about/                   # About page components
│   ├── projects/                # Project components
│   └── experience/              # Experience components
│
├── data/                         # YOUR CONTENT (edit these!)
│   ├── about.ts                 # ← Edit: Bio, education, values
│   ├── projects.ts              # ← Edit: Your projects
│   └── experience.ts            # ← Edit: Work & teaching
│
├── public/                       # Static files
│   ├── images/                  # ← Add: Your photos
│   └── resume/                  # ← Add: Your resume PDF
│
└── [Config files]               # Don't need to change these
    ├── package.json
    ├── tailwind.config.ts
    ├── next.config.ts
    └── tsconfig.json
```

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#667efc',  // ← Change this to your brand color
    // Adjust other shades as needed
  },
  // ...
}
```

### Change Text Content

Edit the page files in `app/`:
- `app/page.tsx` - Home page text
- `app/about/page.tsx` - About page sections
- `app/contact/page.tsx` - Contact page text

### Add More Projects

Edit `data/projects.ts` and add new entries:

```typescript
{
  id: 6,
  title: "New Project",
  description: "What it does...",
  role: "Your role",
  technologies: ["React", "Node.js"],
  impact: "Key metric",
  link: "https://...",
  github: "https://github.com/...",
  image: "/images/projects/project6.jpg"
}
```

### Modify Layout

- **Navbar**: `components/layout/Navbar.tsx`
- **Footer**: `components/layout/Footer.tsx`
- **Add nav links**: Edit the `navLinks` array in Navbar.tsx

---

## 🖼️ Image Guidelines

### Headshot (`public/images/headshot.jpg`)
- **Size**: 500x500px or larger
- **Format**: JPG or PNG
- **Style**: Professional, well-lit, clean background
- **Currently**: Shown as placeholder emoji on About page

### Project Images (`public/images/projects/project1-5.jpg`)
- **Size**: 1200x800px (3:2 ratio) or 1000x1000px (square)
- **Format**: JPG, PNG, or WebP
- **Content**: Screenshots, mockups, or key visuals of your project
- **Currently**: Shown as gradient placeholders on Projects page

### Resume (`public/resume/resume.pdf`)
- **Format**: PDF only
- **Size**: Under 2MB
- **Name**: Must be named `resume.pdf`

---

## 💻 Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production (test before deploying)
npm run build

# Start production server locally
npm run start

# Check for code issues
npm run lint
```

---

## ✅ Pre-Deployment Checklist

Before you deploy, check these off:

- [ ] Updated name and bio in `data/about.ts`
- [ ] Added all your projects in `data/projects.ts`
- [ ] Added work/teaching experience in `data/experience.ts`
- [ ] Changed email to your actual email
- [ ] Updated LinkedIn URL in Footer and Contact
- [ ] Updated GitHub URL in Footer and Contact
- [ ] Added your headshot image
- [ ] Added project screenshots (or kept placeholders for now)
- [ ] Added your resume PDF
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Reviewed all 5 pages in browser

---

## 🐛 Troubleshooting

### "npm install" fails
**Solution**: Make sure you have Node.js 18+ installed
```bash
node --version  # Should be 18.0.0 or higher
```

### Build errors
**Solution**: Check for TypeScript errors
```bash
npm run build  # Shows detailed error messages
```

### Images not showing
**Solution**: 
1. Check file paths match exactly (case-sensitive)
2. Make sure images are in `public/images/`
3. Use forward slashes `/` in paths

### Page not found after deploy
**Solution**: 
- For GitHub Pages: Check `basePath` in `next.config.ts`
- For Vercel: Should work automatically

---

## 📚 Learn More

**Documentation files**:
- `README.md` - Full project documentation
- `DESIGN.md` - Design system and component specs
- `DEPLOYMENT.md` - Detailed deployment instructions
- `QUICKSTART.md` - 5-minute quick start
- `PROJECT_SUMMARY.md` - What was built

**External resources**:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎓 Tips for Success

1. **Start simple**: Update just the basics first, then refine
2. **Test locally**: Always run `npm run dev` to see changes
3. **Commit often**: Save your work with Git frequently
4. **Keep it updated**: Add new projects every few months
5. **Share it**: Add the URL to your LinkedIn, resume, and GitHub profile
6. **Get feedback**: Ask friends or mentors to review it
7. **Iterate**: Your portfolio should evolve as you grow

---

## 🌟 What Makes This Portfolio Stand Out

✨ **Professional Design** - Clean, modern aesthetic suitable for tech roles  
✨ **Tells Your Story** - Highlights your journey from student to engineer  
✨ **Shows Impact** - Metrics and outcomes for each project/role  
✨ **Demonstrates Skills** - Showcases both technical and soft skills  
✨ **Mobile-Friendly** - Looks great on all devices  
✨ **Fast Loading** - Optimized for performance and SEO  

---

## 🤝 Need Help?

**Common questions answered in**:
- Technical issues → `README.md`
- Deployment issues → `DEPLOYMENT.md`
- Design questions → `DESIGN.md`

**Still stuck?** Check:
- Next.js documentation
- Tailwind CSS documentation
- Stack Overflow
- GitHub Issues

---

## 🎉 You're Ready!

Your portfolio website is complete and ready to showcase your work. Follow the three steps above, and you'll have a live site in less than an hour.

**Remember**: The best portfolio is the one you keep updated. Set a reminder to update it every 3-6 months with new projects, experiences, and skills.

Good luck, and happy coding! 🚀

---

**Quick Links**:
- [Vercel](https://vercel.com) - Deploy here (recommended)
- [GitHub Pages](https://pages.github.com) - Alternative deployment
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [Tailwind Docs](https://tailwindcss.com/docs) - Styling reference

