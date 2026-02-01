# Finance & Debt Payoff Simulator 💸

A portfolio demo app to help people map out their monthly income and expenses and get an estimate of **how long it could take to pay off their debts.**

I’ve kept this project **without authentication** on purpose, so anyone can try it easily. The backend is built in a way that I can add JWT auth later, but for the MVP I’m focusing on clean structure, correct money handling, and the debt payoff calculations.

---

## Features (MVP)

- ✅ Add **Income** (monthly salary / other income)
- ✅ Add **Expenses** (fixed + variable)
- ✅ Add **Debts** (balance, minimum payment, optional interest rate)
- ✅ View a **Summary**:
  - total monthly income
  - total monthly expenses
  - total minimum debt payments
  - disposable income
  - estimated months to become debt-free
- ✅ Payoff strategies:
  - **Snowball** (smallest balance first)
  - **Avalanche** (highest interest first)

---

## Tech Stack

**Backend**
- Node.js
- TypeScript
- NestJS
- Prisma ORM
- PostgreSQL

**Frontend**
- React + TypeScript