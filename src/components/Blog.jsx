const Blog = () => {
  return (
    <section id="blog">
    <div className="container">
      <div className="section-title">
        <p className="sub-title">My Blog</p>
        <h2>
          My Recent Updates, <br />
          Blog, Tips, Tricks &amp; More
        </h2>
      </div>
      <div className="row blog-items">
        <div className="col-md-6 col-lg-4">
          <div className="blog-item wow fadeInUp" data-wow-delay=".2">
            <div className="blog-image-container">
              <a href="#blog-popup-1">
                <img src="/src/assets/images/blog/1.png" alt="" />
              </a>
            </div>
            <div className="blog-content">
              <p>
                <span>UI/UX Design</span> / 23.06.2022
              </p>
              <h4>
                <a href="#blog-popup-1">
                  User interface design or user interface engineering
                </a>
              </h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate .
              </p>
            </div>
            <div id="blog-popup-1" className="mfp-fade mfp-hide">
              <div className="content">
                <div className="img">
                  <img src="/src/assets/images/blog/1.png" alt="dora_img" />
                </div>
                <div className="des">
                  <p className="category">
                    <span>UI/UX Design</span> / 23.06.2022
                  </p>
                  <h4>User interface design or user interface engineering</h4>
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
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="blog-item wow fadeInUp" data-wow-delay=".3">
            <div className="blog-image-container">
              <a href="#blog-popup-2">
                <img src="/src/assets/images/blog/2.png" alt="" />
              </a>
            </div>
            <div className="blog-content">
              <p>
                <span>Web Design</span> / 23.01.2023
              </p>
              <h4>
                <a href="#blog-popup-2">
                  Web design encompasses many different skills
                </a>
              </h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate .
              </p>
            </div>
            <div id="blog-popup-2" className="mfp-fade mfp-hide">
              <div className="content">
                <div className="img">
                  <img src="/src/assets/images/blog/2.png" alt="dora_img" />
                </div>
                <div className="des">
                  <p className="category">
                    <span>Web Design</span> / 23.01.2023
                  </p>
                  <h4>Web design encompasses many different skills5</h4>
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
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="blog-item wow fadeInUp" data-wow-delay=".4">
            <div className="blog-image-container">
              <a href="#blog-popup-3">
                <img src="/src/assets/images/blog/3.png" alt="" />
              </a>
            </div>
            <div className="blog-content">
              <p>
                <span>Web Development</span> / 23.02.2022
              </p>
              <h4>
                <a href="#blog-popup-3">
                  Jim Morisson Says when the musics over turn off the light
                </a>
              </h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate .
              </p>
            </div>
            <div id="blog-popup-3" className="mfp-fade mfp-hide">
              <div className="content">
                <div className="img">
                  <img src="/src/assets/images/blog/3.png" alt="dora_img" />
                </div>
                <div className="des">
                  <p className="category">
                    <span>Web Development</span> / 23.06.2022
                  </p>
                  <h4>
                    Jim Morisson Says when the musics over turn off the light
                  </h4>
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
        </div>
      </div>
    </div>
  </section>
  )
}

export default Blog
