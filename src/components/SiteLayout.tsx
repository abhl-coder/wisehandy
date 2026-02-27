import Image from "next/image";
import Link from "next/link";
import { getMenuByLocation } from "@/lib/content";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getMenuByLocation("main");
  const items =
    menu?.items?.length
      ? menu.items.map((i) => ({ label: i.label, url: i.url }))
      : [
          { label: "Home", url: "/" },
          { label: "About Us", url: "/aboutus" },
          { label: "Reviews", url: "/reviews" },
          { label: "Quote Request", url: "/quoterequest" },
          { label: "Transfer Switch Generator", url: "/electrictansferswitchgenerator" },
        ];

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>contact@americashandy.com</div>
          <div>407-404-4501</div>
        </div>
      </div>
      <header className="nav">
        <div className="container">
          <Link className="logo" href="/">
            <Image
              src="/images/wiselogo.png"
              alt="Wise Handy"
              width={500}
              height={100}
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </Link>
          <nav className="nav-links">
            {items.map((item) => (
              <Link key={item.url} href={item.url}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="btn btn-primary"
            href="https://clienthub.getjobber.com/client_hubs/c4dc76e7-25a1-4c8f-bc1c-1852acec6b81/public/work_request/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Pro
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container grid grid-3">
          <div>
            <div className="logo">Wise Handy</div>
            <p className="subtle">
              Full‑service repair and improvement for residential and
              commercial properties.
            </p>
          </div>
          <div>
            <p className="h3">Contact</p>
            <p>contact@americashandy.com</p>
            <p>407-404-4501</p>
          </div>
          <div>
            <p className="h3">Services</p>
            <p>Appliances • Carpentry • Electrical • Plumbing</p>
            <p>Painting • Drywall • Assembly • Exterior work</p>
          </div>
        </div>
      </footer>
    </>
  );
}

