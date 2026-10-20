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

  // STATUS PAS
  const ayatPas = statusPas && statusPas.trim()
    ? `*${statusPas.trim()}x Kontraktor diberikan pas sementara.*`
    : ``;

  return `Assalamualaikum w.b.t & Salam Sejahtera YDH Tuan,

LAPORAN PENUGASAN ANGGOTA BERTUGAS ALIRAN KELANA JAYA JABATAN SEKURITI

TARIKH: ${tarikh}
MASA: ${masa} HRS
TUGASAN: PEMERIKSAAN KEMASUKAN KONTRAKTOR
LOKASI: STESEN LRT ${station} (KJL)

1. Melaporkan kemasukan seramai x${bilanganKontraktor} orang kontraktor dari syarikat ${syarikat || ""}. work permit (${permit || ""}.)

2. Tujuan kerja-kerja ${kerja || ""} di ${kawasan || ""}.

3. ${ayatPas}

4. Kesemua kontraktor dipantau oleh PIC bertugas, ${staff?.toUpperCase() || ""}.

5. Keadaan lokasi baik dan terkawal.

Sekian, terima kasih.

Anggota Bertugas:
${anggota}

#TERUSKAN PERKARA BAIK`;
},
};

export default kontraktorAm;