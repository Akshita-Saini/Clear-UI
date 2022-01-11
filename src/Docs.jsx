import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./images/circle.svg";
import "./main.css";
import "./Docs.css";

import {
  Avatars,
  Alerts,
  Badges,
  Buttons,
  Card,
  Colors,
  Lists,
  Modal,
  Navbar,
  Toast,
} from "./components/index.js";

function SidebarItem({ name, setSidebarItem, sidebarItem }) {
  function clickHandler(name) {
    setSidebarItem(name);
    console.log("I have changed the useState!", name);
  }
  return (
    <li
      className="ls-item"
      onClick={() => clickHandler(name)}
      style={
        sidebarItem === name
          ? {
              backgroundColor: "rgba(227, 202, 255, 0.548)",
            }
          : null
      }
    >
      {name}
    </li>
  );
}

function Docs() {
  const componentList = {
    Avatars: { component: <Avatars /> },
    Alerts: { component: <Alerts /> },
    Badges: { component: <Badges /> },
    Buttons: { component: <Buttons /> },
    Card: { component: <Card /> },
    Lists: { component: <Lists /> },
    Modal: { component: <Modal /> },
    Navbar: { component: <Navbar /> },
    Toast: { component: <Toast /> },
    Colors: { component: <Colors /> },
  };
  const [sidebarItem, setSidebarItem] = useState("Avatars");

  return (
    <div class="container">
      <aside className="aside">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" alt="logo" />
          <div className="logo-text">Clear-UI</div>
        </Link>
        <ul className="ls">
          <li className="">
            <HashLink className="ls-item highlighted" to="/#installation">
              Installation Guide
            </HashLink>
          </li>
          {Object.keys(componentList).map((componentName) => (
            <SidebarItem
              key={componentName}
              name={componentName}
              setSidebarItem={setSidebarItem}
              sidebarItem={sidebarItem}
            />
          ))}
        </ul>
      </aside>
      <div className="docs">{componentList[sidebarItem].component}</div>
    </div>
  );
}

export { Docs };
