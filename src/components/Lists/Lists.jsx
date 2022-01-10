import { Component } from "../../utilities/Component";
/* 
import "../styles.css";
import "./Lists.css";
 */
function Lists() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Lists</h1>
      <Component
        heading="Spaced List"
        description="This is a spaced list."
        code={[
          `<li className="list-item list-item-spaced"></li>`,
          `<li className="list-item list-item-spaced"></li>`,
          `<li className="list-item list-item-spaced"></li>`,
          `<li className="list-item list-item-spaced"></li>`,
          `<li className="list-item list-item-spaced"></li>`,
        ]}
      >
        <ul className="list">
          <li className="list-item list-item-spaced">List Item</li>
          <li className="list-item list-item-spaced">List Item</li>
          <li className="list-item list-item-spaced">List Item</li>
          <li className="list-item list-item-spaced">List Item</li>
          <li className="list-item list-item-spaced">List Item</li>
        </ul>
      </Component>
      <Component
        heading="Stacked List"
        description="This is a stacked list."
        code={[
          `<li className="list-item"></li>`,
          `<li className="list-item"></li>`,
          `<li className="list-item"></li>`,
          `<li className="list-item"></li>`,
          `<li className="list-item"></li>`,
        ]}
      >
        <ul className="list">
          <li className="list-item">List Item</li>
          <li className="list-item">List Item</li>
          <li className="list-item">List Item</li>
          <li className="list-item">List Item</li>
          <li className="list-item">List Item</li>
        </ul>
      </Component>
    </div>
  );
}

export { Lists };
