export const peak = {
  id: "peak",
  name: "LAPORAN PEAK HOUR",

  fields: [
    {
      name: "status",
      label: "STATUS",
      type: "textarea",
      defaultValue: "BAIK & TERKAWAL",
      placeholder: "MASUKKAN STATUS...",
    },
  ],

  build({
    station,
    tarikh,
    masa,
    status,
  }) {
    return [
      "*Update Terkini :*",
      "",
      `Tarikh : ${tarikh}`,
      `Stesen : *${station}*`,
      `Masa : ${masa}`,
      "",
      `*Status : ${status || ""}*`,
    ].join("\n");
  },
};