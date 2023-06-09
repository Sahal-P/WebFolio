import PortfolioItem from "./PortfolioItem"

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
        <PortfolioItem/>
      </div>
    </div>
  </section>
  )
}

export default Portfolio
