import { workItems } from "@/lib/workItems";

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
                      href={`/work/${item.slug}`}
                      className="current-selected-work w-inline-block"
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
