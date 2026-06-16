# Community Makers' Market 🛍️

**Empowering local artisans and home-based entrepreneurs across Andhra Pradesh & Telangana.**

Community Makers' Market is a bilingual (English + Telugu) web platform that connects rural and semi-urban creators with buyers, provides curated business ideas, showcases government schemes, and offers a marketplace to sell handmade products — all without requiring online payment.

---

## ✨ Features

| Page | Description |
|---|---|
| **Home** | Hero, impact stats, workflow guide, skills, and community stories |
| **Marketplace** | Browse & filter products by category; contact sellers directly |
| **Business Ideas** | Curated ideas with startup cost, skill level, earning potential, step-by-step guides, and direct links to relevant marketplace products |
| **Government Schemes** | Relevant schemes for women & youth entrepreneurs |
| **Success Stories** | Real stories from local sellers |
| **About** | Mission, vision, and team |
| **Contact** | Formspree-powered contact form; phone +91 74164 03722 |
| **Seller Dashboard** | Register as a seller, list products, manage listings |

---

## 🏗️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React + SSR)
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives (via shadcn/ui)
- **Animations**: Motion (Framer Motion)
- **Forms**: Formspree (`https://formspree.io/f/xojzknae`)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: Bun

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ or [Bun](https://bun.sh/) 1.x

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/community-makers-connect.git
cd community-makers-connect

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
bun run build
# or
npm run build
```

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

---

## 📁 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BusinessIdeaModal.tsx
│   └── ...
├── contexts/        # React context providers (Theme, Seller)
├── data/
│   └── content.ts   # All seed data (products, business ideas, stories, etc.)
├── hooks/           # Custom React hooks
├── i18n/            # Bilingual (EN/TE) language system
├── lib/             # Utilities (market, sellers, inquiries, error reporting)
├── routes/          # File-based routes (TanStack Router)
│   ├── __root.tsx   # App shell (Navbar, Footer, Providers)
│   ├── index.tsx    # Home page
│   ├── marketplace.tsx
│   ├── business-ideas.tsx
│   ├── contact.tsx
│   ├── schemes.tsx
│   ├── about.tsx
│   └── ...
└── styles.css       # Global CSS & design tokens
```

---

## 🌐 Contact & Support

- **Phone**: +91 74164 03722
- **Email**: hello@makersmarket.org
- **Region**: Andhra Pradesh & Telangana, India
- **Contact Form**: [Get in Touch](/contact)

---

## 🌍 Bilingual Support

The platform supports:
- 🇬🇧 **English** — default
- 🇮🇳 **Telugu (తెలుగు)** — full translation across all content

Language can be selected on first visit via the Language Gate screen and changed at any time via the Navbar toggle.

---

## 📜 License

This project is intended for community use. Please contact us for licensing inquiries.
