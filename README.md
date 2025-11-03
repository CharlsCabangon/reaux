# REAUX

---

_A framework for fine design... [visit Reaux →](https://reaux.vercel.app/)_

---

Reaux is a frontend e-commerce project built for [The Odin Project](https://www.theodinproject.com/). It started as a way to test my React skills and spiraled into something that cares a bit too much about button hover states and whether a transition should be 200ms or 300ms. The pieces are borrowed from [Swarovski](https://www.swarovski.com/), the obsessive attention to typography is mine, and somewhere between implementing the shopping cart and perfecting that diamond shine effect, this became less about checking boxes and more about seeing how good I could make it look. Clean, responsive, unnecessarily smooth, exactly the kind of project you build when you're learning but refuse to settle for "good enough."

---

### Built with

##### Core Technologies
- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

##### React Ecosystem
- [react-flickity-component](https://www.npmjs.com/package/react-flickity-component)
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
- [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)
- [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-social-icons](https://www.npmjs.com/package/react-social-icons)

---

### Features

- **Cart Management**
A fully functional shopping cart powered by React Context and useReducer. Add, remove, adjust quantities, and watch your selections persist across sessions, all with the fluidity of a well-oiled checkout counter. Multi-select, bulk actions, and real-time totals included, because details matter.

- **Product Filtering**
Intelligent filters that adapt to your collection. Sort by price, category, or collection with dropdowns that feel native and responsive. Real-time updates, zero page reloads, and a UX that doesn't make you think twice.

- **Responsive Art Direction**
Different images for different viewports; not just scaled, but composed. Mobile gets portrait, tablet gets landscape, desktop gets cinematic. Using native `<picture>` elements and media queries, each breakpoint serves the perfect crop. Because a hero image should always look heroic.

- **Adaptive Navigation**
Sticky headers that know when to step aside, collapsible mobile menus with smooth transitions, and a button that shines on hover (literally). Navigation that stays out of your way until you need it, then appears with purpose.

- **Accessibility First**
Semantic HTML, ARIA labels, keyboard navigation, and focus management throughout. Screen reader friendly, tab-order logical, and contrast ratios that pass WCAG AA. Luxury should be inclusive.

---

### Getting started

```bash
# Clone the repository
git clone https://github.com/yourusername/reaux.git

# Navigate to project directory
cd reaux

# Install dependencies
npm install

# Start development server
npm run dev

# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

### Responsive design philosophy

Reaux follows a mobile-first, accessibility-driven approach:

- Breakpoints: `xs: 475px`, `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`
- Typography: Fluid scaling with proper hierarchy
- Spacing: Consistent rhythm using Tailwind's spacing scale
- Touch Targets: Minimum 44x44px for all interactive elements
- Images: Art-directed with `<picture>` elements for optimal composition

---

### Credits and acknowledgments

This project is for **personal and educational use only**. All product data, imagery, and content are graciously borrowed from [Swarovski](https://www.swarovski.com/) for demonstration purposes. No commercial use or infringement intended, just a frontend developer admiring fine design. [View full image credits here →](https://github.com/CharlsCabangon/reaux/blob/main/CREDITS.md)

---

### Connect

Built with intention by [Charls Cabangon](https://github.com/yourusername)

Found this useful? Star the repo. Found a bug? Open an issue. Want to chat about the perfect button hover effect? Let's connect.

[LinkedIn](https://www.linkedin.com/in/charls-cabangon-8126a3378/) · [GitHub](https://github.com/CharlsCabangon)

---

_Rendered perfectly._