import Image from "next/image";
import SiteLayout from "@/components/SiteLayout";

export const metadata = {
  title: "Transfer Switch Generator",
  description:
    "Safe, code‑compliant transfer switch installations for generators in Florida.",
};

export default function TransferSwitchPage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <span className="pill">Electrical</span>
            <h1 className="h1" style={{ marginTop: 12 }}>
              Electrical Installation Transfer Switch for Your Generator
            </h1>
            <p className="subtle" style={{ marginTop: 12 }}>
              Power outages can be stressful. A transfer switch allows your
              generator to safely power critical areas of your home without
              dangerous back‑feeding.
            </p>
            <ul style={{ marginTop: 16, paddingLeft: 18 }}>
              <li>Safe, code‑compliant installations</li>
              <li>Professional wiring and testing</li>
              <li>Support for most major brands</li>
            </ul>
          </div>
          <div className="hero-media">
            <Image
              src="/images/power-outage.jpeg"
              alt="Power outage"
              width={560}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-2">
          <div className="hero-media">
            <Image
              src="/images/installationtransfer-switch.jpg"
              alt="Transfer switch installation"
              width={520}
              height={390}
            />
          </div>
          <div>
            <span className="pill">What We Install</span>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Transfer switch setup and wiring
            </h2>
            <p className="subtle" style={{ marginTop: 12 }}>
              We mount, wire, and test transfer switches for whole‑home or
              partial coverage systems.
            </p>
            <div className="badge-row" style={{ marginTop: 16 }}>
              <Image
                src="/images/transfer_20swtich.png"
                alt="Transfer switch"
                width={80}
                height={80}
              />
              <Image
                src="/images/installation_20-_20typical.jpg"
                alt="Installation"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="pill">Supported Brands</span>
          <h2 className="h2" style={{ marginTop: 12 }}>
            We work with leading generator brands
          </h2>
          <div className="grid grid-3" style={{ marginTop: 20 }}>
            <div className="card">Generac</div>
            <div className="card">Champion</div>
            <div className="card">Honda</div>
            <div className="card">Westinghouse</div>
            <div className="card">Briggs & Stratton</div>
            <div className="card">Duromax</div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

