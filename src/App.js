import "./main.css";

function App() {
  return (
	  <div className="layout">
		<div className="nav-container">
			<nav className="nav">
				<div className="nav-brand">Clear - UI</div>
				<ul className="ordered nav-pills">
					<li className="nav-item-inline">
						<a href="/" className="nav-link active">Home</a>
					</li>
					<li class="nav-item-inline">
						<a href="/" className="nav-link">Documentation</a>
					</li>
					<li className="nav-item-inline">
					<a href="/" className="nav-link">About Us</a>
					</li>
				</ul>
			</nav>
		</div>
		<header className="header">
			<div className="card">
			<h1 className="card-heading">CLEAR - UI</h1>
			<p className="card-body">
				A CSS framework with components that can be composed to build any design, directly in your markup. It's easy to customize, adapts to any design and can . 
			</p>
			<button className="card-button">
				GET STARTED
			</button>
			</div>
		</header>
		<div className="container">
			<div className="section">
				<h3 className="section-header">Installation</h3>
				<p  className="section-body">Follow the these steps to install and use Clear-UI directly into your project.</p>
				<code>Here's the link!</code>
				<hr className="section-hr"/>
				<button className="section-button">
					READ INSTALLATION DOCS
				</button>
			</div>
			<div className="section">
				<h3 className="section-header">Usage</h3>
				<p  className="section-body">Clear - UI's components require no additional set-up.</p>
				<code>Here's the link!</code>
				<hr className="section-hr"/>
				<button className="section-button">
					EXPLORE THE DOCS
				</button>
			</div>
		</div>
		<footer className="footer">
			<h3>CONTACT</h3>
			<div className="footer-header">I'd Love To Hear From You.</div>
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
		<p>
			akshitasaini007@gmail.com
		</p>
		<p>
			&#9400; Akshita Saini | Created Using ReactJS, HTML5 and CSS3 
		</p>
	</footer>
	  </div>
  );
}

export default App;
