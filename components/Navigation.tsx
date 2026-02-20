export default function Navigation() {
  return (
    <nav className="section nav">
      <div className="container">
        <div className="navigation">
          <a href="/" aria-current="page" className="nav_logo w-inline-block w--current">
            <p className="regular_paragraph nav_logo">
              diana gots<br />
              <span className="status">Brand Marketing | Content Strategy</span>
            </p>
          </a>
          <div className="nav_links">
            <a href="#work" className="nav_link w-inline-block">
              <div className="nav-link-text">
                <p className="text_link">work</p>
                <div className="link-line"></div>
              </div>
              <p className="text_link counter">
                (<span id="selected-work-text" className="text_link count">6</span>)
              </p>
            </a>
            <a href="mailto:dianadgots@gmail.com" className="nav_link is-email w-inline-block">
              <p className="text_link email">dianadgots@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
