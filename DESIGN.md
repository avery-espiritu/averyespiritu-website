# Portfolio Website Design Document

## 1. Sitemap

```
Home (/)
├── About Me (/about)
├── Projects (/projects)
├── Experience (/experience)
└── Contact (/contact)
```

**Navigation Flow:**
- Persistent navbar on all pages with links to all sections
- Home page includes hero section with CTAs to About and Projects
- Footer on all pages with quick links and social media

---

## 2. Page Wireframes & Section Hierarchy

### Home Page (/)
```
┌─────────────────────────────────────────┐
│           Navbar                         │
├─────────────────────────────────────────┤
│                                          │
│   Hero Section                           │
│   - Name                                 │
│   - Tagline/Role                         │
│   - Brief intro                          │
│   - CTA buttons (About Me, Projects)    │
│                                          │
├─────────────────────────────────────────┤
│   Featured Projects Preview (2-3 cards) │
├─────────────────────────────────────────┤
│   Quick Stats/Highlights                │
│   - Brown CS Student                     │
│   - Software Engineer at TrueMark       │
│   - Teaching Assistant                   │
├─────────────────────────────────────────┤
│           Footer                         │
└─────────────────────────────────────────┘
```

### About Me (/about)
```
┌─────────────────────────────────────────┐
│           Navbar                         │
├─────────────────────────────────────────┤
│   Hero Section                           │
│   - Headshot (circular, left/center)    │
│   - Name & Tagline                       │
├─────────────────────────────────────────┤
│   Bio Section                            │
│   - Education at Brown                   │
│   - What drives me                       │
│   - Focus areas: AI for good, ethics    │
├─────────────────────────────────────────┤
│   Values & Interests                     │
│   - 3-4 cards with icons                │
│   - Personal values                      │
│   - Hobbies/interests                    │
├─────────────────────────────────────────┤
│           Footer                         │
└─────────────────────────────────────────┘
```

### Projects (/projects)
```
┌─────────────────────────────────────────┐
│           Navbar                         │
├─────────────────────────────────────────┤
│   Page Header                            │
│   - Title: "Projects"                    │
│   - Subtitle/description                 │
├─────────────────────────────────────────┤
│   Project Grid (3-5 cards)              │
│   Each card contains:                    │
│   - Project image/screenshot             │
│   - Title                                │
│   - Description                          │
│   - Role                                 │
│   - Tech stack (badges)                  │
│   - Key metric/highlight                 │
│   - Link/Demo button                     │
├─────────────────────────────────────────┤
│           Footer                         │
└─────────────────────────────────────────┘
```

### Experience (/experience)
```
┌─────────────────────────────────────────┐
│           Navbar                         │
├─────────────────────────────────────────┤
│   Page Header                            │
│   - Title: "Experience"                  │
│   - Subtitle                             │
├─────────────────────────────────────────┤
│   Timeline / Card Layout                 │
│                                          │
│   Work Experience                        │
│   - TrueMark AI                          │
│     • Role, dates                        │
│     • Responsibilities                   │
│     • Impact metrics                     │
│     • Skills/tech used                   │
│                                          │
│   Teaching Experience                    │
│   - CS410, CS200                         │
│     • Course details                     │
│     • Responsibilities                   │
│     • Impact on students                 │
│                                          │
│   Leadership                             │
│   - Bruno Fellow, Orientation            │
│     • Role description                   │
│     • Skills developed                   │
├─────────────────────────────────────────┤
│           Footer                         │
└─────────────────────────────────────────┘
```

### Contact (/contact)
```
┌─────────────────────────────────────────┐
│           Navbar                         │
├─────────────────────────────────────────┤
│   Page Header                            │
│   - Title: "Get in Touch"                │
│   - Friendly message                     │
├─────────────────────────────────────────┤
│   Contact Options                        │
│   - Email (with icon)                    │
│   - LinkedIn (with icon)                 │
│   - GitHub (with icon)                   │
│   - Resume download button               │
├─────────────────────────────────────────┤
│   Optional: Contact Form                 │
│   - Name, Email, Message fields          │
│   - Submit button                        │
├─────────────────────────────────────────┤
│           Footer                         │
└─────────────────────────────────────────┘
```

---

## 3. Design System - Tailwind CSS Tokens

### Color Palette (Soft, Professional, Approachable)

```javascript
// tailwind.config.js colors
colors: {
  // Primary - Soft Blue/Lavender
  primary: {
    50: '#f5f7ff',
    100: '#ebf0ff',
    200: '#d6e0ff',
    300: '#b3c7ff',
    400: '#8ca5ff',
    500: '#667efc',  // Main brand color
    600: '#4d5fd9',
    700: '#3d4bad',
    800: '#2d3880',
    900: '#1e2654',
  },
  
  // Accent - Warm Lavender
  accent: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7928ca',
    800: '#6b21a8',
    900: '#581c87',
  },
  
  // Neutral - Cool Grays
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Success/Impact Green
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },
}
```

### Typography

```javascript
// Font families
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
}

// Font sizes
fontSize: {
  'xs': '0.75rem',     // 12px
  'sm': '0.875rem',    // 14px
  'base': '1rem',      // 16px
  'lg': '1.125rem',    // 18px
  'xl': '1.25rem',     // 20px
  '2xl': '1.5rem',     // 24px
  '3xl': '1.875rem',   // 30px
  '4xl': '2.25rem',    // 36px
  '5xl': '3rem',       // 48px
  '6xl': '3.75rem',    // 60px
}
```

### Spacing & Layout

```javascript
// Container max widths
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1400px',
}

// Common spacing
spacing: {
  'section': '5rem',      // 80px - between major sections
  'card': '1.5rem',       // 24px - card padding
  'gap': '2rem',          // 32px - grid gaps
}
```

### Shadows & Effects

```css
/* Subtle shadows for depth */
.card-shadow { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06); }
.card-shadow-hover { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.08); }

/* Smooth transitions */
.transition-smooth { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
```

---

## 4. React Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         // Site navigation
│   │   ├── Footer.tsx         // Footer with links
│   │   └── Layout.tsx         // Wrapper for consistent layout
│   │
│   ├── ui/
│   │   ├── Button.tsx         // Primary/Secondary buttons
│   │   ├── Card.tsx           // Reusable card component
│   │   ├── Badge.tsx          // Tech stack badges
│   │   ├── Section.tsx        // Section wrapper with padding
│   │   └── Heading.tsx        // Consistent heading styles
│   │
│   ├── home/
│   │   ├── Hero.tsx           // Home hero section
│   │   ├── FeaturedProjects.tsx
│   │   └── QuickStats.tsx
│   │
│   ├── about/
│   │   ├── BioSection.tsx
│   │   ├── ValuesGrid.tsx
│   │   └── Headshot.tsx
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx    // Individual project card
│   │   └── ProjectGrid.tsx    // Grid layout for projects
│   │
│   ├── experience/
│   │   ├── ExperienceCard.tsx
│   │   └── Timeline.tsx
│   │
│   └── contact/
│       ├── ContactLinks.tsx
│       └── ContactForm.tsx    // Optional
│
├── pages/
│   ├── index.tsx              // Home
│   ├── about.tsx
│   ├── projects.tsx
│   ├── experience.tsx
│   └── contact.tsx
│
├── data/
│   ├── projects.ts            // Project content
│   ├── experience.ts          // Work/teaching experience
│   └── about.ts               // Bio and values
│
├── styles/
│   └── globals.css            // Global styles + Tailwind imports
│
└── public/
    ├── images/
    │   ├── headshot.jpg
    │   ├── projects/
    │   └── icons/
    └── resume.pdf
```

### Key Component Definitions

#### **Navbar Component**
- Fixed/sticky position
- Links: Home, About, Projects, Experience, Contact
- Responsive hamburger menu for mobile
- Logo/initials on left

#### **Card Component**
- Reusable for projects, experience, values
- Props: title, description, image, badges, link
- Hover effects with subtle elevation
- Responsive grid layout

#### **ProjectGrid Component**
- CSS Grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Gap spacing with consistent padding
- Each card shows project details

#### **Button Component**
- Variants: primary (filled), secondary (outline), ghost
- Sizes: sm, md, lg
- Icon support

#### **Badge Component**
- Small pill-shaped tags for tech stack
- Color variants based on category (language, framework, tool)

---

## 5. Responsive Design Breakpoints

```
Mobile:     < 640px  (1 column, stacked layout)
Tablet:     640-1024px (2 columns, adjusted spacing)
Desktop:    > 1024px (full layout, 3 columns for grids)
```

**Mobile Considerations:**
- Hamburger menu
- Single column layouts
- Larger touch targets (min 44px)
- Simplified navigation

---

## 6. Deployment Configuration

### Vercel (Recommended)
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs"
}
```

### GitHub Pages (Alternative)
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## 7. Content Structure (Data Files)

### projects.ts Example
```typescript
export const projects = [
  {
    id: 1,
    title: "AI-Powered Accessibility Tool",
    description: "Built a computer vision system to help visually impaired users navigate digital content",
    role: "Full-Stack Developer & ML Engineer",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    impact: "Improved accessibility for 500+ users with 95% accuracy",
    link: "https://github.com/...",
    image: "/images/projects/accessibility-tool.png"
  },
  // ... more projects
]
```

### experience.ts Example
```typescript
export const experience = [
  {
    company: "TrueMark AI",
    role: "Software Engineer Intern",
    dates: "June 2024 - Present",
    description: "Building AI-powered verification systems",
    responsibilities: [
      "Developed ML pipelines for content verification",
      "Improved model accuracy by 15%",
      "Collaborated with product team on feature design"
    ],
    skills: ["Python", "Machine Learning", "AWS", "Docker"]
  },
  // ... more experience
]
```

---

## 8. Accessibility Considerations

- Semantic HTML (nav, main, section, article)
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for all images
- Color contrast ratio ≥ 4.5:1 for text
- Focus states for interactive elements

---

## 9. Performance Optimization

- Next.js Image optimization
- Lazy loading for images below the fold
- Code splitting by page
- Minified CSS and JS
- Font subsetting (Inter variable font)

---

## Next Steps

1. ✅ Design document complete
2. Initialize Next.js + Tailwind project
3. Create component library
4. Build pages with placeholder content
5. Add real content and images
6. Deploy to Vercel

