import Highlight from "react-highlight";
/* import "./Component.css"; */

function Component({ heading, description, code, children }) {
  return (
    <div className="component-container-inner">
      <h2 className="component-heading">{heading}</h2>
      <p className="component-description">{description}</p>
      <div className="component-demo">{children}</div>
      <code>
        <div className="component-code">
          {code.map((line) => (
            <Highlight className="html">{line}</Highlight>
          ))}
        </div>
      </code>
    </div>
  );
}

export { Component };
