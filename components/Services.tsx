export default function Services() {
  return (
    <section className="section services">
      <div className="container">
        <div className="services-wrapper">
          <div className="services-left">
            <h2 className="medium_heading text-color-white">I can help with</h2>
            <div className="services-panel">
              <div className="service-line"></div>
              <div className="ind-service-info">
                <p className="regular_paragraph text-color-white">01</p>
                <h3 className="small_heading text-color-white">Brand Strategy</h3>
              </div>
              <div className="service-line"></div>
              <div className="ind-service-info">
                <p className="regular_paragraph text-color-white">02</p>
                <h3 className="small_heading text-color-white">DTC growth</h3>
              </div>
              <div className="service-line"></div>
              <div className="ind-service-info">
                <p className="regular_paragraph text-color-white">03</p>
                <h3 className="small_heading text-color-white">Growth Marketing</h3>
              </div>
              <div className="service-line"></div>
            </div>
          </div>
          <div className="services-photo">
            <div className="service-img-contain">
              <div className="service-img-height">
                <img
                  src="/imgs/public/imgs/me/1.JPG"
                  alt="Diana Gots"
                  className="service-img"
                />
              </div>
            </div>
            <div className="service-img-contain _2">
              <div className="service-img-height">
                <img
                  src="/imgs/public/imgs/me/2.jpg"
                  alt="Diana Gots"
                  className="service-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
