export const internalReport = {
id: "internalreport",
name: "INTERNAL REPORT",

fields: [
{
name: "name",
label: "NAMA",
type: "input",
placeholder: "Cth : MOHD ALI BIN ABU",
},
{
  name: "idstafID",
  label: "ID/STAF ID",
  type: "input",
  placeholder: "Cth : 10000132",
},

{
  name: "section",
  label: "SECTION",
  type: "input",
  defaultValue: "GHSSE&SD",
},

{
  name: "position",
  label: "POSITION",
  type: "input",
  defaultValue: "POLIS BANTUAN",
},

{
  name: "tajuk",
  label: "TAJUK",
  type: "input",
  placeholder: "Cth : REDMIKE STESEN TAMAN JAYA",
},

{
  name: "ulasan",
  label: "ULASAN",
  type: "textarea",
  placeholder:
    "Cth : Pada 12/12/2026 jam sekitar 1233 HRS telah berlaku kejadian redmike di platform 1....",
  rows: 10,
  
},

{
  type: "info",
  title: "BUTIR-BUTIR REDMIKE",
  message:
    "HANYA UNTUK KEJADIAN REDMIKE SAHAJA",
},

{
  name: "namaMangsa",
  label: "NAMA MANGSA",
  type: "input",
  placeholder: "Cth : AHMAD BIN ALI",
},

{
  name: "noKP",
  label: "NO. KP",
  type: "input",
  placeholder: "Cth : 900101-10-1234",
},

{
  name: "tarikhLahir",
  label: "TARIKH LAHIR",
  type: "input",
  placeholder: "Cth : 01/01/1985",
},

{
  name: "jantina",
  label: "JANTINA",
  type: "select",
  placeholder: "PILIH JANTINA",
  options: [
    "LELAKI",
    "WANITA",
  ],
},

{
  name: "umur",
  label: "UMUR",
  type: "number",
  placeholder: "Cth : 35",
},

{
  name: "warganegara",
  label: "WARGANEGARA",
  type: "input",
  placeholder: "Cth : MALAYSIA",
},

{
  name: "pekerjaan",
  label: "PEKERJAAN",
  type: "input",
  placeholder: "Cth : GURU",
},

{
  name: "noTelefon",
  label: "NO. TELEFON",
  type: "input",
  placeholder: "Cth : 0123456789",
},

{
  name: "alamat",
  label: "ALAMAT",
  type: "textarea",
  rows: 3,
  placeholder: "MASUKKAN ALAMAT PENUH",
},

{
  name: "redState",
  label: "MASA RED STATE",
  type: "input",
  placeholder: "MASUKKAN RED STATE",
},

{
  name: "greenState",
  label: "MASA GREEN STATE",
  type: "input",
  placeholder: "MASUKKAN GREEN STATE",
},

],

build({
tarikh,
name,   
idstafID,
section,
tajuk,
ulasan,
position,
namaMangsa,
noKP,
tarikhLahir,
jantina,
umur,
warganegara,
pekerjaan,
noTelefon,
alamat,
redState,
greenState,

}) {

const adaMangsa =
  namaMangsa ||
  noKP ||
  tarikhLahir ||
  jantina ||
  umur ||
  warganegara ||
  pekerjaan ||
  noTelefon ||
  alamat ||
  redState ||
  greenState;


const butirMangsa = adaMangsa
  ? `
*BUTIR-BUTIR MANGSA :-*
NAMA : ${namaMangsa || "-"}
NO. KP : ${noKP || "-"}
TARIKH LAHIR : ${tarikhLahir || "-"}
JANTINA : ${jantina || "-"}
UMUR : ${umur || "-"}
WARGANEGARA : ${warganegara || "-"}
PEKERJAAN : ${pekerjaan || "-"}
NO. TELEFON : ${noTelefon || "-"}
ALAMAT : ${alamat || "-"}
RED STATE : ${redState || "-"}
GREEN STATE : ${greenState || "-"}`
: "";
return `NAMA : ${name || ""}
ID NO : ${idstafID || ""}
POSITION : ${position || ""}
SECTION : ${section || ""}
TARIKH : ${tarikh || ""}

*${tajuk || ""}*

*ULASAN :-*
${ulasan || ""}

${butirMangsa}`;
}
};

export default internalReport;
