const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonials-top wow fadeInUp">
          <div className="section-title left">
            <p className="sub-title">Testimonials</p>
            <h2>
              What My <br />
              Clients Say
            </h2>
          </div>
          <div className="arrows">
            <a className="arrow arrow-left active">
              <i className="fa-solid fa-chevron-left" />
            </a>
            <a className="arrow arrow-right">
              <i className="fa-solid fa-chevron-right" />
            </a>
          </div>
        </div>
        <div className="testimonial-sliders swiper wow fadeInUp">
          <div className="swiper-wrapper">
            <div className="slider-item swiper-slide">
              <div className="slider-item-content">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <div className="author-info">
                  <div className="image-container">
                    <img src="/src/assets/images/testimonial/1.jpg" alt="" />
                  </div>
                  <div className="author-info-content">
                    <h3>Beseie Cooper</h3>
                    <p className="complay-name">Xyz Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item swiper-slide">
              <div className="slider-item-content">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <div className="author-info">
                  <div className="image-container">
                    <img src="/src/assets/images/testimonial/2.jpg" alt="" />
                  </div>
                  <div className="author-info-content">
                    <h3>Mike Anderson</h3>
                    <p className="complay-name">Vivaco Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
