import { useState } from "react";
import { Component } from "../../utilities/Component";
/* import "../styles.css";
import "./Toast.css"; */
import { Info, CheckCircle, Warning, Error } from "@material-ui/icons";
function Toast() {
  const [isToastOpen, toggleToast] = useState(false);
  function toggleToastDemo() {
    toggleToast((isToastOpen) => !isToastOpen);
  }
  function ToastDemo() {
    return (
      <div className="toast" style={{ marginLeft: "1rem" }}>
        <Info />{" "}
        <span className="toast-text">
          Info Alert: A new update is available.
        </span>
      </div>
    );
  }
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Toast</h1>
      <button className="btn-live" onClick={toggleToastDemo}>
        LIVE
      </button>
      {isToastOpen && <ToastDemo />}
      <Component
        heading="Toast"
        description="These are the different toasts."
        code={[
          `<div className="toast"><Info /> <span className="toast-text"></span></div>`,
          `<div className="toast toast-success"><CheckCircle/> <span className="toast-text"></span></div>`,
          `<div className="toast toast-danger"><Error/> <span className="toast-text"></span></div>`,
          `<div className="toast toast-warning"><Warning/> <span className="toast-text"></span></div>`,
        ]}
      >
        <div
          className="toast"
          style={{ display: "flex", alignItems: "center", position: "unset" }}
        >
          <Info />{" "}
          <span className="toast-text">
            Info Alert: A new update is available.
          </span>
        </div>
        <div
          className="toast toast-success"
          style={{ display: "flex", alignItems: "center", position: "unset" }}
        >
          <CheckCircle />{" "}
          <span className="toast-text">Success: Successfully uploaded</span>
        </div>
        <div
          className="toast toast-danger"
          style={{ display: "flex", alignItems: "center", position: "unset" }}
        >
          <Error />{" "}
          <span className="toast-text">
            Error: There were two errors in your submission
          </span>
        </div>
        <div
          className="toast toast-warning"
          style={{ display: "flex", alignItems: "center", position: "unset" }}
        >
          <Warning />{" "}
          <span className="toast-text">Warning: You have no credits left</span>
        </div>
      </Component>
    </div>
  );
}

export { Toast };
