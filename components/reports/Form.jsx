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
  function getInitialData() {
    const initialData = {};

    (report?.fields || []).forEach((field) => {
      if (field.defaultValue !== undefined) {
        initialData[field.name] = field.defaultValue;
      } else if (field.type === "checkbox") {
        initialData[field.name] = [];
      } else {
        initialData[field.name] = "";
      }
    });

    return initialData;
  }

  const [formData, setFormData] = useState(() => {
  const initialData = {};

  (report?.fields || []).forEach((field) => {
    if (savedData && savedData[field.name] !== undefined) {
      initialData[field.name] = savedData[field.name];
    } else if (field.defaultValue !== undefined) {
      initialData[field.name] = field.defaultValue;
    } else {
      initialData[field.name] = "";
    }
  });

  return initialData;
});

  /* =========================================
     RESET FORM APABILA REPORT BERUBAH
  ========================================= */

  useEffect(() => {
  const initialData = {};

  (report?.fields || []).forEach((field) => {
    if (savedData && savedData[field.name] !== undefined) {
      initialData[field.name] = savedData[field.name];
    } else if (field.defaultValue !== undefined) {
      initialData[field.name] = field.defaultValue;
    } else if (field.type === "checkbox") {
      initialData[field.name] = [];
    } else {
      initialData[field.name] = "";
    }
  });

  setFormData(initialData);
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
            handleChange(
              field.name,
              e.target.value
            )
          }
          placeholder={
            field.placeholder || ""
          }
          rows={4}
          className="
            w-full
            resize-none
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
       SELECT
    ===================================== */

    if (field.type === "select") {
      return (
        <select
          value={value}
          onChange={(e) =>
            handleChange(
              field.name,
              e.target.value
            )
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
              `PILIH ${field.label}`}
          </option>

          {(field.options || []).map(
            (option, index) => (
              <option
                key={index}
                value={option}
              >
                {option}
              </option>
            )
          )}
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
          {(field.options || []).map(
            (option, index) => (
              <label
                key={index}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-[11px]
                  font-bold
                  text-slate-300
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
            )
          )}
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
          {(field.options || []).map(
            (option, index) => (
              <label
                key={index}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-[11px]
                  font-bold
                  text-slate-300
                "
              >
                <input
                  type="checkbox"
                  checked={checkedValues.includes(
                    option
                  )}
                  onChange={() =>
                    toggleCheckbox(option)
                  }
                  className="accent-blue-500"
                />

                <span>{option}</span>
              </label>
            )
          )}
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
            handleChange(
              field.name,
              e.target.value
            )
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
            focus:border-blue-400
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
            handleChange(
              field.name,
              e.target.value
            )
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
            focus:border-blue-400
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
            handleChange(
              field.name,
              e.target.value
            )
          }
          placeholder={
            field.placeholder || ""
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
            placeholder:text-slate-600
            focus:border-blue-400
            focus:ring-1
            focus:ring-blue-400/30
          "
        />
      );
    }

    /* =====================================
       TEXT / DEFAULT
    ===================================== */

    return (
      <input
        type="text"
        value={value}
        onChange={(e) =>
          handleChange(
            field.name,
            e.target.value
          )
        }
        placeholder={
          field.placeholder || ""
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
        {(report?.fields || []).map(
          (field) => (
            <div
              key={field.name}
              className="mb-3"
            >
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

              {renderField(field)}
            </div>
          )
        )}
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