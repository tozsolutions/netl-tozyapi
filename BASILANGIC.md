# Toz Yapı Web Sitesi - Hızlı Başlangıç Rehberi

## 🎉 Tebrikler! Web siteniz hazır!

Toz Yapı Sistemleri için modern, Avrupa tarzı kurumsal web sitesi başarıyla oluşturuldu.

## 📁 Proje Yapısı

```
tozyapi-site/
├── index.html              # Ana sayfa
├── blog/                   # Blog sayfaları
│   ├── index.html          # Blog ana sayfa
│   ├── gunes-kirici-sistemlerde-surdurulebilirlik.html
│   ├── mimari-tasarimda-brise-soleil.html
│   ├── akilli-golgeleme-enerji-maliyetleri.html
│   ├── pergola-sistemlerinde-son-teknolojiler.html
│   ├── dis-cephe-kaplamalarinda-malzeme-secimi.html
│   ├── otomatik-kapi-guvenlik-standartlari.html
│   └── surdurulebilir-yapi-sertifikasyonlari.html
├── assets/
│   ├── css/                # Stil dosyaları
│   └── js/                 # JavaScript dosyaları
├── images/                 # Resim klasörü
├── package.json            # NPM yapılandırması
├── vercel.json             # Vercel yapılandırması
├── README.md               # İngilizce döküman
└── DEPLOYMENT.md           # Deployment rehberi
```

## 🚀 GitHub ve Vercel'e Deploy Etme

### Adım 1: GitHub Repository Oluştur

1. https://github.com/new adresine git
2. Repository adı: `tozyapi-site` (veya istediğin isim)
3. Public veya Private seç
4. "Create repository" butonuna tıkla

### Adım 2: Git'e Commit Et

```bash
# Bu klasöre git
cd C:\Users\Admin\Desktop\xxx\netl\tozyapi-site

# Git'i başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Toz Yapı web sitesi ilk versiyon"

# GitHub'a bağla (KULLANICI_ADINIZ'i değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/tozyapi-site.git

# GitHub'a yükle
git branch -M main
git push -u origin main
```

### Adım 3: Vercel'e Deploy Et

#### Yöntem 1: Vercel Web Sitesi (Önerilen)

1. https://vercel.com adresine git
2. GitHub hesabın ile giriş yap
3. "Add New Project" tıkla
4. GitHub'dan `tozyapi-site` reposunu seç
5. "Deploy" butonuna tıkla
6. 1-2 dakika bekle - siten yayında!

#### Yöntem 2: Vercel CLI

```bash
# Vercel CLI yükle
npm install -g vercel

# Giriş yap
vercel login

# Deploy et
vercel

# Production deploy
vercel --prod
```

## 🌐 Siteniz Erişilebilir!

**Vercel URL:** `https://tozyapi-site.vercel.app`
**Özel Domain:** (ayarladıysanız) `https://www.tozyapi.com.tr`

## 📝 Yapılması Gerekenler

### 1. Logo Ekleyin

`/images/` klasörüne logo dosyanızı ekleyin:
- `logo.png` (ana logo)
- `favicon.ico` (tarayıcı ikonu)

### 2. İletişim Bilgilerini Güncelleyin

`index.html` dosyasında şu bilgileri güncelleyin:
- Telefon numarası
- E-posta adresi
- Adres bilgisi
- Sosyal medya linkleri

### 3. Google Analytics Ekleyin

Tüm HTML sayfalarına GA kodunu ekleyin:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 4. Özel Domain Bağlayın (Opsiyonel)

Vercel Dashboard → Settings → Domains → Domain ekle

DNS Ayarları:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

## 🎨 Özellikler

✅ **Modern Avrupa Tasarımı** - Minimalist, profesyonel görünüm
✅ **Mobil Uyumlu** - Telefon, tablet, masaüstü optimize
✅ **SEO Optimize** - Meta etiketleri, schema.org işaretlemeleri
✅ **Blog Sistemi** - 7 teknik makale hazır
✅ **Hızlı Performans** - Optimize edilmiş kod
✅ **Vercel Hazır** - Kolay deployment

## 📱 Sayfalar

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Hero, ürünler, blog özeti, iletişim |
| Blog | `/blog` | Tüm yazılar, kategori filtresi |
| Blog Yazısı | `/blog/[slug]` | Detaylı makaleler |

## 🛠️ Güncelleme Yapma

### Yeni Blog Yazısı Eklemek

1. `/blog/` klasöründe yeni HTML dosyası oluştur
2. Mevcut bir yazıyı kopyala ve düzenle
3. Blog index sayfasına ekle

### Renkleri Değiştirmek

`/assets/css/style.css` dosyasında:
```css
:root {
    --color-primary: #1a365d;  /* Ana renk */
    --color-accent: #c9a227;   /* Vurgu rengi */
}
```

### Menü Öğelerini Değiştirmek

`index.html` ve tüm blog sayfalarında:
```html
<nav class="nav">
    <ul class="nav-menu">
        <li><a href="#home">Ana Sayfa</a></li>
        <!-- Yeni menü ekle -->
    </ul>
</nav>
```

## 📊 İçerik Özeti

### Ana Sayfa Bölümleri:
- Hero (Slider ile)
- Hakkımızda
- Ürünler (6 kart)
- Blog Özeti (6 yazı)
- İletişim Formu

### Blog Yazıları:
1. Güneş Kırıcı Sistemlerde Sürdürülebilirlik
2. Mimari Tasarımda Brise Soleil
3. Akıllı Gölgeleme ile Enerji Tasarrufu
4. Pergola Sistemlerinde Son Teknolojiler
5. Dış Cephe Kaplamalarında Malzeme Seçimi
6. Otomatik Kapı Güvenlik Standartları
7. Sürdürülebilir Yapı Sertifikasyonları

## 🔧 Yerel Test

```bash
# Node.js yüklüyse:
npm install
npm run dev

# Tarayıcıda aç: http://localhost:5173
```

## 📞 Destek

Sorularınız için:
- README.md dosyasına bakın
- DEPLOYMENT.md dosyasına bakın
- Vercel Docs: https://vercel.com/docs

## 🎉 Başarılar!

Web siteniz artık hazır ve deploy edilmeye hazır!

---

**Son Güncelleme:** Mart 2026
**Toz Yapı Teknolojileri** © 2026
