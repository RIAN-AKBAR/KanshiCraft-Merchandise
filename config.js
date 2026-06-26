const KANSHI_CONFIG = {
    MAINTENANCE_MODE: false,
    MAINTENANCE_MESSAGE: "Kami sedang melakukan perbaikan dan peningkatan sistem",
    MAINTENANCE_ETA: "2-3 jam",
    
    STORE_NAME: "KanshiCraft Store",
    STORE_TAGLINE: "Give & Merchandise",
    STORE_DESCRIPTION: "Kerajinan tangan modern dengan sentuhan artistik",
    
    INSTAGRAM_URL: "https://www.instagram.com/kroketfun.zy?igsh=aWh3dGNkazRobzB4",
    INSTAGRAM_DIRECT_ID: "17843367183524675",
    TELEGRAM_USERNAME: "@kroketfun",
    EMAIL: "rian032008@gmail.com",
    
    DEFAULT_SHIPPING_ESTIMATE: "2-4 hari kerja",
    
    PRODUCTS: [
        {
            id: 1,
            name: "Custom Chibi Art",
            desc: "S&K CUSTOM CHIBI ART\n\n1. DP 50% di awal, lunas 50% sebelum file dikirim. DP tidak refund jika pesanan dibatalkan klien.\n2. Maksimal 3 kali revisi (sketsa). Revisi tambahan kena biaya.\n3. Pengerjaan 5–7 hari kerja (tergantung antrean).\n4. File diberikan dalam format PNG melalui drive.\n5. Tidak menerima pembuatan NSFW & Mecha.",
            price: "Rp 35.000 - 75.000",
            category: "Fanart",
            img: "https://cdn.phototourl.com/free/2026-04-09-c92ea1ec-b18c-483e-a4d2-10380077d3e5.jpg",
            stock: 10,
            isAvailable: true,
            shippingEstimate: "5-7 hari kerja"
        },
        {
            id: 2,
            name: "Boneka Katsuki Bakugou",
            desc: "Tinggi: ± 20 cm\nBahan: Benang katun berkualitas & dakron sebagai pengisi\nTeknik: Rajut manual dengan tusuk rapat – 100% buatan tangan\n\n⚠️ Hindari pencucian mesin. Cukup lap dengan kain lembap dan keringkan di tempat teduh. Jangan direndam terlalu lama agar bentuknya tetap prima. ⚠️",
            price: "Rp 275.000",
            category: "boneka",
            img: "https://placehold.co/500x500/1a1a2e/e6bc91?text=Boneka+Bakugou",
            stock: 5,
            isAvailable: true,
            shippingEstimate: "3-5 hari kerja"
        },
        {
            id: 3,
            name: "Custom PNGtuber",
            desc: "S&K CUSTOM PNGTUBER\n\n1. DP 50% di awal, lunas 50% sebelum file dikirim. DP tidak refund jika pesanan dibatalkan klien.\n2. Memiliki 4 ekspresi base default.\n3. Pengerjaan 7–14 hari kerja (tergantung jumlah ekspresi dan kompleksitas aksesori).\n4. File diberikan dalam format PNG melalui drive.",
            price: "Rp 80.000 - 100.000",
            category: "Fanart",
            img: "https://files.catbox.moe/zg3qzw.jpg",
            stock: 5,
            isAvailable: true,
            shippingEstimate: "7-14 hari kerja"
        },
        {
            id: 4,
            name: "YCH Stiker",
            desc: "S&K YCH STIKER\n\n1. DP 50% di awal, lunas 50% sebelum file dikirim. DP tidak refund jika pesanan dibatalkan klien.\n2. Tidak ada revisi karena base sudah disediakan.\n3. Pengerjaan 5-7 hari kerja (tergantung antrian).\n4. File diberikan dalam format PNG melalui drive.",
            price: "Rp 50.000",
            category: "aksesoris",
            img: "https://placehold.co/500x500/1a1a2e/e6bc91?text=YCH+Stiker",
            stock: 5,
            isAvailable: true,
            shippingEstimate: "5-7 hari kerja"
        }
    ],
    
    TUTORIAL_STEPS: [
        { number: 1, icon: "fa-hand-pointer", title: "Pilih Produk", description: "Klik tombol pada produk yang kamu inginkan." },
        { number: 2, icon: "fa-cart-plus", title: "Tambah ke Keranjang", description: "Klik Tambah untuk memasukkan produk ke keranjang." },
        { number: 3, icon: "fa-clipboard-list", title: "Review Pesanan", description: "Cek detail produk & harga di ringkasan." },
        { number: 4, icon: "fa-telegram", title: "Kirim Pesan", description: "Pilih Telegram (auto terisi) atau IG (copy-paste)." }
    ],
    
    // ✅ LOGO BARU
    LOGO_URL: "https://files.catbox.moe/q7uu3l.png",
    
    // ✅ BANNER BARU
    HERO_IMAGES: [
        "https://files.catbox.moe/17s9o5.png"
    ],
    
    HERO_CAPTIONS: [
        { icon: "fa-feather-alt", text: "kerajinan yang bercerita" },
        { icon: "fa-hands-helping", text: "handmade dengan hati" },
        { icon: "fa-star", text: "4.9 dari 2.5 Juta rating" },
        { icon: "fa-telegram", text: "pesan via Telegram • auto fill" }
    ],
    
    SHIPPING_ESTIMATE: "2-4 hari kerja",
    SHIPPING_COST_DEFAULT: "Sesuai tarif JNE / J&T",
    
    getMessageTemplate: function(product) {
        const date = new Date().toLocaleDateString('id-ID', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        let categoryLabel = "🎨 Lukisan/Ilustrasi";
        if (product.category === "boneka") categoryLabel = "🧸 Boneka Tangan";
        else if (product.category === "aksesoris") categoryLabel = "💍 Aksesoris";
        else if (product.category === "Fanart") categoryLabel = "🎨 Custom Fanart / Digital";
        
        let shippingEst = product.shippingEstimate || this.DEFAULT_SHIPPING_ESTIMATE;
        shippingEst = shippingEst.replace(/\(.*?\)/g, '').trim();
        
        return `✨ KARTU PEMBELI KANSHI ✨

🌸 Halo Kak! Saya tertarik dengan produk ini:

📌 ${product.name}
💰 ${product.price}
🎁 Kategori: ${categoryLabel}
⏱️ Estimasi Pengiriman: ${shippingEst}

📅 ${date}

💫 "Setiap goresan & jahitan punya cerita."

Mohon info ketersediaan & metode pembayaran ya. Terima kasih! 🌷

— Pembeli dari ${this.STORE_NAME}`;
    },
    
    FOOTER_TEXT: "© 2026 KanshiCraft | Setiap goresan & jahitan punya cerita",
    FOOTER_SUBTEXT: "⭐ 4.9 • 2.5 Juta rating • 500rb+ ulasan"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = KANSHI_CONFIG;
}
