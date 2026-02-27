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

          <form className="card" style={{ marginTop: 24 }}>
            <div className="form-grid">
              <div>
                <label>Name</label>
                <input className="input" placeholder="Full name" />
              </div>
              <div>
                <label>Email</label>
                <input className="input" placeholder="contact@americashandy.com" />
              </div>
              <div>
                <label>Phone</label>
                <input className="input" placeholder="407-404-4501" />
              </div>
              <div>
                <label>Address</label>
                <input className="input" placeholder="Street address" />
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <label>Project Details</label>
              <textarea placeholder="Describe what you need help with." />
            </div>
            <div style={{ marginTop: 20 }}>
              <button className="btn btn-primary" type="submit">
                Send Request
              </button>
            </div>
            <p className="subtle" style={{ marginTop: 10, fontSize: 13 }}>
              This form is a request only. We will confirm availability and
              pricing by email or phone.
            </p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
