const tamatOps = {
  id: "tamatOps",
  name: "TAMAT OPERASI",

  fields: [
    {
      name: "tambahan",
      label: "LAPORAN TAMBAHAN",
      type: "textarea",
      rows: 8,
      placeholder: "Cth : 01 x Kontraktor sedang membuat cucian (akan masuk dalam no 4 laporan)"
    }
  ],

  build({
    anggota,
    station,
    tarikh,
    masa,
    tambahan,
  }) {
    const tambahanList = (tambahan || "")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item, index) => {
        return `${index + 4}. ${item.toUpperCase()}`;
      });

    return `*Assalamualaikum wbt & Salam Sejahtera YDH Tuan,*

Laporan penugasan anggota bertugas Aliran Kelana Jaya Jabatan Sekuriti.

TARIKH : ${tarikh}
MASA : ${masa}
TUGASAN : RONDAAN STESEN
LOKASI : STESEN LRT *${station}* (KJL)

1. Rondaan dan pemantauan sekitar kawasan stesen selepas tamat operasi tren bagi stesen *${station}* (kjl).
2. Kawasan concourse, kiosk, tandas, surau, bilik janitor, er, cso, tangga kecemasan dan platform.
3. Selesai rondaan lokasi baik, serta tiada kelibat penumpang didalam stesen dan keadaan terkawal.
${tambahanList.length ? tambahanList.join("\n") + "\n" : ""}
ANGGOTA BERTUGAS :
*${anggota}*

*#TERUSKAN PERKARA BAIK*`;
  },
};

export default tamatOps;