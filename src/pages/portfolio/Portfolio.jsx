import { Component } from "react";
import portfolio from "../../assets/img/circus.png";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <>
        <section className="portfolio">
          <div className="container">
            <div className="portfolio__head">
              <h3>PORTFOLIO</h3>
            </div>
            <div className="portfolio__row">
              <div>
                <img src={portfolio} alt="" />
              </div>
              <div>
                <img src={portfolio} alt="" />
              </div>
              <div>
                <img src={portfolio} alt="" />
              </div>
              <div>
                <img src={portfolio} alt="" />
              </div>
              <div>
                <img src={portfolio} alt="" />
              </div>
              <div>
                <img src={portfolio} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
