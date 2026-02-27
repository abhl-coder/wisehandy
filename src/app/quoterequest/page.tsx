import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";

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

          <div className="card" style={{ marginTop: 24 }}>
            <div id="7f3ece77-41bb-4938-a348-736efae5b2bc-1001377" />
          </div>
        </div>
      </section>
      <Script
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
        data-clienthub_id="7f3ece77-41bb-4938-a348-736efae5b2bc-1001377"
        data-form_url="https://clienthub.getjobber.com/client_hubs/7f3ece77-41bb-4938-a348-736efae5b2bc/public/work_request/embedded_work_request_form?form_id=1001377"
        strategy="afterInteractive"
      />
    </SiteLayout>
  );
}
