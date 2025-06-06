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
pnpm test
# or
yarn test
# or
npx vitest
```

## 📝 Notes

- API endpoints are mocked or should be provided by `https://assignment.devotel.io`
- All form configurations and submissions are dynamically fetched
- Dynamic select fields (e.g. states) support dependent fetching

## 📄 License

This project is for demonstration and evaluation purposes.

# پروژه تست Devotel

یک پروژه فرم بیمه داینامیک ساخته‌شده با **React**، **Vite**، **React Hook Form** و **React Query**. این پروژه به‌عنوان ارزیابی فنی طراحی شده و قابلیت‌های رندر فرم داینامیک، ارتباط با API و نمایش داده‌ها در جدول را نشان می‌دهد.

## 🌟 ویژگی‌ها

- 📄 رندر فرم به‌صورت داینامیک از API
- ⚙️ نمایش شرطی فیلدها و select وابسته به داده‌های دیگر
- ✅ اعتبارسنجی فرم با Yup و React Hook Form
- 📥 ارسال داده‌های فرم به سرور
- 📊 نمایش داده‌های ثبت‌شده در جدول قابل جستجو و مرتب‌سازی
- 🌐 پشتیبانی از چندزبانگی با `react-i18next`
- 💡 رابط کاربری مدرن با Radix و TailwindCSS
- 🔬 تست واحد برای هوک‌ها و کامپوننت‌ها با Vitest

## 🚀 تکنولوژی‌ها

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

## 📁 ساختار پروژه

```
├── public/
├── src/
│   ├── atomic/             # کامپوننت‌ها و سرویس‌های سطح پایین
│   ├── hooks/              # هوک‌های سفارشی (کوئری‌ها و فرم‌ها)
│   ├── pages/              # صفحات اصلی (مثل FormPage و HomePage)
│   ├── i18n.ts             # تنظیمات ترجمه
│   ├── main.tsx            # نقطه ورود اپلیکیشن
│   └── ...
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## ⚙️ شروع به کار

### 1. نصب وابستگی‌ها

```bash
pnpm install
# یا
yarn install
# یا
npm install
```

### 2. اجرای پروژه در حالت توسعه

```bash
pnpm dev
# یا
yarn dev
# یا
npm run dev
```

### 3. ساخت نسخه نهایی برای تولید

```bash
pnpm build
```

## 🧪 اجرای تست‌ها

```bash
pnpm test
# یا
yarn test
# یا
npx vitest
```

## 📝 نکات

- APIها از مسیر `https://assignment.devotel.io` دریافت می‌شوند یا mock شده‌اند
- تمامی فرم‌ها و داده‌های ارسال‌شده به‌صورت داینامیک بارگذاری می‌شوند
- selectهای داینامیک مانند `state` قابلیت وابستگی به مقدار `country` را دارند

## 📄 لایسنس

این پروژه صرفاً برای مقاصد ارزیابی و نمایش فنی طراحی شده است.
