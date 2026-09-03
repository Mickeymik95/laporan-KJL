export const laporanPenuh = {
id: "laporanPenuh",
name: "LAPORAN PENUH",

fields: [
{
name: "tajuk",
label: "TAJUK KEJADIAN",
type: "input",
placeholder: "Cth : KEHILANGAN AKSESORI KERETA DEKAT PARKING STN PARAMOUNT",
},

{
  name: "tarikhKejadian",
  label: "TARIKH KEJADIAN",
  type: "input",
  placeholder: "Cth : 22/06/2026",
},

{
  name: "masa",
  label: "MASA KEJADIAN",
  type: "input",
  placeholder: "Cth : 1717 HRS",
},

{
  name: "stesen",
  label: "STESEN",
  type: "input",
  placeholder: "Cth : LRT STESEN PARAMOUNT",
},

{
  name: "penyelia1",
  label: "PENYELIA BERTUGAS 1",
  type: "select",
  placeholder: "PILIH PENYELIA",
  options: [
    "10000711 KPL PB AZHAR BIN ABDUL AZIZ",
    "10000865 KPL PB MOHD SHAMSUL BIN MOHAMAD NOR",
    "10008788 LKPL PB HAIQAL HAQIM BIN DRAMAN",
    "10011682 LKPL PB KHAIRUL ASRUL BIN MOHAMED",
  ],
},

{
  name: "penyelia2",
  label: "PENYELIA BERTUGAS 2",
  type: "select",
  placeholder: "PILIH PENYELIA",
  options: [
    "10000711 KPL PB AZHAR BIN ABDUL AZIZ",
    "10000865 KPL PB MOHD SHAMSUL BIN MOHAMAD NOR",
    "10008788 LKPL PB HAIQAL HAQIM BIN DRAMAN",
    "10011682 LKPL PB KHAIRUL ASRUL BIN MOHAMED",
  ],
},

{
  name: "penyelia3",
  label: "PENYELIA BERTUGAS 3",
  type: "select",
  placeholder: "PILIH PENYELIA",
  options: [
    "10000711 KPL PB AZHAR BIN ABDUL AZIZ",
    "10000865 KPL PB MOHD SHAMSUL BIN MOHAMAD NOR",
    "10008788 LKPL PB HAIQAL HAQIM BIN DRAMAN",
    "10011682 LKPL PB KHAIRUL ASRUL BIN MOHAMED",
  ],
},

{
  name: "scc1",
  label: "SCC BERTUGAS 1",
  type: "select",
  placeholder: "PILIH SCC",
  options: [
    "10000975 KPL PB ARMAN BIN ARIPIN",
    "10000858 KPL PB ABDUL HAKIM BIN ABU BAKAR",
    "10001130 KPL PB HALINA BINTI MOHD SALIM",
    "10012979 KONST PB HAFFANDI BIN KUTIP",
    "10017531 KONST PB MUHAMMAD ILHAM BIN NAZRI",
  ],
},

{
  name: "scc2",
  label: "SCC BERTUGAS 2",
  type: "select",
  placeholder: "PILIH SCC",
  options: [
    "10000975 KPL PB ARMAN BIN ARIPIN",
    "10000858 KPL PB ABDUL HAKIM BIN ABU BAKAR",
    "10001130 KPL PB HALINA BINTI MOHD SALIM",
    "10012979 KONST PB HAFFANDI BIN KUTIP",
    "10017531 KONST PB MUHAMMAD ILHAM BIN NAZRI",
  ],
},

{
  name: "anggotaStesen",
  label: "ANGGOTA STESEN BERTUGAS",
  type: "input",
  placeholder: "Cth : 10002222 KONST PB AFIQ BIN ALI",
},

{
  name: "hoslerCSA",
  label: "HOSLER/CSA BERTUGAS",
  type: "input",
  placeholder: "Cth : 10020218 HAKIMI/10020336 NAJAH",
},

{
  name: "butirMangsa",
  label: "BUTIR-BUTIR MANGSA / PENGADU",
  type: "textarea",
  rows: 9,
  defaultValue: `* NAMA : 
* NO. IC : 
* UMUR : 
* JANTINA : 
* WARGANEGARA : 
* BANGSA : 
* NO. TEL : 
* PEKERJAAN : 
* ALAMAT :   `,
  },

  {
  name: "sebabKejadian",
  label: "SEBAB KEJADIAN",
  type: "input",
  placeholder: "Cth : KEHILANGAN AKSESORI KERETA",
  },

  {
  name: "kronologi",
  label: "KRONOLOGI RINGKASAN KEJADIAN",
  type: "textarea",
  rows: 10,
  placeholder: "MASUKKAN KRONOLOGI KEJADIAN...",
  },

  {
  name: "tindakan1",
  label: "TINDAKAN 1",
  type: "textarea",
  rows: 2,
  defaultValue: "TELAH MEMAKLUMKAN KEJADIAN KEPADA KETUA ZON 2",
  },

  {
  name: "tindakan2",
  label: "TINDAKAN 2",
  type: "textarea",
  rows: 2,
  defaultValue: "",
  placeholder: "MASUKKAN TINDAKAN TAMBAHAN JIKA ADA",
  },

  {
  name: "tindakan3",
  label: "TINDAKAN 3",
  type: "textarea",
  rows: 2,
  defaultValue: "",
  placeholder: "MASUKKAN TINDAKAN TAMBAHAN JIKA ADA",
  },

  {
  name: "tindakan4",
  label: "TINDAKAN 4",
  type: "textarea",
  rows: 2,
  defaultValue: "",
  placeholder: "MASUKKAN TINDAKAN TAMBAHAN JIKA ADA",
  },
  ],

  build({
  tajuk,
  tarikhKejadian,
  masa,
  stesen,
  penyelia1,
  penyelia2,
  penyelia3,
  scc1,
  scc2,
  anggotaStesen,
  anggota,
  hoslerCSA,
  butirMangsa,
  sebabKejadian,
  kronologi,
  tindakan1,
  tindakan2,
  tindakan3,
  tindakan4,
  }) {
  const tindakanList = [
  tindakan1,
  tindakan2,
  tindakan3,
  tindakan4,
  ]
  .filter((tindakan) => tindakan?.trim())
  .map((tindakan, index) => `${index + 1}. ${tindakan.trim()}`)
  .join("\n\n");

  const penyeliaList = [
  penyelia1,
  penyelia2,
  penyelia3,
  ]
  .filter((penyelia) => penyelia?.trim())
  .map((penyelia) => `* ${penyelia}`)
  .join("\n");

  const sccList = [
  scc1,
  scc2,
  ]
  .filter((scc) => scc?.trim())
  .map((scc) => `* ${scc}`)
  .join("\n");

  return `🚩🚩🚩

*ASSALAMUALAIKUM SALAM SEJAHTERA TUAN/PUAN*

*${tajuk || ""}*

*1. TARIKH :*
* ${tarikhKejadian || ""}

*2. MASA :*
* ${masa || ""}

*3. STESEN :*
* ${stesen || ""}

*4. PENYELIA BERTUGAS :*
${penyeliaList || "* NIL"}

*5. SCC BERTUGAS :*
${sccList || "* NIL"}

*6. ANGGOTA STESEN BERTUGAS :*
* ${anggotaStesen || "NIL"}

*7. HOSLER/CSA BERTUGAS :*
* ${hoslerCSA || "NIL"}

*8. BUTIR-BUTIR MANGSA/PENGADU :*
${butirMangsa?.trim() || "NIL"}

*9. SEBAB KEJADIAN :*
* ${sebabKejadian || "NIL"}

*10. KRONOLOGI RINGKASAN KEJADIAN :*
${kronologi || "NIL"}

*TINDAKAN :*
${tindakanList || "NIL"}`.toUpperCase();
},
};

export default laporanPenuh;