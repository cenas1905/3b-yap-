# 3B Yapı Winsa Showcase

Bu proje, "3B Yapı" Winsa bayiliği için hazırlanmış profesyonel, modern ve yönetilebilir bir ürün vitrini web sitesidir.
Site tamamen **HTML, CSS ve Vanilla JavaScript** ile yazılmış olup, harici bir veritabanına ihtiyaç duymadan Google API üzerinden verileri çekebilecek şekilde tasarlanmıştır.

## Siteyi Alan Kişi Nasıl Ürün Ekleyecek?

Bu sitenin en büyük özelliği, alan kişinin (müşterinin) hiçbir kod bilmeden siteye yeni ürünler ekleyebilmesidir.

1. `index.html` dosyasının en altındaki `<script>` bölümünde yer alan `googleStickApiKey` değişkenini kendi API anahtarınız ile değiştirin.
2. Müşteri (örneğin Google Sheets veya Google Apps Script üzerinden) listesine yeni bir Winsa ürünü eklediğinde, site açılışında `fetchProducts()` fonksiyonu bu API'ye otomatik olarak bağlanır.
3. Yeni ürünler sayfada şık kartlar (resim, başlık ve açıklama) halinde sergilenir.

## Özellikler

*   **Mobil Uyumlu (Responsive):** Telefon, tablet ve bilgisayarlarda kusursuz görünür.
*   **Modern Renk Paleti:** Winsa Mavisi ve Koyu Antrasit tonları (Kurumsal kimliğe uygun).
*   **Hızlı Yüklenme:** Sayfa içi CSS ve JS kullanıldığı için harici kütüphane yükünü azaltır ve SEO dostudur.
*   **Tak-Çalıştır Veri Çekme:** JavaScript API Entegrasyonu hazırdır. Sadece gerçek Endpoint URL'sini girmeniz yeterlidir.

## İletişim & Destek

Bu temanın tasarımı Yapay Zeka Ajansı (Yaayzeka) tarafından planlanmış ve Baş Yazılım Mühendisi tarafından kodlanmıştır.
Geliştirici: [GitHub/cenas1905](https://github.com/cenas1905)
