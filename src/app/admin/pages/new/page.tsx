"use client";

import { useState } from "react";

export default function NewPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("draft");
  const [body, setBody] = useState("[]");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    let parsedBody: any = [];
    try {
      parsedBody = JSON.parse(body || "[]");
    } catch {
      setError("Body must be valid JSON");
      return;
    }

    const res = await fetch("/api/admin/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, status, body: parsedBody }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to create");
      return;
    }

    const data = await res.json();
    window.location.href = `/admin/pages/${data.page.id}`;
  }

  return (
    <div>
      <h1>New Page</h1>
      <form onSubmit={submit} style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Title</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Slug</label>
          <input
            className="input"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="about-us"
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Status</label>
          <select
            className="input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="draft">draft</option>
            <option value="published">published</option>
          </select>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Body (JSON)</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        <button className="btn btn-primary" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
