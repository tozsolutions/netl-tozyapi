# ✅ TOZ YAPI WEB SITESI - DEPLOY HAZIR!

## 📦 Proje Konumu

**Masaüstü:** `C:\Users\Admin\Desktop\netl-tozyapi`

## 📁 Oluşturulan Dosyalar

### Ana Dosyalar
- ✅ `index.html` - Ana sayfa
- ✅ `package.json` - NPM yapılandırması (GitHub: tozsolutions/netl-tozyapi)
- ✅ `vercel.json` - Vercel deployment yapılandırması
- ✅ `.gitignore` - Git ignore dosyası

### Blog Sayfaları (8 adet)
- ✅ `blog/index.html` - Blog ana sayfa
- ✅ `blog/gunes-kirici-sistemlerde-surdurulebilirlik.html`
- ✅ `blog/mimari-tasarimda-brise-soleil.html`
- ✅ `blog/akilli-golgeleme-enerji-maliyetleri.html`
- ✅ `blog/pergola-sistemlerinde-son-teknolojiler.html`
- ✅ `blog/dis-cephe-kaplamalarinda-malzeme-secimi.html`
- ✅ `blog/otomatik-kapi-guvenlik-standartlari.html`
- ✅ `blog/surdurulebilir-yapi-sertifikasyonlari.html`

### Stil Dosyaları
- ✅ `assets/css/style.css` - Ana stil
- ✅ `assets/css/blog.css` - Blog makale stili
- ✅ `assets/css/blog-index.css` - Blog liste stili

### JavaScript Dosyaları
- ✅ `assets/js/main.js` - Ana JavaScript
- ✅ `assets/js/blog-filter.js` - Blog filtresi

### Deploy Scriptleri
- ✅ `deploy.bat` - Windows deploy script
- ✅ `deploy.sh` - Linux/Mac deploy script
- ✅ `git-init.bat` - Git başlatma scripti

### Dökümanlar
- ✅ `README.md` - Ana döküman (EN)
- ✅ `BASLANGIC.md` - Hızlı başlangıç (TR)
- ✅ `DEPLOYMENT.md` - Deployment rehberi (EN)
- ✅ `VERCEL_REHBERI.md` - Vercel rehberi (TR)

---

## 🚀 DEPLOY ADIMLARI

### YÖNTEM 1: Deploy Script (En Kolay)

1. **Deploy scripti çalıştırın:**
```bash
# Masaüstündeki proje klasörüne gidin
cd C:\Users\Admin\Desktop\netl-tozyapi

# Deploy scriptini çalıştırın
deploy.bat
```

2. **GitHub bilgilerini girin:**
   - GitHub username
   - Password veya Personal Access Token

3. **Vercel'e deploy edin:**
   - https://vercel.com adresine gidin
   - GitHub ile giriş yapın
   - "Add New Project" → `netl-tozyapi` reposunu seçin
   - "Deploy" tıklayın

### YÖNTEM 2: Manuel Deploy

```bash
# 1. Git başlat
cd C:\Users\Admin\Desktop\netl-tozyapi
git-init.bat

# 2. GitHub remote ekle
git remote add origin https://github.com/tozsolutions/netl-tozyapi.git

# 3. GitHub'a push
git push -u origin main

# 4. Vercel'e deploy
# https://vercel.com adresinden manuel deploy
```

### YÖNTEM 3: Vercel CLI

```bash
# 1. Vercel CLI yükle
npm install -g vercel

# 2. Giriş yap
vercel login

# 3. Deploy et
cd C:\Users\Admin\Desktop\netl-tozyapi
vercel --prod
```

---

## ⚙️ VERCEL AYARLARI

### Otomatik Yapılandırma

`vercel.json` dosyası hazır:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/blog/(.*)", "destination": "/blog/index.html" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### GitHub Entegrasyonu

Vercel, GitHub repo'nuza bağlanacak:
- **Repository:** `tozsolutions/netl-tozyapi`
- **Branch:** `main`
- **Otomatik Deploy:** Her push'ta otomatik deploy

---

## 🌐 URL'ler

### GitHub
**Repository:** https://github.com/tozsolutions/netl-tozyapi

### Vercel (Deploy Sonrası)
**Production:** https://netl-tozyapi.vercel.app

### Özel Domain (Opsiyonel)
Domain'inizi bağlamak için:
1. Vercel Dashboard → Settings → Domains
2. Domain ekleyin: `tozyapi.com.tr`
3. DNS ayarlarını yapın

---

## 📋 DEPLOY SONRASI KONTROL LISTESI

Deploy sonrası kontrol edin:

- [ ] ✅ Ana sayfa yükleniyor
- [ ] ✅ Tüm blog sayfaları açılıyor
- [ ] ✅ CSS düzgün görünüyor
- [ ] ✅ JavaScript çalışıyor
- [ ] ✅ Resimler yükleniyor
- [ ] ✅ Navigasyon çalışıyor
- [ ] ✅ Mobil görünüm düzgün
- [ ] ✅ Kategori filtresi çalışıyor

---

## 🔧 ÖNEMLİ NOTLAR

### 1. GitHub Authentication

GitHub'a push yaparken:
- **Username:** GitHub kullanıcı adınız
- **Password:** Personal Access Token kullanın
  - Token oluşturma: https://github.com/settings/tokens
  - "repo" yetkisini seçin

### 2. Vercel Account

- Ücretsiz hesap yeterli: https://vercel.com/signup
- GitHub ile giriş yapın

### 3. Build Komutu

Statik site olduğu için build opsiyonel:
```bash
npm run build
```

### 4. Özel Domain

Domain'iniz varsa:
- Vercel Dashboard → Domains
- DNS ayarlarını yapın

---

## 📞 DESTEK

### Dökümanlar

- **VERCEL_REHBERI.md** - Detaylı Vercel rehberi
- **DEPLOYMENT.md** - Deployment rehberi
- **BASLANGIC.md** - Hızlı başlangıç

### Sorun Giderme

1. Build hatası → Vercel build logs kontrol edin
2. 404 hatası → vercel.json rewrites kontrol edin
3. CSS/JS yüklenmiyor → Path'leri kontrol edin (/assets/...)

---

## 🎉 BAŞARILI DEPLOY!

Siteniz hazır! Şimdi yapmanız gerekenler:

1. **GitHub'a push edin** (deploy.bat ile)
2. **Vercel'e deploy edin** (vercel.com'dan)
3. **Sitenizi kontrol edin** (https://netl-tozyapi.vercel.app)

### Sonraki Adımlar

- [ ] Logo ekleyin (`/images/` klasörüne)
- [ ] Google Analytics ekleyin
- [ ] Özel domain bağlayın (opsiyonel)
- [ ] İletişim formu backend'i ekleyin (opsiyonel)

---

**Proje Konumu:** `C:\Users\Admin\Desktop\netl-tozyapi`
**GitHub:** https://github.com/tozsolutions/netl-tozyapi
**Vercel:** https://vercel.com

**Hazırlayan:** Toz Yapı Teknolojileri
**Tarih:** Mart 2026

---

## ✨ HIZLI BAŞLANGIÇ

```bash
# 1. Deploy scripti çalıştır
cd C:\Users\Admin\Desktop\netl-tozyapi
deploy.bat

# 2. Vercel'e git ve deploy et
https://vercel.com

# 3. Siteni ziyaret et
https://netl-tozyapi.vercel.app
```

**Bu kadar!** 🎉
