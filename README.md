# Toz Yapı Sistemleri - Corporate Website

Modern European-style corporate website for Toz Yapı Teknolojileri, a leading provider of solar shading, pergola, and facade systems.

## 🌟 Features

- **Modern European Design** - Clean, minimalist aesthetic with professional typography
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Blog System** - 7 technical articles ready
- **Fast Performance** - Optimized assets and minimal dependencies
- **Vercel Ready** - Pre-configured for easy deployment

## 📁 Project Structure

```
netl-tozyapi/
├── index.html              # Main landing page
├── blog/
│   ├── index.html          # Blog listing page
│   ├── gunes-kirici-sistemlerde-surdurulebilirlik.html
│   ├── mimari-tasarimda-brise-soleil.html
│   ├── akilli-golgeleme-enerji-maliyetleri.html
│   ├── pergola-sistemlerinde-son-teknolojiler.html
│   ├── dis-cephe-kaplamalarinda-malzeme-secimi.html
│   ├── otomatik-kapi-guvenlik-standartlari.html
│   └── surdurulebilir-yapi-sertifikasyonlari.html
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   ├── blog.css        # Blog article styles
│   │   └── blog-index.css  # Blog listing styles
│   └── js/
│       ├── main.js         # Main JavaScript
│       └── blog-filter.js  # Blog filtering functionality
├── images/                 # Image assets
├── package.json            # NPM configuration
├── vercel.json             # Vercel deployment config
├── deploy.bat              # Windows deploy script
├── deploy.sh               # Linux/Mac deploy script
├── README.md               # This file
├── BASLANGIC.md            # Turkish quick start guide
├── DEPLOYMENT.md           # Deployment guide (EN)
└── VERCEL_REHBERI.md       # Vercel guide (TR)
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/tozsolutions/netl-tozyapi.git
cd netl-tozyapi
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

### GitHub + Vercel (Recommended)

1. **Run deploy script (Windows)**
```bash
deploy.bat
```

2. **Or deploy manually:**
```bash
git init
git add .
git commit -m "Toz Yapı web sitesi"
git remote add origin https://github.com/tozsolutions/netl-tozyapi.git
git branch -M main
git push -u origin main
```

3. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Login with GitHub
   - Import `netl-tozyapi` repository
   - Click Deploy

### Vercel CLI

```bash
npm install
npm run deploy
```

## 📱 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, products, and contact |
| Blog Index | `/blog` | Blog listing with category filter |
| Blog Article | `/blog/[slug]` | Individual blog articles |

## 🎨 Design System

### Colors

```css
--color-primary: #1a365d;      /* Navy Blue */
--color-primary-light: #2c5282;
--color-accent: #c9a227;       /* Gold */
--color-white: #ffffff;
```

### Typography

- **Primary Font:** Inter (UI text)
- **Display Font:** Playfair Display (Headings)

## 📊 Blog Articles

1. **Güneş Kırıcı Sistemlerde Sürdürülebilirlik**
   - Energy efficiency and green building certifications
   - LEED, BREEAM, Passivhaus contributions

2. **Mimari Tasarımda Brise Soleil**
   - Historical evolution from Le Corbusier to present
   - Design principles and system types

3. **Akıllı Gölgeleme ile Enerji Tasarrufu**
   - Smart shading automation
   - ROI calculations and real project data

4. **Pergola Sistemlerinde Son Teknolojiler**
   - Bioclimatic systems
   - AI and IoT integration

5. **Dış Cephe Kaplamalarında Malzeme Seçimi**
   - 15 material comparison
   - Cost analysis and durability

6. **Otomatik Kapı Güvenlik Standartları**
   - EN 16005 standard requirements
   - Safety testing and certification

7. **Sürdürülebilir Yapı Sertifikasyonları**
   - LEED, BREEAM, Passivhaus comparison
   - Certification process guide

## 🔧 Customization

### Update Contact Information

Edit `index.html`:
```html
<!-- Phone -->
<a href="tel:+905367731404">+90 536 773 14 04</a>

<!-- Email -->
<a href="mailto:merhaba@tozyapi.com.tr">merhaba@tozyapi.com.tr</a>

<!-- Address -->
Bilkent Center AVM No:3, Çankaya/Ankara
```

## 📈 SEO Checklist

- [x] Meta descriptions on all pages
- [x] Open Graph tags for social sharing
- [x] Schema.org structured data
- [x] Semantic HTML5 elements
- [x] Alt text for images
- [x] Canonical URLs
- [x] Mobile-friendly design
- [x] Fast page load speed

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Google Fonts** - Inter & Playfair Display
- **Font Awesome** - Icon library
- **Vercel** - Hosting and deployment
- **Vite** - Build tool

## 📝 License

This project is proprietary and confidential. © 2026 Toz Yapı Teknolojileri.

## 🤝 Support

For questions or support:

- **Email:** merhaba@tozyapi.com.tr
- **Phone:** +90 536 773 14 04
- **Address:** Bilkent Center AVM No:3, 06800 Çankaya/Ankara, Turkey

## 🔗 Links

- **GitHub:** https://github.com/tozsolutions/netl-tozyapi
- **Vercel Guide:** See `VERCEL_REHBERI.md`
- **Deployment Guide:** See `DEPLOYMENT.md`
- **Quick Start (TR):** See `BASLANGIC.md`

---

Built with ❤️ using European design principles.
