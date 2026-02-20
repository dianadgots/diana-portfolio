"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type ImageItem = { src: string; alt: string };
type StackItem = { type: "stack"; images: ImageItem[] };
type GalleryItem = ImageItem | StackItem;

export default function GalleryMasonry({ items }: { items: GalleryItem[] }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}
      gutterBreakpoints={{ 350: "0.75em", 600: "1em", 900: "1em" }}
    >
      <Masonry sequential>
        {items.map((item, i) =>
          "type" in item && item.type === "stack" ? (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              {item.images.map((img, j) => (
                <img
                  key={j}
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    verticalAlign: "bottom",
                  }}
                />
              ))}
            </div>
          ) : (
            <div
              key={i}
              style={{
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              <img
                src={(item as ImageItem).src}
                alt={(item as ImageItem).alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  verticalAlign: "bottom",
                }}
              />
            </div>
          )
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
}
