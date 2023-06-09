const Header = () => {
  return (
    <header className="position-absolute w-100 text-white">
  <div className="container">
    <div className="logo">
      <a href="#home">
        @Sahal<span className="text-primary">.P</span>
      </a>
    </div>
    <ul className="menus">
      <li className="current">
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Work</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="social-icons">
      <a href="#">
        <i className="fa-sharp fa-regular fa-basketball" />
      </a>
      <a href="#">
        <i className="fa-brands fa-instagram" />
      </a>
      <a href="#">
        <i className="fa-brands fa-linkedin" />
      </a>
      <a href="#">
        <i className="fa-brands fa-pinterest" />
      </a>
    </div>
    
  </div>
</header>

  )
}

export default Header
