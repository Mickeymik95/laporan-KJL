export const laporanAwal = {
  id: "laporanAwal",
  name: "LAPORAN AWAL KEJADIAN",

  fields: [
    {
      name: "jenisLaporan",
      label: "Jenis laporan",
      type: "input",
      placeholder:"Cth : Redmike / Redtanggo / Kecurian Barang",
    },
    {
      name: "masaKejadian",
      label: "Anggaran waktu kejadian",
      type: "text",
      placeholder:"cth : 1543 / 1024 (Tak perlu letak Hrs/HRS",
    },
    {
      name: "kawasan",
      label: "Kawasan kejadian (Tak perlu letak .noktah)",
      type: "textarea",
      rows: 2,
      placeholder:"cth : Tren / platform 1/2 / Concourse / Eskalator / Tandas / Parking",
    },
    {
      name: "ringkasanLaporan",
      label: "Ringkasan Laporan (Tak perlu letak .noktah)",
      type: "textarea",
      rows: 4,
      placeholder:"cth : 01x warganegara Malaysia (w)(m) pitam \n 01x warganegara Bangladesh turun ke Trek",
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
    ringkasanLaporan,
    tindakan1,
    tindakan2,
    kawasan,
    anggota,
  }) {
    return `*Assalamualaikum & Salam Sejahtera Tuan,*

TARIKH : ${tarikh}
MASA : ${masa}
LOKASI : STESEN *${station}* (KJL)
TUGASAN : *LAPORAN AWAL KEJADIAN ${jenisLaporan.toUpperCase() || ""}*

Untuk makluman awal, Jam lebih kurang ${masaKejadian} Hrs, \
telah berlaku kejadian *${jenisLaporan.toUpperCase() || ""}* di ${kawasan || ""}. \
${ringkasanLaporan || ""}.

*TINDAKAN :-*
1. ${tindakan1 || ""}.
2. ${tindakan2 || ""}.
Laporan penuh akan menyusul, sekian.

TERIMA KASIH.

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};

export default laporanAwal;