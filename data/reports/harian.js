export const harian = {
  id: "harian",

  name: "LAPORAN BIASA",

  fields: [
    {
      name: "tambahan",
      label: "LAPORAN TAMBAHAN",
      type: "textarea",
      rows: 8,
      placeholder:
        "Tambahan akan masuk di no. 4 dalam laporan, Enter akan masuk di no. 5 & seterusnya",
    },
  ],

  build({
    anggota,
    station,
    tarikh,
    masa,
    tambahan,
  }) {
    const laporanAsas = [
      `1. LAPOR KAWALAN DAN PEMANTAUAN DI PLATFORM STESEN *${station}* (KJL).`,
      "2. PERGERAKAN PENUMPANG KELUAR MASUK TREN LANCAR.",
      "3. PERKHIDMATAN TREN BEROPERASI SEPERTI BIASA.",
    ];

    // Jika ada laporan tambahan
    if (tambahan && tambahan.trim()) {
      const tambahanList = tambahan
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      tambahanList.forEach((item) => {
        laporanAsas.push(
          `${laporanAsas.length + 1}. ${item.toUpperCase()}`
        );
      });
    }

    return `*Assalamualaikum wbt & Salam Sejahtera YDH Tuan,*

Laporan penugasan anggota bertugas Aliran Kelana Jaya Jabatan Sekuriti.

TARIKH : ${tarikh}
MASA : ${masa}
TUGASAN : KAWALAN DAN PEMANTAUAN DI PLATFORM 1,2
LOKASI : STESEN LRT *${station}* (KJL)

${laporanAsas.join("\n")}

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};