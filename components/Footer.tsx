export default function Footer() {
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact-wrapper">
            <img
              src="/imgs/footer.png"
              alt=""
              className="footer_illustration"
            />
            <a
              href="mailto:dianadgots@gmail.com?subject=Let's%20work%20together%20!"
              className="footer_email w-inline-block"
              id="footer-email-link"
            >
              <p className="large_heading footer">Let&apos;s work together</p>
              <div className="footer-line" id="footer-line"></div>
            </a>
          </div>
          <div className="footer-grid-bottom">
            <a
              href="https://www.linkedin.com/in/dianagots/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link center w-inline-block"
            >
              <p className="regular_paragraph">linkedin</p>
            </a>
            <a
              href="#scroll-to-top"
              className="footer-link right w-inline-block"
              id="scroll-to-top-btn"
            >
              <p className="regular_paragraph">scroll to top</p>
              <div className="footer-arrow-circle">
                <div className="arrow-footer w-embed">
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 5.5L5.5 1L10 5.5" stroke="currentColor" />
                    <path d="M5.5 11.5V1.5" stroke="currentColor" />
                  </svg>
                </div>
                <div className="inner-top"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
