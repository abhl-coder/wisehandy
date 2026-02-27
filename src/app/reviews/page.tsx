import SiteLayout from "@/components/SiteLayout";

export const metadata = {
  title: "Reviews",
  description:
    "Read reviews from Wise Handy customers and see why homeowners trust our service.",
};

const testimonials = [
  {
    name: "Wade",
    text: "Excellent service and communication. Will use Wise Handy again.",
  },
  {
    name: "Katie",
    text: "Great work for my commercial property. Highly recommend.",
  },
  {
    name: "Denise",
    text: "Easy to schedule and the job was done quickly and well.",
  },
  {
    name: "Ashley",
    text: "Professional, friendly, and the repairs turned out great.",
  },
  {
    name: "Tina",
    text: "Prompt service and great attention to detail.",
  },
  {
    name: "Derek",
    text: "The team was courteous and the work was high quality.",
  },
];

export default function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <span className="pill">Reviews</span>
          <h1 className="h1" style={{ marginTop: 12 }}>
            Client Testimonials
          </h1>
          <p className="subtle" style={{ marginTop: 12 }}>
            Real feedback from customers who chose Wise Handy for home and
            commercial repairs.
          </p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {testimonials.map((item) => (
              <div className="card" key={item.name}>
                <p>“{item.text}”</p>
                <p className="subtle" style={{ marginTop: 12 }}>
                  — {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

