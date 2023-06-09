const Portfolio = () => {
  return (
    <section id="portfolio">
    <div className="container">
      <div className="section-title wow fadeInUp">
        <p className="sub-title">My Portfolio</p>
        <h2>
          Showcasing <br />
          some of my best work
        </h2>
      </div>
      <div className="portfolio-container">
        <div className="filter-btn wow fadeInUp">
          <a href="#" className="active" data-filter="*">
            All
          </a>
          <a href="#" data-filter=".youtube">
            Youtube
          </a>
          <a href="#" data-filter=".vimeo">
            Vimeo
          </a>
          <a href="#" data-filter=".soundcloud">
            Soundcloud
          </a>
          <a href="#" data-filter=".popup">
            Images
          </a>
          <a href="#" data-filter=".details">
            Detail
          </a>
        </div>
        <div className="portfolio-items wow fadeInUp">
          <div className="item youtube">
            <a href="https://www.youtube.com/watch?v=B-ytMSuwbf8">
              <img src="assets/images/portfolio/1.png" alt="" />
            </a>
          </div>
          <div className="item vimeo">
            <a href="https://vimeo.com/132528823">
              <img src="assets/images/portfolio/2.png" alt="" />
            </a>
          </div>
          <div className="item soundcloud">
            <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1">
              <img src="assets/images/portfolio/3.png" alt="" />
            </a>
          </div>
          <div className="item popup">
            <a href="assets/images/portfolio/5.png">
              <img src="assets/images/portfolio/5.png" alt="" />
            </a>
          </div>
          <div className="item details">
            <a href="#details-popup">
              <img src="assets/images/portfolio/4.png" alt="" />
            </a>
            <div className="mfp-fade mfp-hide" id="details-popup">
              <div className="content">
                <div className="img">
                  <img src="assets/images/portfolio/4.png" alt="" />
                </div>
                <div className="des">
                  <span>Details</span>
                  <h4>Mobile Application</h4>
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item popup">
            <a href="assets/images/portfolio/6.png">
              <img src="assets/images/portfolio/6.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio
