import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Buttons.css";

function Buttons() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Buttons</h1>
      <div className="component-style-link">
        <Highlight>
          @import url("https://clear-ui.netlify.app/css/Buttons.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui.netlify.app/css/Buttons.css"></link>`}
        </Highlight>
      </div>
      <Component
        heading="Solid Buttons"
        description="This component is available in 2 variants, btn-primary and btn-secondary."
        code={[
          `<button className="btn btn-primary">Primary</button>`,
          `<button className="btn btn-secondary">Secondary</button>`,
        ]}
      >
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
      </Component>
      <Component
        heading="Outline Buttons"
        description="There are two variant of outline buttons available, btn-outline-primary and btn-outline-secondary."
        code={[
          `<button className="btn btn-outline-primary">Primary</button>`,
          `<button className="btn btn-outline-secondary">Secondary</button>`,
        ]}
      >
        <button className="btn btn-outline-primary">Primary</button>
        <button className="btn btn-outline-secondary">Secondary</button>
      </Component>
      <Component
        heading="Inverted Buttons"
        description="There are two variant of inverted buttons available, btn-inverted-primary and btn-inverted-secondary."
        code={[
          `<button className="btn btn-inverted-primary">Primary</button>`,
          `<button className="btn btn-inverted-secondary">Secondary</button>`,
        ]}
      >
        <button className="btn btn-inverted-primary">Primary</button>
        <button className="btn btn-inverted-secondary">Secondary</button>
      </Component>
    </div>
  );
}

export { Buttons };
