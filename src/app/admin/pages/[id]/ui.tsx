"use client";

import { useState } from "react";

export default function EditPageForm({ page }: { page: any }) {
  const [title, setTitle] = useState(page.title || "");
  const [slug, setSlug] = useState(page.slug || "");
  const [status, setStatus] = useState(page.status || "draft");
  const [seoTitle, setSeoTitle] = useState(page.seoTitle || "");
  const [seoDesc, setSeoDesc] = useState(page.seoDesc || "");
  const [canonicalUrl, setCanonicalUrl] = useState(page.canonicalUrl || "");
  const [body, setBody] = useState(JSON.stringify(page.body || [], null, 2));
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaved(false);

    let parsedBody: any = [];
    try {
      parsedBody = JSON.parse(body || "[]");
    } catch {
      setError("Body must be valid JSON");
      return;
    }

    const res = await fetch(`/api/admin/pages/${page.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug,
        status,
        seoTitle,
        seoDesc,
        canonicalUrl,
        body: parsedBody,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to save");
      return;
    }

    setSaved(true);
  }

  async function removePage() {
    if (!confirm("Delete this page?")) return;
    await fetch(`/api/admin/pages/${page.id}`, { method: "DELETE" });
    window.location.href = "/admin/pages";
  }

  return (
    <div>
      <h1>Edit Page</h1>
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
          <label>SEO Title</label>
          <input
            className="input"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>SEO Description</label>
          <textarea
            value={seoDesc}
            onChange={(e) => setSeoDesc(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Canonical URL</label>
          <input
            className="input"
            value={canonicalUrl}
            onChange={(e) => setCanonicalUrl(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Body (JSON)</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        {saved && <p style={{ color: "green" }}>Saved.</p>}
        <button className="btn btn-primary" type="submit">
          Save
        </button>
        <button
          className="btn btn-outline"
          type="button"
          onClick={removePage}
          style={{ marginLeft: 10 }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
