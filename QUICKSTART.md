# Quick Start Guide

Get your portfolio site running in 5 minutes!

## 🚀 Step 1: Install Dependencies

```bash
npm install
```

## 👤 Step 2: Update Your Information

### Essential Updates

1. **Personal Data** - Edit these files in the `data/` folder:
   - `data/about.ts` - Your name, bio, education, values
   - `data/projects.ts` - Your projects with descriptions and tech stacks
   - `data/experience.ts` - Work, teaching, and leadership experience

2. **Contact Info** - Update your links:
   - `components/layout/Footer.tsx` - Social media URLs
   - `app/contact/page.tsx` - Email, LinkedIn, GitHub

3. **Images** - Add your photos:
   - `public/images/headshot.jpg` - Your professional photo
   - `public/images/projects/` - Project screenshots
   - `public/resume/resume.pdf` - Your resume

## 🎨 Step 3: Customize (Optional)

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Content**: Modify page text in `app/*/page.tsx` files
- **Metadata**: Update `app/layout.tsx` for SEO

## 💻 Step 4: Run Locally

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## ✨ Step 5: Deploy

### Quick Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repo
4. Click "Deploy" - Done! 🎉

Your site will be live in 2 minutes at a Vercel URL.

### Or Deploy to GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as the source
4. Push any commit to trigger deployment

See `DEPLOYMENT.md` for detailed instructions.

## 📋 Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information in `data/` files
- [ ] Changed placeholder contact info (email, LinkedIn, GitHub)
- [ ] Added your headshot and project images
- [ ] Added your resume PDF
- [ ] Tested all pages locally
- [ ] Built successfully with `npm run build`

## 🆘 Common Issues

**Build error?**
```bash
npm run build
```
Fix any TypeScript errors shown.

**Images not loading?**
Make sure images are in `public/images/` and paths match.

**Want to change colors?**
Edit the `colors` section in `tailwind.config.ts`.

## 📚 More Help

- Full documentation: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- Design specs: `DESIGN.md`

---

**That's it!** You now have a professional portfolio website. Keep it updated with your latest projects and experiences! 🎓💼

