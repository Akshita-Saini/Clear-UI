import {Component} from "../../utilities/Component";
import "../styles.css";
import "./Navbar.css";

function Navbar()
{
    return (
        <div className="component-container-outer">
        <h1 className="component-header">Navbar</h1>
        <Component   
            heading="Navbar" 
            description="These are the various navbars." 
            code={[
                `<div className="alert"><Info /> <span className="alert-text"></span></div>`,
                `<div className="alert alert-success"><CheckCircle/> <span className="alert-text"></span></div>`,
                `<div className="alert alert-danger"><Error/> <span className="alert-text"></span></div>`,
                `<div className="alert alert-warning"><Warning/> <span className="alert-text"></span></div>`
                ]} >
            <div className="navbar">
                <div className="nav-brand">
                <div className="nav-list">
                    <div className="nav-list-item"></div>
                    <div className="nav-list-item"></div>
                    <div className="nav-list-item"></div>
                    <div className="nav-list-item"></div>
                </div>
                </div>
            </div>
        </Component>
        </div>
    );
}

export {Navbar};