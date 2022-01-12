import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "../styles.css";
import "./Card.css";
import "../utilities.css";
import placeholder_image from "../../images/placeholder_img.png";

function Card() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Card</h1>
      <div className="component-style-link">
        <Highlight>
          @import url("https://clear-ui.netlify.app/css/Card.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui.netlify.app/css/Card.css"></link>`}
        </Highlight>
      </div>
      <Component
        heading="Card"
        description="This is a card."
        code={[
          `<div className="card-container">`,
          `   <div className="card-body">`,
          `       <h2 className="card-header">TITLE</h2>`,
          `       <div className="card-secondary-header">Secondary Title</div>`,
          `       <div className="card-hr"/></div>`,
          `       <p className="card-text">...</p>`,
          `   </div>`,
          `</div>`,
        ]}
      >
        <div className="card-container">
          <div className="card-body">
            <h2 className="card-header">TITLE</h2>
            <div className="card-secondary-header">Secondary Title</div>
            <div className="card-hr"></div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </Component>
      <Component
        heading="Verticle Card with Image"
        description="This is a card with an image."
        code={[
          `<div className="card-with-img">`,
          `<div className="card-container">`,
          `   <img className="card-img" src={placeholder_image} alt=""/>`,
          `    <div className="card-body p-1">`,
          `       <div className="card-header">TITLE</div>`,
          `       <div className="card-secondary-header">Secondary Title</div>`,
          `       <div className="card-hr"></div>`,
          `       <p className="card-text">...</p>`,
          `    </div>`,
          `</div>`,
          `</div>`,
        ]}
      >
        <div className="card-with-img">
          <div className="card-container">
            <img className="card-img" src={placeholder_image} alt="" />
            <div className="card-body p-1">
              <h2 className="card-header">TITLE</h2>
              <div className="card-secondary-header">Secondary Title</div>
              <div className="card-hr"></div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <div className="card-btn-group">
                <button className="card-btn btn btn-dark">ADD TO CART</button>
                <button className="card-btn btn btn-dark">WISHLIST</button>
              </div>
            </div>
          </div>
        </div>
      </Component>
      <Component
        heading="Horizontal Card with Image"
        description="This is a horizontal card with an image."
        code={[
          `<div className="card-horizontal-with-img">`,
          `    <div className="card-img-container">`,
          `        <img className="card-img" src={placeholder_image} alt=""/>`,
          `    </div>`,
          `    <div className="card-body p-1">`,
          `         <h2 className="card-header">TITLE</h2>`,
          `         <div className="card-secondary-header">Secondary Title</div>`,
          `         <div className="card-hr"></div>`,
          `         <p className="card-text">...</p>`,
          `    </div>`,
          `</div>`,
        ]}
      >
        <div className="card-horizontal-with-img">
          <div className="card-img-container">
            <img className="card-img" src={placeholder_image} alt="" />
          </div>
          <div className="card-body p-1">
            <h2 className="card-header">TITLE</h2>
            <div className="card-secondary-header">Secondary Title</div>
            <div className="card-hr"></div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </Component>
    </div>
  );
}

export { Card };
