# Devotel Test Project

A dynamic insurance application built with **React**, **Vite**, **React Hook Form**, and **React Query**. This project is designed as a technical assessment and demonstrates dynamic form rendering, API interaction, and table-based data views.

## 🌟 Features

- 📄 Dynamic form rendering from API
- ⚙️ Conditional field visibility and dynamic select options
- ✅ Form validation with Yup and React Hook Form
- 📥 Submit form data to API
- 📊 View submitted data in sortable & searchable table
- 🌐 Internationalization with `react-i18next`
- 💡 Modern UI using Radix + TailwindCSS
- 🔬 Unit tests for hooks and components using Vitest

## 🚀 Tech Stack

- **React 19 + Vite**
- **TypeScript**
- **React Hook Form**
- **Yup**
- **React Query (TanStack)**
- **TailwindCSS**
- **Framer Motion**
- **Radix UI**
- **Vitest + Testing Library**
- **i18next**

## 📁 Project Structure

```
├── public/
├── src/
│   ├── atomic/             # UI components and services
│   ├── hooks/              # Custom hooks (form logic, query, mutation)
│   ├── pages/              # Page-level components (e.g. FormPage, HomePage)
│   ├── i18n.ts             # Internationalization setup
│   ├── main.tsx            # App entry point
│   └── ...
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## ⚙️ Getting Started

### 1. Install Dependencies

```bash
pnpm install
# or
yarn install
# or
npm install
```

### 2. Start Development Server

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

### 3. Build for Production

```bash
pnpm build
```

## 🧪 Run Tests

```bash
pnpm vitest
# or
yarn vitest
# or
npx vitest
```

## 📝 Notes

- API endpoints are mocked or should be provided by `https://assignment.devotel.io`
- All form configurations and submissions are dynamically fetched
- Dynamic select fields (e.g. states) support dependent fetching

## 📄 License

This project is for demonstration and evaluation purposes.

---

## 🛠 Setup Instructions

1. **Install dependencies:**

```bash
pnpm install
# or
yarn install
# or
npm install
```

2. **Start the development server:**

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

3. **Build for production:**

```bash
pnpm build
```

4. **Run tests:**

```bash
pnpm test
# or
yarn test
# or
npx vitest
```

---

## 🔌 API Usage Details

- `GET /api/insurance/forms`: Fetches dynamic insurance form structure.
- `POST /api/insurance/forms/submit`: Submits form data to backend.
- `GET /api/insurance/forms/submissions`: Returns list of previously submitted applications.
- Dynamic selects (e.g. `state`) use:
  - `GET /api/getStates?country=Canada`: returns dynamic options based on selected country.

All API URLs are assumed to be prefixed with `https://assignment.devotel.io`.

---

## ⚠️ Assumptions Made

- All forms follow the same structure and schema format provided in the test instructions.
- API returns consistent structure (e.g., `states: string[]` for dynamic selects).
- Error handling and fallback logic for API failures are basic due to limited spec.
- Translation keys (e.g., `t("form")`) exist in both `en` and `fa` locales.
- DynamicForm assumes input field types are standard (`text`, `select`, `radio`, `group`, etc.).
- All tests are written with the assumption that components and hooks behave synchronously in the test environment (no debounce/throttle).

---

## 🛠 Setup Instructions

1. **Install dependencies:**

```bash
pnpm install
# or
yarn install
# or
npm install
```

2. **Start the development server:**

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

3. **Build for production:**

```bash
pnpm build
```

4. **Run tests:**

```bash
pnpm vitest
# or
yarn vitest
# or
npx vitest
```

---

## 🔌 API Usage Details

- `GET /api/insurance/forms`: Fetches dynamic insurance form structure.
- `POST /api/insurance/forms/submit`: Submits form data to backend.
- `GET /api/insurance/forms/submissions`: Returns list of previously submitted applications.
- Dynamic selects (e.g. `state`) use:
  - `GET /api/getStates?country=Canada`: returns dynamic options based on selected country.

All API URLs are assumed to be prefixed with `https://assignment.devotel.io`.

---

## ⚠️ Assumptions Made

- All forms follow the same structure and schema format provided in the test instructions.
- API returns consistent structure (e.g., `states: string[]` for dynamic selects).
- Error handling and fallback logic for API failures are basic due to limited spec.
- Translation keys (e.g., `t("form")`) exist in both `en` and `fa` locales.
- DynamicForm assumes input field types are standard (`text`, `select`, `radio`, `group`, etc.).
- All tests are written with the assumption that components and hooks behave synchronously in the test environment (no debounce/throttle).

---

## 🛠 دستورالعمل راه‌اندازی

۱. **نصب وابستگی‌ها:**

```bash
pnpm install
# یا
yarn install
# یا
npm install
```

۲. **اجرای سرور توسعه:**

```bash
pnpm dev
# یا
yarn dev
# یا
npm run dev
```

۳. **ساخت نسخه نهایی:**

```bash
pnpm build
```

۴. **اجرای تست‌ها:**

```bash
pnpm vitest
# یا
yarn vitest
# یا
npx vitest
```

---

## 🔌 جزئیات استفاده از API

- `GET /api/insurance/forms`: دریافت ساختار فرم بیمه به‌صورت داینامیک
- `POST /api/insurance/forms/submit`: ارسال اطلاعات فرم به سرور
- `GET /api/insurance/forms/submissions`: لیست درخواست‌های ارسال‌شده
- گزینه‌های وابسته مانند `state` از این API استفاده می‌کنند:
  - `GET /api/getStates?country=Canada`

تمام URLها فرض شده که با `https://assignment.devotel.io` شروع می‌شوند.

---

## ⚠️ فرضیات پروژه

- تمام فرم‌ها از ساختار واحد ارائه‌شده در مستندات پیروی می‌کنند.
- ساختار بازگشتی APIها یکسان است (مثلاً `states: string[]`).
- مدیریت خطاها و fallback ساده در نظر گرفته شده به دلیل نبود جزئیات دقیق‌تر.
- کلیدهای ترجمه مثل `t("form")` در زبان‌های فارسی و انگلیسی موجودند.
- کامپوننت `DynamicForm` فرض می‌کند فیلدها از انواع رایج هستند (`text`, `select`, `radio`, `group`).
- تست‌ها با فرض عملکرد هم‌زمانی (sync) کامپوننت‌ها نوشته شده‌اند (بدون debounce/throttle).
