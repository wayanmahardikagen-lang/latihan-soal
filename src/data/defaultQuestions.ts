import { Question } from '../types';
import imgBuahJeruk from '../assets/images/soal_buah_jeruk_1795060920665.jpg';
import imgPerpustakaan from '../assets/images/soal_perpustakaan_buku_1795060919753.jpg';
import imgKebunBunga from '../assets/images/soal_kebun_bunga_1795060922028.jpg';
import imgTokoAlatTulis from '../assets/images/soal_toko_alat_tulis_1795060922063.jpg';
import imgPanenMangga from '../assets/images/soal_panen_mangga_1795060922322.jpg';

/**
 * Bank Soal Tes Sumatif Matematika - Kelas III (Tiga)
 * SD Negeri 1 Loloan Timur - Jembrana
 * Lingkup Materi: Operasi Bilangan (Kurikulum Merdeka Fase B)
 * Komposisi:
 * - 18 Soal Pilihan Ganda (PG) — 4 pilihan jawaban
 * - 3 Soal Pilihan Ganda Kompleks (PGK) — 3 pilihan jawaban (>1 jawaban benar)
 * - 9 Soal Pilihan Ganda Kompleks Kategori — 3 pernyataan (Benar / Salah)
 * Dilengkapi 11 ilustrasi gambar dan diagram matematika kontekstual.
 */

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN A: PILIHAN GANDA (18 SOAL: No. 1 - 18)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Nilai Tempat Bilangan Cacah',
    difficulty: 'Mudah',
    diagramType: 'nilai_tempat_kubus',
    imageCaption: 'Gambar 1. Kubus Nilai Tempat (Ratusan, Puluhan, dan Satuan)',
    text: 'Perhatikan gambar kubus nilai tempat di atas! Bilangan cacah yang ditunjukkan oleh kumpulan kubus tersebut adalah...',
    options: [
      { id: 'A', text: '364' },
      { id: 'B', text: '346' },
      { id: 'C', text: '436' },
      { id: 'D', text: '643' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada gambar terdapat:\n• 3 lempeng ratusan = 300\n• 4 batang puluhan = 40\n• 6 kubus satuan = 6\nJumlah seluruhnya = 300 + 40 + 6 = 346.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Penjumlahan Tanpa Menyimpan',
    difficulty: 'Mudah',
    text: 'Hasil dari penjumlahan bilangan 245 + 134 adalah...',
    options: [
      { id: 'A', text: '369' },
      { id: 'B', text: '379' },
      { id: 'C', text: '389' },
      { id: 'D', text: '479' },
    ],
    correctAnswer: 'B',
    explanation:
      'Penjumlahan bersusun tanpa menyimpan:\n• Satuan: 5 + 4 = 9\n• Puluhan: 40 + 30 = 70\n• Ratusan: 200 + 100 = 300\nJadi, 245 + 134 = 379.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Penjumlahan Dengan Menyimpan',
    difficulty: 'Mudah',
    imageUrl: imgBuahJeruk,
    imageCaption: 'Gambar 2. Kios Buah Bu Sari (Keranjang Jeruk dan Apel)',
    text: 'Di kios buah Bu Sari terdapat 268 buah jeruk dan 157 buah apel di dalam keranjang. Berapakah jumlah seluruh buah jeruk dan apel yang ada di kios Bu Sari?',
    options: [
      { id: 'A', text: '415 buah' },
      { id: 'B', text: '425 buah' },
      { id: 'C', text: '435 buah' },
      { id: 'D', text: '325 buah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hitung dengan penjumlahan bersusun menyimpan:\n• Satuan: 8 + 7 = 15 (tulis 5, simpan 1 puluhan)\n• Puluhan: 6 + 5 + 1 = 12 (tulis 2, simpan 1 ratusan)\n• Ratusan: 2 + 1 + 1 = 4\nJadi, 268 + 157 = 425 buah.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pengurangan Tanpa Meminjam',
    difficulty: 'Mudah',
    text: 'Hasil dari pengurangan 687 − 253 adalah...',
    options: [
      { id: 'A', text: '424' },
      { id: 'B', text: '434' },
      { id: 'C', text: '444' },
      { id: 'D', text: '534' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pengurangan bersusun tanpa meminjam:\n• Satuan: 7 − 3 = 4\n• Puluhan: 8 − 5 = 3\n• Ratusan: 6 − 2 = 4\nJadi, 687 − 253 = 434.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Pengurangan Dengan Meminjam',
    difficulty: 'Sedang',
    imageUrl: imgPerpustakaan,
    imageCaption: 'Gambar 3. Ruang Perpustakaan SD Negeri 1 Loloan Timur',
    text: 'Perpustakaan SD Negeri 1 Loloan Timur memiliki koleksi 524 buku cerita. Pada minggu ini, sebanyak 168 buku cerita sedang dipinjam oleh siswa. Berapa banyak buku cerita yang masih tersisa di rak perpustakaan?',
    options: [
      { id: 'A', text: '346 buku' },
      { id: 'B', text: '356 buku' },
      { id: 'C', text: '366 buku' },
      { id: 'D', text: '456 buku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hitung dengan pengurangan bersusun meminjam:\n• Satuan: pinjam 1 puluhan → 14 − 8 = 6\n• Puluhan: sisa 1 puluhan, pinjam 1 ratusan → 11 − 6 = 5\n• Ratusan: sisa 4 ratusan → 4 − 1 = 3\nJadi, sisa buku cerita = 524 − 168 = 356 buku.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Operasi Hitung Penjumlahan & Pengurangan',
    difficulty: 'Sedang',
    text: 'Koperasi sekolah memiliki persediaan 315 buku tulis. Keesokan harinya, datang kiriman baru sebanyak 145 buku tulis. Kemudian sebanyak 230 buku tulis terjual kepada siswa. Sisa buku tulis di koperasi sekolah sekarang adalah...',
    options: [
      { id: 'A', text: '210 buku tulis' },
      { id: 'B', text: '220 buku tulis' },
      { id: 'C', text: '230 buku tulis' },
      { id: 'D', text: '240 buku tulis' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kerjakan berurutan dari kiri ke kanan:\n• Persediaan + kiriman baru = 315 + 145 = 460 buku tulis.\n• Dikurangi yang terjual = 460 − 230 = 230 buku tulis.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Perkalian pada Garis Bilangan',
    difficulty: 'Mudah',
    diagramType: 'garis_bilangan_lompat',
    imageCaption: 'Gambar 4. Lompatan Bilangan pada Garis Bilangan',
    text: 'Perhatikan garis bilangan di atas! Kalimat matematika perkalian yang sesuai dengan lompatan pada garis bilangan tersebut adalah...',
    options: [
      { id: 'A', text: '4 × 6 = 24' },
      { id: 'B', text: '6 × 3 = 18' },
      { id: 'C', text: '4 + 6 = 10' },
      { id: 'D', text: '5 × 6 = 30' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada garis bilangan terdapat 4 kali lompatan dengan besar setiap lompatan adalah 6 satuan (6 + 6 + 6 + 6 = 24).\nBentuk perkaliannya adalah 4 × 6 = 24.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Konsep Perkalian Susunan Benda',
    difficulty: 'Mudah',
    diagramType: 'susunan_telur',
    imageCaption: 'Gambar 5. Susunan Telur di Dalam Rak',
    text: 'Ibu menata telur di dalam rak seperti pada gambar di atas. Terdapat 4 baris telur dan setiap baris berisi 6 butir telur. Jumlah seluruh telur di dalam rak tersebut adalah...',
    options: [
      { id: 'A', text: '18 butir' },
      { id: 'B', text: '20 butir' },
      { id: 'C', text: '24 butir' },
      { id: 'D', text: '28 butir' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah baris = 4 baris.\nIsi setiap baris = 6 butir telur.\nTotal telur = 4 × 6 = 6 + 6 + 6 + 6 = 24 butir.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Perkalian Bilangan Dua Angka',
    difficulty: 'Mudah',
    imageUrl: imgKebunBunga,
    imageCaption: 'Gambar 6. Siswa Kelas III Merawat Kebun Bunga Matahari Sekolah',
    text: 'Siswa kelas III merawat 6 petak kebun bunga matahari di halaman sekolah. Jika di setiap petak terdapat 14 batang bunga matahari, berapakah jumlah seluruh bunga matahari di kebun sekolah tersebut?',
    options: [
      { id: 'A', text: '74 batang' },
      { id: 'B', text: '84 batang' },
      { id: 'C', text: '94 batang' },
      { id: 'D', text: '64 batang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Total bunga matahari = 6 × 14.\nDengan menguraikan bilangan: (6 × 10) + (6 × 4) = 60 + 24 = 84 batang.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Perkalian Bersusun',
    difficulty: 'Sedang',
    text: 'Hasil perkalian dari 28 × 4 adalah...',
    options: [
      { id: 'A', text: '92' },
      { id: 'B', text: '102' },
      { id: 'C', text: '112' },
      { id: 'D', text: '122' },
    ],
    correctAnswer: 'C',
    explanation:
      'Hitung dengan cara bersusun atau uraian:\n• 20 × 4 = 80\n• 8 × 4 = 32\n• 80 + 32 = 112.\nJadi, 28 × 4 = 112.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Konsep Pembagian (Pengurangan Berulang)',
    difficulty: 'Mudah',
    text: 'Bentuk pengurangan berulang 42 − 7 − 7 − 7 − 7 − 7 − 7 = 0 dapat ditulis dalam kalimat pembagian menjadi...',
    options: [
      { id: 'A', text: '42 ÷ 7 = 5' },
      { id: 'B', text: '42 ÷ 7 = 6' },
      { id: 'C', text: '42 ÷ 6 = 8' },
      { id: 'D', text: '42 ÷ 7 = 7' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bilangan 42 dikurangi angka 7 secara berulang sebanyak 6 kali sampai habis (0).\nMaka bentuk pembagiannya adalah 42 ÷ 7 = 6.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Pembagian Sama Banyak',
    difficulty: 'Sedang',
    diagramType: 'kantong_kelereng',
    imageCaption: 'Gambar 7. Pembagian 32 Kelereng ke Dalam 4 Kotak Sama Banyak',
    text: 'Made memiliki 32 butir kelereng. Kelereng tersebut dimasukkan sama banyak ke dalam 4 kotak seperti tampak pada ilustrasi di atas. Banyak kelereng di setiap kotak adalah...',
    options: [
      { id: 'A', text: '6 butir' },
      { id: 'B', text: '7 butir' },
      { id: 'C', text: '8 butir' },
      { id: 'D', text: '9 butir' },
    ],
    correctAnswer: 'C',
    explanation:
      '32 kelereng dibagi sama rata ke dalam 4 kotak:\n32 ÷ 4 = 8 butir kelereng di setiap kotak (karena 4 × 8 = 32).',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Pembagian Bilangan Dua Angka',
    difficulty: 'Sedang',
    text: 'Ibu guru membagikan 75 lembar kertas origami secara merata kepada 5 kelompok belajar siswa kelas III. Banyak kertas origami yang diterima oleh setiap kelompok adalah...',
    options: [
      { id: 'A', text: '12 lembar' },
      { id: 'B', text: '14 lembar' },
      { id: 'C', text: '15 lembar' },
      { id: 'D', text: '16 lembar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak kertas tiap kelompok = 75 ÷ 5.\nCara uraian: (50 ÷ 5) + (25 ÷ 5) = 10 + 5 = 15 lembar.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Sifat Pertukaran (Komutatif)',
    difficulty: 'Sedang',
    text: 'Berdasarkan sifat pertukaran (komutatif) pada perkalian, bilangan yang tepat untuk menggantikan huruf n pada kalimat matematika 9 × n = 15 × 9 adalah...',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '9' },
      { id: 'C', text: '15' },
      { id: 'D', text: '24' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada sifat pertukaran (komutatif) perkalian berlaku a × b = b × a.\nMaka 9 × 15 = 15 × 9, sehingga nilai n adalah 15.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Kalimat Matematika (Penjumlahan)',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat matematika berikut:\n145 + ... = 320\nBilangan yang tepat untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '165' },
      { id: 'B', text: '175' },
      { id: 'C', text: '185' },
      { id: 'D', text: '225' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk mencari bilangan penambah yang belum diketahui, kurangkan hasil dengan bilangan yang diketahui:\n320 − 145 = 175.\nPembuktian: 145 + 175 = 320.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Kalimat Matematika (Pengurangan)',
    difficulty: 'Sukar',
    text: 'Sebuah bilangan jika dikurangi 128 menghasilkan 247. Bilangan mula-mula tersebut adalah...',
    options: [
      { id: 'A', text: '119' },
      { id: 'B', text: '365' },
      { id: 'C', text: '375' },
      { id: 'D', text: '385' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bentuk kalimat matematika: □ − 128 = 247.\nMaka □ = 247 + 128 = 375.\nPembuktian: 375 − 128 = 247.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Operasi Hitung Campuran (Perkalian & Penjumlahan)',
    difficulty: 'Sukar',
    text: 'Di ruang kelas III terdapat 5 rak buku kecil. Setiap rak berisi 12 buku paket, dan di atas meja guru masih terdapat 16 buku paket tambahan. Jumlah seluruh buku paket di ruang kelas III adalah...',
    options: [
      { id: 'A', text: '66 buku' },
      { id: 'B', text: '72 buku' },
      { id: 'C', text: '76 buku' },
      { id: 'D', text: '86 buku' },
    ],
    correctAnswer: 'C',
    explanation:
      'Hitung perkalian terlebih dahulu, lalu jumlahkan:\n• Buku di rak = 5 × 12 = 60 buku.\n• Ditambah buku di meja guru = 60 + 16 = 76 buku.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Operasi Hitung Campuran (Pengurangan & Pembagian)',
    difficulty: 'Sukar',
    text: 'Kakak membawa 60 buah kue donat. Sebanyak 12 buah donat diberikan kepada nenek, sedangkan sisanya dimasukkan sama banyak ke dalam 6 kotak bekal. Banyak donat di dalam setiap kotak bekal adalah...',
    options: [
      { id: 'A', text: '6 buah' },
      { id: 'B', text: '8 buah' },
      { id: 'C', text: '10 buah' },
      { id: 'D', text: '12 buah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Langkah 1: Hitung sisa donat = 60 − 12 = 48 buah.\nLangkah 2: Bagi rata ke 6 kotak = 48 ÷ 6 = 8 buah per kotak.',
  },

  // =========================================================================
  // BAGIAN B: PILIHAN GANDA KOMPLEKS (3 SOAL: No. 19 - 21)
  // Setiap soal memiliki 3 pilihan jawaban (kemungkinan >1 jawaban benar)
  // =========================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Menyusun & Mengoperasikan Kartu Bilangan',
    difficulty: 'Sedang',
    diagramType: 'kartu_bilangan',
    imageCaption: 'Gambar 8. Empat Kartu Angka Acak (3, 5, 8, dan 2)',
    text: 'Perhatikan keempat kartu angka pada gambar di atas! Berdasarkan kartu-kartu angka tersebut, pilihlah SEMUA pernyataan yang BENAR (jawaban benar bisa lebih dari satu):',
    options: [
      {
        id: 'A',
        text: 'Bilangan terbesar 3 angka yang dapat disusun tanpa pengulangan adalah 853.',
      },
      {
        id: 'B',
        text: 'Hasil penjumlahan bilangan terbesar 2 angka (85) dan terkecil 2 angka (23) adalah 108.',
      },
      {
        id: 'C',
        text: 'Hasil perkalian angka terbesar (8) dan angka terkecil (2) adalah 18.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Pernyataan A BENAR: Urutan 3 angka terbesar adalah 8, 5, 3 sehingga membentuk 853.\n• Pernyataan B BENAR: 85 + 23 = 108.\n• Pernyataan C SALAH: 8 × 2 = 16 (bukan 18).',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Operasi Perkalian & Penjumlahan Kontekstual',
    difficulty: 'Sedang',
    imageUrl: imgTokoAlatTulis,
    imageCaption: 'Gambar 9. Koperasi Alat Tulis Sekolah',
    text: 'Perhatikan ilustrasi koperasi alat tulis sekolah di atas! Di koperasi tersedia 4 ikat pensil (1 ikat berisi 12 batang pensil) dan 3 pak buku tulis (1 pak berisi 10 buku tulis). Pilihlah SEMUA pernyataan yang BENAR:',
    options: [
      {
        id: 'A',
        text: 'Jumlah seluruh pensil yang tersedia adalah 48 batang.',
      },
      {
        id: 'B',
        text: 'Jumlah seluruh buku tulis yang tersedia adalah 35 buku.',
      },
      {
        id: 'C',
        text: 'Total gabungan pensil dan buku tulis seluruhnya adalah 78 buah.',
      },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '• Pernyataan A BENAR: Jumlah pensil = 4 × 12 = 48 batang.\n• Pernyataan B SALAH: Jumlah buku tulis = 3 × 10 = 30 buku (bukan 35).\n• Pernyataan C BENAR: Gabungan seluruhnya = 48 + 30 = 78 buah.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Kesetaraan Operasi Perkalian & Pembagian',
    difficulty: 'Sukar',
    text: 'Manakah di antara operasi bilangan berikut yang menghasilkan nilai tepat sama dengan 48? Pilihlah SEMUA pilihan yang BENAR:',
    options: [
      {
        id: 'A',
        text: '6 × 8',
      },
      {
        id: 'B',
        text: '96 ÷ 2',
      },
      {
        id: 'C',
        text: '4 × 12',
      },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '• Pilihan A BENAR: 6 × 8 = 48.\n• Pilihan B BENAR: 96 ÷ 2 = 48.\n• Pilihan C BENAR: 4 × 12 = 48.\nKetiga operasi bilangan tersebut senilai dan sama-sama menghasilkan 48.',
  },

  // =========================================================================
  // BAGIAN C: PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: No. 22 - 30)
  // Setiap soal memiliki 3 deskripsi pernyataan dengan respons Benar / Salah
  // =========================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Perkalian & Pembagian (Panen Mangga)',
    difficulty: 'Mudah',
    imageUrl: imgPanenMangga,
    imageCaption: 'Gambar 10. Panen Mangga Sebanyak 5 Keranjang Bambu',
    text: 'Perhatikan gambar kegiatan panen mangga di atas! Anak-anak berhasil memetik mangga dan mengisinya ke dalam 5 keranjang bambu. Setiap keranjang berisi 15 buah mangga. Tentukan apakah pernyataan berikut Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Jumlah seluruh mangga yang berhasil dipetik adalah 75 buah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika 20 buah mangga diberikan kepada tetangga, sisa mangga menjadi 65 buah.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Jika seluruh 75 mangga dibagi rata ke dalam 3 kardus besar, setiap kardus berisi 25 buah.',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: 5 keranjang × 15 mangga = 75 buah mangga.\n• Pernyataan 2 SALAH: 75 − 20 = 55 buah (bukan 65 buah).\n• Pernyataan 3 BENAR: 75 ÷ 3 = 25 buah per kardus.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Nilai Tempat & Bentuk Panjang',
    difficulty: 'Mudah',
    text: 'Perhatikan bilangan cacah 748. Tentukan Benar atau Salah untuk setiap pernyataan mengenai nilai tempat dan penjumlahan bilangan 748 berikut!',
    statements: [
      {
        id: 's1',
        text: 'Angka 7 pada bilangan 748 menempati nilai tempat ratusan dengan nilai 700.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bentuk panjang dari bilangan 748 adalah 700 + 40 + 8.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika bilangan 748 ditambah 100, hasilnya adalah 758.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Angka 7 berada di posisi ratusan, nilainya 700.\n• Pernyataan 2 BENAR: 748 = 700 + 40 + 8.\n• Pernyataan 3 SALAH: 748 + 100 = 848 (bukan 758).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Operasi Bilangan pada Nilai Uang (Kantin)',
    difficulty: 'Sedang',
    diagramType: 'daftar_harga_kantin',
    imageCaption: 'Gambar 11. Papan Daftar Harga Kantin SD Negeri 1 Loloan Timur',
    text: 'Perhatikan papan daftar harga makanan di kantin SD Negeri 1 Loloan Timur pada gambar di atas! Komang membawa uang Rp10.000 untuk berbelanja saat istirahat. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Harga 1 porsi Nasi Kuning dan 1 Susu Kotak seluruhnya adalah Rp9.000.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika Komang membeli 2 Roti Cokelat, uang kembaliannya adalah Rp3.000.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Dengan uang Rp10.000, Komang cukup untuk membeli 1 Nasi Kuning, 1 Roti Cokelat, dan 1 Air Mineral sekaligus.',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Rp5.000 + Rp4.000 = Rp9.000.\n• Pernyataan 2 SALAH: 2 Roti Cokelat = 2 × Rp3.000 = Rp6.000. Kembalian = Rp10.000 − Rp6.000 = Rp4.000 (bukan Rp3.000).\n• Pernyataan 3 BENAR: Rp5.000 + Rp3.000 + Rp2.000 = Rp10.000 (pas).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Operasi Penjumlahan & Pengurangan Bertahap',
    difficulty: 'Sedang',
    text: 'Sebuah bus wisata berangkat dari Terminal Negara membawa 42 penumpang. Di pemberhentian pertama, sebanyak 15 penumpang turun dan 18 penumpang baru naik ke dalam bus. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Setelah 15 penumpang turun, sisa penumpang di dalam bus menjadi 27 orang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jumlah penumpang setelah 18 orang baru naik menjadi 45 orang.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah penumpang akhir lebih sedikit dibandingkan jumlah penumpang saat berangkat.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: 42 − 15 = 27 penumpang.\n• Pernyataan 2 BENAR: 27 + 18 = 45 penumpang.\n• Pernyataan 3 SALAH: Penumpang akhir (45) lebih banyak daripada saat berangkat (42).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Hubungan Perkalian dan Pembagian',
    difficulty: 'Mudah',
    text: 'Diketahui kalimat perkalian 8 × 7 = 56. Tentukan Benar atau Salah untuk setiap pernyataan hubungan operasi bilangan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Hasil dari 56 ÷ 8 adalah 7.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil dari 56 ÷ 7 adalah 9.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Nilai dari 7 × 8 sama dengan nilai dari 8 × 7.',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Karena 8 × 7 = 56, maka 56 ÷ 8 = 7.\n• Pernyataan 2 SALAH: 56 ÷ 7 = 8 (bukan 9).\n• Pernyataan 3 BENAR: Berlaku sifat pertukaran (komutatif) perkalian: 7 × 8 = 8 × 7 = 56.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Jumlah & Selisih Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Putu memiliki 135 butir kelereng, sedangkan adiknya (Kadek) memiliki 89 butir kelereng. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Jumlah seluruh kelereng milik Putu dan Kadek adalah 224 butir.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selisih banyak kelereng Putu dan Kadek adalah 46 butir.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika Putu memberikan 25 kelereng kepada Kadek, sisa kelereng Putu menjadi 115 butir.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: 135 + 89 = 224 butir.\n• Pernyataan 2 BENAR: 135 − 89 = 46 butir.\n• Pernyataan 3 SALAH: 135 − 25 = 110 butir (bukan 115 butir).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Pembagian Sama Banyak Dua Jenis Benda',
    difficulty: 'Sedang',
    text: 'Pak Taufik menyiapkan 72 buah pensil warna dan 36 buah penghapus untuk dibagikan sama banyak kepada 6 regu piket kelas III. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Setiap regu piket menerima 12 buah pensil warna.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Setiap regu piket menerima 6 buah penghapus.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah gabungan pensil warna dan penghapus yang diterima tiap regu adalah 20 buah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Pensil warna tiap regu = 72 ÷ 6 = 12 buah.\n• Pernyataan 2 BENAR: Penghapus tiap regu = 36 ÷ 6 = 6 buah.\n• Pernyataan 3 SALAH: Total per regu = 12 + 6 = 18 buah (bukan 20 buah).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Pola Bilangan & Operasi Hitung',
    difficulty: 'Sukar',
    text: 'Perhatikan barisan bilangan loncat berikut:\n120, 135, 150, 165, ..., 195.\nTentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Aturan pola pada barisan bilangan tersebut adalah selalu bertambah 15.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan yang tepat untuk mengisi titik-titik adalah 175.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Selisih antara bilangan terakhir (195) dan bilangan pertama (120) adalah 75.',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: 135 − 120 = 15; 150 − 135 = 15; 165 − 150 = 15.\n• Pernyataan 2 SALAH: 165 + 15 = 180 (bukan 175).\n• Pernyataan 3 BENAR: 195 − 120 = 75.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Operasi Hitung Campuran (Tabungan)',
    difficulty: 'Sukar',
    text: 'Dayu menabung setiap hari selama 7 hari masing-masing sebesar Rp2.000. Selain itu, Ibu memberinya tambahan uang tabungan sebesar Rp6.000. Dayu berencana membeli kotak pensil seharga Rp15.000. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Total uang yang dikumpulkan Dayu selama 7 hari menabung sendiri adalah Rp14.000.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Setelah mendapat tambahan dari Ibu, seluruh uang Dayu menjadi Rp20.000.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Setelah membeli kotak pensil seharga Rp15.000, sisa uang tabungan Dayu adalah Rp6.000.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: 7 × Rp2.000 = Rp14.000.\n• Pernyataan 2 BENAR: Rp14.000 + Rp6.000 = Rp20.000.\n• Pernyataan 3 SALAH: Rp20.000 − Rp15.000 = Rp5.000 (bukan Rp6.000).',
  },
];
