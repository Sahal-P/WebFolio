const Home = () => {
  return (
    <section id="home" className="text-white bg-hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <h1 className="wow fadeInDown" data-wow-delay=".5s">
              Python Django React Developer
            </h1>
            <p className="short-bio wow fadeInDown" data-wow-delay=".6s">
              Highly skilled Python developer . Strong expertise in developing
              and maintaining complex applications using Python, Django.
              Proficient in using object-oriented programming concepts and
              design patterns. Experience working with databases such as
              PostgreSQL and MongoDB. Strong debugging and problem-solving
              skills. Proven ability to work well in a team environment
            </p>
            <a
              href="#contact"
              className="cf-btn wow fadeInDown"
              data-wow-delay=".7s"
            >
              Conect with me
            </a>
            <div
              className="counter d-flex align-center content-space-between wow fadeInDown"
              data-wow-delay="1.7s"
            >
              <div className="experence">
                <h2>
                  <span className="count">1</span>+
                </h2>
                <p className="font-20px">Year Exprence</p>
              </div>
              <div className="project">
                <h2>
                  <span className="count">4</span>+
                </h2>
                <p className="font-20px">Complete Project</p>
              </div>
              <div className="clients">
                {/* <h2>
                <span className="count">135</span>+
              </h2>
              <p className="font-20px">Heppy Client</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-right">
              <div className="hero-right-bg" />
              {/* <img src="/src/assets/images/author/hero.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="extra-bg" />
    </section>
  );
};

export default Home;
