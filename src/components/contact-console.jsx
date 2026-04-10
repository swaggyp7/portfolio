"use client";

import { useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  message: "",
};

export function ContactConsole({ email }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("Ready");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Missing required field");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("Opening mail client");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field-shell">
          <span className="field-label">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Full Name"
            className="field-input"
          />
        </label>

        <label className="field-shell">
          <span className="field-label">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            placeholder="Email"
            className="field-input"
          />
        </label>
      </div>

      <label className="field-shell">
        <span className="field-label">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Tell me about the role, project, or collaboration."
          rows={7}
          className="field-input min-h-[210px] resize-y"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="pixel-button">
          Send via mail client
        </button>
        <button
          type="button"
          className="pixel-button secondary"
          onClick={() => {
            setForm(emptyForm);
            setStatus("Cleared");
          }}
        >
          Reset
        </button>
        <span className="status-pill">Status: {status}</span>
      </div>
    </form>
  );
}
