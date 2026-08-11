export const laporanAwal = {
  id: "laporanAwal",
  name: "LAPORAN AWAL KEJADIAN",

  fields: [
    {
      name: "laporan",
      label: "BUTIRAN LAPORAN AWAL",
      type: "textarea",
      placeholder:
        "Masukkan makluman awal kejadian di sini. cth : 'jam sekitar......'",
      rows: 15,
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
Lokasi : STESEN ${station} (KJL)

Untuk makluman awal ${laporan || ""} Laporan penuh akan menyusul, sekian.

Terima kasih.
Cc @⁨all⁩`;
  },
};

export default laporanAwal;