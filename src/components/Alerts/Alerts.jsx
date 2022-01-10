import { Component } from "../../utilities/Component";
/* import "../styles.css";
import "./Alerts.css"; */
import { Info, CheckCircle, Warning, Error } from "@material-ui/icons";
function Alerts() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Alerts</h1>
      <Component
        heading="Alerts"
        description="These are the various alerts."
        code={[
          `<div className="alert"><Info /> <span className="alert-text"></span></div>`,
          `<div className="alert alert-success"><CheckCircle/> <span className="alert-text"></span></div>`,
          `<div className="alert alert-danger"><Error/> <span className="alert-text"></span></div>`,
          `<div className="alert alert-warning"><Warning/> <span className="alert-text"></span></div>`,
        ]}
      >
        <div className="alert">
          <Info />{" "}
          <span className="alert-text">
            Info Alert: A new update is available.
          </span>
        </div>
        <div className="alert alert-success">
          <CheckCircle />{" "}
          <span className="alert-text">Success: Successfully uploaded</span>
        </div>
        <div className="alert alert-danger">
          <Error />{" "}
          <span className="alert-text">
            Error: There were two errors in your submission
          </span>
        </div>
        <div className="alert alert-warning">
          <Warning />{" "}
          <span className="alert-text">Warning: You have no credits left</span>
        </div>
      </Component>
    </div>
  );
}

export { Alerts };
