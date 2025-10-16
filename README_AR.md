# موقع شركة مجد الحجاز للخدمات الرقمية العامة

## نظرة عامة
موقع ويب احترافي باللغة العربية لشركة مجد الحجاز للخدمات الرقمية العامة، مبني باستخدام Next.js 15 و Tailwind CSS.

## المميزات
- ✨ واجهة عربية كاملة مع دعم RTL
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- ⚡ أداء عالي باستخدام Next.js 15
- 🎨 تصميم عصري باستخدام Tailwind CSS
- 🔍 محسّن لمحركات البحث (SEO)
- 🚀 جاهز للنشر على Netlify

## المحتوى
- الصفحة الرئيسية مع معلومات الشركة
- 6 خدمات رئيسية:
  - تطوير المواقع الإلكترونية
  - تطبيقات الهاتف المحمول
  - التسويق الرقمي
  - الاستضافة والصيانة
  - تحسين محركات البحث (SEO)
  - الاستشارات التقنية
- معلومات الاتصال
- المميزات التنافسية

## التثبيت والتشغيل

### المتطلبات
- Node.js 18 أو أحدث
- npm أو yarn

### خطوات التثبيت
```bash
# 1. تثبيت المتطلبات
npm install

# 2. تشغيل خادم التطوير
npm run dev

# 3. فتح المتصفح على
http://localhost:3000
```

## الأوامر المتاحة

```bash
# تشغيل خادم التطوير
npm run dev

# بناء الموقع للإنتاج
npm run build

# تشغيل الموقع في وضع الإنتاج
npm run start

# فحص جودة الكود
npm run lint
```

## البنية الأساسية

```
next-platform-starter/
├── app/                    # صفحات التطبيق
│   ├── layout.jsx         # التخطيط الرئيسي (عربي + RTL)
│   └── page.jsx           # الصفحة الرئيسية
├── components/            # المكونات القابلة لإعادة الاستخدام
│   ├── header.jsx        # رأس الصفحة
│   ├── footer.jsx        # تذييل الصفحة
│   └── card.jsx          # بطاقات العرض
├── public/               # الملفات العامة
│   ├── sitemap.xml      # خريطة الموقع
│   └── robots.txt       # إعدادات الروبوتات
├── styles/              # ملفات التنسيق
└── SEO_Guide.md         # دليل تحسين محركات البحث
```

## التخصيص

### تحديث معلومات الاتصال
قم بتعديل ملف `app/page.jsx` وابحث عن قسم "معلومات الاتصال":

```jsx
<p><strong>البريد الإلكتروني:</strong> info@majdalhjaz.com</p>
<p><strong>الهاتف:</strong> +966 XX XXX XXXX</p>
<p><strong>العنوان:</strong> المملكة العربية السعودية</p>
```

### إضافة صفحات جديدة
أنشئ ملف جديد في مجلد `app/`:

```bash
# مثال: إنشاء صفحة "من نحن"
mkdir app/about
touch app/about/page.jsx
```

### تعديل الألوان
قم بتعديل ملف `app/layout.jsx` لتغيير لون الخلفية:

```jsx
<body className="antialiased text-white bg-blue-900">
```

## النشر

### النشر على Netlify (موصى به)
1. قم بتسجيل الدخول إلى [Netlify](https://netlify.com)
2. اربط مستودع GitHub الخاص بك
3. سيتم نشر الموقع تلقائياً

أو استخدم زر النشر:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mjdalhjaz1988/next-platform-starter)

### النشر على Vercel
```bash
npm install -g vercel
vercel
```

## تحسين محركات البحث (SEO)

تم تضمين ملفات SEO الأساسية:
- `public/sitemap.xml` - خريطة الموقع
- `public/robots.txt` - إعدادات الزحف
- `SEO_Guide.md` - دليل شامل للتحسين

### خطوات ما بعد النشر
1. سجل الموقع في [Google Search Console](https://search.google.com/search-console)
2. سجل الموقع في [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. قم برفع ملف sitemap.xml
4. راقب الأداء بانتظام

## الدعم الفني

### الوثائق المفيدة
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

### المشاكل الشائعة

**المشكلة:** الموقع لا يعرض العربية بشكل صحيح
**الحل:** تأكد من أن المتصفح يدعم الخطوط العربية وأن اتجاه RTL مفعّل

**المشكلة:** البناء يفشل
**الحل:** تأكد من تثبيت جميع المتطلبات باستخدام `npm install`

**المشكلة:** الصور لا تظهر
**الحل:** تأكد من وضع الصور في مجلد `public/images/`

## الترخيص
هذا المشروع للاستخدام الشخصي والتجاري

## الاتصال
للاستفسارات والدعم:
- البريد الإلكتروني: info@majdalhjaz.com
- الموقع: [majdalhjaz.com](https://majdalhjaz.com)

---

تم التطوير بواسطة GitHub Copilot 🤖
آخر تحديث: 2025-10-16
