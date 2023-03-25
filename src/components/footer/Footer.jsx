import { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer__row1">
            <div className="container">
              <div className="footer__col1">
                <div>
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive Clark, MO 65243</p>
                </div>
                <div>
                  <h3>AROUND THE WEB</h3>
                </div>
                <div>
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, MIT licensed Bootstrap theme
                    created by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__row2">
            <div className="container">
              <div className="footer__col2">
                <p>Copyright © Your Website 2021</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
