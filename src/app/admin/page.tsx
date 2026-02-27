import Link from "next/link";

export const dynamic = "force-dynamic";

export default function AdminHome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ marginTop: 16 }}>
        <Link className="btn btn-outline" href="/admin/pages">
          Manage Pages
        </Link>
        <Link
          className="btn btn-outline"
          href="/admin/menus"
          style={{ marginLeft: 10 }}
        >
          Manage Menu
        </Link>
      </div>
    </div>
  );
}
