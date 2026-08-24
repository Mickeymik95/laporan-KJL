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
        "Diberikan pas kontraktor sementara sehingga kerja-kerja baik pulih siap sepenuhnya.",
        "Mempunyai pas kontraktor yang sah",
        "Sebilangan kontraktor diberikan pas kontraktor sementara",
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
    return `*Assalamualaikum wbt & Salam Sejahtera YDH Tuan,*

Laporan penugasan anggota bertugas Aliran Kelana Jaya Jabatan Sekuriti.

TARIKH : ${tarikh}
MASA : ${masa}
TUGASAN : PEMERIKSAAN KEMASUKAN KONTRAKTOR
LOKASI : STESEN LRT *${station}* (KJL)

1. Lapor kemasukan *${bilanganKontraktor}x* kontraktor *${syarikat || ""}.*
2. Masuk membuat kerja-kerja *${kerja || ""}.*
3. Kesemua kontraktor mempunyai work permit.
4. ${statusPas || ""}.
5. Kesemua kontraktor dipantau oleh staff bertugas *${staff?.toUpperCase() || ""}.*
6. Lokasi baik dan dalam kawalan.

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};

export default kontraktorAm;