import {Component} from "../../utilities/Component";
import "../styles.css";
import "./Card.css";

function Card()
{
    return (
        <div className="component-container-outer">
            <h1 className="component-header">Card</h1>
            <Component heading="Card" description="This is a card." code={[`<div className="card-body">`,
                       `<h2 className="card-header">TITLE</h2>`,
                        `<hr className="card-hr"/>`,
                        `<p className="card-text">`,
                             `This is text.This is text.This is text.This is text.This is text.`,
                        `</p>`,
                    `</div>`]} >
                <div className="card-container">
                    <div className="card-body">
                        <h2 className="card-header">TITLE</h2>
                        <hr className="card-hr"/>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                </div>
            </Component>
        </div>
    );
}

export {Card};