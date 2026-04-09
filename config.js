// ============================================
// KANSHICRAFT - MASTER CONFIGURATION FILE
// ============================================
// File ini mengatur semua konten website
// Ubah data di sini tanpa perlu menyentuh HTML utama
// ============================================

const KANSHI_CONFIG = {
    // ========== MAINTENANCE MODE ==========
    // Set ke true untuk mengaktifkan mode maintenance
    // Semua pengunjung akan dialihkan ke maintenance.html
    MAINTENANCE_MODE: false,
    
    // Pesan yang ditampilkan saat maintenance (akan ditampilkan di maintenance page)
    MAINTENANCE_MESSAGE: "Kami sedang melakukan perbaikan dan peningkatan sistem",
    MAINTENANCE_ETA: "30", // dalam menit, atau "soon"
    
    // ========== TOKO INFO ==========
    STORE_NAME: "KanshiCraft Store",
    STORE_TAGLINE: "Give & Merchandise",
    STORE_DESCRIPTION: "Kerajinan tangan modern dengan sentuhan artistik",
    
    // Social Media Links
    INSTAGRAM_URL: "https://www.instagram.com/kroketfun.zy?igsh=aWh3dGNkazRobzB4",
    INSTAGRAM_DIRECT_ID: "17843367183524675", // ID untuk direct message
    WHATSAPP_NUMBER: "6285167089251",
    EMAIL: "rian032008@gmail.com",
    
    // ========== PRODUK LIST ==========
    // Format: 
    // {
    //   id: number (unique),
    //   name: string,
    //   desc: string,
    //   price: string (format Rupiah),
    //   category: "menggambar" | "boneka" | "aksesoris",
    //   img: string (URL gambar),
    //   stock: number (opsional),
    //   isAvailable: boolean
    // }
    PRODUCTS: [
        {
            id: 1,
            name: "Custom Chibi Art",
            desc: "Lukisan Digital, ukuran 1536 X 2048 cm, style bebas",
            price: "Rp 35.000 - 185.000",
            category: "Fanart",
            img: "https://files.catbox.moe/fvhjm2.jpg",
            stock: "&",
            isAvailable: true
        }
    ],
    
    // ========== TUTORIAL STEPS ==========
    TUTORIAL_STEPS: [
        {
            number: 1,
            icon: "fa-hand-pointer",
            title: "Pilih Produk",
            description: "Klik tombol 'Beli via DM' pada produk yang kamu inginkan."
        },
        {
            number: 2,
            icon: "fa-clipboard-list",
            title: "Review Pesanan",
            description: "Cek detail produk & harga di Kartu Pembeli yang muncul."
        },
        {
            number: 3,
            icon: "fa-copy",
            title: "Salin Pesan",
            description: "Klik tombol '📋 Salin Pesan' untuk menyalin teks pemesanan."
        },
        {
            number: 4,
            icon: "fa-instagram",
            title: "Kirim ke Instagram",
            description: "Klik '✨ Buka IG & Tempel ✨' → paste pesan di DM."
        }
    ],
    
    // ========== HERO BANNER ==========
    HERO_IMAGES: [
        "https://scontent-atl3-3.xx.fbcdn.net/v/t1.15752-9/663825272_4498277573738742_7260771414971499913_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOmNvbnRyb2wiXX0%3D&_nc_ohc=Hf2iROiOjIsQ7kNvwHwLmzO&_nc_oc=AdrJgSiAM3qh1x-SbD62h4taq3QAKkhEWqJwnVQkQtrgu5yCVM4e6niue-RYSDhVwg4RFTiZwrKYM-Se0VZ7Nmqu&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_ss=7a32e&oh=03_Q7cD5AGXY5DVFoLCCqbVxGfHm5FGrWfqUSqXtifktmY7Hod83g&oe=69FEB5B8"
    ],
    
    // ========== LOGO ==========
    LOGO_URL: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.15752-9/663922348_964992852665698_5751482842647934933_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOmNvbnRyb2wiXX0%3D&_nc_ohc=ovl6j9rtHPUQ7kNvwGF1xkC&_nc_oc=AdrbJNYdtGnhwD_YoXesDQOdipnXFbVLzzN5xElUgXpgeygy2f0GkppExOajs0dDQNt0II4M_OgYpyxnpCsw_0hH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_ss=7a32e&oh=03_Q7cD5AE_WFjX9uCfJKqOE705_s6Vmb-twZDaoqkMNJWSP4oOtA&oe=69FEB5DB",
    
    // ========== HERO CAPTIONS ==========
    HERO_CAPTIONS: [
        { icon: "fa-feather-alt", text: "kerajinan yang bercerita" },
        { icon: "fa-hands-helping", text: "handmade dengan hati" },
        { icon: "fa-instagram", text: "pesan via DM • teks otomatis" }
    ],
    
    // ========== SHIPPING INFO ==========
    SHIPPING_ESTIMATE: "2-4 hari kerja",
    SHIPPING_COST_DEFAULT: "Sesuai tarif JNE / J&T",
    
    // ========== MESSAGE TEMPLATE ==========
    getMessageTemplate: function(product) {
        const date = new Date().toLocaleDateString('id-ID', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        const categoryLabel = product.category === "menggambar" ? "🎨 Lukisan/Ilustrasi" : 
                             (product.category === "boneka" ? "🧸 Boneka Tangan" : "💍 Aksesoris");
        
        return `✨ KARTU PEMBELI KANSHI ✨

🌸 Halo Kak! Saya tertarik dengan produk ini:

📌 ${product.name}
💰 ${product.price}
🎁 Kategori: ${categoryLabel}

📅 ${date}

💫 "Setiap goresan & jahitan punya cerita."

Mohon info ketersediaan & metode pembayaran ya. Terima kasih! 🌷

— Pembeli dari ${this.STORE_NAME}`;
    },
    
    // ========== FOOTER TEXT ==========
    FOOTER_TEXT: "© 2026 KanshiCraft | Setiap goresan & jahitan punya cerita",
    FOOTER_SUBTEXT: "💬 Klik beli → salin pesan otomatis → buka Instagram DM → tempel & kirim"
};

// ============================================
// EXPORT UNTUK DIGUNAKAN DI HTML
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KANSHI_CONFIG;
}
