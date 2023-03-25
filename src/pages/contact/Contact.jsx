import { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact">
          <div className="container">
            <div className="contact__head">
              <h3>contact me</h3>
            </div>

            <form className="contact__row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone number" />
              <textarea placeholder="Message" cols="30" rows="5"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
