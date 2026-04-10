const KANSHI_CONFIG = {
    MAINTENANCE_MODE: false,
    MAINTENANCE_MESSAGE: "Kami sedang melakukan perbaikan dan peningkatan sistem",
    MAINTENANCE_ETA: "30",
    
    STORE_NAME: "KanshiCraft Store",
    STORE_TAGLINE: "Give & Merchandise",
    STORE_DESCRIPTION: "Kerajinan tangan modern dengan sentuhan artistik",
    
    INSTAGRAM_URL: "https://www.instagram.com/kroketfun.zy",
    INSTAGRAM_DIRECT_ID: "kroketfun.zy",
    TELEGRAM_USERNAME: "@kroketfun",
    EMAIL: "rian032008@gmail.com",
    
    DEFAULT_SHIPPING_ESTIMATE: "2-4 hari kerja",
    
    PRODUCTS: [
        {
            id: 1,
            name: "Custom Chibi Art",
            desc: "S&K CUSTOM CHIBI ART\n\n1. DP 50% di awal, lunas 50% sebelum file dikirim.\n2. Maksimal 3 kali revisi (sketsa).\n3. Pengerjaan 5–7 hari kerja.\n4. File diberikan dalam format PNG.\n5. Tidak menerima NSFW & Mecha.",
            price: "Rp 35.000 - 75.000",
            category: "Fanart",
            img: "https://i.pinimg.com/736x/2e/6d/6a/2e6d6a0b1c4e8f9a2b3c4d5e6f7a8b9c.jpg",
            stock: 10,
            isAvailable: true,
            shippingEstimate: "5-7 hari kerja"
        },
        {
            id: 2,
            name: "Boneka Katsuki Bakugou",
            desc: "Tinggi: ± 20 cm\nBahan: Benang katun berkualitas\nTeknik: Rajut manual 100% buatan tangan\n\n⚠️ Hindari pencucian mesin. Cukup lap dengan kain lembap.",
            price: "Rp 275.000",
            category: "boneka",
            img: "https://i.pinimg.com/736x/3f/7e/8b/3f7e8b1a2c3d4e5f6a7b8c9d0e1f2a3b.jpg",
            stock: 5,
            isAvailable: true,
            shippingEstimate: "3-5 hari kerja"
        },
        {
            id: 3,
            name: "Custom PNGtuber",
            desc: "S&K CUSTOM PNGTUBER\n\n1. DP 50% di awal.\n2. Memiliki 4 ekspresi base default.\n3. Pengerjaan 7–14 hari kerja.\n4. File diberikan dalam format PNG.",
            price: "Rp 80.000 - 100.000",
            category: "Fanart",
            img: "https://i.pinimg.com/736x/4a/8b/2c/4a8b2c3d4e5f6a7b8c9d0e1f2a3b4c5d.jpg",
            stock: 5,
            isAvailable: true,
            shippingEstimate: "7-14 hari kerja"
        },
        {
            id: 4,
            name: "YCH Stiker",
            desc: "S&K YCH STIKER\n\n1. DP 50% di awal.\n2. Tidak ada revisi karena base sudah disediakan.\n3. Pengerjaan 5-7 hari kerja.\n4. File diberikan dalam format PNG.",
            price: "Rp 50.000",
            category: "aksesoris",
            img: "https://i.pinimg.com/736x/5b/9c/3d/5b9c3d4e5f6a7b8c9d0e1f2a3b4c5d6e.jpg",
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
    
    HERO_IMAGES: [
        "https://i.pinimg.com/736x/6c/8d/3e/6c8d3e4f5a6b7c8d9e0f1a2b3c4d5e6f.jpg"
    ],
    
    LOGO_URL: "https://i.pinimg.com/736x/1a/2b/3c/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.jpg",
    
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
