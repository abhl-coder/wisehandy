"use client";

import { useEffect, useState } from "react";

export default function MenuEditor() {
  const [items, setItems] = useState('[{"label":"Home","url":"/"}]');
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/menus/main")
      .then((r) => r.json())
      .then((data) => {
        if (data.menu?.items) {
          setItems(JSON.stringify(data.menu.items, null, 2));
        }
      });
  }, []);

  async function save() {
    setSaved(false);
    setError("");

    let parsed: any[] = [];
    try {
      parsed = JSON.parse(items || "[]");
    } catch {
      setError("Menu must be valid JSON");
      return;
    }

    const res = await fetch("/api/admin/menus/main", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: parsed }),
    });

    if (!res.ok) {
      setError("Failed to save");
      return;
    }

    setSaved(true);
  }

  return (
    <div>
      <h1>Menu</h1>
      <p className="subtle">
        Edit the main navigation menu as JSON.
      </p>
      <textarea
        value={items}
        onChange={(e) => setItems(e.target.value)}
        style={{ minHeight: 260 }}
      />
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {saved && <p style={{ color: "green" }}>Saved.</p>}
      <button className="btn btn-primary" onClick={save}>
        Save Menu
      </button>
    </div>
  );
}
