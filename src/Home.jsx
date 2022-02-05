import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import logo from "./images/circle.svg";
import "./main.css";
import "./Home.css";
import "./components/Buttons/Buttons.css";

function Home() {
  return (
    <div>
      <div className="nav-container">
        <nav className="nav">
          <div className="nav-brand">CLEAR - UI</div>
          <ul className="ordered nav-pills">
            <li className="nav-item-inline">
              <Link to="/docs" className="nav-link">
                Docs
              </Link>
            </li>
            <li className="nav-item-inline">
              <a
                className="nav-link"
                href="https://github.com/Akshita-Saini/Clear-UI"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="header-container">
        <div className="header">
          <div className="header-top">
            <div>
              <img src={logo} className="header-logo" alt="logo" />
            </div>
            <div className="header-right-box">
              <h1 className="header-heading">CLEAR - UI</h1>
              <p className="header-body">
                A CSS framework with components that can be composed to build
                any design, directly in your markup. It's easy to customize and
                use.
              </p>
              <Link to="/docs" className="header-button">
                Get Started
              </Link>
            </div>
          </div>
          <div className="header-bottom">
            <iframe
              className="github-stars"
              src="https://ghbtns.com/github-btn.html?user=Akshita-Saini&repo=Clear-UI&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="75"
              height="20"
              title="GitHub"
            ></iframe>
            Have a look at my portfolio here:
            <a
              className="header-bottom-link"
              href="https://akshita-saini.netlify.app"
            >
              Akshita's Portfolio
            </a>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="section" id="installation">
          <h3 className="section-header">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="section-icon"
            >
              <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
            </svg>
            Installation
          </h3>
          <p className="section-body">
            Follow the these steps to install and use Clear-UI directly in your
            project by importing the stylesheet in your css or html file.
          </p>
          <Highlight className="section-code">
            @import url("https://clear-ui.netlify.app/css/index.css");
            {`<link rel="stylesheet" href="https://clear-ui.netlify.app/css/index.css"></link>`}
          </Highlight>
          <p className="section-body">
            Import the default Prompt font and material-ui icons used.
          </p>
          <Highlight className="section-code">
            @import
            url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap");
          </Highlight>
          <Highlight className="section-code">
            npm install --save @material-ui/icons@4.11.2
          </Highlight>
          <div className="section-hr"></div>
          <Link className="section-button" to="/docs">
            Read installation docs
          </Link>
        </div>
        <div className="section">
          <h3 className="section-header">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
                fill="currentColor"
              ></path>
            </svg>
            Usage
          </h3>
          <p className="section-body">
            Clear - UI's components require no additional set-up. After
            importing the stylesheet and the default font, simply add the class
            of the component you want.
          </p>
          <p className="section-body">
            For adding Primary Button add the classes btn and btn-primary:
          </p>
          <Highlight className="section-code">
            {`<button class="btn btn-primary">I am Primary Button</button>`}
          </Highlight>
          <p className="section-body">It will render as:</p>
          <button class="btn btn-primary" style={{ marginBottom: "1.2rem" }}>
            I am Primary Button
          </button>
          <div className="section-hr"></div>
          <Link className="section-button" to="/docs">
            Explore the docs
          </Link>
        </div>
      </div>
      <footer className="footer">Copyright © 2022 Clear-UI.</footer>
    </div>
  );
}

export { Home };
