import Image from "next/image";
import SiteLayout from "@/components/SiteLayout";

export default function AboutUsPage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <span className="pill">About Us</span>
            <h1 className="h1" style={{ marginTop: 12 }}>
              Wise Handy
            </h1>
            <p className="subtle" style={{ marginTop: 12 }}>
              We are a full‑service commercial and home repair company. Our goal
              is to save you money, time, and stress by delivering outstanding
              workmanship and dependable service.
            </p>
            <p className="subtle" style={{ marginTop: 12 }}>
              Wise Handy provides professional repairs, installation, and
              improvement services across a wide range of projects. From
              electrical and plumbing to carpentry and painting, we take pride
              in doing the job right.
            </p>
          </div>
          <div className="hero-media">
            <Image
              src="/images/c4dc76_62de773e53594cef8406f87d97f1a715_mv2.jpg"
              alt="About Wise Handy"
              width={560}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          <div className="card">
            <h3 className="h3">Quality Workmanship</h3>
            <p className="subtle">
              Every project is completed with care, precision, and respect for
              your property.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Clear Communication</h3>
            <p className="subtle">
              You always know what is happening and what comes next.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Trusted Service</h3>
            <p className="subtle">
              We show up on time, finish the job, and stand behind our work.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

