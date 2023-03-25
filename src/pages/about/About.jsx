import { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <>
        <section className="about">
          <div className="container">
            <div className="about__head">
              <h3>ABOUT</h3>
            </div>
            <div className="about__row">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
