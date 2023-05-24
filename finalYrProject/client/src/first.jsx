import React from "react";
import "./styles.scss";
import HomeImg from "./assets/images/home.jpg";
import logoImg from "./assets/images/logo.png";

export default function First() {

  const handleNav = (ev) => {
    console.log(ev);
    let detect = document.getElementById('home');
    let contact = document.getElementById('contact');
    let help = document.getElementById('help');
    let home = document.getElementById('first');

    switch (ev) {
      case 1:
        detect.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        contact.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        help.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        home.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  return (
    <div className="firstContainer" id="first">
      <div className="left">
        <div className="top">
          <img src={logoImg} alt="Logo" />
          <span className="logoname">Coco-Hunter</span>
        </div>
        <div className="bottom">
          <div>
            <span>
            Analyze Your image for detecting matured coconut 
            </span>
          </div>
          <button onClick={() => handleNav(1)}>
            Check Now
          </button>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <span onClick={() => handleNav(1)}>Detect</span>
          <span onClick={() => handleNav(2)}>Contact</span>
          <span onClick={() => handleNav(3)}>Help</span>
        </div>
        {/* <div className="bottom">
            <img src={HomeImg} alt="Coconut leaf" />
        </div> */}
      </div>
    </div>
  );
}
