export const laporanAwal = {
  id: "laporanAwal",
  name: "LAPORAN KEJADIAN SEMASA",

  fields: [
    {
      name: "jenisLaporan",
      label: "Jenis laporan",
      type: "input",
      placeholder:"Cth : Redmike / Peralatan stesen rosak / Kecurian Barang",
    },
    {
      name: "masaKejadian",
      label: "Anggaran waktu kejadian",
      type: "text",
      placeholder:"cth : 1543 / 1024 (Tak perlu letak Hrs/HRS",
    },
    {
      name: "ringkasan1",
      label: "Ringkasan Kejadian 1",
      type: "textarea",
      rows: 3,
      placeholder:"cth : 01x (w)(m) warganegara Malaysia pitam di PF 1 \n 01x (L) warganegara Bangladesh turun ke Trek untuk mengambil telefon bimbit",
    },
    {
      name: "ringkasan2",
      label: "Ringkasan Kejadian 2",
      type: "textarea",
      rows: 3,
      placeholder:"cth : Meminta untuk berehat dan sarapan sebentar",
    },
    {
      name: "tindakan1",
      label: "Tindakan 1",
      type: "textarea",
      rows: 3,
      placeholder:"cth : Memaklumkan kepada SCC & Penyelia bertugas",
      defaultValue: "Memaklumkan kepada CSA, SCC & Penyelia bertugas",
    },
    {
      name: "tindakan2",
      label: "Tindakan 2",
      type: "textarea",
      rows: 3,
      placeholder:"cth : Membawa mangsa/pengadu ke ER untuk bantuan awal @ Menahan pelaku dan mengambil butir-butir kejadian",
    },
  ],

  build({
    station,
    tarikh,
    masa,
    masaKejadian,
    jenisLaporan,
    ringkasan1,
    ringkasan2,
    tindakan1,
    tindakan2,
    anggota,
  }) {
    return `*Assalamualaikum & Salam Sejahtera Tuan,*

TARIKH : ${tarikh}
MASA : ${masa}
LOKASI : STESEN *${station}* (KJL)

*${jenisLaporan.toUpperCase() || ""}*

*RINGKASAN  :-*
* ${ringkasan1 || ""}
* ${ringkasan2 || ""}

*TINDAKAN :-*
* ${tindakan1 || ""}
* ${tindakan2 || ""}

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};

export default laporanAwal;