"use client";

import { useEffect, useState } from "react";

export default function Form({
  report,
  station,
  anggota,
  savedData,
  onClose,
  onSave,
}) {
  /* =========================================
     INITIAL DATA
  ========================================= */

  function createInitialData() {
    const initialData = {};

    (report?.fields || []).forEach((field) => {
      // Abaikan field INFO
      if (field.type === "info") return;

      const savedValue = savedData?.[field.name];

      // Guna data yang pernah disimpan
      if (
        savedValue !== undefined &&
        savedValue !== null &&
        savedValue !== ""
      ) {
        initialData[field.name] = savedValue;
      }

      // Default value
      else if (field.defaultValue !== undefined) {
        initialData[field.name] = field.defaultValue;
      }

      // Checkbox
      else if (field.type === "checkbox") {
        initialData[field.name] = [];
      }

      // Field biasa
      else {
        initialData[field.name] = "";
      }
    });

    return initialData;
  }

  /* =========================================
     STATE
  ========================================= */

  const [formData, setFormData] = useState(() =>
    createInitialData()
  );

  /* =========================================
     UPDATE FORM BILA REPORT / SAVED DATA BERUBAH
  ========================================= */

  useEffect(() => {
    setFormData(createInitialData());
  }, [report, savedData]);

  /* =========================================
     CHANGE VALUE
  ========================================= */

  function handleChange(name, value) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  /* =========================================
     SIMPAN
  ========================================= */

  function handleSubmit() {
    if (onSave) {
      onSave(formData);
    }
  }

  /* =========================================
     RENDER FIELD
  ========================================= */

  function renderField(field) {
    /* =====================================
       INFO / PERINGATAN
    ===================================== */

    if (field.type === "info") {
      return (
        <div
          className="
            rounded-xl
            border
            border-yellow-500/40
            bg-yellow-500/10
            p-3
            shadow-[0_0_12px_rgba(234,179,8,0.08)]
          "
        >
          {field.title && (
            <h3 className="text-[11px] font-black text-yellow-400">
              ⚠️ {field.title}
            </h3>
          )}

          {field.message && (
            <p className="mt-1 text-[10px] font-bold leading-relaxed text-yellow-200/90">
              {field.message}
            </p>
          )}
        </div>
      );
    }

    /* =====================================
       VALUE
    ===================================== */

    const value =
      formData[field.name] !== undefined
        ? formData[field.name]
        : "";

    /* =====================================
       TEXTAREA
    ===================================== */

    if (field.type === "textarea") {
      return (
        <textarea
          value={value}
          onChange={(e) =>
            handleChange(field.name, e.target.value)
          }
          placeholder={field.placeholder || ""}
          rows={field.rows || 4}
          className="
            w-full
            resize-y
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-2
            text-[11px]
            font-bold
            leading-relaxed
            text-white
            outline-none
            transition
            placeholder:text-slate-600
            focus:border-blue-400
            focus:ring-1
            focus:ring-blue-400/30
          "
        />
      );
    }

    /* =====================================
       SELECT
    ===================================== */

    if (field.type === "select") {
      return (
        <select
          value={value}
          onChange={(e) =>
            handleChange(field.name, e.target.value)
          }
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-2
            text-[11px]
            font-bold
            text-white
            outline-none
            transition
            focus:border-blue-400
            focus:ring-1
            focus:ring-blue-400/30
          "
        >
          <option value="">
            {field.placeholder ||
              `PILIH ${field.label || "PILIHAN"}`}
          </option>

          {(field.options || []).map((option, index) => (
            <option
              key={index}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      );
    }

    /* =====================================
       RADIO
    ===================================== */

    if (field.type === "radio") {
      return (
        <div
          className="
            space-y-2
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-2
          "
        >
          {(field.options || []).map((option, index) => (
            <label
              key={index}
              className="
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-md
                p-1
                text-[11px]
                font-bold
                text-slate-300
                transition
                hover:bg-slate-800
              "
            >
              <input
                type="radio"
                name={field.name}
                value={option}
                checked={value === option}
                onChange={(e) =>
                  handleChange(
                    field.name,
                    e.target.value
                  )
                }
                className="accent-blue-500"
              />

              <span>{option}</span>
            </label>
          ))}
        </div>
      );
    }

    /* =====================================
       CHECKBOX
    ===================================== */

    if (field.type === "checkbox") {
      const checkedValues = Array.isArray(value)
        ? value
        : [];

      function toggleCheckbox(option) {
        if (checkedValues.includes(option)) {
          handleChange(
            field.name,
            checkedValues.filter(
              (item) => item !== option
            )
          );
        } else {
          handleChange(
            field.name,
            [...checkedValues, option]
          );
        }
      }

      return (
        <div
          className="
            space-y-2
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-2
          "
        >
          {(field.options || []).map((option, index) => (
            <label
              key={index}
              className="
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-md
                p-1
                text-[11px]
                font-bold
                text-slate-300
                transition
                hover:bg-slate-800
              "
            >
              <input
                type="checkbox"
                checked={checkedValues.includes(option)}
                onChange={() =>
                  toggleCheckbox(option)
                }
                className="accent-blue-500"
              />

              <span>{option}</span>
            </label>
          ))}
        </div>
      );
    }

    /* =====================================
       DATE
    ===================================== */

    if (field.type === "date") {
      return (
        <input
          type="date"
          value={value}
          onChange={(e) =>
            handleChange(field.name, e.target.value)
          }
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-2
            text-[11px]
            font-bold
            text-white
            outline-none
            transition
            focus:border-blue-400
            focus:ring-1
            focus:ring-blue-400/30
          "
        />
      );
    }

    /* =====================================
       TIME
    ===================================== */

    if (field.type === "time") {
      return (
        <input
          type="time"
          value={value}
          onChange={(e) =>
            handleChange(field.name, e.target.value)
          }
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-2
            text-[11px]
            font-bold
            text-white
            outline-none
            transition
            focus:border-blue-400
            focus:ring-1
            focus:ring-blue-400/30
          "
        />
      );
    }

    /* =====================================
       NUMBER
    ===================================== */

    if (field.type === "number") {
      return (
        <input
          type="number"
          value={value}
          onChange={(e) =>
            handleChange(field.name, e.target.value)
          }
          placeholder={field.placeholder || ""}
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            p-2
            text-[11px]
            font-bold
            text-white
            outline-none
            transition
            placeholder:text-slate-600
            focus:border-blue-400
            focus:ring-1
            focus:ring-blue-400/30
          "
        />
      );
    }

    /* =====================================
       TEXT / INPUT / DEFAULT
    ===================================== */

    return (
      <input
        type="text"
        value={value}
        onChange={(e) =>
          handleChange(field.name, e.target.value)
        }
        placeholder={field.placeholder || ""}
        className="
          w-full
          rounded-lg
          border
          border-slate-700
          bg-slate-900
          p-2
          text-[11px]
          font-bold
          text-white
          outline-none
          transition
          placeholder:text-slate-600
          focus:border-blue-400
          focus:ring-1
          focus:ring-blue-400/30
        "
      />
    );
  }

  /* =========================================
     PAPARAN FORM
  ========================================= */

  return (
    <div
      className="
        rounded-xl
        border
        border-blue-500/30
        bg-slate-950
        p-3
        shadow-[0_0_15px_rgba(59,130,246,0.12)]
      "
    >
      {/* DYNAMIC FIELDS */}

      <div>
        {(report?.fields || []).map((field, index) => (
          <div
            key={field.name || `info-${index}`}
            className="mb-3"
          >
            {/* LABEL HANYA UNTUK FIELD BIASA */}

            {field.type !== "info" && field.label && (
              <label
                className="
                  mb-1
                  block
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-slate-300
                "
              >
                {field.label}
              </label>
            )}

            {renderField(field)}
          </div>
        ))}
      </div>

      {/* BUTTON */}

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={onClose}
          className="
            flex-1
            rounded-lg
            border
            border-slate-600
            bg-slate-700
            p-2
            text-[10px]
            font-black
            text-white
            transition
            hover:bg-slate-600
            active:scale-95
          "
        >
          ✖ TUTUP
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="
            flex-1
            rounded-lg
            border
            border-blue-400/30
            bg-blue-600
            p-2
            text-[10px]
            font-black
            text-white
            shadow-[0_0_12px_rgba(59,130,246,0.25)]
            transition
            hover:bg-blue-500
            active:scale-95
          "
        >
          💾 SIMPAN
        </button>
      </div>
    </div>
  );
}