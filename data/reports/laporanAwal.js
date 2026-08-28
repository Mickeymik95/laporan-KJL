export const laporanAwal = {
  id: "laporanAwal",
  name: "LAPORAN AWAL KEJADIAN",

  fields: [
    {
      name: "masaKejadian",
      label: "Anggaran waktu kejadian",
      type: "text",
      placeholder:"cth : 1243",
    },
    {
      name: "jenisLaporan",
      label: "Jenis laporan",
      type: "radio",
      options: ["Redmike", "Redtango"],
    },
    {
      name: "kawasan",
      label: "Kawasan kejadian (Tak perlu letak .noktah)",
      type: "textarea",
      rows: 3,
      placeholder:"cth : Tren / platform 1/2 / Concourse / Eskalator / Tandas",
    },
    {
      name: "tindakan1",
      label: "Tindakan 1 (Tak perlu letak .noktah)",
      type: "textarea",
      rows: 2,
      placeholder:"cth : Memaklumkan kepada SCC & Penyelia bertugas",
      defaultValue: "Memaklumkan kepada CSA, SCC & Penyelia bertugas",
    },
    {
      name: "tindakan2",
      label: "Tindakan 2 (Tak perlu letak .noktah)",
      type: "textarea",
      rows: 4,
      placeholder:"cth : Membawa mangsa/pengadu ke ER untuk bantuan awal\n Menahan pelaku dan mengambil butir-butir kejadian",
    },
  ],

  build({
    station,
    tarikh,
    masa,
    masaKejadian,
    jenisLaporan,
    tindakan1,
    tindakan2,
    kawasan,
    anggota,
  }) {
    return `*Assalamualaikum & Salam Sejahtera Tuan/Puan,*

TARIKH : ${tarikh}
MASA : ${masa}
TUGASAN : LAPORAN AWAL KEJADIAN
LOKASI : STESEN *${station}* (KJL)

Untuk makluman awal, Jam lebih kurang ${masaKejadian} Hrs, \
telah berlaku kejadian *${jenisLaporan.toUpperCase() || ""}* \
di kawasan ${kawasan || ""}. Saya telah ${tindakan1 || ""}. \
Seterusnya ${tindakan2 || ""}. Laporan penuh akan menyusul, sekian.

TERIMA KASIH.

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};

export default laporanAwal;