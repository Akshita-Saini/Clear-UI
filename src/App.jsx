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
	  </div>
  );
}

export default App;
