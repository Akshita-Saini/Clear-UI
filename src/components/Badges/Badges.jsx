import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Badges.css";

function Badges() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Badges</h1>
      <div className="component-style-link">
        <Highlight>
          @import url("https://clear-ui.netlify.app/css/Badges.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui.netlify.app/css/Badges.css"></link>`}
        </Highlight>
      </div>
      <Component
        heading="Simple Badges"
        description="To use badges add badge-parent to its parent container."
        code={[
          `<div className="badge-parent">`,
          `    <div className="badge badge-online"></div>`,
          `</div>`,
          `<div className="badge-parent">`,
          `    <div className="badge badge-offline"></div>`,
          `</div>`,
          `<div className="badge-parent">`,
          `<div className="badge badge-do-not-disturb"></div>`,
          `</div>`,
        ]}
      >
        <div className="badge-parent">
          <div className="badge badge-online left"></div>
        </div>
        <div className="badge-parent">
          <div className="badge badge-offline center"></div>
        </div>
        <div className="badge-parent">
          <div className="badge badge-do-not-disturb right"></div>
        </div>
      </Component>
      <Component
        heading="Badges with Number"
        description="These are simple badges."
        code={[
          `<div className="badge-parent">`,
          `    <div className="flex badge badge-online badge-with-number"></div>`,
          `</div>`,
        ]}
      >
        <div className="badge-parent">
          <div className="flex badge badge-online badge-with-number">2</div>
        </div>
      </Component>
    </div>
  );
}

export { Badges };
