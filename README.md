# 🏠 Airbnb Clone - Modern Konaklama Platformu

Next.js 15 ve modern web teknolojileri kullanılarak geliştirilmiş, Airbnb'den ilham alınmış konaklama rezervasyon platformu.

## 🌟 Özellikler

- 🔐 **Güvenli Kimlik Doğrulama** - NextAuth ile Google ve GitHub OAuth
- 🏡 **Mülk Yönetimi** - Konaklama yerlerini listeleme, düzenleme ve silme
- 📅 **Rezervasyon Sistemi** - Tarih seçimi ve rezervasyon yönetimi
- ❤️ **Favori Sistemi** - Beğenilen mülkleri kaydetme
- 🗺️ **Interaktif Haritalar** - React Leaflet ile konum görselleştirme
- 📱 **Responsive Tasarım** - Tüm cihazlarda uyumlu arayüz
- ☁️ **Resim Yönetimi** - Cloudinary entegrasyonu ile resim upload
- 🔍 **Gelişmiş Filtreleme** - Lokasyon, tarih ve misafir sayısına göre arama

## 🛠️ Teknoloji Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Leaflet** - Interactive maps
- **Zustand** - State management

### Backend & Database
- **Prisma** - Modern database ORM
- **MongoDB** - NoSQL database
- **NextAuth.js** - Authentication solution

### External Services
- **Cloudinary** - Image hosting and optimization
- **Google OAuth** - Google authentication
- **GitHub OAuth** - GitHub authentication

### Utility Libraries
- **world-countries** - Country data and utilities
- **react-hook-form** - Form state management
- **react-hot-toast** - Notification system
- **date-fns** - Date utility library

## 📋 Gereksinimler

- Node.js 18.0 veya üzeri
- npm veya yarn package manager
- MongoDB Atlas hesabı
- Cloudinary hesabı
- Google Developer Console projesi
- GitHub OAuth App

## 🚀 Kurulum

1. **Depoyu klonlayın**
```bash
git clone <your-repo-url>
cd airbnb-clone
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Environment variables ayarlayın**
`.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
```env
# Database
DATABASE_URL="your_mongodb_connection_string"

# NextAuth
NEXTAUTH_SECRET="your_nextauth_secret"

# OAuth Providers
GITHUB_ID="your_github_oauth_id"
GITHUB_SECRET="your_github_oauth_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
```

4. **Prisma ayarlarını yapın**
```bash
npx prisma generate
npx prisma db push
```

5. **Development server'ı başlatın**
```bash
npm run dev
# veya
yarn dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 🏗️ Proje Yapısı

```
airbnb-clone/
├── app/
│   ├── actions/           # Server actions
│   ├── api/              # API routes
│   ├── components/       # React components
│   ├── hooks/            # Custom hooks
│   ├── libs/             # Utility libraries
│   ├── types/            # TypeScript type definitions
│   └── globals.css       # Global styles
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── next.config.js        # Next.js configuration
```

## 📱 Ana Sayfalar

- **Ana Sayfa** - Mülk listeleme ve filtreleme
- **Mülk Detay** - Detaylı mülk bilgileri ve rezervasyon
- **Favoriler** - Beğenilen mülkler
- **Rezervasyonlar** - Kullanıcı rezervasyonları
- **Mülklerim** - Kullanıcının sahip olduğu mülkler
- **Mülk Ekle** - Yeni mülk ekleme formu

## 🔧 Önemli Özellikler

### Kimlik Doğrulama
- Google ve GitHub ile OAuth entegrasyonu
- NextAuth.js ile session yönetimi
- Kullanıcı profili ve avatarı

### Mülk Yönetimi
- Resim upload (Cloudinary)
- Kategori seçimi (Beach, Windmills, Modern, etc.)
- Konum seçimi (world-countries data)
- Dinamik fiyatlandırma

### Rezervasyon Sistemi
- Tarih çakışma kontrolü
- Dinamik fiyat hesaplama
- Rezervasyon onay sistemi

### Harita Entegrasyonu
- Interactive Leaflet haritaları
- Mülk konumlarının görselleştirilmesi
- Zoom ve pan özellikları

## 🌐 Deployment

### Vercel (Önerilen)
1. GitHub'a push edin
2. Vercel'e import edin
3. Environment variables'ları ayarlayın
4. Deploy edin

### Environment Variables
Production ortamında aşağıdaki değişkenlerin ayarlanması gerekir:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `GITHUB_ID` & `GITHUB_SECRET`
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

## 🤝 Katkıda Bulunma

Bu proje eğitim amaçlı geliştirilmiştir. Katkılarınızı memnuniyetle karşılarım:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Sorularınız için:
- GitHub Issues kullanabilirsiniz
- Email: emre.ucarr1@gmail.com

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!

## 🙏 Teşekkürler

Bu proje geliştirilirken çeşitli kaynaklardan ilham alınmış ve eğitim materyallerinden yararlanılmıştır. Modern web geliştirme tekniklerini öğrenmek ve pratik yapmak amacıyla oluşturulmuştur.
