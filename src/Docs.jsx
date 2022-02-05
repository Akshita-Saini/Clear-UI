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
  const componentList = [
    { name: "Avatars", component: <Avatars /> },
    { name: "Alerts", component: <Alerts /> },
    { name: "Badges" , component: <Badges /> },
    { name: "Buttons", component: <Buttons /> },
    { name: "Card", component: <Card /> },
    { name: "Lists", component: <Lists /> },
    { name: "Modal", component: <Modal /> },
    { name: "Navbar", component: <Navbar /> },
    { name: "Toast", component: <Toast /> },
    { name: "Colors", component: <Colors /> },
  ];
  const [sidebarItem, setSidebarItem] = useState("Avatars");

  function getDocNavPrevOrNext(getNextFlag){
    let currentIndex = componentList.findIndex(component =>  component.name===sidebarItem);
    if(getNextFlag){
      return componentList[(currentIndex+1) % componentList.length].name;
    }else{
      return componentList[(currentIndex-1+componentList.length) % componentList.length].name;
    }
  }



  return (
    <div class="container">
      <div class="docs-header">
          <img src={logo} className="logo" alt="logo" />
          <div className="logo-text">Clear-UI</div>
      </div>
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
          {componentList.map((componentName) => (
            <SidebarItem
              key={componentName.name}
              name={componentName.name}
              setSidebarItem={setSidebarItem}
              sidebarItem={sidebarItem}
            />
          ))}
        </ul>
      </aside>
      <div className="docs">
        {componentList.find(component => component.name===sidebarItem).component}
        <div className="docs-nav">
          <div className="docs-nav-left" onClick={() => {setSidebarItem(getDocNavPrevOrNext(false))}}>  
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z" fill="currentColor"></path></svg>
            {
              getDocNavPrevOrNext(false)
            }
          </div>
          <div className="docs-nav-right" onClick={() => {setSidebarItem(getDocNavPrevOrNext(true))}}>
            {
              getDocNavPrevOrNext(true)
            }
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z" fill="currentColor"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Docs };
