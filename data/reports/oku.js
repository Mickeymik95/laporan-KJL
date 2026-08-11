export const oku = {
  id: "oku",
  name: "LAPORAN BANTUAN OKU",

  fields: [
    {
      name: "stesenTujuan",
      label: "STESEN TUJUAN",
      type: "input",
      placeholder: "CTH : KLS, ARD, PTH",
    },

    {
      name: "platform",
      label: "PLATFORM",
      type: "select",
      placeholder: "PILIH PLATFORM",
      options: [
        "PLATFORM 1",
        "PLATFORM 2",
      ],
    },

    {
      name: "trenId",
      label: "TREN ID",
      type: "number",
      placeholder: "CTH : 95",
    },

    {
      name: "door",
      label: "DOOR",
      type: "number",
      placeholder: "CTH : 6",
    },
  ],

  build({
    station,
    stesenTujuan,
    platform,
    trenId,
    door,
  }) {
    return `*◇ OKU - ${station} ➡️ ${stesenTujuan}*
*◇ ${platform}*
*◇ Tren Id ${trenId} - Door ${door}*`;
  },
};

export default oku;