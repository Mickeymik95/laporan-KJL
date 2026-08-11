"use client";
import { useEffect, useState } from "react";
import { zones } from "../data/zones";
import { reports } from "../data/reports";
import Form from "../components/reports/Form";

export default function Home() {
  const [anggota, setAnggota] = useState("");

  const [selectedZone, setSelectedZone] = useState("");
  const [selectedStation, setSelectedStation] = useState("");
  const [selectedReport, setSelectedReport] = useState("");

  const [editOpen, setEditOpen] = useState(false);
  const [savedData, setSavedData] = useState(null);

  /* ==============================
     DATA ZON
  ============================== */

  const zoneData = zones.find(
    (zone) => zone.id === selectedZone
  );



  const stations = zoneData?.stations || [];

  /* ==============================
     DATA LAPORAN
  ============================== */

  const reportData = reports.find(
    (report) => report.id === selectedReport
  );

const storageKey =
  selectedReport && selectedStation
    ? `laporan_${selectedReport}_${selectedStation}`
    : null;

  useEffect(() => {
  if (!storageKey) {
    setSavedData(null);
    return;
  }

  const saved = localStorage.getItem(storageKey);

  if (saved) {
    setSavedData(JSON.parse(saved));
  } else {
    setSavedData(null);
  }
}, [storageKey]);

useEffect(() => {
  if (!storageKey) {
    setSavedData(null);
    return;
  }

  const saved = localStorage.getItem(storageKey);

  if (saved) {
    setSavedData(JSON.parse(saved));
  } else {
    setSavedData(null);
  }
}, [storageKey]);

  /* ==============================
     SIMPAN FORM
  ============================== */

 function handleSave(data) {
  setSavedData(data);
  if (storageKey) {
    localStorage.setItem(
      storageKey,
      JSON.stringify(data)
    );
  }
  setEditOpen(false);
}
  /* ==============================
     VALIDATION
  ============================== */

  function validateForm() {
    if (!anggota.trim()) {
      alert("⚠️ Sila masukkan NAMA ANGGOTA.");
      return false;
    }

    if (!selectedZone) {
      alert("⚠️ Sila pilih ZON.");
      return false;
    }

    if (!selectedStation) {
      alert("⚠️ Sila pilih STESEN.");
      return false;
    }

    if (!selectedReport) {
      alert("⚠️ Sila pilih JENIS LAPORAN.");
      return false;
    }

    if (!reportData) {
      alert("⚠️ Data laporan tidak dijumpai.");
      return false;
    }

    return true;
  }

  /* ==============================
     COPY LAPORAN
  ============================== */

  async function handleCopy() {
    if (!validateForm()) return;

    const now = new Date();

    const tarikh = now.toLocaleDateString("en-GB");

    const masa =
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      "HRS";

    const laporan = reportData.build({
      anggota,
      station: selectedStation,
      tarikh,
      masa,
      ...(savedData || {}),
    });

    try {
      await navigator.clipboard.writeText(laporan);

      const whatsappUrl =
        "https://wa.me/?text=" + encodeURIComponent(laporan);

      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error(error);

      alert("❌ Gagal copy laporan");
    }
  }

  /* ==============================
     EDIT
  ============================== */

  function handleEdit() {
    if (!validateForm()) return;

    setEditOpen(true);
  }

  /* ==============================
     RESET
  ============================== */

  function handleReset() {
  if (storageKey) {
    localStorage.removeItem(storageKey);
  }

  setSavedData(null);
  setEditOpen(false);

  alert("♻️ DATA EDIT TELAH DI RESET");
} 

  function handleAnggotaKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();

      const value = e.currentTarget.value.trim();

      if (!value) return;

      setAnggota((prev) => {
        if (!prev.trim()) {
          return value;
        }

        return `${prev}\n${value}`;
      });

      e.currentTarget.value = "";
    }
  }

  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col justify-center bg-slate-950 px-4 py-6 text-white">

      {/* HEADER */}

      <section className="relative overflow-hidden rounded-2xl border border-blue-500/40 bg-slate-950 p-3 shadow-[0_0_22px_rgba(59,130,246,0.15)]">

        {/* GLOW */}

<div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />

<div className="relative">

  {/* TAJUK */}

  <div className="relative">
    <h1 className="text-center text-lg font-black tracking-wide text-blue-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
      📰 FORMAT LAPORAN 👮
    </h1>

    {/* GARIS GLOW */}
    <div className="mx-auto mt-2 h-px w-32 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
  </div>


  {/* SUBTAJUK */}

  <div className="mt-2 flex items-center justify-center gap-2">

    <span className="h-px w-7 bg-blue-500/40" />

    <p className="text-[10px] font-bold tracking-[0.12em] text-slate-400">
      🚆 KELANA JAYA LINE 🚉
    </p>

    <span className="h-px w-7 bg-blue-500/40" />

  </div>


  {/* NAMA ANGGOTA */}

  <div className="mt-4">

    <label className="mb-2 block text-xs font-black tracking-wide text-blue-300">
      NAMA ANGGOTA
    </label>

    <div className="relative">

      {/* GLOW INPUT */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-blue-500/20 blur-sm" />

      <textarea
        value={anggota}
        onChange={(e) => setAnggota(e.target.value)}
        onKeyDown={handleAnggotaKeyDown}
        placeholder="CTH : KONS PB ALI"
        rows={1}
        className="relative min-h-[50px] w-full resize-none rounded-xl border border-blue-500/30 bg-slate-900 px-3 py-3 text-sm font-bold leading-6 text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
      />

    </div>

  </div>

</div>

      </section>

      {/* PILIHAN */}

      <section className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-[0_0_16px_rgba(15,23,42,0.5)]">

        {/* ZON */}

        <label className="mb-2 block text-xs font-black tracking-wide text-blue-300">
          ZON
        </label>

        <select
          value={selectedZone}
          onChange={(e) => {
            setSelectedZone(e.target.value);
            setSelectedStation("");
            setSelectedReport("");
            setSavedData(null);
            setEditOpen(false);
          }}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm font-bold text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
        >
          <option value="">
            PILIH ZON
          </option>

          {zones.map((zone) => (
            <option key={zone.id} value={zone.id}>
              {zone.name}
            </option>
          ))}
        </select>

        {/* STESEN */}

        <label className="mb-2 mt-4 block text-xs font-black tracking-wide text-blue-300">
          STESEN
        </label>

        <select
          value={selectedStation}
          onChange={(e) => {
            setSelectedStation(e.target.value);
            setSelectedReport("");
            setSavedData(null);
            setEditOpen(false);
          }}
          disabled={!selectedZone}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm font-bold text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <option value="">
            PILIH STESEN
          </option>

          {stations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>

        {/* JENIS LAPORAN */}

        <label className="mb-2 mt-4 block text-xs font-black tracking-wide text-blue-300">
          JENIS LAPORAN
        </label>

        <select
          value={selectedReport}
          onChange={(e) => {
            setSelectedReport(e.target.value);
            setSavedData(null);
            setEditOpen(false);
          }}
          disabled={!selectedStation}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm font-bold text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <option value="">
            PILIH LAPORAN
          </option>

          {reports.map((report) => (
            <option key={report.id} value={report.id}>
              {report.name}
            </option>
          ))}
        </select>

      </section>

      {/* BUTANG */}

      <section className="mt-4 rounded-2xl border border-blue-500/20 bg-slate-900 p-4 shadow-[0_0_16px_rgba(59,130,246,0.08)]">

        <div className="flex gap-3">

          {/* SEND COPY */}

          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 rounded-xl border border-green-400/30 bg-green-600 p-3 text-xs font-black text-white shadow-[0_0_12px_rgba(34,197,94,0.20)] transition hover:bg-green-500 active:scale-95"
          >
            📋 SEND COPY
          </button>

          {/* EDIT */}

          <button
            type="button"
            onClick={handleEdit}
            className="flex-1 rounded-xl border border-blue-400/30 bg-blue-600 p-3 text-xs font-black text-white shadow-[0_0_12px_rgba(59,130,246,0.20)] transition hover:bg-blue-500 active:scale-95"
          >
            ✏️ EDIT
          </button>

        </div>

        {/* RESET */}

        <button
          type="button"
          onClick={handleReset}
          className="mt-3 w-full rounded-xl border border-red-500/30 bg-red-600/80 p-3 text-xs font-black text-white shadow-[0_0_12px_rgba(239,68,68,0.20)] transition hover:bg-red-500 active:scale-95"
        >
          ♻️ RESET EDIT
        </button>

      </section>

      {/* FOOTER */}

      <footer className="mt-3 pb-2 pt-1 text-center">

        <div className="mx-auto mb-2 h-px w-24 bg-blue-500/20" />

        <p className="text-[10px] font-black tracking-wide text-slate-600">
          SISTEM LAPORAN BY NAZMI
        </p>

        <p className="mt-1 text-[8px] text-slate-700">
          © 2026 SISTEM LAPORAN. ALL RIGHTS RESERVED.
        </p>

      </footer>

      {/* FLOATING EDIT MODAL */}

      {editOpen && reportData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-md">

          <div className="max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-2xl border border-blue-500/30 bg-slate-950 p-4 shadow-[0_0_35px_rgba(59,130,246,0.30)]">

            <Form
  report={reportData}
  station={selectedStation}
  anggota={anggota}
  savedData={savedData}
  onClose={() => setEditOpen(false)}
  onSave={handleSave}
/>
          </div>

        </div>
      )}

    </main>
  );
};