import {CodeSnippet} from "../../utilities/CodeSnippet";
import "../styles.css";
import "./Card.css";

function Card()
{
    return (
        <div className="component-container-outer">
            <h1 className="component-header">Card</h1>
            <CodeSnippet heading="Card" description="This is a card." code={[`<button class="btn btn-primary">Primary</button>`]} >
                <div className="card-container">
                    <div className="card-img">
                        <img src="../../../public/images/placeholder-img.png" alt="placeholder-img"/>
                    </div>
                    <div className="card-body">
                        <h2 className="card-header">TITLE</h2>
                        <p className="card-text">This is text.</p>
                    </div>
                </div>
            </CodeSnippet>
        </div>
    );
}

export {Card};