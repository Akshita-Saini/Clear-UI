import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Lists.css";
import {
  DeleteRounded,
  DraftsRounded,
  InboxRounded,
  BackspaceRounded,
} from "@material-ui/icons";

function Lists() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Lists</h1>
      <div className="component-style-link">
        <Highlight>
          @import
          url("https://clear-ui-v2.netlify.app/components/Lists/Lists.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui-v2.netlify.app/components/Lists/Lists.css"></link>`}
        </Highlight>
      </div>
      <Component
        heading="Basic List"
        description="This is a basic list with icons."
        code={[
          `<ul className="list">`,
          `   <div className="list-heading">List Heading</div>`,
          `   <li className="list-item">`,
          `     <InboxRounded className="list-icon" /> Inbox`,
          `   </li>`,
          `   <li className="list-item">`,
          `      <DraftsRounded className="list-icon" /> Drafts`,
          `   </li>`,
          `   <li className="list-item">`,
          `     <DeleteRounded className="list-icon" /> Trash`,
          `   </li>`,
          `   <li className="list-item">`,
          `     <BackspaceRounded className="list-icon" /> Spam`,
          `   </li>`,
          `</ul>`,
        ]}
      >
        <div className="list-container">
          <ul className="list">
            <div className="list-heading">List Heading</div>
            <li className="list-item">
              <InboxRounded className="list-icon" /> Inbox
            </li>
            <li className="list-item">
              <DraftsRounded className="list-icon" /> Drafts
            </li>
            <li className="list-item">
              <DeleteRounded className="list-icon" /> Trash
            </li>
            <li className="list-item">
              <BackspaceRounded className="list-icon" /> Spam
            </li>
          </ul>
        </div>
      </Component>
    </div>
  );
}

export { Lists };
