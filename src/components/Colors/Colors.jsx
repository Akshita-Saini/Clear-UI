import Highlight from "react-highlight";
import "../styles.css";
import "./Colors.css";
import { Component } from "../../utilities/Component";

function Colors() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Colors</h1>
      <div className="component-style-link">
        <Highlight>
          @import
          url("https://clear-ui-v2.netlify.app/components/Colors/Colors.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui-v2.netlify.app/components/Colors/Colors.css"></link>`}
        </Highlight>
      </div>
      <Component
        heading="Color Palette"
        description="This is the color palette used by Clear-UI listed below along with the hex codes. You may use them to customize componenets."
        code={[
          `<div className="bg-primary"></div>`,
          `<div className="bg-secondary"></div>`,
          `<div className="bg-tertiary"></div>`,
          `<div className="bg-success"></div>`,
          `<div className="bg-danger"></div>`,
          `<div className="bg-warning"></div>`,
          `<div className="bg-info"></div>`,
          `<div className="bg-light"></div>`,
          `<div className="bg-dark"></div>`,
          `<div className="bg-grey"></div>`,
        ]}
      >
        <div className="color-pallet">
          <div className="color bg-primary">
            <div className="color-code">#8743c7</div>
            <div className="color-name">bg-primary</div>
          </div>
          <div className="color bg-secondary">
            <div className="color-code">#cea2fd </div>
            <div className="color-name">bg-secondary</div>
          </div>
          <div className="color bg-tertiary">
            <div className="color-code"> #6824a8 </div>
            <div className="color-name">bg-tertiary</div>
          </div>
          <div className="color bg-success">
            <div className="color-code"> #52c41a </div>
            <div className="color-name">bg-success</div>
          </div>
          <div className="color bg-danger">
            <div className="color-code"> #ff4d4f </div>
            <div className="color-name">bg-danger</div>
          </div>
          <div className="color bg-warning">
            <div className="color-code"> #faad14 </div>
            <div className="color-name">bg-warning</div>
          </div>
          <div className="color bg-info">
            <div className="color-code"> #1890ff </div>
            <div className="color-name">bg-info</div>
          </div>
          <div className="color bg-light">
            <div className="color-code"> #f9fafb </div>
            <div className="color-name">bg-light</div>
          </div>
          <div className="color bg-dark">
            <div className="color-code"> #1c1f23</div>
            <div className="color-name">bg-dark</div>
          </div>
          <div className="color bg-grey">
            <div className="color-code"> #8d99ae</div>
            <div className="color-name">bg-grey</div>
          </div>
        </div>
      </Component>
    </div>
  );
}

export { Colors };
