import Image from "next/image";

type Block =
  | { type: "hero"; title: string; subtitle?: string; imageUrl?: string }
  | { type: "text"; title?: string; body: string }
  | { type: "image"; imageUrl: string; alt?: string }
  | { type: "features"; items: { title: string; text?: string }[] }
  | { type: "testimonials"; items: { name: string; text: string }[] };

export default function PageRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, idx) => {
        if (b.type === "hero") {
          return (
            <section className="section" key={idx}>
              <div className="container hero">
                <div>
                  <h1 className="h1">{b.title}</h1>
                  {b.subtitle && (
                    <p className="subtle" style={{ marginTop: 12 }}>
                      {b.subtitle}
                    </p>
                  )}
                </div>
                {b.imageUrl && (
                  <div className="hero-media">
                    <Image
                      src={b.imageUrl}
                      alt={b.title}
                      width={560}
                      height={420}
                    />
                  </div>
                )}
              </div>
            </section>
          );
        }

        if (b.type === "text") {
          return (
            <section className="section" key={idx}>
              <div className="container">
                {b.title && <h2 className="h2">{b.title}</h2>}
                <p className="subtle" style={{ marginTop: 12 }}>
                  {b.body}
                </p>
              </div>
            </section>
          );
        }

        if (b.type === "image") {
          return (
            <section className="section" key={idx}>
              <div className="container hero-media">
                <Image
                  src={b.imageUrl}
                  alt={b.alt || "Image"}
                  width={960}
                  height={640}
                />
              </div>
            </section>
          );
        }

        if (b.type === "features") {
          return (
            <section className="section section-muted" key={idx}>
              <div className="container grid grid-3">
                {b.items.map((f, i) => (
                  <div className="card" key={i}>
                    <h3 className="h3">{f.title}</h3>
                    {f.text && <p className="subtle">{f.text}</p>}
                  </div>
                ))}
              </div>
            </section>
          );
        }

        if (b.type === "testimonials") {
          return (
            <section className="section section-muted" key={idx}>
              <div className="container grid grid-3">
                {b.items.map((t, i) => (
                  <div className="card" key={i}>
                    <p>“{t.text}”</p>
                    <p className="subtle" style={{ marginTop: 10 }}>
                      — {t.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        return null;
      })}
    </>
  );
}
