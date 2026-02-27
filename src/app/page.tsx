import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import PageRenderer from "@/components/PageRenderer";
import { getPageBySlug } from "@/lib/content";

export const metadata = {
  title: "Home",
  description:
    "Wise Handy provides full‑service home and commercial repairs in Florida. Book a pro today.",
};

export default async function Home() {
  const page = await getPageBySlug("");
  if (page && page.body) {
    return (
      <SiteLayout>
        <PageRenderer blocks={page.body as any} />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="section">
        <div className="container hero">
          <div>
            <span className="pill">Full‑Service Commercial & Home Repair</span>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Wise Handy
            </h1>
            <p className="subtle" style={{ marginTop: 18, fontSize: 18 }}>
              Wise Handy is a full‑service commercial and home repair company.
              We are dedicated to helping you save money, time, and stress by
              providing exceptional service across a wide range of repairs and
              improvements.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <a
                className="btn btn-primary"
                href="https://clienthub.getjobber.com/client_hubs/c4dc76e7-25a1-4c8f-bc1c-1852acec6b81/public/work_request/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Pro
              </a>
              <a className="btn btn-outline" href="tel:407-404-4501">
                Call 407-404-4501
              </a>
            </div>
            <div className="badge-row" style={{ marginTop: 24 }}>
              <Image
                src="/images/insured-300x290.png"
                alt="Insured"
                width={90}
                height={90}
              />
              <Image
                src="/images/Certified_20by_20Customers.png"
                alt="Certified by Customers"
                width={110}
                height={90}
              />
              <Image
                src="/images/florida.png"
                alt="Serving Florida"
                width={60}
                height={60}
              />
              <span className="subtle">Proudly serving Florida</span>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/images/c4dc76_41ac306374de4b7887ee7bf1e6480aed_mv2.jpg"
              alt="Handyman service"
              width={560}
              height={740}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <span className="pill">Our Services</span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Remodeling • Carpentry • Electrical • Plumbing • Fences
              </h2>
              <p className="subtle" style={{ marginTop: 14 }}>
                From small repairs to full home improvements, we handle the
                details so your property works the way it should.
              </p>
              <div style={{ marginTop: 18 }}>
                <Link className="btn btn-primary" href="/quoterequest">
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="image-strip">
              <Image
                src="/images/c4dc76_188a6dbd2fca42e5932d31d1fb8b1184_mv2.jpeg"
                alt="Repair service"
                width={320}
                height={240}
              />
              <Image
                src="/images/c4dc76_190d7b6fb4654c738ab66f45c9e50a52_mv2.jpg"
                alt="Home improvement"
                width={320}
                height={240}
              />
              <Image
                src="/images/c4dc76_1c153cec8c42403abca99bb1f070e53c_mv2.jpeg"
                alt="Carpentry"
                width={320}
                height={240}
              />
              <Image
                src="/images/c4dc76_225fb610ae40499a86ee8812f0b93f6c_mv2.jpg"
                alt="Exterior work"
                width={320}
                height={240}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="pill">Let’s Get It Done</span>
          <h2 className="h2" style={{ marginTop: 12 }}>
            Small Repairs. Home Repairs. Improvements. Exterior.
          </h2>
          <div className="grid grid-4" style={{ marginTop: 24 }}>
            <div className="card">
              <h3 className="h3">Small Repairs</h3>
              <p className="subtle">
                Fixes that remove daily hassles quickly and cleanly.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Home Repairs</h3>
              <p className="subtle">
                Reliable help for common issues around the house.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Home Improvements</h3>
              <p className="subtle">
                Upgrade spaces with careful workmanship and finish.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Exterior</h3>
              <p className="subtle">
                Keep your curb appeal clean, safe, and durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-2">
          <div>
            <span className="pill">Professional Services</span>
            <h2 className="h2" style={{ marginTop: 12 }}>
              We do it all.
            </h2>
            <p className="subtle" style={{ marginTop: 12 }}>
              Interior & exterior painting, electrical work, welding, general
              carpentry, plumbing, furniture assembly, drywall repair, and more.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Popular Services</h3>
            <ul style={{ marginTop: 12, paddingLeft: 18 }}>
              <li>Interior / Exterior Painting</li>
              <li>Electrical & Plumbing Repairs</li>
              <li>Drywall & Door Repairs</li>
              <li>Furniture Assembly</li>
              <li>Appliance Installation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="hero-media">
            <Image
              src="/images/c4dc76_58cd4e0aa72c447295a2a4476840095c_mv2.jpeg"
              alt="Schedule repairs"
              width={520}
              height={390}
            />
          </div>
          <div>
            <span className="pill">Need a Pro</span>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Schedule a home repair in minutes.
            </h2>
            <p className="subtle" style={{ marginTop: 12 }}>
              Tell us what you need, choose your time, and we will handle the
              rest.
            </p>
            <div style={{ marginTop: 18 }}>
              <Link className="btn btn-primary" href="/quoterequest">
                Start a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <span className="pill">Reviews</span>
          <h2 className="h2" style={{ marginTop: 12 }}>
            Client Testimonials
          </h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            <div className="card">
              <p>
                “Excellent service and communication. Fast response and quality
                work.”
              </p>
              <p className="subtle" style={{ marginTop: 10 }}>
                — Wade
              </p>
            </div>
            <div className="card">
              <p>
                “Great work for my commercial property. I will definitely use
                Wise Handy again.”
              </p>
              <p className="subtle" style={{ marginTop: 10 }}>
                — Katie
              </p>
            </div>
            <div className="card">
              <p>
                “Friendly, professional, and did a great job on multiple
                repairs.”
              </p>
              <p className="subtle" style={{ marginTop: 10 }}>
                — Ashley
              </p>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className="btn btn-outline" href="/reviews">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
