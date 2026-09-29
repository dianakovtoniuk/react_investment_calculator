# Investment Calculator (React + TypeScript)

An investment calculator web application built during the React course (by Max Schwarzmüller), TypeScript and bundled with Vite. It calculates annual investment growth, interest accrued over time, and total capital based on user inputs.

---

## Features

- **Interactive User Input**: Real-time calculation based on initial investment, annual contribution, expected rate of return, and duration.
- **Input Validation**: Duration validation ensuring calculations only process when duration is 1 year or greater.
- **Tabular Results**: Formatted financial data table displaying total interest and total invested capital year by year.
- **Currency Formatting**: Built-in formatting using JavaScript's Intl API (`Intl.NumberFormat`) to display values in USD currency.
- **Strict Typing**: Custom interfaces for data models, event handlers, and component props.

---

## Tech Stack

- **Frontend**: React 18
- **Language**: TypeScript
- **Bundler**: Vite
- **Styling**: Pure CSS

---

## Getting Started

1. **Clone the repository:**
   git clone https://github.com/your-username/react_essentials.git

2. **Navigate to the project directory:**
   cd react_essentials

3. **Install dependencies:**
   npm install

4. **Run the development server:**
   npm run dev

---

## Project Structure

src/
├── assets/                  # Logos and static visual assets
├── components/
│   ├── Header.tsx           # App header with logo and title
│   ├── Results.tsx          # Data table component for calculated investment results
│   └── UserInput.tsx        # Form component for investment inputs
├── util/
│   └── investment.ts        # Helper functions, interfaces, and currency formatters
├── App.tsx                  # Main app component handling user state and validation
├── index.css                # Global stylesheet
└── main.tsx                 # Application entry point

---

## Key Concepts

- Managing object state in React with immutable updates.
- Implementing dynamic validation (`inputIsValid`) for conditional rendering.
- Shared TypeScript interfaces (`InvestmentInput`, `InvestmentResult`) across components and utilities.
- Safe type mapping for form field identifiers using `keyof InvestmentInput`.
