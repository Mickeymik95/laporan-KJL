export const cucian = {
  id: "cucian",
  name: "CUCIAN / PEMBERSIHAN",

  fields: [
    {
      name: "bilanganKontraktor",
      label: "BILANGAN KONTRAKTOR",
      type: "number",
      placeholder: "CTH : 8",
    },

    {
      name: "syarikat",
      label: "NAMA SYARIKAT",
      type: "text",
      defaultValue: "Alam Bersih Sdn Bhd",
    },

    {
      name: "tambahan",
      label: "LAPORAN TAMBAHAN (JIKA PERLU)",
      type: "textarea",
      placeholder: "Cth : 01 x KONTRAKTOR DIBERIKAN PAS SEMENTARA...",
      rows: 8,
    },
  ],

  build({
    anggota,
    station,
    tarikh,
    masa,
    bilanganKontraktor,
    syarikat,
    tambahan,
  }) {
    const tambahanList = (tambahan || "")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item, index) => {
        return `${index + 4}. ${item.toUpperCase()}`;
      });

    return `*Assalamualaikum wbt & Salam Sejahtera YDH Tuan,*

Laporan penugasan anggota bertugas Aliran Kelana Jaya Jabatan Sekuriti.

TARIKH : ${tarikh}
MASA : ${masa}
TUGASAN : PERIKSA KEMASUKAN KONTRAKTOR
LOKASI : STESEN LRT *${station}* (KJL)

1. Kehadiran *${bilanganKontraktor}x* kontraktor pembersihan syarikat *${syarikat || ""}* tujuan kerja-kerja cucian stesen.
2. Semakan pas kontraktor serta work permit masih dalam tempoh sah laku.
3. Tiada sebarang penyamaran / perkara mencurigakan, sekian.
${tambahanList.length ? tambahanList.join("\n") + "\n" : ""}
ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};

export default cucian;