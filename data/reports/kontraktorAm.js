export const kontraktorAm = {
  id: "kontraktorAm",
  name: "KONTRAKTOR AM",

  fields: [
    {
      name: "bilanganKontraktor",
      label: "BILANGAN KONTRAKTOR",
      type: "number",
      placeholder: "CTH : 5",
    },
    {
      name: "syarikat",
      label: "NAMA SYARIKAT",
      type: "text",
      placeholder: "CTH : MIK TECH SDN BHD",
    },
    {
      name: "permit",
      label: "PERMIT KERJA",
      type: "text",
      placeholder: "CTH : WP-222-2026",
    },
    {
      name: "kerja",
      label: "KERJA-KERJA YANG DIJALANKAN",
      type: "textarea",
      rows: 6,
      placeholder: "CTH : MEMBAIKI PINTU BILIK CSO",
    },
    {
      name: "kawasan",
      label: "KAWASAN KERJA DIJALANKAN",
      type: "textarea",
      rows: 3,
      placeholder: "CTH : TANDAS / PF / BILIK CSO",
    },
    {
      name: "statusPas",
      label: "PENGGUNAAN PAS SEMENTARA JIKA ADA",
      type: "input",
      placeholder: "Masukkan jumlah sahaja cth : 10 / 07 tanpa x",
    },
    {
      name: "staff",
      label: "STAFF BERTUGAS (PIC)",
      type: "text",
      placeholder: "CTH : 10002222 (KAMARUL)",
    },
  ],

  build({
    anggota,
    station,
    tarikh,
    masa,
    bilanganKontraktor,
    syarikat,
    permit,
    kerja,
    kawasan,
    statusPas,
    staff,
  }) {
    
    // Logik Dinamik untuk Ayat Pas
    const paparanPas = statusPas && statusPas.trim()
      ? `*${statusPas.trim()}x Kontraktor diberikan pas sementara.*`
      : `Semua kontraktor mempunyai pas yang sah.`;

    // 1. Kumpulkan semua ayat asal ke dalam array
    const senaraiAyatAsal = [
      // Ayat 1: Laporan kemasukan
      bilanganKontraktor || syarikat 
        ? `Melaporkan kemasukan seramai x${bilanganKontraktor || 0} orang kontraktor dari syarikat ${syarikat || ""}. work permit (${permit || ""}).` 
        : "",

      // Ayat 2: Tujuan kerja
      kerja || kawasan 
        ? `Tujuan kerja-kerja ${kerja || ""} di ${kawasan || ""}.` 
        : "",

      // Ayat 3: Status Pas (Sentiasa ada isi berdasarkan logik di atas)
      paparanPas,

      // Ayat 4: Pemantauan PIC
      staff 
        ? `Kesemua kontraktor dipantau oleh PIC bertugas, *${staff.toUpperCase()}*.` 
        : "",

      // Ayat 5: Keadaan lokasi
      "Keadaan lokasi baik dan terkawal.",
    ];

    // 2. Tapis keluar ayat yang kosong/tiada
    const ayatTersedia = senaraiAyatAsal.filter(ayat => ayat && ayat.trim() !== "");

    // 3. Gabungkan semula ayat dengan meletakkan nombor turutan dinamik (1., 2., dll)
    const teksLaporanBergabung = ayatTersedia
      .map((ayat, index) => `${index + 1}. ${ayat}`)
      .join("\n\n");

    return `Assalamualaikum w.b.t & Salam Sejahtera YDH Tuan,

LAPORAN PENUGASAN ANGGOTA BERTUGAS ALIRAN KELANA JAYA JABATAN SEKURITI

TARIKH: ${tarikh}
MASA: ${masa} HRS
TUGASAN: PEMERIKSAAN KEMASUKAN KONTRAKTOR
LOKASI: STESEN LRT ${station} (KJL)

${teksLaporanBergabung}

Sekian, terima kasih.

Anggota Bertugas:
${anggota}

#TERUSKAN PERKARA BAIK`;
  },
};

export default kontraktorAm;