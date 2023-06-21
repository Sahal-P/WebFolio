const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 wow fadeInLeft">
            <div className="section-title left">
              <p className="sub-title">Get in touch !</p>
              <h2>Contact us for a quote, help to join the team</h2>
            </div>
            <ul className="info-details">
              <li>
                <h4>Mail</h4>
                <p>sahlcyprus@gmail.com</p>
              </li>
              <li>
                <h4>Address</h4>
                <p>
                  1540 Brookside Drive <br />
                  Birmingham, Alabama, USA
                </p>
              </li>
              <li>
                <h4>Phone</h4>
                <p>9544633437</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <form action="#" className="contact-form wow fadeInRight">
              <div className="form-group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="cf-btn">
                  Send me message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
