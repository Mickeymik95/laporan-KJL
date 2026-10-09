export const laporanPenuh = {
  id: "laporanPenuh",
  name: "LAPORAN PENUH REDMIKE",

  fields: [
    {
      name: "tajuk",
      label: "TAJUK KEJADIAN",
      type: "input",
      placeholder:
        "Cth : KEHILANGAN AKSESORI KERETA DEKAT PARKING STN PARAMOUNT",
    },
    {
      name: "tarikhKejadian",
      label: "1. TARIKH KEJADIAN",
      type: "input",
      placeholder: "Cth : 22/06/2026",
    },
    {
      name: "masa",
      label: "2. MASA KEJADIAN",
      type: "input",
      placeholder: "Cth : 1717 HRS",
    },
    {
      name: "stesen",
      label: "3. STESEN",
      type: "input",
      placeholder: "Cth : LRT STESEN PARAMOUNT",
    },
    {
      name: "penyelia1",
      label: "4. PENYELIA BERTUGAS 1",
      type: "select",
      placeholder: "PILIH PENYELIA",
      options: [
        "10000711 KPL PB AZHAR BIN ABDUL AZIZ",
        "10000865 KPL PB MOHD SHAMSUL BIN MOHAMAD NOR",
        "10008788 LKPL PB HAIQAL HAQIM BIN DRAMAN",
        "10011682 LKPL PB KHAIRUL ASRUL BIN MOHAMED",
        "10009623 LKPL PB SYAMSUL BAHRI BIN RAMLI",
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
        "10009623 LKPL PB SYAMSUL BAHRI BIN RAMLI",
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
        "10009623 LKPL PB SYAMSUL BAHRI BIN RAMLI",
      ],
    },
    {
      name: "scc1",
      label: "5. SCC BERTUGAS 1",
      type: "select",
      placeholder: "PILIH SCC",
      options: [
        "10000975 KPL PB ARMAN BIN ARIPIN",
        "10000858 KPL PB ABDUL HAKIM BIN ABU BAKAR",
        "10001130 KPL PB HALINA BINTI MOHD SALIM",
        "10012979 KONST PB HAFFANDI BIN KUTIP",
        "10017531 KONST PB MUHAMMAD ILHAM BIN NAZRI",
        "10017518 KONST PB MOHD HAMIZI MD CHOID",
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
        "10017518 KONST PB MOHD HAMIZI MD CHOID",
      ],
    },
    {
      name: "scc3",
      label: "SCC BERTUGAS 3",
      type: "select",
      placeholder: "PILIH SCC",
      options: [
        "10000975 KPL PB ARMAN BIN ARIPIN",
        "10000858 KPL PB ABDUL HAKIM BIN ABU BAKAR",
        "10001130 KPL PB HALINA BINTI MOHD SALIM",
        "10012979 KONST PB HAFFANDI BIN KUTIP",
        "10017531 KONST PB MUHAMMAD ILHAM BIN NAZRI",
        "10017518 KONST PB MOHD HAMIZI MD CHOID",
      ],
    },
    {
      name: "anggotaStesen",
      label: "6. ANGGOTA STESEN BERTUGAS",
      type: "input",
      placeholder: "Cth : 10002222 KONST PB AFIQ BIN ALI",
    },
    {
      name: "hoslerCSA",
      label: "7. HOSLER/CSA BERTUGAS",
      type: "input",
      placeholder: "Cth : 10020218 HAKIMI/10020336 NAJAH",
    },
    {
      name: "redState",
      label: "8. RED STATE",
      type: "input",
      placeholder: "Cth : 1826 HRS",
    },
    {
      name: "greenState",
      label: "9. GREEN STATE",
      type: "input",
      placeholder: "Cth : 1826 HRS",
    },
    {
      name: "butirMangsa",
      label: "10. BUTIR-BUTIR MANGSA / PENGADU",
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
* ALAMAT :`,
    },
    {
      name: "sebabKejadian",
      label: "11. SEBAB KEJADIAN",
      type: "input",
      placeholder: "Cth : KEHILANGAN AKSESORI KERETA",
    },
    {
      name: "pegawaiPerubatan",
      label: "12. BUTIRAN PEGAWAI PERUBATAN",
      type: "textarea",
      rows: 3,
      placeholder: "MASUKKAN BUTIRAN PEGAWAI PERUBATAN...",
    },
    {
      name: "pemanduAmbulans",
      label: "13. BUTIRAN PEMANDU AMBULANS",
      type: "textarea",
      rows: 3,
      placeholder: "MASUKKAN BUTIRAN PEMANDU AMBULANS...",
    },
    {
      name: "butiranAmbulans",
      label: "14. BUTIRAN AMBULANS",
      type: "textarea",
      rows: 3,
      placeholder: "MASUKKAN BUTIRAN AMBULANS...",
    },
    {
      name: "kronologi",
      label: "16. KRONOLOGI RINGKASAN KEJADIAN",
      type: "textarea",
      rows: 13,
      placeholder: "MASUKKAN KRONOLOGI KEJADIAN...",
    },
    {
      name: "tindakan1",
      label: "17. TINDAKAN 1",
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
    scc3,
    anggotaStesen,
    hoslerCSA,
    redState,
    greenState,
    butirMangsa,
    sebabKejadian,
    pegawaiPerubatan,
    pemanduAmbulans,
    butiranAmbulans,
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
      scc3,
    ]
      .filter((scc) => scc?.trim())
      .map((scc) => `* ${scc}`)
      .join("\n");

    return `🚩🚩🚩

*ASSALAMUALAIKUM SALAM SEJAHTERA TUAN/PUAN,*

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

*8. RED STATE :*
* ${redState || "NIL"}

*9. GREEN STATE :*
* ${greenState || "NIL"}

*10. BUTIR-BUTIR MANGSA/PENGADU :*
${butirMangsa?.trim() || "NIL"}

*11. SEBAB KEJADIAN :*
* ${sebabKejadian || "NIL"}

*12. BUTIRAN PEGAWAI PERUBATAN :*
${pegawaiPerubatan?.trim() || "NIL"}

*13. BUTIRAN PEMANDU AMBULANS :*
${pemanduAmbulans?.trim() || "NIL"}

*14. BUTIRAN AMBULANS :*
${butiranAmbulans?.trim() || "NIL"}

*15. KRONOLOGI RINGKASAN KEJADIAN :*
* ${kronologi || "NIL"}

*16. TINDAKAN :*
${tindakanList || "NIL"}`.toUpperCase();
  },
};

export default laporanPenuh;