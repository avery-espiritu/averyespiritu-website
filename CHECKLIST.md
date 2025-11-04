# Portfolio Website Customization Checklist

Use this checklist to ensure you've customized all the important parts of your portfolio before deploying.

---

## 📝 Content Updates

### ✅ About Me (`data/about.ts`)

- [ ] Update `name` to your full name
- [ ] Update `tagline` with your title/role
- [ ] Rewrite `bio` array with your story (3 paragraphs)
  - [ ] Paragraph 1: Who you are and what you do
  - [ ] Paragraph 2: What drives you and your focus areas
  - [ ] Paragraph 3: Interests and personality
- [ ] Update `education.degree` 
- [ ] Update `education.school`
- [ ] Update `education.year`
- [ ] Update `education.focus` areas (4 items)
- [ ] Customize `values` (4 values with titles, descriptions, and emojis)
- [ ] Update `interests` list (6+ interests)

### ✅ Projects (`data/projects.ts`)

For each project (5 total):
- [ ] Project 1:
  - [ ] Title
  - [ ] Description (what it does + why it matters)
  - [ ] Role
  - [ ] Technologies used
  - [ ] Impact metric (with numbers/results)
  - [ ] Link to live demo (or remove if N/A)
  - [ ] GitHub repo link (or remove if N/A)
  - [ ] Image path (or leave placeholder)

- [ ] Project 2: (same fields)
- [ ] Project 3: (same fields)
- [ ] Project 4: (same fields)
- [ ] Project 5: (same fields)

**Optional**:
- [ ] Add more projects (copy the format)
- [ ] Remove projects you don't want to showcase

### ✅ Experience (`data/experience.ts`)

- [ ] **Work Experience** (TrueMark AI):
  - [ ] Update title
  - [ ] Update organization name
  - [ ] Update dates
  - [ ] Update description
  - [ ] Update responsibilities (4+ bullet points)
  - [ ] Update skills/technologies

- [ ] **Teaching Experience** (CS410):
  - [ ] Update course number and name
  - [ ] Update dates
  - [ ] Update responsibilities
  - [ ] Update skills taught

- [ ] **Teaching Experience** (CS200):
  - [ ] Update course details
  - [ ] Update dates
  - [ ] Update responsibilities

- [ ] **Leadership** (Bruno Fellow):
  - [ ] Update title
  - [ ] Update dates
  - [ ] Update description and responsibilities

- [ ] **Leadership** (Orientation):
  - [ ] Update dates
  - [ ] Update description

**Optional**:
- [ ] Add more experiences (copy the format)
- [ ] Remove experiences you don't want to show

---

## 📧 Contact Information

### ✅ Footer (`components/layout/Footer.tsx`)

Line 18-20: Update social links
- [ ] Change `href: 'mailto:avery@example.com'` to your email
- [ ] Change LinkedIn URL to `https://linkedin.com/in/YOUR_USERNAME`
- [ ] Change GitHub URL to `https://github.com/YOUR_USERNAME`

### ✅ Contact Page (`app/contact/page.tsx`)

Lines 9-28: Update contact methods
- [ ] Change email address (line 12)
- [ ] Change email link (line 13)
- [ ] Change LinkedIn value (line 18)
- [ ] Change LinkedIn link (line 19)
- [ ] Change GitHub value (line 24)
- [ ] Change GitHub link (line 25)

Line 83-91: Update availability message
- [ ] Customize the availability text
- [ ] Update what you're looking for (internships, full-time, etc.)
- [ ] Update the email in "Let's Connect" button (line 95)

---

## 🖼️ Images & Media

### ✅ Personal Images

- [ ] Add your headshot:
  - [ ] File: `public/images/headshot.jpg`
  - [ ] Size: 500x500px or larger (square format)
  - [ ] Format: JPG or PNG
  - [ ] Professional, well-lit photo

### ✅ Project Images

Add screenshots for each project:
- [ ] `public/images/projects/project1.jpg`
- [ ] `public/images/projects/project2.jpg`
- [ ] `public/images/projects/project3.jpg`
- [ ] `public/images/projects/project4.jpg`
- [ ] `public/images/projects/project5.jpg`

**Image specs**:
- Size: 1200x800px or similar ratio
- Format: JPG, PNG, or WebP
- Keep under 500KB each

**Note**: If you don't have images yet, the site will show gradient placeholders (fine for now!)

### ✅ Resume

- [ ] Add resume PDF:
  - [ ] File: `public/resume/resume.pdf`
  - [ ] Must be named exactly `resume.pdf`
  - [ ] Size: Under 2MB
  - [ ] Up-to-date version

---

## 🎨 Optional Customization

### Colors (`tailwind.config.ts`)

- [ ] Review the color palette (lines 10-57)
- [ ] Change `primary` colors if you want a different brand color
- [ ] Adjust `accent` colors for secondary elements
- [ ] Modify `neutral` grays if desired

**Current colors**:
- Primary: Soft blue (#667efc)
- Accent: Warm lavender (#a855f7)
- Neutral: Cool grays

### Page Content

- [ ] Home page (`app/page.tsx`): Update hero text if desired
- [ ] About page (`app/about/page.tsx`): Review section headers
- [ ] Contact page (`app/contact/page.tsx`): Customize messaging

### Metadata (`app/layout.tsx`)

Lines 11-19: Update SEO metadata
- [ ] Update `title` if you want to change it
- [ ] Update `description`
- [ ] Update `keywords` with relevant terms
- [ ] Update `authors` name

---

## 🧪 Testing

### ✅ Local Testing

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and site loads at localhost:3000
- [ ] Navigate to all 5 pages
- [ ] Check all links work
- [ ] Test responsive design:
  - [ ] Mobile view (< 640px)
  - [ ] Tablet view (640-1024px)
  - [ ] Desktop view (> 1024px)

### ✅ Content Review

- [ ] No placeholder text remains (search for "example.com", "avery@example", etc.)
- [ ] All social links point to YOUR profiles
- [ ] All project links work (or are removed if N/A)
- [ ] Resume download works
- [ ] No typos or grammatical errors
- [ ] All images load (or show appropriate placeholders)

### ✅ Production Build

- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Site builds to `out/` folder

---

## 🚀 Deployment

### ✅ Pre-Deployment

- [ ] All items above completed
- [ ] Code committed to Git
- [ ] Repository pushed to GitHub
- [ ] Reviewed live preview one more time

### ✅ Deploy to Vercel (Recommended)

- [ ] Created Vercel account
- [ ] Connected GitHub repository
- [ ] Clicked "Deploy"
- [ ] Deployment successful
- [ ] Visited live URL and verified site works
- [ ] (Optional) Added custom domain

### ✅ OR Deploy to GitHub Pages

- [ ] Updated `next.config.ts` with `basePath` if needed
- [ ] Enabled GitHub Pages in repository settings
- [ ] Set source to "GitHub Actions"
- [ ] Pushed commit to trigger workflow
- [ ] Verified deployment in Actions tab
- [ ] Visited live URL and verified site works

---

## 📢 Post-Deployment

### ✅ Promotion

- [ ] Added website URL to:
  - [ ] LinkedIn profile
  - [ ] GitHub profile
  - [ ] Resume
  - [ ] Email signature
  - [ ] Business cards (if applicable)

### ✅ Monitoring

- [ ] (Optional) Set up analytics (Google Analytics or Vercel Analytics)
- [ ] (Optional) Set up monitoring (uptime checks)
- [ ] Bookmarked your live site URL

### ✅ Maintenance Plan

- [ ] Calendar reminder to update every 3-6 months
- [ ] Plan to add new projects as you build them
- [ ] Plan to update experience section as you gain new roles
- [ ] Plan to refresh headshot annually

---

## 🎯 Quality Checklist

Before considering the site "complete," verify:

### Design & UX
- [ ] Site looks professional and polished
- [ ] Color scheme is consistent throughout
- [ ] Typography is readable and hierarchical
- [ ] Spacing and alignment are consistent
- [ ] Hover effects work on interactive elements
- [ ] Transitions are smooth

### Content
- [ ] All text is clear and concise
- [ ] No jargon without explanation
- [ ] Impact metrics are specific and impressive
- [ ] Bio is authentic and engaging
- [ ] Projects show variety of skills

### Technical
- [ ] Fast load time (< 3 seconds)
- [ ] No console errors
- [ ] All links work
- [ ] Mobile responsive
- [ ] Works in Chrome, Firefox, Safari
- [ ] SEO metadata complete

### Accessibility
- [ ] Can navigate with keyboard only
- [ ] Focus states visible
- [ ] Alt text on images (when added)
- [ ] Color contrast sufficient
- [ ] Semantic HTML structure

---

## 📅 Timeline

**Week 1**: Content & Customization (2-3 hours)
- Days 1-2: Update all data files
- Days 3-4: Add images and resume
- Days 5-7: Test locally and refine

**Week 2**: Deployment (1 hour)
- Deploy to Vercel or GitHub Pages
- Test live site
- Promote on social media

**Ongoing**: Maintenance (15 min/month)
- Add new projects
- Update experience
- Keep content fresh

---

## ✅ Final Sign-Off

Before going live, confirm:

- [ ] I've reviewed every page
- [ ] All personal information is accurate
- [ ] All links work correctly
- [ ] I'm proud to share this with recruiters
- [ ] Site represents me professionally
- [ ] Ready to deploy! 🚀

---

## 💡 Tips

**Perfectionism Warning**: Don't wait for perfect. Ship it and iterate!

**Content is King**: Better to have great content with placeholder images than perfect images with placeholder content.

**Show Impact**: Always include metrics and outcomes in your project/experience descriptions.

**Be Authentic**: Let your personality shine through in your bio and values.

**Keep it Fresh**: Set a recurring reminder to update your portfolio quarterly.

---

## 🆘 Stuck?

If you need help:

1. **Check documentation**:
   - `README.md` - Full docs
   - `GETTING_STARTED.md` - Quick guide
   - `DEPLOYMENT.md` - Deploy help

2. **Search online**:
   - Next.js docs
   - Tailwind CSS docs
   - Stack Overflow

3. **Review examples**:
   - Look at other portfolio sites for inspiration
   - Check GitHub for similar projects

---

**You've got this!** Follow this checklist step-by-step, and you'll have an amazing portfolio site in no time. 🎉

Happy customizing! 🚀

