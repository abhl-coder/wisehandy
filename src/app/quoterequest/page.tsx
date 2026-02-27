import SiteLayout from "@/components/SiteLayout";
import JobberEmbed from "@/components/JobberEmbed";

export default function QuoteRequestPage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <span className="pill">Quote Request</span>
          <h1 className="h1" style={{ marginTop: 12 }}>
            Tell us about your project
          </h1>
          <p className="subtle" style={{ marginTop: 12 }}>
            Share the details below and we will get back to you quickly.
          </p>

          <div
            className="card jobber-card"
            style={{ marginTop: 24 }}
          >
            <JobberEmbed />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
