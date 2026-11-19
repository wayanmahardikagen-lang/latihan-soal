import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas III) Mata Pelajaran Matematika
 * Lingkup Materi: Operasi Bilangan
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Kurikulum Merdeka Fase B (Kelas III - Operasi Bilangan)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca, menuliskan, dan menentukan nilai tempat bilangan cacah sampai 1.000 menggunakan model konkret/gambar.',
    indikatorSoal:
      'Disajikan gambar kubus nilai tempat (ratusan, puluhan, dan satuan), peserta didik dapat menentukan bilangan cacah yang sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi penjumlahan bilangan cacah sampai 1.000 tanpa teknik menyimpan.',
    indikatorSoal:
      'Disajikan dua bilangan cacah tiga angka, peserta didik dapat menentukan hasil penjumlahan tanpa teknik menyimpan dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual yang melibatkan operasi penjumlahan bilangan cacah dengan teknik menyimpan.',
    indikatorSoal:
      'Disajikan gambar ilustrasi kios buah dan cerita jumlah jeruk serta apel, peserta didik dapat menghitung jumlah seluruh buah dengan teknik menyimpan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi pengurangan bilangan cacah sampai 1.000 tanpa teknik meminjam.',
    indikatorSoal:
      'Disajikan dua bilangan cacah tiga angka, peserta didik dapat menentukan hasil pengurangan tanpa meminjam dengan benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah sehari-hari yang berkaitan dengan pengurangan bilangan cacah dengan teknik meminjam.',
    indikatorSoal:
      'Disajikan ilustrasi perpustakaan sekolah dengan jumlah total koleksi buku dan buku yang dipinjam, peserta didik dapat menghitung sisa buku di rak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah operasi hitung penjumlahan dan pengurangan bilangan cacah secara berurutan.',
    indikatorSoal:
      'Disajikan cerita persediaan buku tulis koperasi yang bertambah dari kiriman dan berkurang karena terjual, peserta didik dapat menentukan sisa persediaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep perkalian sebagai penjumlahan berulang melalui media garis bilangan.',
    indikatorSoal:
      'Disajikan gambar garis bilangan dengan 4 lompatan berjarak sama, peserta didik dapat menentukan kalimat matematika perkalian yang sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan hasil perkalian bilangan cacah menggunakan representasi gambar susunan benda (array).',
    indikatorSoal:
      'Disajikan gambar rak telur tersusun dalam baris dan kolom, peserta didik dapat menentukan jumlah seluruh telur menggunakan konsep perkalian.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan soal cerita yang melibatkan perkalian bilangan satu angka dengan dua angka.',
    indikatorSoal:
      'Disajikan gambar kebun bunga matahari sekolah dengan jumlah petak dan batang tiap petak, peserta didik dapat menghitung jumlah seluruh bunga.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan hasil operasi perkalian bilangan dua angka dengan satu angka menggunakan cara bersusun/uraian.',
    indikatorSoal:
      'Disajikan operasi perkalian bilangan puluhan dengan satuan, peserta didik dapat menghitung hasilnya secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep pembagian bilangan cacah sebagai pengurangan berulang sampai nol.',
    indikatorSoal:
      'Disajikan bentuk pengurangan berulang sampai nol, peserta didik dapat mengubahnya menjadi kalimat matematika pembagian yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian sama banyak menggunakan bantuan ilustrasi pengelompokan benda.',
    indikatorSoal:
      'Disajikan ilustrasi kelereng yang dibagi rata ke dalam 4 kotak, peserta didik dapat menentukan banyak kelereng di setiap kotak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan hasil pembagian bilangan dua angka dengan bilangan satu angka dalam konteks sehari-hari.',
    indikatorSoal:
      'Disajikan narasi pembagian kertas origami secara merata ke 5 kelompok belajar, peserta didik dapat menghitung jumlah yang diterima tiap kelompok.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan sifat pertukaran (komutatif) pada operasi perkalian bilangan cacah.',
    indikatorSoal:
      'Disajikan kalimat perkalian dengan satu simbol huruf yang belum diketahui nilainya, peserta didik dapat menentukan nilai huruf tersebut berdasarkan sifat komutatif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengisi nilai yang belum diketahui dalam sebuah kalimat matematika yang berkaitan dengan penjumlahan bilangan cacah.',
    indikatorSoal:
      'Disajikan kalimat matematika penjumlahan dengan suku penambah rumpang, peserta didik dapat menentukan bilangan pengisi yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan menemukan bilangan awal yang belum diketahui pada kalimat matematika pengurangan.',
    indikatorSoal:
      'Disajikan pernyataan pengurangan bilangan misteri dengan bilangan tertentu dan hasilnya, peserta didik dapat menentukan bilangan mula-mula.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah penalaran yang melibatkan operasi hitung campuran perkalian dan penjumlahan.',
    indikatorSoal:
      'Disajikan data jumlah rak, isi buku paket tiap rak, dan buku tambahan di meja guru, peserta didik dapat menghitung total seluruh buku paket.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah kontekstual dua langkah yang melibatkan operasi pengurangan dan pembagian.',
    indikatorSoal:
      'Disajikan narasi jumlah kue donat yang sebagian diberikan lalu sisanya dibagi ke beberapa kotak, peserta didik dapat menentukan isi tiap kotak.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyusun bilangan cacah terbesar dan terkecil serta melakukan operasi hitung dari kartu angka.',
    indikatorSoal:
      'Disajikan gambar 4 kartu angka acak, peserta didik dapat memilih semua pernyataan benar terkait susunan bilangan, penjumlahan, dan perkalian.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan operasi perkalian dan penjumlahan untuk memverifikasi jumlah barang di koperasi sekolah.',
    indikatorSoal:
      'Disajikan gambar koperasi alat tulis beserta data ikat pensil dan pak buku tulis, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi kesetaraan berbagai kalimat matematika perkalian dan pembagian yang bernilai sama.',
    indikatorSoal:
      'Disajikan tiga bentuk operasi perkalian dan pembagian, peserta didik dapat memilih seluruh operasi yang hasilnya tepat sama dengan 48.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan operasi perkalian, pengurangan, dan pembagian pada konteks hasil panen buah.',
    indikatorSoal:
      'Disajikan gambar panen mangga 5 keranjang dengan isi tiap keranjang, peserta didik dapat menentukan Benar/Salah pada 3 pernyataan terkait total, sisa, dan pembagian ulang.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menguraikan nilai tempat, bentuk panjang, dan operasi penjumlahan ratusan pada bilangan cacah 3 angka.',
    indikatorSoal:
      'Disajikan bilangan cacah 748, peserta didik dapat menentukan kebenaran (Benar/Salah) pernyataan nilai tempat, bentuk panjang, dan hasil tambah 100.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan operasi penjumlahan, perkalian, dan pengurangan dalam transaksi jual beli sederhana menggunakan uang.',
    indikatorSoal:
      'Disajikan gambar papan harga kantin sekolah dan uang belanja siswa, peserta didik dapat menentukan Benar/Salah dari 3 pernyataan harga total, kembalian, dan kecukupan uang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perubahan jumlah objek melalui operasi pengurangan dan penjumlahan bertahap.',
    indikatorSoal:
      'Disajikan narasi penumpang bus yang turun dan naik di pemberhentian, peserta didik dapat mengevaluasi kebenaran (Benar/Salah) 3 pernyataan jumlah penumpang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat memahami keterkaitan antara operasi perkalian, pembagian, dan sifat komutatif.',
    indikatorSoal:
      'Disajikan kalimat perkalian 8 × 7 = 56, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan fakta pembagian dan sifat pertukaran.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung jumlah, selisih, dan sisa benda menggunakan operasi penjumlahan dan pengurangan bilangan cacah.',
    indikatorSoal:
      'Disajikan data banyak kelereng milik dua bersaudara, peserta didik dapat menentukan kebenaran (Benar/Salah) pernyataan jumlah total, selisih, dan sisa setelah diberikan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan permasalahan pembagian sama banyak untuk dua jenis barang dan menjumlahkannya.',
    indikatorSoal:
      'Disajikan data jumlah pensil warna dan penghapus yang dibagi rata ke 6 regu piket, peserta didik dapat menilai Benar/Salah pada 3 pernyataan hasil pembagian.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi, meniru, dan mengembangkan pola bilangan membesar melibatkan penjumlahan dan pengurangan.',
    indikatorSoal:
      'Disajikan barisan bilangan loncat dengan satu suku rumpang, peserta didik dapat menentukan Benar/Salah terkait aturan pola, bilangan rumpang, dan selisih ujung barisan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis masalah keuangan sehari-hari yang melibatkan perkalian, penjumlahan, dan pengurangan bertingkat.',
    indikatorSoal:
      'Disajikan cerita tabungan harian selama seminggu, tambahan dari ibu, dan rencana pembelian barang, peserta didik dapat menentukan Benar/Salah pada 3 pernyataan perhitungan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan operasi bilangan.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('pola') ||
    t.includes('kalimat') ||
    t.includes('komutatif') ||
    t.includes('kesetaraan') ||
    t.includes('hubungan')
  ) {
    return 'Aljabar';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
