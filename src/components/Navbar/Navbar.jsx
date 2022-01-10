import { Component } from "../../utilities/Component";
/* import "../styles.css";
import "./Navbar.css"; */

function Navbar() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Navbar</h1>
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
          <div className="nav-brand-name">CLEAR</div>
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
          <div className="nav-brand-name-dark">CLEAR</div>
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
