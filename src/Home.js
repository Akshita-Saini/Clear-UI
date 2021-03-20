import "./main.css";
import "./Home.css";

function Home() {
    return (
        <div>
            <header className="header">
			    <div className="card">
			        <h1 className="card-heading">CLEAR - UI</h1>
			        <p className="card-body">
				        A CSS framework with components that can be composed to build any design, directly in your markup. It's easy to customize and use.
			        </p>
			        <button className="card-button">
				        GET STARTED
			        </button>
		        </div>
		    </header>
		<div className="container">
			<div className="section">
				<h3 className="section-header">
					<svg className="section-icon" width="1em" height="1em" viewBox="0 0 24 24"><path d="M19.92 12.08L12 20l-7.92-7.92l1.42-1.41l5.5 5.5V2h2v14.17l5.5-5.51l1.42 1.42M12 20H2v2h20v-2H12z" fill="currentColor"></path>
					</svg>
					Installation
				</h3>
				<p className="section-body">Follow the these steps to install and use Clear-UI directly into your project.</p>
				<code>Here's the link!</code>
				<hr className="section-hr"/>
				<button className="section-button">
					READ INSTALLATION DOCS
				</button>
			</div>
			<div className="section">
				<h3 className="section-header">
					<svg className="section-icon" width="1em" height="1em" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor"></path></svg>
					Usage
				</h3>
				<p  className="section-body">Clear - UI's components require no additional set-up.</p>
				<code>Here's the link!</code>
				<hr className="section-hr"/>
				<button className="section-button">
					EXPLORE THE DOCS
				</button>
			</div>
		</div>
        </div>
    );
  }
  
  export {Home};