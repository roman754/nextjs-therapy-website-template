# Dr. Maya Reynolds, PsyD - Therapy Practice Website

A professional, responsive website for Dr. Maya Reynolds, a licensed clinical psychologist specializing in anxiety, trauma, and burnout therapy in Santa Monica, California.

## 🎯 Project Overview

This project is a complete redesign of a therapy practice homepage, created as part of an internship assignment. The website clones the layout structure from [Conejo Valley Counseling](https://www.conejovalleycounseling.com/home) while featuring entirely new branding, copy, and design elements tailored to Dr. Maya Reynolds' practice.

## 🎨 Design Choices

### Color Palette
- **Primary (Sage Green)**: `#5b8c7d` - Calming, professional, associated with growth and healing
- **Secondary (Warm Cream)**: `#e8c4a0` - Soft, approachable, creates warmth
- **Accent (Gold)**: `#d4a574` - Sophisticated touch, conveys value and expertise
- **Background Cream**: `#faf8f5` - Gentle, non-white background for reduced eye strain

The color scheme was specifically chosen to:
- Evoke feelings of calm, safety, and trust
- Reflect the therapeutic nature of the practice
- Appeal to high-achieving professionals dealing with anxiety and stress
- Maintain WCAG AA accessibility standards for contrast

### Typography & Spacing
- Clean, modern sans-serif font stack for readability
- Generous whitespace for a calm, uncluttered feel
- Consistent spacing using Tailwind's spacing scale
- Large, readable text sizes optimized for all devices

### Images
All images were carefully selected from Unsplash to:
- Match the calming color palette
- Represent professional therapy environments
- Show diverse, relatable scenarios
- Maintain consistent aesthetic throughout

## 📋 Website Sections

### 1. **Header/Navigation**
- Sticky header for easy navigation
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Prominent "Book Appointment" CTA

### 2. **Hero Section**
- Clear value proposition highlighting location and specialties
- SEO-optimized headline: "Therapy for Anxiety, Trauma & Burnout in Santa Monica"
- Dual CTAs: Primary (Schedule) and Secondary (Learn More)
- Key differentiators (in-person, telehealth, evening appointments)

### 3. **About Section**
- Introduction to Dr. Maya Reynolds
- Focus on her ideal client: high-achieving adults with anxiety, stress, past trauma
- Professional credentials and specializations
- Warm, empathetic tone

### 4. **Services Section**
Three core services extracted from profile:
1. **Anxiety & Panic Therapy** - CBT, EMDR, mindfulness approaches
2. **Trauma & EMDR Therapy** - Single-incident and complex trauma
3. **Burnout & Stress Management** - For entrepreneurs, creatives, professionals

### 5. **Approach Section**
Details Dr. Reynolds' therapeutic philosophy:
- Collaborative and supportive environment
- Evidence-based methods (CBT, EMDR, mindfulness, body-oriented)
- Trauma-informed care
- Understanding of modern professional stress

### 6. **Our Office Section** ⭐ NEW CUSTOM SECTION
This completely new section (not in original template) includes:
- Description of the Santa Monica office environment
- Office location and contact details
- Visual representation with office images
- In-person and telehealth options
- Emphasizes comfort, privacy, and accessibility

### 7. **FAQ Section**
Addresses common questions:
- Insurance and payment
- Session length and frequency
- Telehealth availability
- What to expect in first session
- Uncertainty about starting therapy

### 8. **Contact/CTA Section**
- Full contact information (phone, email, address)
- Dual CTAs (Email and Call)
- Reinforces availability and service areas

### 9. **Footer**
- Quick links to all sections
- Contact information
- Privacy policy and terms links
- Professional disclaimers

## 🔍 SEO Optimization

### Keywords Targeted
- "anxiety therapy Santa Monica"
- "trauma therapy Santa Monica"
- "burnout therapy"
- "psychologist Santa Monica"
- "EMDR therapy California"
- "CBT therapy"

### SEO Best Practices Implemented
- H1 tag includes primary keyword + location
- Meta description optimized for search and click-through
- Semantic HTML structure
- Alt text on all images
- Natural keyword integration throughout copy
- Location mentions in multiple sections
- Schema-ready structure for local business markup

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.8 (App Router)
- **Styling**: Tailwind CSS with custom theme
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel
- **Version Control**: Git/GitHub

## 📱 Responsive Design

The website is fully responsive across:
- **Desktop**: 1920px+ (large monitors)
- **Laptop**: 1280px-1919px
- **Tablet**: 768px-1279px
- **Mobile**: 320px-767px

Key responsive features:
- Mobile hamburger menu
- Stacked layouts on mobile
- Touch-friendly buttons and links
- Optimized images for all screen sizes
- Readable text sizes on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd therapy-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
therapy-website/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main homepage
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About Dr. Reynolds
│   ├── Services.tsx          # Three main services
│   ├── Approach.tsx          # Therapeutic approach
│   ├── Office.tsx            # Custom office section
│   ├── FAQ.tsx               # Frequently asked questions
│   ├── Contact.tsx           # Contact/CTA section
│   └── Footer.tsx            # Footer
├── public/                   # Static assets
└── next.config.ts            # Next.js configuration
```

## ✅ Assignment Completion Checklist

### Part 1: Clone the Homepage ✓
- [x] Replicated layout and structure from original template
- [x] Maintained section order and hierarchy
- [x] Fully responsive across all devices
- [x] Used reusable component architecture
- [x] Consistent spacing and styling

### Part 2: Redesign with Dr. Maya Reynolds Profile ✓

**Theme & Colors** ✓
- [x] New cohesive color palette (sage green, warm cream, gold)
- [x] All elements updated with new colors
- [x] Maintains readability and visual balance
- [x] Aesthetic and professional appearance

**Copywriting** ✓
- [x] All copy derived from Dr. Maya Reynolds profile
- [x] H1 includes SEO keywords + Santa Monica location
- [x] Three services from profile (Anxiety, Trauma, Burnout)
- [x] About, FAQ, and sections tailored to profile
- [x] SEO-optimized with natural keyword usage

**Images** ✓
- [x] All images replaced with new, theme-matching photos
- [x] Images relevant to therapy services
- [x] Intentional selection supporting each section
- [x] Professional therapist photo included

### Part 3: New Custom Section ✓
- [x] "Our Office" section added (not in original template)
- [x] Clear heading and supporting copy
- [x] Office images from profile
- [x] Aligns with Dr. Maya Reynolds' practice
- [x] Seamless integration with site design

## 🎥 Video Walkthrough

**Note**: Video walkthrough to be recorded covering:
1. Desktop walkthrough of all sections
2. Mobile responsive demonstration
3. Design choices and rationale
4. How profile information was translated to website
5. Key features and benefits for the therapist
6. Non-technical explanation suitable for client presentation

## 📊 Performance

- Build time: ~4.5s
- Lighthouse score target: 90+ across all metrics
- Fully static generation for optimal performance
- Optimized images with Next.js Image component

## 🔒 Privacy & Compliance

- HIPAA-compliant design considerations
- Privacy policy and terms placeholder links
- Secure contact forms ready for implementation
- Mental health emergency resources included in footer

## 📈 Future Enhancements

Potential additions for production:
- Online booking system integration
- Blog/resources section
- Client testimonials (with permission)
- Google Maps integration for office location
- Contact form with email service
- Google Analytics/privacy-respecting analytics
- Schema.org structured data for local SEO

## 👨‍💻 Developer Notes

### Key Technical Decisions
1. **Next.js App Router**: Modern, performant, great SEO
2. **Tailwind CSS**: Rapid development, consistent design system
3. **TypeScript**: Type safety and better developer experience
4. **Component Architecture**: Reusable, maintainable code
5. **CSS Variables**: Easy theme customization

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Focus states on all interactive elements

## 📝 License

This project was created as part of an internship assignment. All content is fictional and for demonstration purposes.

## 🙏 Acknowledgments

- Original template inspiration: Conejo Valley Family Counseling
- Images: Unsplash contributors
- Fictional therapist profile: Dr. Maya Reynolds (for demonstration)

---

**Created by**: [Your Name]  
**Date**: October 3, 2026  
**Assignment**: Internship - Cloning & Creative Redesign
