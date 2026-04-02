# VERCEL DEPLOYMENT REHBERİ
## Toz Yapı - netl-tozyapi

Bu rehber, web sitesinizi Vercel'e deploy etmek için gerekli tüm adımları içerir.

---

## 📋 Önkoşullar

1. **GitHub Hesabı** - https://github.com
2. **Vercel Hesabı** - https://vercel.com (ücretsiz)
3. **Git** - Bilgisayarınızda yüklü olmalı

---

## 🚀 YÖNTEM 1: Vercel Dashboard (ÖNERİLEN - En Kolay)

### Adım 1: GitHub'a Push Yapın

```bash
# Desktop'taki proje klasörüne gidin
cd C:\Users\Admin\Desktop\netl-tozyapi

# Deploy scriptini çalıştırın (Windows)
deploy.bat

# Veya manuel olarak:
git init
git add .
git commit -m "Toz Yapı web sitesi"
git remote add origin https://github.com/tozsolutions/netl-tozyapi.git
git branch -M main
git push -u origin main
```

**NOT:** GitHub username ve password/token istenecektir.

### Adım 2: Vercel'de Proje Oluşturun

1. **Vercel'e gidin**: https://vercel.com/dashboard
2. **GitHub ile giriş yapın**: "Continue with GitHub" butonuna tıklayın
3. **Yeni proje ekleyin**: "Add New Project" → "Import Git Repository"
4. **Repository seçin**: 
   - "tozsolutions" organizasyonunu bulun
   - "netl-tozyapi" reposunu seçin
   - "Import" butonuna tıklayın

### Adım 3: Deploy Ayarları

**Configure Project** sayfasında:

| Ayar | Değer |
|------|-------|
| Framework Preset | `Vite` veya `Other` |
| Root Directory | `./` (dokunmayın) |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

### Adım 4: Deploy Edin

1. **"Deploy"** butonuna tıklayın
2. Build işlemi tamamlanana kadar bekleyin (~1-2 dakika)
3. **"Continue to Dashboard"** tıklayın
4. **"Visit"** ile sitenizi görün!

**Vercel URL:** `https://netl-tozyapi.vercel.app`

---

## 🖥️ YÖNTEM 2: Vercel CLI (Komut Satırı)

### Adım 1: Vercel CLI Yükleyin

```bash
npm install -g vercel
```

### Adım 2: Vercel'e Giriş Yapın

```bash
vercel login
```

Tarayıcı açılacak, GitHub ile giriş yapın.

### Adım 3: Deploy Edin

```bash
# Desktop'taki proje klasörüne gidin
cd C:\Users\Admin\Desktop\netl-tozyapi

# Preview deploy (test)
vercel

# Production deploy
vercel --prod
```

---

## ⚙️ VERCEL AYARLARI

### Otomatik Deploy

Vercel, GitHub'a her push yaptığınızda otomatik deploy yapar:

| Branch | Deploy Type | URL |
|--------|-------------|-----|
| `main` | Production | `https://netl-tozyapi.vercel.app` |
| Diğer branch | Preview | `https://netl-tozyapi-[hash].vercel.app` |
| Pull Request | Preview | PR'de gösterilir |

### Environment Variables

Gerekli environment variables'ları ekleyin:

1. Vercel Dashboard → Project Settings → Environment Variables
2. Şu değişkenleri ekleyin (gerekirse):

```bash
NEXT_PUBLIC_SITE_URL=https://netl-tozyapi.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (Google Analytics için)
```

### Custom Domain (Özel Alan Adı)

Kendi domain'inizi bağlamak için:

1. Vercel Dashboard → Project Settings → Domains
2. Domain ekleyin: `tozyapi.com` veya `www.tozyapi.com`
3. DNS ayarlarını yapın:

**Root Domain için:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**WWW için:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔧 SORUN GİDERME

### Build Hatası

**Hata:** `Build failed`

**Çözüm:**
1. Vercel Dashboard → Activity → Deployments → Hatalı deploy
2. "View Build Logs" tıklayın
3. Hata detaylarını kontrol edin
4. `vercel.json` dosyasını kontrol edin

### 404 Hatası (Blog Sayfaları)

**Hata:** Blog sayfaları 404 veriyor

**Çözüm:** `vercel.json` dosyasının doğru olduğundan emin olun:

```json
{
  "rewrites": [
    { "source": "/blog/(.*)", "destination": "/blog/index.html" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### CSS/JS Yüklenmiyor

**Hata:** Stil ve script dosyaları yüklenmiyor

**Çözüm:** HTML dosyalarındaki path'lerin doğru olduğundan emin olun:

```html
<!-- DOĞRU -->
<link rel="stylesheet" href="/assets/css/style.css">
<script src="/assets/js/main.js"></script>

<!-- YANLIŞ -->
<link rel="stylesheet" href="./assets/css/style.css">
<script src="./assets/js/main.js"></script>
```

### GitHub Push Hatası

**Hata:** `Authentication failed`

**Çözüm:**
1. GitHub Personal Access Token oluşturun:
   - https://github.com/settings/tokens
   - "Generate new token" → "repo" yetkisini seçin
   - Token'ı kopyalayın

2. Token ile push yapın:
```bash
git push https://YOUR_USERNAME:YOUR_TOKEN@github.com/tozsolutions/netl-tozyapi.git main
```

---

## 📊 DEPLOY SONRASI KONTROL LİSTESİ

Deploy sonrası şunları kontrol edin:

- [ ] Ana sayfa yükleniyor
- [ ] Tüm blog sayfaları açılıyor
- [ ] CSS düzgün yükleniyor
- [ ] JavaScript çalışıyor
- [ ] Resimler görünüyor
- [ ] Navigasyon çalışıyor
- [ ] Mobil görünüm düzgün
- [ ] İletişim formu çalışıyor (backend varsa)

---

## 🔗 ÖNEMLİ LİNKLER

| Hizmet | URL |
|--------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Vercel Docs | https://vercel.com/docs |
| GitHub Repo | https://github.com/tozsolutions/netl-tozyapi |
| Vercel CLI | https://vercel.com/docs/cli |
| Vercel Support | https://vercel.com/support |

---

## 📞 DESTEK

Sorun yaşarsanız:

1. **Vercel Dashboard** → Deploy logs kontrol edin
2. **Vercel Docs** okuyun: https://vercel.com/docs
3. **Vercel Support** başvurun: https://vercel.com/support

---

## 🎉 BAŞARILI DEPLOY!

Siteniz artık canlı! 

**Production URL:** `https://netl-tozyapi.vercel.app`

Her `git push` yaptığınızda otomatik olarak deploy edilecektir.

---

**Son Güncelleme:** Mart 2026
**Toz Yapı Teknolojileri**
