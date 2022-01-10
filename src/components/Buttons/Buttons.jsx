import { Component } from "../../utilities/Component";
/* import "../styles.css";
import "./Buttons.css";
 */
function Buttons() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Buttons</h1>
      <Component
        heading="Solid Buttons"
        description="These are solid buttons."
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
        description="These are outline buttons."
        code={[
          `<button className="btn btn-outline btn-primary">Primary</button>`,
          `<button className="btn btn-outline btn-secondary">Secondary</button>`,
        ]}
      >
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
      </Component>
      <Component
        heading="Inverted Buttons"
        description="These are inverted buttons."
        code={[
          `<button className="btn btn-inverted btn-primary">Primary</button>`,
          `<button className="btn btn-inverted btn-secondary">Secondary</button>`,
        ]}
      >
        <button className="btn btn-inverted btn-primary">Primary</button>
        <button className="btn btn-inverted btn-secondary">Secondary</button>
      </Component>
    </div>
  );
}

export { Buttons };
