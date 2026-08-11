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
      name: "kerja",
      label: "KERJA-KERJA YANG DIJALANKAN",
      type: "textarea",
      rows: 8,
      placeholder: "CTH : MEMBAIKI PINTU BILIK CSO",
    },

    {
      name: "statusPas",
      label: "STATUS PAS KONTRAKTOR",
      type: "radio",
      options: [
        "DIBERIKAN PAS KONTRAKTOR SEMENTARA SEHINGGA KERJA-KERJA BAIK PULIH SIAP SEPENUHNYA.",
        "MEMPUNYAI PAS KONTRAKTOR YANG SAH",
      ],
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
    kerja,
    statusPas,
    staff,
  }) {
    return `Assalamualaikum wbt & Salam Sejahtera YDH Tuan,

Laporan penugasan anggota bertugas Aliran Kelana Jaya Jabatan Sekuriti.

TARIKH : ${tarikh}
MASA : ${masa}
TUGASAN : PEMERIKSAAN KEMASUKAN KONTRAKTOR
LOKASI : STESEN LRT ${station} (KJL)

1. LAPOR KEMASUKAN ${bilanganKontraktor}X KONTRAKTOR ${syarikat?.toUpperCase() || ""}.
2. MASUK MEMBUAT KERJA-KERJA ${kerja?.toUpperCase() || ""}.
3. KESEMUA KONTRAKTOR MEMPUNYAI WORK PERMIT.
4. ${statusPas?.toUpperCase() || ""}.
5. KESEMUA KONTRAKTOR DIPANTAU OLEH STAFF BERTUGAS ${staff?.toUpperCase() || ""}.
6. LOKASI BAIK DAN DALAM KAWALAN.

ANGGOTA BERTUGAS :
${anggota}

#TERUSKAN PERKARA BAIK`;
  },
};

export default kontraktorAm;