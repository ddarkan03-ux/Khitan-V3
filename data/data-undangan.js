/* DATA UNDANGAN KHITAN
   Ganti seluruh isi file ini dengan file data/data-undangan.js dari ZIP klien
   (strukturnya sama), lalu salin folder "foto" dari ZIP ke folder ini. Selesai.
   FOTO: 4 foto berbeda diatur di bagian "foto" (lihat PETUNJUK.txt, bagian FOTO).
   Kolom "ucapan" (ucapan dari tamu) opsional: tambahkan sendiri bila ada. */
const DATA_UNDANGAN = {
  "kategori": "khitan",
  "kode": "umamv3",
  "siteUrl": "https://ddarkan03-ux.github.io/Khitan-V3/",
  "firebase": { "apiKey": "AIzaSyBEA92p-xAjSyvDTWT09-zsuEDyjZg2dZw", "projectId": "undangan-saya" },
  "ucapanPublik": true,
  "model": "Khitan 3 - Lentera Zamrud",
  "pemesan": { "nama": "Ibu Siti Aminah", "whatsapp": "6281234567890" },
  "foto": {
    "sampul": "foto/sampul.jpg",
    "latarUtama": "foto/latar-utama.jpg",
    "bingkai": "foto/bingkai.jpg",
    "penutup": "foto/penutup.jpg",
    "pratinjau": "foto/pratinjau.jpg"
  },
  "putra": { "nama": "Chairul Umam", "panggilan": "Umam", "ayah": "Budi Santoso", "ibu": "Siti Aminah", "putraKe": "2" },
  "khitan": { "tanggal": "2026-12-20", "jamMulai": "09:00", "jamSelesai": "12:00", "tempat": "Kediaman Keluarga Bpk. Budi Santoso", "alamat": "Jl. Melati No. 12, Bekasi, Jawa Barat", "maps": "https://www.google.com/maps/search/?api=1&query=Bekasi" },
  "syukuran": null,
  "galeri": ["foto/galeri-1.jpg", "foto/galeri-2.jpg", "foto/galeri-3.jpg", "foto/galeri-4.jpg", "foto/galeri-5.jpg", "foto/galeri-6.jpg"],
  "hadiah": [{ "bank": "BCA", "nomor": "1234567890", "atasNama": "Budi Santoso", "tampil": true }, { "bank": "BRI", "nomor": "0987654321", "atasNama": "Siti Aminah", "tampil": true }],
  "turutMengundangTampil": true,
  "turutMengundang": ["Keluarga Besar Bpk. Ahmad", "Bpk. H. Slamet & Ibu Siti"],
  "musik": "",
  "catatan": "",
  "ucapan": []
};
