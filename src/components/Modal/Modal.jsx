import { useState } from "react";
import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Modal.css";

function Modal() {
  const [isModalOpen, toggleModal] = useState(false);
  function openModal() {
    toggleModal(true);
  }
  function closeModal() {
    toggleModal(false);
  }

  function ModalDemo() {
    return (
      <div className="modal-bg">
        <div className="modal-demo">
          <h2 className="modal-heading">
            Title
            <span className="modal-close-button" onClick={closeModal}>
              &#10005;
            </span>
          </h2>
          <p className="modal-body">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button className="modal-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="component-container-outer">
      <h1 className="component-header">Modal</h1>
      <div className="component-style-link">
        <Highlight>
          @import url("https://clear-ui.netlify.app/css/Modal.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui.netlify.app/css/Modal.css"></link>`}
        </Highlight>
      </div>
      <button className="btn-live" onClick={openModal}>
        LIVE
      </button>
      {isModalOpen && <ModalDemo />}
      <Component
        heading="Modal"
        description="This is a modal."
        code={[
          `<div className="modal">`,
          `   <h2 className="modal-heading">Title<span className="modal-close-button">&#10005;</span></h2>`,
          `   <p className="modal-body"></p>`,
          `   <button className="modal-button">Close</button>`,
          `</div>`,
        ]}
      >
        <div className="modal">
          <h2 className="modal-heading">
            Title<span className="modal-close-button">&#10005;</span>
          </h2>
          <p className="modal-body">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button className="modal-button">Close</button>
        </div>
      </Component>
    </div>
  );
}

export { Modal };
