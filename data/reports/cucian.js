export const cucian = {
  id: "cucian",
  name: "CUCIAN / PEMBERSIHAN",

  fields: [
    {
      name: "bilanganKontraktor",
      label: "BILANGAN KONTRAKTOR",
      type: "number",
      placeholder: "CTH : 8",
    },

    {
      name: "syarikat",
      label: "NAMA SYARIKAT",
      type: "text",
      placeholder: "CTH : ALAM BERSIH SDN BHD",
      defaultValue: "ALAM BERSIH SDN BHD",
    },

    {
      name: "tambahan",
      label: "LAPORAN TAMBAHAN (JIKA PERLU)",
      type: "textarea",
      placeholder: "Cth : 01 x KONTRAKTOR DIBERIKAN PAS SEMENTARA...",
      rows: 8,
    },
  ],

  build({
    anggota,
    station,
    tarikh,
    masa,
    bilanganKontraktor,
    syarikat,
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
TUGASAN : PERIKSA KEMASUKAN KONTRAKTOR
LOKASI : STESEN LRT *${station}* (KJL)

1. KEHADIRAN *${bilanganKontraktor}X* KONTRAKTOR PEMBERSIHAN SYARIKAT *${syarikat?.toUpperCase() || ""}* TUJUAN KERJA-KERJA CUCIAN STESEN.
2. SEMAKAN PAS KONTRAKTOR SERTA WORK PERMIT MASIH DALAM TEMPOH SAH LAKU.
3. TIADA SEBARANG PENYAMARAN / PERKARA MENCURIGAKAN, SEKIAN.
${tambahanList.length ? tambahanList.join("\n") + "\n" : ""}
ANGGOTA BERTUGAS :
${anggota}

#TERUSKAN PERKARA BAIK`;
  },
};

export default cucian;