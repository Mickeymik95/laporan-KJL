export const mc = {
  id: "mc",
  name: "LAPORAN MC",

  fields: [
    {
      name: "shift",
      label: "SHIFT",
      type: "select",
      options: ["N/S", "D/S"],
    },

    {
      name: "hari",
      label: "HARI",
      type: "select",
      options: ["ISNIN", "SELASA", "RABU", "KHAMIS", "JUMAT", "SABTU", "AHAD"],
    },

    {
      name: "hariBekerja",
      label: "HARI BEKERJA",
      type: "select",
      options: ["1", "2", "3", "4", "5"],
    },

    {
      name: "nama",
      label: "NAMA",
      type: "input",
      placeholder: "NAMA ANGGOTA",
    },

    {
      name: "staffId",
      label: "STAFF ID",
      type: "input",
      placeholder: "CTH : 10021800",
    },

    {
      name: "sebabMc",
      label: "SEBAB MC",
      type: "input",
      placeholder: "CTH : DEMAM",
    },

    {
      name: "jumlahMc",
      label: "JUMLAH MC",
      type: "input",
      placeholder: "CTH : 1 HARI",
    },

    {
      name: "alamatKlinik",
      label: "ALAMAT KLINIK",
      type: "textarea",
      placeholder: "MASUKKAN ALAMAT KLINIK",
    },

    {
      name: "noSiriMc",
      label: "NO. SIRI MC",
      type: "input",
      placeholder: "CTH : 326287",
    },

    {
      name: "noTelKlinik",
      label: "NO. TEL KLINIK",
      type: "input",
      placeholder: "CTH : 03-XXXX XXXX",
    },

    {
      name: "ulasanPenyelia",
      label: "ULASAN PENYELIA",
      type: "textarea",
      placeholder:
        "CTH : ANGGOTA TELAH LAPOR SAKIT HARI INI MELALUI WHATSAPP...",
    },
  ],

  build({
    shift,
    hari,
    tarikh,
    masa,
    nama,
    staffId,
    hariBekerja,
    sebabMc,
    jumlahMc,
    alamatKlinik,
    noSiriMc,
    noTelKlinik,
    ulasanPenyelia,
  }) {
    return `*ASSALAMUALAIKUM WBT, TUAN/PUAN.*

*ALIRAN :* KJL ZON 3
*SHIFT :* ${shift || ""}
*HARI :* ${hari || ""}
*TARIKH :* ${tarikh || ""}
*MASA :* ${masa || ""}

*ANGGOTA LAPOR MC :-*

*NAMA :* ${nama || ""}
*STAFF ID :* ${staffId || ""}
*HARI BEKERJA :* ${hariBekerja || ""}
*SEBAB MC :* ${sebabMc || ""}
*JUMLAH MC :* ${jumlahMc || ""}
*ALAMAT KLINIK :* ${alamatKlinik || ""}
*NO. SIRI MC :* ${noSiriMc || ""}
*NO. TEL KLINIK :* ${noTelKlinik || ""}

*ULASAN PENYELIA :*

${ulasanPenyelia || ""}

*SEKIAN UNTUK MAKLUMAT TUAN/PUAN. TERIMA KASIH.*`;
  },
};

export default mc;