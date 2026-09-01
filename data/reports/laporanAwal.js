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
      name: "ringkasanKejadian",
      label: "Ringkasan Kejadian (Tak perlu letak .noktah)",
      type: "textarea",
      rows: 5,
      placeholder:"cth : 01x (w)(m) warganegara Malaysia pitam di PF 1 \n 01x (L) warganegara Bangladesh turun ke Trek untuk mengambil telefon bimbit",
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
    ringkasanKejadian,
    tindakan1,
    tindakan2,
    anggota,
  }) {
    return `*Assalamualaikum & Salam Sejahtera Tuan,*

TARIKH : ${tarikh}
MASA : ${masa}
LOKASI : STESEN *${station}* (KJL)

*LAPORAN AWAL KEJADIAN ${jenisLaporan.toUpperCase() || ""}*

Untuk makluman awal, Jam lebih kurang ${masaKejadian} Hrs, \
telah berlaku kejadian *${jenisLaporan.toUpperCase() || ""}*. \
${ringkasanKejadian || ""}.

*TINDAKAN :-*
* ${tindakan1 || ""}.
* ${tindakan2 || ""}.

Laporan penuh akan menyusul, sekian.

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};

export default laporanAwal;