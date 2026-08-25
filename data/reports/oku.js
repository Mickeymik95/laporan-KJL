import { stationShortNames } from "../zones";

export const oku = {
  id: "oku",
  name: "OKU",

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
      type: "radio",
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
      type: "select",
      options: ["1", "2", "3", "4", "5","6","7","8","9","10","11","12"],
    },
  ],

  build({
    station,
    stesenTujuan,
    platform,
    trenId,
    door,
  }) {
    const stationShortName =
      stationShortNames[station] || station;

    return `*◇ OKU - ${stationShortName} ➡️ ${stesenTujuan}*
*◇ ${platform}*
*◇ Tren Id ${trenId} - Door ${door}*`;
  },
};

export default oku;