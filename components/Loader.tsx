const CDN = "https://cdn.prod.website-files.com/63186de99f692377753c6ed7";

export default function Loader() {
  return (
    <section id="loader" className="section loader">
      <div className="container _100vh">
        <div className="loader-content">
          <div className="loader_images">
            <div className="loader_img_wrap">
              <div className="image_loader_ratio">
                <img
                  src={`${CDN}/6329c05f98dd31c9d7fe0b1a_loader_1.webp`}
                  alt=""
                  className="img"
                />
              </div>
              <div className="loader-stroke"></div>
            </div>
            <div className="loader_img_wrap _2">
              <div className="image_loader_ratio">
                <img
                  src={`${CDN}/6329c05f12e3aa2dfc69b244_loader_2.webp`}
                  alt=""
                  className="img"
                />
              </div>
              <div className="loader-stroke"></div>
            </div>
            <div className="loader_img_wrap _3">
              <div className="image_loader_ratio">
                <img
                  src={`${CDN}/6329c05f3e4134631d1ff531_loader_3.webp`}
                  alt=""
                  className="img"
                />
              </div>
              <div className="loader-stroke"></div>
            </div>
            <div className="loader_img_wrap _4">
              <div className="image_loader_ratio">
                <img
                  src={`${CDN}/6329c060ea006052edc3f65e_loader_4.webp`}
                  alt=""
                  className="img"
                />
              </div>
              <div className="loader-stroke"></div>
            </div>
            <div className="loader_img_wrap _5">
              <div className="image_loader_ratio">
                <img
                  src={`${CDN}/6329c06047dd204dcfc6afad_loader_5.webp`}
                  alt=""
                  className="img"
                />
              </div>
              <div className="loader-stroke"></div>
            </div>
          </div>
          <div className="loader_count_bottom">
            <div
              id="w-node-loader-left"
              className="loader-left"
            >
              <div className="right-contain-line left">
                <div className="loader_progress"></div>
              </div>
            </div>
            <div
              id="w-node-loader-center"
              className="loader-center"
            >
              <p className="loader_number">&nbsp;&nbsp;&nbsp;</p>
              <p className="medium_heading loader-count">%</p>
            </div>
            <div
              id="w-node-loader-right"
              className="loader-right"
            >
              <div className="right-contain-line">
                <div className="loader_progress"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
