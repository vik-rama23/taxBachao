# TaxMitra - Tax Calculator UI

A modern, responsive tax calculation and regime comparison application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📊 **Salary Information Form** - Input annual CTC, basic salary, HRA, and rent paid
- 💰 **Investments & Deductions** - Track investments in NSP, bonds, home loan interest, and health insurance
- 📈 **Results Visualization** - View income breakdown and tax implications
- 🔄 **Regime Comparison** - Compare Old vs New tax regimes with detailed breakdowns
- 📱 **Responsive Design** - Desktop, tablet, and mobile layouts
- ♿ **Accessible** - Built with accessibility in mind
- ⚡ **Fast Performance** - Optimized with Next.js 16 and Turbopack

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with component orchestration
│   └── globals.css         # Global styles
└── components/
    ├── SalaryForm.tsx      # Salary information input form
    ├── InvestmentForm.tsx  # Investments and deductions form
    ├── ResultsView.tsx     # Income and expenses results
    └── RegimeComparison.tsx # Tax regime comparison card
```

## Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the project
npm run build

# Start the production server
npm start
```

### Linting

```bash
npm run lint
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management with useState
- **Lucide Icons** - Beautiful, consistent icon library

## Components

### SalaryForm
Collects salary information including:
- Annual CTC
- Basic Salary
- HRA Received
- Rent Paid

### InvestmentForm
Tracks financial investments:
- BDC/Section 80C investments
- NPS (National Pension Scheme)
- Home Loan Interest
- Health Insurance Premium (80D)

### ResultsView
Displays:
- Income after deductions
- Income tax slabs
- Savings recommendations
- Tax calculations breakdown

### RegimeComparison
Shows:
- Old vs New tax regime comparison
- Tax amount for each regime
- Savings calculation
- Effective tax rates
- Detailed tax breakdown

## Features Implemented

✅ Multi-step form wizard interface
✅ Tab-based navigation
✅ Real-time calculations
✅ Responsive grid layout
✅ Tax regime comparison
✅ Input validation UI
✅ Interactive form fields
✅ Visual feedback and recommendations

## Customization

### Colors & Styling

Modify the Tailwind CSS configuration in `tailwind.config.ts` to customize colors, fonts, and spacing.

### Component Props

All components are fully typed with TypeScript interfaces for easy customization and maintenance.

## License

MIT

## Author

Created as a modern tax calculation UI prototype for TaxBachao/TaxMitra application.
