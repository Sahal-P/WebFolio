const PortfolioItem = () => {
  return (
    <div
      className="portfolio-items wow fadeInUp"
      style={{
        position: "relative",
        height: "841.4px",
        visibility: "visible",
        animationName: "fadeInUp",
      }}
    >
      <div
        className="item youtube"
        style={{ position: "absolute", left: "0%", top: 0 }}
      >
        <a href="https://www.youtube.com/watch?v=B-ytMSuwbf8">
          <img src="/src/assets/images/portfolio/1.png" alt="" />
        </a>
      </div>
      <div
        className="item vimeo"
        style={{ position: "absolute", left: "32.9323%", top: 0 }}
      >
        <a href="https://vimeo.com/132528823">
          <img src="/src/assets/images/portfolio/2.png" alt="" />
        </a>
      </div>
      <div
        className="item soundcloud"
        style={{ position: "absolute", left: "65.8647%", top: 0 }}
      >
        <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1">
          <img src="/src/assets/images/portfolio/3.png" alt="" />
        </a>
      </div>
      <div
        className="item popup"
        style={{ position: "absolute", left: "32.9323%", top: 338 }}
      >
        <a href="/src/assets/images/portfolio/5.png">
          <img src="/src/assets/images/portfolio/5.png" alt="" />
        </a>
      </div>
      <div
        className="item details"
        style={{ position: "absolute", left: "0%", top: 502 }}
      >
        <a href="#details-popup">
          <img src="/src/assets/images/portfolio/4.png" alt="" />
        </a>
        <div className="mfp-fade mfp-hide" id="details-popup">
          <div className="content">
            <div className="img">
              <img src="/src/assets/images/portfolio/4.png" alt="" />
            </div>
            <div className="des">
              <span>Details</span>
              <h4>Mobile Application</h4>
              <p>
                We live in a world where we need to move quickly and iterate on
                our ideas as flexibly as possible. Building mockups strikes the
                ideal balance between true-life representation of the end
                product and ease of modification.
              </p>
              <p>
                Mockups are useful both for the creative phase of the project -
                for instance when you're trying to figure out your user flows or
                the proper visual hierarchy - and the production phase when they
                will represent the target product. Making mockups a part of your
                creative and development process allows you to quickly and
                easily ideate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="item popup"
        style={{ position: "absolute", left: "65.8647%", top: 502 }}
      >
        <a href="/src/assets/images/portfolio/6.png">
          <img src="/src/assets/images/portfolio/6.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
