import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminPages() {
  const pages = await prisma.page.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div>
      <h1>Pages</h1>
      <div style={{ margin: "12px 0" }}>
        <Link className="btn btn-primary" href="/admin/pages/new">
          New Page
        </Link>
      </div>
      <div className="card">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Title</th>
              <th style={{ textAlign: "left" }}>Slug</th>
              <th style={{ textAlign: "left" }}>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {pages.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>/{p.slug}</td>
                <td>{p.status}</td>
                <td style={{ textAlign: "right" }}>
                  <Link href={`/admin/pages/${p.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
            {pages.length === 0 && (
              <tr>
                <td colSpan={4}>No pages yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
