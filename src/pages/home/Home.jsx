import { Component } from "react";
import avatar from "../../assets/img/header.png";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <img src={avatar} alt="avatar" />
            <h1>START REACT</h1>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
