export const laporanAwal = {
id: "laporanAwal",
name: "LAPORAN KEJADIAN SEMASA",

fields: [
{
name: "jenisLaporan",
label: "TAJUK LAPORAN",
type: "input",
placeholder:
"Cth : Redmike / Peralatan stesen rosak / Kecurian Barang",
},
{
  name: "masaKejadian",
  label: "ANGGARAN WAKTU KEJADIAN",
  type: "text",
  placeholder: "Cth : 1543 / 1024 (Tak perlu letak HRS)",
},
{
  name: "ringkasan",
  label: "RINGKASAN",
  type: "textarea",
  rows: 5,
  placeholder:
    "Setiap Enter akan menjadi satu point baru\nCth : Mangsa pitam di Platform 1\nCSA memberikan bantuan awal",
},

{
  name: "tindakan",
  label: "TINDAKAN",
  type: "textarea",
  rows: 5,
  placeholder:
    "Setiap Enter akan menjadi satu poin baru\nCth : Memaklumkan kepada SCC\nMemaklumkan kepada Penyelia bertugas",
  defaultValue: "Memaklumkan kepada SCC & Penyelia bertugas",
},

],

build({
station,
tarikh,
masa,
masaKejadian,
jenisLaporan,
ringkasan,
tindakan,
anggota,
}) {
// =====================================
// AUTO BULLET SETIAP KALI ENTER
// =====================================

const autoBullet = (text) => {
  if (!text || !text.trim()) return "";

  return text
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item) => `* ${item}`)
    .join("\n");
};


return `*Assalamualaikum & Salam Sejahtera Tuan,*

TARIKH : ${tarikh}
MASA : ${masa}
LOKASI : STESEN *${station}* (KJL)

*${(jenisLaporan || "").toUpperCase()}*

*RINGKASAN :-*
${autoBullet(ringkasan)}

*TINDAKAN :-*
${autoBullet(tindakan)}

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
},
};

export default laporanAwal;
