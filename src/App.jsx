import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import {Home} from "./Home";
import {Docs} from "./Docs";
import {About} from "./About";

import "./main.css";
import "./App.css";

function App() {
  return (
	  <div className="layout">
		<Router>
		<div className="nav-container">
			<nav className="nav">
				<div className="nav-brand">CLEAR - UI</div>
				<ul className="ordered nav-pills">
					<li className="nav-item-inline">
						<Link to="/" className="nav-link active">Home</Link>
					</li>
					<li className="nav-item-inline">
						<Link to="/docs" className="nav-link">Documentation</Link>
					</li>
					<li className="nav-item-inline">
						<Link to="/about" className="nav-link">About Us</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/about">
					<About/>
				</Route>
				<Route path="/docs">
					<Docs/>
				</Route>
				<Route path="/">
					<Home/>
				</Route>
			</Switch>
		</div>
		</Router>
		<footer className="footer">
				<ul className="social-links  list-non-bullet">
					<li className="list-item-inline">
			  			<a href="https://www.linkedin.com/in/akshita-saini-0782a61a1/" className="link">
						LinkedIn
							{/* <img src={} className="inline-icon"/> */}
						</a>
		   			 </li>
					<li className="list-item-inline">
						<a href="https://github.com/Akshita-Saini" className="link">
						GitHub
							{/* <img src={} className="inline-icon"/> */}
						</a>
					</li>
					<li className="list-item-inline">
						<a href="https://twitter.com/akshitasaini15?lang=en" className="link">
						Twitter
							{/* <img src={} className="inline-icon"/> */}
						</a>
					</li>
				</ul>
			<div class="info">&#9400; Akshita Saini | Created Using ReactJS, HTML5 and CSS3</div> 
	</footer>
	  </div>
  );
}

export default App;
