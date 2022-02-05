import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Alerts.css";
import { Info, CheckCircle, Warning, Error } from "@material-ui/icons";
function Alerts() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Alerts</h1>
      <div className="component-style-link">
        <Highlight>
          @import url("https://clear-ui.netlify.app/css/Alerts.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui.netlify.app/css/Alerts.css"></link>`}
        </Highlight>
      </div>
      <Component
        heading="Standard Alerts"
        description="Alert component has four variants alert-success, alert-danger, alert-warning and alert-info."
        code={[
          `<div className="alert-info"><Info /> <span className="alert-text"></span></div>`,
          `<div className="alert-success"><CheckCircle/> <span className="alert-text"></span></div>`,
          `<div className="alert-danger"><Error/> <span className="alert-text"></span></div>`,
          `<div className="alert-warning"><Warning/> <span className="alert-text"></span></div>`,
        ]}
      >
        <div className="alert alert-info">
          <Info />{" "}
          <span className="alert-text">
            Info Alert: A new update is available.
          </span>
        </div>
        <div className="alert alert-success">
          <CheckCircle />{" "}
          <span className="alert-text">Success: Successfully uploaded.</span>
        </div>
        <div className="alert alert-danger">
          <Error />{" "}
          <span className="alert-text">
            Error: There was an error.
          </span>
        </div>
        <div className="alert alert-warning">
          <Warning />{" "}
          <span className="alert-text">Warning: You have no credits left.</span>
        </div>
      </Component>
    </div>
  );
}

export { Alerts };
