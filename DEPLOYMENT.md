# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to Vercel or GitHub Pages.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've completed these steps:

- [ ] Updated all personal information in `data/` files
- [ ] Added your headshot to `public/images/headshot.jpg`
- [ ] Added project images to `public/images/projects/`
- [ ] Added your resume PDF to `public/resume/resume.pdf`
- [ ] Updated social media links in Footer and Contact page
- [ ] Tested the site locally with `npm run dev`
- [ ] Built the site successfully with `npm run build`
- [ ] Reviewed all pages for accuracy

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js and offers seamless integration.

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
   ```bash
   cd averyespiritu-website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `averyespiritu-website` (or any name you prefer)
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/averyespiritu-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign Up/Login**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `averyespiritu-website` repository

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `out` (default)
   - Leave environment variables empty (none needed)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `https://[project-name]-[random].vercel.app`

### Step 3: Add Custom Domain (Optional)

1. **Purchase a Domain**
   - Buy a domain from Namecheap, Google Domains, or any registrar
   - Example: `averyespiritu.com`

2. **Add Domain in Vercel**
   - Go to your project settings in Vercel
   - Click "Domains"
   - Add your custom domain
   - Follow the instructions to add DNS records

3. **Configure DNS**
   - Add the A record or CNAME as shown by Vercel
   - Wait for DNS propagation (can take up to 48 hours)

### Step 4: Automatic Deployments

Every time you push to GitHub, Vercel will automatically:
- Build your site
- Deploy the new version
- Update your live site

To update your site:
```bash
git add .
git commit -m "Update content"
git push
```

---

## Option 2: Deploy to GitHub Pages

GitHub Pages is a free option for hosting static sites directly from your GitHub repository.

### Step 1: Update Configuration

1. **Edit `next.config.ts`**
   
   Change the `basePath` if your site will be at a subpath:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/averyespiritu-website', // Only if using username.github.io/repo-name
     images: {
       unoptimized: true,
     },
   };
   ```
   
   **Note**: If using a custom domain or `username.github.io`, remove the `basePath`.

### Step 2: Push to GitHub

1. **Create Repository**
   - Go to [github.com](https://github.com)
   - Create a new repository named `averyespiritu-website`
   - Or use `YOUR_USERNAME.github.io` for a user site

2. **Push Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/averyespiritu-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Enable GitHub Actions

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`.

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Click "Pages" in the sidebar
   - Source: "GitHub Actions"

2. **First Deployment**
   - Push any commit to trigger the workflow
   - GitHub Actions will build and deploy automatically
   - Check the "Actions" tab to see progress

3. **Access Your Site**
   - **Repo Site**: `https://YOUR_USERNAME.github.io/averyespiritu-website`
   - **User Site**: `https://YOUR_USERNAME.github.io` (if using username.github.io repo)

### Step 4: Custom Domain (Optional)

1. **Add CNAME File**
   Create `public/CNAME` with your domain:
   ```
   averyespiritu.com
   ```

2. **Configure DNS**
   Add these records in your domain registrar:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   ```

3. **Enable Custom Domain**
   - Go to repository settings → Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

---

## Option 3: Other Static Hosting Platforms

The built site in the `out/` directory can be deployed to:

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `out/` folder
3. Or connect your GitHub repo for automatic deployments

### Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Output directory: `out`

### AWS S3 + CloudFront

1. Build your site: `npm run build`
2. Upload `out/` folder to S3 bucket
3. Configure S3 for static website hosting
4. Set up CloudFront for HTTPS

---

## 🔄 Updating Your Site

### For Vercel or GitHub Pages (Automatic)

Simply push changes to GitHub:
```bash
git add .
git commit -m "Update projects and experience"
git push
```

The site will automatically rebuild and deploy.

### For Manual Deployments

```bash
npm run build
# Upload the `out/` directory to your hosting platform
```

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build errors on deployment

**Solution**:
1. Test locally first: `npm run build`
2. Fix any TypeScript or linting errors
3. Commit and push again

### Images Not Loading

**Issue**: Images show broken links

**Solution**:
1. Check image paths are correct
2. Ensure images exist in `public/` directory
3. For GitHub Pages, verify `basePath` is set correctly

### 404 on Routes

**Issue**: Direct navigation to `/about` or `/projects` gives 404

**Solution**:
- For GitHub Pages: This is expected with static export, use hash routing or add a 404.html
- For Vercel: Should work automatically with Next.js routing

### Custom Domain Not Working

**Issue**: Domain not resolving to site

**Solution**:
1. Check DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Clear browser cache
4. Test with `dig yourdomain.com` or `nslookup yourdomain.com`

---

## 📊 Analytics (Optional)

### Add Google Analytics

1. **Get Tracking ID**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create a property
   - Get your tracking ID (G-XXXXXXXXXX)

2. **Add to `app/layout.tsx`**
   ```tsx
   import Script from 'next/script';
   
   // Inside the <body> tag
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

### Add Vercel Analytics

1. **Enable in Vercel Dashboard**
   - Go to your project settings
   - Click "Analytics"
   - Enable Web Analytics

2. **Install Package** (optional for more features)
   ```bash
   npm install @vercel/analytics
   ```

3. **Add to `app/layout.tsx`**
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   
   // At the end of <body>
   <Analytics />
   ```

---

## ✅ Post-Deployment Checklist

After deployment:

- [ ] Visit your live site and test all pages
- [ ] Test responsive design on mobile devices
- [ ] Check all links (projects, social media, resume)
- [ ] Verify images load correctly
- [ ] Test contact email links
- [ ] Share your site on LinkedIn and social media
- [ ] Add site URL to your resume and GitHub profile
- [ ] Set up analytics (optional)
- [ ] Monitor site performance with Lighthouse

---

## 🎉 Success!

Your portfolio is now live! Keep it updated with:
- New projects as you build them
- Updated experience and skills
- Recent blog posts or articles (if you add a blog)
- Current availability status

Remember to commit and push changes regularly to keep your portfolio fresh and relevant.

---

## 📞 Need Help?

- **Vercel Issues**: [vercel.com/support](https://vercel.com/support)
- **GitHub Pages Issues**: [docs.github.com/pages](https://docs.github.com/pages)
- **Next.js Issues**: [nextjs.org/docs](https://nextjs.org/docs)

Good luck with your portfolio! 🚀

