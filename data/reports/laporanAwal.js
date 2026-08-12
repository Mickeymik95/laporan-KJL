export const laporanAwal = {
  id: "laporanAwal",
  name: "LAPORAN AWAL KEJADIAN",

  fields: [
    {
      name: "laporan",
      label: "BUTIRAN LAPORAN AWAL",
      type: "textarea",
      placeholder:
        "cth : 'Pada 01/01/26 jam sekitar...'\n\nHasil :\nUntuk makluman awal. Pada 01/01/26 jam sekitar.... Laporan penuh akan menyusul, sekian.",
      rows: 8,
    },
  ],

  build({
    station,
    tarikh,
    masa,
    laporan,
  }) {
    return `Assalamualaikum & Salam Sejahtera Tuan/Puan,

Tarikh : ${tarikh}
Masa : ${masa}
Lokasi : STESEN *${station}* (KJL)

Untuk makluman awal. ${laporan || ""}. Laporan penuh akan menyusul, sekian.

Terima kasih.
Cc @⁨all⁩`;
  },
};

export default laporanAwal;