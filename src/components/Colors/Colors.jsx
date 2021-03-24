import "../styles.css";
import "./Colors.css";
import {Component} from "../../utilities/Component";

function Colors()
{
    return (
        <div className="component-container-outer">
        <h1 className="component-header">Colors</h1>
        <Component 
                heading="Colors" 
                description="These are the colors." 
                code={[`<div className="color bg-primary">#8743c7</div>`,
                `<div className="color bg-secondary">#cea2fd</div>`,
                `<div className="color bg-tertiary">#6824a8</div>`,
                `<div className="color bg-success">#52c41a</div>`,
                `<div className="color bg-danger">#ff4d4f</div>`,
                `<div className="color bg-warning">#faad14</div>`,
                `<div className="color bg-info">#1890ff</div>`,
                `<div className="color bg-light">#f9fafb</div>`,
                `<div className="color bg-dark">#1c1f23</div>`,
                `<div className="color bg-grey">#8d99ae</div>`]}>
            <div className="color-pallet">
                <div className="color bg-primary">#8743c7</div>
                <div className="color bg-secondary">#cea2fd</div>
                <div className="color bg-tertiary">#6824a8</div>
                <div className="color bg-success">#52c41a</div>
                <div className="color bg-danger">#ff4d4f</div>
                <div className="color bg-warning">#faad14</div>
                <div className="color bg-info">#1890ff</div>
                <div className="color bg-light">#f9fafb</div>
                <div className="color bg-dark">#1c1f23</div>
                <div className="color bg-grey">#8d99ae</div>
            </div>
        </Component>
        </div>
    );
}

export {Colors};
