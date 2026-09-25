export const laporanAwal = {
id: "laporanAwal",
name: "KEJADIAN SEMASA",

fields: [
{
name: "jenisLaporan",
label: "TAJUK LAPORAN",
type: "input",
placeholder:
"Cth : Redmike / Peralatan stesen rosak / Kecurian Barang",
},
{
  name: "ringkasan",
  label: "RINGKASAN",
  type: "textarea",
  rows: 8,
  placeholder:
    "Setiap Enter akan menjadi satu point baru\nCth : Mangsa pitam di Platform 1\nCSA memberikan bantuan awal",
}
],

build({
station,
tarikh,
masa,
jenisLaporan,
ringkasan,
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

*${(jenisLaporan || "").toUpperCase()}*

TARIKH : ${tarikh}
MASA : ${masa}
LOKASI : STESEN ${station} (KJL)

*RINGKASAN :-*

${autoBullet(ringkasan)}

ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
},
};

export default laporanAwal;
