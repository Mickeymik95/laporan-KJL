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

    return `Assalamualaikum wbt & Salam Sejahtera YDH Tuan,

Laporan penugasan anggota bertugas Aliran Kelana Jaya Jabatan Sekuriti.

TARIKH : ${tarikh}
MASA : ${masa}
TUGASAN : RONDAAN STESEN
LOKASI : STESEN LRT *${station}* (KJL)

1. RONDAAN DAN PEMANTAUAN SEKITAR KAWASAN STESEN SELEPAS TAMAT OPERASI TREN BAGI STESEN *${station}* (KJL).
2. KAWASAN CONCOURSE, KIOSK, TANDAS, SURAU, BILIK JANITOR, ER, CSO, TANGGA KECEMASAN DAN PLATFORM.
3. SELESAI RONDAAN LOKASI BAIK, SERTA TIADA KELIBAT PENUMPANG DIDALAM STESEN DAN KEADAAN TERKAWAL.
${tambahanList.length ? tambahanList.join("\n") + "\n" : ""}
ANGGOTA BERTUGAS :
*${anggota}*

#TERUSKAN PERKARA BAIK`;
  },
};

export default tamatOps;