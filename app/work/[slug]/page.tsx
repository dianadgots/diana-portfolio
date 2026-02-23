import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryMasonry from "@/components/GalleryMasonry";
import { workItems } from "@/lib/workItems";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return workItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = workItems.find((i) => i.slug === slug);
  if (!item) return { title: "Work | Diana Gots" };
  return {
    title: `${item.title ?? item.slug} | Diana Gots`,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const item = workItems.find((i) => i.slug === slug);

  if (!item) notFound();

  return (
    <>
      <Navigation />
      <main className="section beige" style={{ paddingTop: "6em", minHeight: "60vh" }}>
        <div className="container">
          <Link href="/#work" className="text_link" style={{ marginBottom: "2em", display: "inline-block" }}>
            ← Back to work
          </Link>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1 className="medium_heading" style={{ marginBottom: "0.5em" }}>
              {item.title ?? item.slug}
            </h1>
            <div style={{ display: "flex", gap: "0.5em", flexWrap: "wrap", marginBottom: "2em" }}>
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    padding: "0.25em 0.5em",
                    fontSize: "0.9em",
                    background: tag.black ? "#000" : "#f5f5f5",
                    color: tag.black ? "#fff" : "#000",
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <div
              style={{
                borderBottom: "1px solid #e00",
                paddingTop: "0.3em",
                paddingBottom: "2em",
                marginBottom: "2.5em",
              }}
            />
            {"projectDetails" in item && item.projectDetails && (
              <div style={{ marginBottom: "2em", paddingTop: "1em" }}>
                <h2 className="small_heading" style={{ fontWeight: 700, marginBottom: "0.5em" }}>
                  {item.projectDetails.title}
                </h2>
                <p className="regular_paragraph" style={{ margin: 0 }}>
                  {item.projectDetails.description}
                </p>
              </div>
            )}
            {!("noHero" in item && item.noHero) && (() => {
              const heroVideo = item.gallery?.find(
                (m) => (("type" in m && m.type === "video") || (m.src && /\.(mp4|webm|ogg|mov)$/i.test(m.src))) && !("galleryLeft" in m && m.galleryLeft)
              );
              if (heroVideo) {
                return (
                  <div style={{ width: "100%", borderRadius: "4px", overflow: "hidden", marginBottom: "2em" }}>
                    <video
                      src={heroVideo.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      style={{ width: "100%", display: "block", borderRadius: "4px" }}
                    />
                  </div>
                );
              }
              return (
                <div style={{ position: "relative", width: "100%", paddingTop: "100%", overflow: "hidden", borderRadius: "4px", marginBottom: "2em" }}>
                  <img
                    src={item.frontImg}
                    alt={item.frontAlt}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })()}
            {(() => {
              const heroVideo = item.gallery?.find(
                (m) => (("type" in m && m.type === "video") || (m.src && /\.(mp4|webm|ogg|mov)$/i.test(m.src))) && !("galleryLeft" in m && m.galleryLeft)
              );
              const galleryLeftVideo = item.gallery?.find(
                (m) => ("type" in m && m.type === "video") && ("galleryLeft" in m && m.galleryLeft)
              );
              const filtered = item.gallery?.filter(
                (m) => !("type" in m && m.type === "video") && !(m.src && /\.(mp4|webm|ogg|mov)$/i.test(m.src))
              ) ?? [];
              const noHero = "noHero" in item && item.noHero;
              const images = heroVideo ? filtered : noHero ? filtered : filtered.slice(1);
              const belowImage = images.find((m) => "belowColumns" in m && m.belowColumns);
              const masonryItems = images.filter((m) => !("belowColumns" in m && m.belowColumns));
              if (!images || images.length === 0) return null;
              if (belowImage && masonryItems.length > 0) {
                const cols = (belowImage as { belowColumns?: number }).belowColumns ?? 2;
                const stackItem = masonryItems.find((m) => "type" in m && m.type === "stack");
                const singleImages = masonryItems.filter((m) => !("type" in m && m.type === "stack"));
                const stackImages = (stackItem && "images" in stackItem ? stackItem.images : []) ?? [];
                const gridCols = galleryLeftVideo ? cols + 2 : cols + 1;
                return (
                  <>
                    {"galleryProjectDetails" in item && item.galleryProjectDetails && (
                      <div style={{ marginTop: "5em", marginBottom: "2em" }}>
                        <h2 className="small_heading" style={{ fontWeight: 700, marginBottom: "0.5em" }}>
                          {item.galleryProjectDetails.title}
                        </h2>
                        <p className="regular_paragraph" style={{ margin: 0 }}>
                          {item.galleryProjectDetails.description}
                        </p>
                      </div>
                    )}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
                        gap: "1em",
                        marginBottom: "2em",
                      }}
                    >
                      {galleryLeftVideo && (
                        <div
                          style={{
                            gridRow: "1 / 3",
                            overflow: "hidden",
                            borderRadius: "4px",
                          }}
                        >
                          <video
                            src={galleryLeftVideo.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "4px" }}
                          />
                        </div>
                      )}
                      {singleImages.map((media, i) => (
                        <div key={i} style={{ overflow: "hidden", borderRadius: "4px" }}>
                          <img
                            src={media.src}
                            alt={media.alt}
                            style={{ width: "100%", height: "auto", display: "block" }}
                          />
                        </div>
                      ))}
                      <div
                        style={{
                          gridRow: "1 / 3",
                          display: "flex",
                          flexDirection: "column",
                          gap: "1em",
                          overflow: "hidden",
                          borderRadius: "4px",
                        }}
                      >
                        {stackImages.map((img, i) => (
                          <img
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            style={{ width: "100%", height: "auto", display: "block" }}
                          />
                        ))}
                      </div>
                      <div
                        style={{
                          gridColumn: galleryLeftVideo ? `2 / span ${cols}` : `1 / span ${cols}`,
                          gridRow: 2,
                          overflow: "hidden",
                          borderRadius: "4px",
                        }}
                      >
                        <img
                          src={belowImage.src}
                          alt={belowImage.alt}
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </div>
                    </div>
                  </>
                );
              }
              return (
                <>
                  {"galleryProjectDetails" in item && item.galleryProjectDetails && (
                    <div style={{ marginTop: "5em", marginBottom: "2em" }}>
                      <h2 className="small_heading" style={{ fontWeight: 700, marginBottom: "0.5em" }}>
                        {item.galleryProjectDetails.title}
                      </h2>
                      <p className="regular_paragraph" style={{ margin: 0 }}>
                        {item.galleryProjectDetails.description}
                      </p>
                    </div>
                  )}
                  <div style={{ marginBottom: "2em" }}>
                    <GalleryMasonry items={masonryItems as any} />
                  </div>
                </>
              );
            })()}
            {item.externalUrl && (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text_link"
                style={{ marginTop: "2em", display: "inline-block" }}
              >
                Visit project →
              </a>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
