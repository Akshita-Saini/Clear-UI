import { Component } from "../../utilities/Component";
/* import "../styles.css";
import "./Badges.css"; */

function Badges() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Buttons</h1>
      <Component
        heading="Badges"
        description="These are simple badges."
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
