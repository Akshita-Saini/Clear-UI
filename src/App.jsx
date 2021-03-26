import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import {Home} from "./Home";
import {Docs} from "./Docs";

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
						<a className="nav-link" href="https://github.com/Akshita-Saini/Clear-UI">Github</a>
					</li>
				</ul>
			</nav>
			<Switch>
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
