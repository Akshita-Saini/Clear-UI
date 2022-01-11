import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Navbar.css";
import logo from "../../images/circle.svg";

function Navbar() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Navbar</h1>
      <div className="component-style-link">
        <Highlight>
          @import
          url("https://clear-ui-v2.netlify.app/components/Navbar/Navbar.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui-v2.netlify.app/components/Navbar/Navbar.css"></link>`}
        </Highlight>
      </div>
      <Component
        heading="Navbar"
        description="This is the default navbar."
        code={[
          `<div className="navbar-container">`,
          `   <div className="nav-brand-name">CLEAR</div>`,
          `   <div className="nav-list-inline">`,
          `        <div className="nav-list-link">Home</div>`,
          `        <div className="nav-list-link">Products</div>`,
          `        <div className="nav-list-link">About Us</div>`,
          `        <div className="nav-list-link">Contact</div>`,
          `   </div>`,
          `</div>`,
        ]}
      >
        <div className="navbar-container">
          <div className="nav-brand-name">
            <img src={logo} className="logo" alt="logo" /> CLEAR-UI
          </div>
          <div className="nav-list-inline">
            <div className="nav-list-link">Home</div>
            <div className="nav-list-link">Products</div>
            <div className="nav-list-link">About Us</div>
            <div className="nav-list-link">Contact</div>
          </div>
        </div>
      </Component>
      <Component
        heading="Dark Navbar"
        description="This is the Dark Navbar."
        code={[
          `<div className="navbar-container-dark">`,
          `   <div className="nav-brand-name-dark">CLEAR</div>`,
          `   <div className="nav-list-inline-dark">`,
          `        <div className="nav-list-link-dark">Home</div>`,
          `        <div className="nav-list-link-dark">Products</div>`,
          `        <div className="nav-list-link-dark">About Us</div>`,
          `        <div className="nav-list-link-dark">Contact</div>`,
          `   </div>`,
          `</div>`,
        ]}
      >
        <div className="navbar-container-dark">
          <div className="nav-brand-name-dark">
            <img src={logo} className="logo" alt="logo" /> CLEAR-UI
          </div>
          <div className="nav-list-inline-dark">
            <div className="nav-list-link-dark">Home</div>
            <div className="nav-list-link-dark">Products</div>
            <div className="nav-list-link-dark">About Us</div>
            <div className="nav-list-link-dark">Contact</div>
          </div>
        </div>
      </Component>
    </div>
  );
}

export { Navbar };
