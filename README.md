# A.B Electric Service — Website Building Guide
## Complete Step-by-Step with All Requirements

**Built for:** A.B Electric Service  
**Owner:** Kiranmoy Paul  
**Service Area:** Bongaon → Barasat & Nearby Areas  
**Date:** 2025

---

## 📋 COMPLETE WEBSITE STRUCTURE

```
ab-electric-website/
│
├── index.html              ← HOME PAGE
├── about.html              ← ABOUT US PAGE
├── services.html           ← ALL SERVICES PAGE
├── training.html           ← TRAINING PAGE
├── book-service.html       ← SERVICE REQUEST FORM PAGE
├── contact.html            ← CONTACT PAGE
│
├── css/
│   └── style.css           ← ALL SHARED STYLES (colors, fonts, navbar, footer)
│
├── js/
│   └── main.js             ← ALL SHARED JAVASCRIPT (navbar, forms, animations)
│
├── images/                 ← PLACEHOLDER FOR YOUR PHOTOS
│   └── (add your photos here)
│
├── shared-components.html  ← REFERENCE FILE (navbar & footer code)
├── README.md               ← BUILD CHECKLIST
└── BUILDING_GUIDE.md       ← THIS FILE
```

---

## 🎨 DESIGN SYSTEM (APPLIED TO ALL PAGES)

### Colors
| Element | Color Code | Usage |
|---------|-----------|-------|
| Primary Navy | `#0B1C3D` | Headings, navbar background |
| Navy Dark | `#070F22` | Navbar scrolled state, footer |
| Navy Light | `#122348` | Secondary backgrounds |
| Gold Accent | `#F5C518` | Buttons, highlights, accents |
| Gold Dark | `#D4A800` | Gold hover states |
| White | `#FFFFFF` | Text on dark, card backgrounds |
| Off-White | `#F4F6FB` | Light section backgrounds |
| Light Gray | `#E8ECF4` | Borders, subtle backgrounds |
| WhatsApp Green | `#25D366` | WhatsApp buttons |

### Fonts
- **Headings:** Barlow Condensed (Bold, 600-800 weight)
- **Body Text:** Nunito (Regular to Bold, 400-700 weight)

### Spacing & Sizing
- **Container Width:** Max 1140px (responsive with padding)
- **Section Padding:** 80px vertical (48px for smaller sections)
- **Border Radius:** 10px (default), 18px (large)
- **Transitions:** All 0.28s ease

---

## 📄 PAGE REQUIREMENTS

### Page 1: HOME (index.html) ✓ Partially Done
**Must Include:**
- [x] Fixed Navbar with logo, navigation, mobile menu
- [x] Hero section with gradient background
- [x] Hero badge ("⚡ PROFESSIONAL SERVICE")
- [x] Hero headline ("Electrical Solution for Your Home")
- [x] Hero subtext
- [x] CTA buttons (Call + Book Service)
- [x] Hero cards (floating cards with service highlights)
- [x] 8-Service grid with icons (AC, Fridge, Geyser, Chimney, Motor, Inverter, Fan, Solar)
- [ ] Trust/Stats bar (Safe Service · Fast Response · 100% Satisfaction)
- [ ] Why Us section with 4 points + image
- [ ] Customer workflow section (5-6 steps)
- [x] WhatsApp floating button
- [x] Footer

**Content:**
```
Hero Headline: "Electrical Solution for Your Home"
Hero Sub: "Professional repair, maintenance & installation from Bongaon to Barasat"
Services: AC, Fridge, Geyser, Chimney, Motor, Inverter, Fan, Solar Plate
Trust Items: Fast Service | Best Quality | Customer Satisfaction
```

---

### Page 2: ABOUT US (about.html) ✓ To Build
**Must Include:**
- [ ] Hero section with page title ("About A.B Electric Service")
- [ ] Company overview (2-3 paragraphs)
- [ ] Owner bio: **Kiranmoy Paul**
  - Background/experience
  - Why he started the service
  - Services offered
- [ ] Mission statement
- [ ] Service coverage area with icons
- [ ] Experience highlights (years, customers, areas)
- [ ] Team/expertise section
- [ ] Why choose us section
- [ ] Trust elements
- [ ] Footer

**Content Points:**
```
Owner: Kiranmoy Paul
Experience: Electrical repair, appliance servicing, training
Mission: Provide reliable electrical solutions for homes
Coverage: Bongaon to Barasat & nearby areas
Trust Factor: Professional work, fast service, customer satisfaction
```

---

### Page 3: SERVICES (services.html) ✓ To Build
**Must Include:**
- [ ] Page hero/header
- [ ] All 11 services listed separately with descriptions:
  1. AC Service & Repair
  2. Refrigerator Service & Repair
  3. Geyser Service & Repair
  4. Chimney Service & Repair
  5. Water Motor Service & Repair
  6. Inverter Service & Repair
  7. Fan Service & Repair
  8. Solar Plate Service
  9. Electrical Fault Detection & Repair
  10. New Electrical Wiring Installation
  11. Electrical Decoration Work
- [ ] Additional services: General Home Appliances (TV, Washing Machine, Microwave, Iron, Vacuum)
- [ ] Service card for each with icon + description (2-3 lines)
- [ ] "Book Service" button on each service card
- [ ] Optional: Before/after images section
- [ ] Footer

**Service Card Format:**
```
Icon + Service Name
Short description (2-3 lines)
"Get Service" or "Book Now" button
```

---

### Page 4: TRAINING (training.html) ✓ To Build
**Must Include:**
- [ ] Page hero/header ("Learning Electrical Work - New Beginners Welcome")
- [ ] Introduction section (why training is valuable)
- [ ] What we offer (4 points):
  - Practical Training
  - Real Work Experience
  - Guidance by Experts
  - Build Your Future Career
- [ ] Learning pathway (3-4 steps: Learn → Practice → Work → Earn)
- [ ] Training details/courses offered
- [ ] Success stories or testimonials (optional)
- [ ] Training enquiry form with fields:
  - Name (required)
  - Phone (required)
  - Message (optional)
  - Submit button
- [ ] Footer

**Form ID:** `trainingForm`  
**Form Fields:** `tName`, `tPhone`, `tMessage`  
**On Submit:** Send WhatsApp message to 918436078538

---

### Page 5: BOOK SERVICE / SERVICE REQUEST (book-service.html) ✓ To Build
**Must Include:**
- [ ] Page hero/header
- [ ] Service request form with fields:
  - Full Name (required) — ID: `reqName`
  - Phone Number (required) — ID: `reqPhone`
  - Service Type (dropdown, required) — ID: `reqService`
    - Options: AC, Fridge, Geyser, Chimney, Motor, Inverter, Fan, Solar, Electrical Repair, Wiring, Decoration, Other
  - Problem Description (textarea, required) — ID: `reqProblem`
  - Address (required) — ID: `reqAddress`
  - Location Sharing Section:
    - WhatsApp Live Location button (opens wa.me with message)
    - Google Maps location link input field
    - Copy/Share instructions
  - Submit button
- [ ] Service booking workflow visual
- [ ] FAQ section (optional)
- [ ] Footer

**Form ID:** `serviceRequestForm`  
**On Submit:** Compose WhatsApp message with all details and send to 918436078538

---

### Page 6: CONTACT (contact.html) ✓ To Build
**Must Include:**
- [ ] Page hero/header ("Get in Touch")
- [ ] Contact information section:
  - Primary Phone: **8436078538** (clickable tel: link)
  - Secondary Phone: **6296255199** (clickable tel: link)
  - Email: **kiranmoypaul49@gmail.com** (clickable mailto: link)
  - Location: **Bongaon, West Bengal**
  - Service Area: **Bongaon → Gaighata → Habra → Ashoknagar → Gobardanga → Barasat**
- [ ] Contact form with fields:
  - Name (required) — ID: `cName`
  - Phone (required) — ID: `cPhone`
  - Message (optional) — ID: `cMessage`
  - Submit button
- [ ] WhatsApp direct button
- [ ] Google Maps embedded (showing Bongaon area)
- [ ] Service area map or list
- [ ] Quick links
- [ ] Footer

**Form ID:** `contactForm`  
**On Submit:** Send WhatsApp message to 918436078538

---

## ⚡ SHARED ELEMENTS (ON EVERY PAGE)

### Navbar (Fixed at top)
```
[Logo] A.B Electric Service | [Nav Links] Home | About | Services | Training | Book Service | Contact
Mobile: Hamburger menu that opens nav links
```

### WhatsApp Floating Button
```
Fixed at bottom-right, pulsing animation
Links to: https://wa.me/918436078538
Shows: "Chat on WhatsApp" tooltip
```

### Footer
```
4 columns:
1. Brand + Description
2. Quick Links (Home, About, Services, Training, Book Service, Contact)
3. Services (AC, Fridge, Geyser, Chimney, Motor, Inverter, Fan, Solar)
4. Contact Info (Phone, Email, Location, Service Area)
```

---

## 🔧 ALL JAVASCRIPT FUNCTIONS (in main.js)

### 1. Navbar Toggle (Mobile Menu)
- Detects clicks on hamburger button
- Toggles nav-links visibility
- Closes menu when a link is clicked
- Adds scroll shadow effect to navbar

### 2. Active Page Indicator
- Highlights current page in navbar
- Compares href with current URL

### 3. Scroll Reveal Animation
- Detects elements with `.reveal` class
- Triggers animation when they scroll into view
- Staggers delay for grid items (80ms per item)

### 4. Form Handlers
All forms send WhatsApp messages with formatted text:
- `serviceRequestForm` → Service details
- `trainingForm` → Training inquiry
- `contactForm` → Contact message

### 5. Alert Helper
- Shows success/error alerts at top of page
- Red for errors, green for success
- Auto-closes after 4 seconds

---

## 📱 RESPONSIVE DESIGN

### Breakpoints Used
- **Desktop:** 1140px container (full width with padding)
- **Tablet:** 768px - grids change to 2-3 columns
- **Mobile:** Below 480px - full width, 1-column layouts

### Mobile Considerations
- Hamburger menu instead of horizontal nav
- Full-width hero
- Single-column service grid
- Optimized form inputs (larger tap targets)
- Floating WhatsApp button stays visible

---

## 🎯 FORM SUBMISSION FLOW

All forms send WhatsApp messages (no backend needed):

1. **User fills form** → Validates required fields
2. **User clicks Submit** → Composes formatted WhatsApp message
3. **Message opens WhatsApp** → `https://wa.me/918436078538?text={encoded_message}`
4. **User sends** → Message delivered to business WhatsApp
5. **Business replies** → Direct WhatsApp conversation starts

---

## 📊 CONTACT INFORMATION (Used Throughout)

| Item | Value |
|------|-------|
| **Business Name** | A.B Electric Service |
| **Owner** | Kiranmoy Paul |
| **Primary Phone** | 8436078538 |
| **Secondary Phone** | 6296255199 |
| **WhatsApp** | +918436078538 |
| **Email** | kiranmoypaul49@gmail.com |
| **Location** | Bongaon, West Bengal |
| **Service Area** | Bongaon → Gaighata → Habra → Ashoknagar → Gobardanga → Barasat |

---

## ✅ BUILD CHECKLIST

### Files Created
- [x] css/style.css (complete with all styles)
- [x] js/main.js (complete with all functions)
- [x] shared-components.html (navbar & footer reference)
- [ ] index.html (HOME) — 90% complete
- [ ] about.html (ABOUT) — To build
- [ ] services.html (SERVICES) — To build
- [ ] training.html (TRAINING) — To build
- [ ] book-service.html (BOOK SERVICE) — To build
- [ ] contact.html (CONTACT) — To build

### Features Implemented
- [x] Color scheme & typography
- [x] Navbar with mobile toggle
- [x] WhatsApp floating button
- [x] Footer with all sections
- [x] Form handlers (WhatsApp integration)
- [x] Scroll reveal animations
- [ ] All 6 pages complete
- [ ] Images added
- [ ] SEO optimization
- [ ] Performance optimization

### Testing Before Launch
- [ ] Test all forms on mobile
- [ ] Test all WhatsApp links
- [ ] Test all phone click-to-call links
- [ ] Test navbar mobile menu
- [ ] Test page loading speed
- [ ] Test responsive design
- [ ] Check all links work
- [ ] Verify contact info is correct

---

## 🚀 DEPLOYMENT

1. **Upload files to hosting**
   - Upload all .html files
   - Upload css/ and js/ folders
   - Upload images/ folder

2. **Connect domain**
   - Point domain to hosting (via registrar)
   - Update DNS records

3. **Test live website**
   - Verify all pages load
   - Test forms again
   - Test mobile responsiveness

4. **Share with customers**
   - Add URL to WhatsApp status
   - Print URL on flyers
   - Share on social media

5. **Google My Business**
   - Add website URL
   - Add service area
   - Add phone numbers
   - Add opening hours

---

## 💡 NEXT STEPS

1. Review this guide
2. Get ready to receive complete HTML code for each page (one by one)
3. Copy-paste the code into new files
4. Add your photos to images/ folder
5. Test locally (open index.html in browser)
6. Upload to hosting when ready

---

