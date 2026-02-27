"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Login failed");
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <div style={{ maxWidth: 420, margin: "80px auto" }}>
      <h1>Admin Login</h1>
      <form onSubmit={submit} style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        <button className="btn btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
