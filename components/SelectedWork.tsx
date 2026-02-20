const CDN = "https://cdn.prod.website-files.com/63186de99f692377753c6ed7";

const workItems = [
  {
    slug: "work-1",
    title: "Bonnie Jean",
    frontImg: "/imgs/public/imgs/selected_work/1.png",
    frontAlt: "Bonnie Jean",
    tags: [
      { label: "paid social", black: false },
      { label: "creative direction", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    href: "https://www.bonniejean.com",
  },
  {
    slug: "work-2",
    title: "Bonnie Jean",
    frontImg: "/imgs/public/imgs/selected_work/2.png",
    frontAlt: "Bonnie Jean",
    tags: [
      { label: "paid social", black: false },
      { label: "creative direction", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    href: "https://www.bonniejean.com",
  },
  {
    slug: "cloak-and-dagger-nyc",
    title: "Cloak and Dagger NYC",
    frontImg: "/imgs/public/imgs/selected_work/3.png",
    frontAlt: "Cloak and Dagger NYC",
    tags: [
      { label: "social media", black: false },
      { label: "content creation", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    href: "https://www.cloakanddaggernyc.com/",
  },
  {
    slug: "other-woman-vintage",
    title: "Other Woman Vintage",
    frontImg: "/imgs/public/imgs/selected_work/4.jpg",
    frontAlt: "Other Woman Vintage",
    tags: [
      { label: "creative direction", black: false },
    ],
    hasTitle: true,
    titleTop: true,
  },
  {
    slug: "winkd",
    title: "winkd",
    frontImg: "/imgs/public/imgs/selected_work/5.png",
    frontAlt: "winkd",
    tags: [
      { label: "GTM Strategy", black: false },
      { label: "Growth Marketing", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    extraClass: "dark-bg-tint",
    href: "https://www.winkd.app/",
  },
  {
    slug: "resume-hero",
    title: "Resume Hero",
    frontImg: "/imgs/public/imgs/selected_work/6.png",
    frontAlt: "Resume Hero",
    tags: [
      { label: "figma design", black: false },
      { label: "ASO", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    extraClass: "img-top",
    href: "https://www.resume-hero.app",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="section beige">
      <div className="container">
        <div className="selected-work-container">
          <div className="selected-title">
            <h2 className="medium_heading">Selected Work</h2>
            <p id="count" className="text_link counter">
              (<span id="selected-work-home" className="text_link selected-work">
                {workItems.length}
              </span>)
            </p>
          </div>
          <div className="selected-work-grid">
            <div className="selected-work-wrapper">
              <div className="selected-work-list">
                {workItems.map((item) => (
                  <div
                    key={item.slug}
                    className={`selected-work-item${item.extraClass ? ` ${item.extraClass}` : ""}`}
                  >
                    <div className="selected-work-image-ratio">
                      <img
                        src={item.frontImg}
                        alt={item.frontAlt}
                        className="selected-img-bg blurred-bg"
                      />
                    </div>
                    <a
                      href={item.href ?? `/work/${item.slug}`}
                      className="current-selected-work w-inline-block"
                      {...(item.href && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.hasTitle && item.titleTop && (
                        <div className="selected-work-title">
                          <h3 className="small_heading text-color-white">{item.title}</h3>
                        </div>
                      )}
                      <div className="front-selected-ratio">
                        <div className="front-selected-height">
                          <img
                            src={item.frontImg}
                            alt={item.frontAlt}
                            className="selected-front-img"
                          />
                        </div>
                      </div>
                    </a>
                    {item.hasTitle && !item.titleTop && (
                      <div className="selected-work-title">
                        <h3 className="small_heading text-color-white">{item.title}</h3>
                      </div>
                    )}
                    <div className="selected-work-tags">
                      {item.tags.map((tag, i) => (
                        <div key={i} className={`tag-box${tag.black ? " is-black" : ""}`}>
                          <p className={`regular_paragraph${tag.black ? " tag" : ""}`}>
                            {tag.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
