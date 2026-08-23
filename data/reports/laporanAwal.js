export const laporanAwal = {
  id: "laporanAwal",
  name: "LAPORAN AWAL KEJADIAN",

  fields: [
    {
      name: "laporan",
      label: "BUTIRAN LAPORAN AWAL",
      type: "textarea",
      placeholder:
        "cth : 'Jam sekitar 1234 Hrs....'\n\nHasil :\nUntuk makluman awal. Pada (tarikh auto) [ayat anda auto masuk di sini, cth : jam sekitar 1234 Hrs] Laporan penuh akan menyusul, sekian.",
      rows: 8,
    },
  ],

  build({
    station,
    tarikh,
    masa,
    laporan,
    anggota,
  }) {
    return `*Assalamualaikum & Salam Sejahtera Tuan/Puan,*

Tarikh : ${tarikh}
Masa : ${masa}
Lokasi : STESEN *${station}* (KJL)

Untuk makluman awal, pada ${tarikh} ${laporan || ""}. Laporan penuh akan menyusul, sekian.

Terima kasih.

ANGGOTA BERTUGAS :
*${anggota}*`;
  },
};

export default laporanAwal;