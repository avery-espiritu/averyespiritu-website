# Portfolio Website - Sitemap

Visual representation of the site structure and navigation flow.

---

## 📊 Site Structure

```
                            ┌──────────────┐
                            │   Navbar     │ (Sticky on all pages)
                            │  Home│About  │
                            │  Projects│   │
                            │  Experience  │
                            │  Contact     │
                            └──────────────┘
                                   │
                ┌──────────────────┼──────────────────┐
                │                  │                  │
                ▼                  ▼                  ▼
        ┌───────────┐      ┌───────────┐     ┌───────────┐
        │   Home    │──────│   About   │     │ Projects  │
        │    (/)    │      │  (/about) │     │(/projects)│
        └───────────┘      └───────────┘     └───────────┘
                │                  │                  │
                │                  │                  │
                ▼                  ▼                  ▼
        ┌───────────┐      ┌───────────┐     ┌───────────┐
        │Experience │──────│  Contact  │     │ External  │
        │(/experience)      │ (/contact)│     │   Links   │
        └───────────┘      └───────────┘     └───────────┘
                │                  │                  │
                │                  │                  │
                ▼                  ▼                  ▼
        ┌──────────────────────────────────────────────┐
        │                   Footer                      │
        │  Quick Links │ Social Media │ Copyright      │
        └──────────────────────────────────────────────┘
```

---

## 🏠 Page Details

### 1. Home Page (`/`)

**Purpose**: First impression, highlight key information

**Sections**:
```
┌─────────────────────────────────────┐
│          Navbar                     │
├─────────────────────────────────────┤
│  Hero Section                       │
│  - Name: "Hi, I'm Avery Espiritu"   │
│  - Tagline: CS Student & Engineer   │
│  - CTA: About Me | View Projects    │
├─────────────────────────────────────┤
│  Quick Stats (4 cards)              │
│  - Brown University                 │
│  - TrueMark AI                      │
│  - Teaching Assistant               │
│  - Community Leader                 │
├─────────────────────────────────────┤
│  Featured Projects (3 cards)        │
│  - AI Content Verification          │
│  - Accessible Learning Platform     │
│  - Climate Data Visualization       │
│  - [View All Projects button]       │
├─────────────────────────────────────┤
│          Footer                     │
└─────────────────────────────────────┘
```

**User Flow**:
- Land on hero → Read tagline → Click "About Me" or "View Projects"
- Scroll down → See quick stats → See featured projects → Click to see all

---

### 2. About Page (`/about`)

**Purpose**: Tell your story, values, and background

**Sections**:
```
┌─────────────────────────────────────┐
│          Navbar                     │
├─────────────────────────────────────┤
│  Hero Section                       │
│  - Headshot (circular, placeholder) │
│  - Name & Tagline                   │
│  - First paragraph of bio           │
├─────────────────────────────────────┤
│  Bio Section                        │
│  - Full bio (3 paragraphs)          │
│  - What drives you                  │
│  - AI for good, ethics focus        │
├─────────────────────────────────────┤
│  Education Section                  │
│  - Brown University BS CS           │
│  - Expected May 2026                │
│  - Focus areas (4 badges)           │
├─────────────────────────────────────┤
│  Values Grid (4 cards)              │
│  - AI for Good                      │
│  - Inclusive Technology             │
│  - Lifelong Learning                │
│  - Community Building               │
├─────────────────────────────────────┤
│  Interests & Passions               │
│  - 6 interest badges                │
├─────────────────────────────────────┤
│          Footer                     │
└─────────────────────────────────────┘
```

**User Flow**:
- See headshot → Read bio → Learn about education → Understand values → See interests

---

### 3. Projects Page (`/projects`)

**Purpose**: Showcase technical work and impact

**Sections**:
```
┌─────────────────────────────────────┐
│          Navbar                     │
├─────────────────────────────────────┤
│  Page Header                        │
│  - "Projects"                       │
│  - Subtitle about focus areas       │
├─────────────────────────────────────┤
│  Projects Grid (5 cards)            │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ P1  │ │ P2  │ │ P3  │           │
│  │     │ │     │ │     │           │
│  └─────┘ └─────┘ └─────┘           │
│  ┌─────┐ ┌─────┐                   │
│  │ P4  │ │ P5  │                   │
│  │     │ │     │                   │
│  └─────┘ └─────┘                   │
│                                     │
│  Each card shows:                   │
│  - Title                            │
│  - Role                             │
│  - Description                      │
│  - Impact metric (highlighted)      │
│  - Tech stack badges                │
│  - Links (demo + GitHub)            │
├─────────────────────────────────────┤
│          Footer                     │
└─────────────────────────────────────┘
```

**Projects Included**:
1. AI-Powered Content Verification System
2. Accessible Learning Platform
3. Climate Data Visualization Tool
4. Student Collaboration Hub
5. Ethical AI Research Framework

**User Flow**:
- Browse projects → Click on interesting ones → See technologies used → Visit demo/GitHub

---

### 4. Experience Page (`/experience`)

**Purpose**: Demonstrate professional and teaching background

**Sections**:
```
┌─────────────────────────────────────┐
│          Navbar                     │
├─────────────────────────────────────┤
│  Page Header                        │
│  - "Experience"                     │
│  - Subtitle about journey           │
├─────────────────────────────────────┤
│  Work Experience (1 card)           │
│  - TrueMark AI                      │
│    Software Engineer Intern         │
│    Responsibilities + Impact        │
├─────────────────────────────────────┤
│  Teaching Experience (2 cards)      │
│  - CS410: Software Engineering      │
│  - CS200: Data Structures & Algos   │
│    Details about each role          │
├─────────────────────────────────────┤
│  Leadership & Community (2 cards)   │
│  - Bruno Fellow                     │
│  - Orientation Leader               │
│    Impact and skills developed      │
├─────────────────────────────────────┤
│          Footer                     │
└─────────────────────────────────────┘
```

**User Flow**:
- Read work experience → See teaching roles → Learn about leadership → Understand skills

---

### 5. Contact Page (`/contact`)

**Purpose**: Make it easy to reach you

**Sections**:
```
┌─────────────────────────────────────┐
│          Navbar                     │
├─────────────────────────────────────┤
│  Page Header                        │
│  - "Get in Touch"                   │
│  - Friendly message                 │
├─────────────────────────────────────┤
│  Contact Methods (3 cards)          │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │Email│ │Link │ │GitHub│          │
│  │ 📧  │ │ 💼  │ │ 💻  │           │
│  └─────┘ └─────┘ └─────┘           │
│  Each with description & link       │
├─────────────────────────────────────┤
│  Resume Download Section            │
│  - Large card with PDF icon         │
│  - Download button                  │
├─────────────────────────────────────┤
│  Current Availability               │
│  - Status message                   │
│  - CTA: Let's Connect               │
│  - Link back to Projects            │
├─────────────────────────────────────┤
│          Footer                     │
└─────────────────────────────────────┘
```

**User Flow**:
- Choose contact method → Click link (opens email/LinkedIn/GitHub) → Download resume

---

## 🧭 Navigation Patterns

### Primary Navigation (Navbar)

Available on all pages:
- **Home** → /
- **About** → /about
- **Projects** → /projects
- **Experience** → /experience
- **Contact** → /contact

### Secondary Navigation (CTAs)

**From Home**:
- Hero: "About Me" → /about
- Hero: "View Projects" → /projects
- Featured Projects: "View All Projects" → /projects

**From About**:
- (Implicit: Navbar to other pages)

**From Projects**:
- Project links → External demos/GitHub

**From Experience**:
- (Implicit: Navbar to other pages)

**From Contact**:
- "Let's Connect" → Email
- "View My Work" → /projects

### Footer Navigation

Available on all pages:
- Quick Links (repeat of navbar)
- Social Media (Email, LinkedIn, GitHub)

---

## 🔄 User Journeys

### Journey 1: First-Time Visitor (Recruiter)
```
Home → (impressed by hero) → 
Projects → (reviews work) → 
Experience → (checks qualifications) → 
Contact → (downloads resume)
```

### Journey 2: Learning About You
```
Home → 
About → (reads bio, sees values) → 
Experience → (understands background) → 
Contact → (connects on LinkedIn)
```

### Journey 3: Technical Review
```
Projects → (clicks GitHub links) → 
Experience → (sees tech skills) → 
About → (checks education) → 
Contact → (sends email)
```

### Journey 4: Quick Overview
```
Home → (reads stats) → 
Featured Projects → (sees highlights) → 
Contact → (saves for later)
```

---

## 📱 Responsive Behavior

### Mobile (< 640px)
- Navbar: Hamburger menu
- Grids: Single column
- Cards: Stacked vertically

### Tablet (640px - 1024px)
- Navbar: Full menu
- Grids: 2 columns
- Cards: Side-by-side pairs

### Desktop (> 1024px)
- Navbar: Full menu with spacing
- Grids: 3 columns (projects), 2 columns (experience)
- Cards: Optimal layout

---

## 🔗 External Links

From the site, users can navigate to:

**Social Media**:
- Email (mailto:avery@example.com)
- LinkedIn (https://linkedin.com/in/averyespiritu)
- GitHub (https://github.com/avery-espiritu)

**Project Links**:
- Live demos (project-specific URLs)
- GitHub repositories (project code)

**Resources**:
- Resume PDF download

---

## 📊 Page Metrics

| Page | Priority | Content Type | Key Action |
|------|----------|--------------|------------|
| Home | High | Overview | Explore site |
| About | High | Personal | Learn about you |
| Projects | Critical | Portfolio | Review work |
| Experience | High | Credentials | Verify skills |
| Contact | Medium | Action | Get in touch |

---

## 🎯 SEO Structure

Each page has:
- Unique `<title>` tag
- Meta description
- Semantic HTML (h1, h2, etc.)
- Descriptive alt text
- Open Graph tags

**Example URLs**:
```
https://averyespiritu.com/
https://averyespiritu.com/about
https://averyespiritu.com/projects
https://averyespiritu.com/experience
https://averyespiritu.com/contact
```

---

## 🔍 Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard-accessible
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG 2.1 AA compliant
- **Focus Indicators**: Visible focus states on all links/buttons
- **Alt Text**: All images have descriptive alt text (when added)

---

This sitemap shows the complete structure and flow of your portfolio website. Each page is designed to showcase different aspects of your professional identity while maintaining a cohesive, user-friendly experience.

