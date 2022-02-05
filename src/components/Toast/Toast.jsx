import { useState } from "react";
import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Toast.css";
import { Info, CheckCircle, Warning, Error } from "@material-ui/icons";

function Toast() {
  const [isToastOpen, toggleToast] = useState(false);
  function toggleToastDemo() {
    toggleToast((isToastOpen) => !isToastOpen);
  }
  function ToastDemo() {
    return (
      <div className="toast toast-info" style={{ marginLeft: "1rem" }}>
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
      <div className="component-style-link">
        <Highlight>
          @import url("https://clear-ui.netlify.app/css/Toast.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui.netlify.app/css/Toast.css"></link>`}
        </Highlight>
      </div>
      <button className="btn-live" onClick={toggleToastDemo}>
        LIVE
      </button>
      {isToastOpen && <ToastDemo />}
      <Component
        heading="Toast"
        description="Toast component has four variants, toast-info, toast-success, toast-danger and toast-warning."
        code={[
          `<div className="toast toast-info"><Info /> <span className="toast-text"></span></div>`,
          `<div className="toast toast-success"><CheckCircle/> <span className="toast-text"></span></div>`,
          `<div className="toast toast-danger"><Error/> <span className="toast-text"></span></div>`,
          `<div className="toast toast-warning"><Warning/> <span className="toast-text"></span></div>`,
        ]}
      >
        <div
          className="toast toast-info"
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
          <span className="toast-text">Success: Successfully uploaded.</span>
        </div>
        <div
          className="toast toast-danger"
          style={{ display: "flex", alignItems: "center", position: "unset" }}
        >
          <Error />{" "}
          <span className="toast-text">
            Error: There was an error.
          </span>
        </div>
        <div
          className="toast toast-warning"
          style={{ display: "flex", alignItems: "center", position: "unset" }}
        >
          <Warning />{" "}
          <span className="toast-text">Warning: You have no credits left.</span>
        </div>
      </Component>
    </div>
  );
}

export { Toast };
