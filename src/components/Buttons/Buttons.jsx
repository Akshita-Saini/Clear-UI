import {CodeSnippet} from "../../utilities/CodeSnippet";
import "../styles.css";
import "./Buttons.css";

function Buttons()
{
    return (
        <div className="component-container-outer">
            <h1 className="component-header">Buttons</h1>
            <CodeSnippet heading="Primary Button" description="This is a primary button." code={`<button class="btn btn-primary">Primary</button>`} >
                <button className="btn btn-primary">Primary</button>
            </CodeSnippet>
            <CodeSnippet heading="Secondary Button" description="This is a secondary button." code={`<button class="btn btn-secondary">Secondary</button>`} >
                <button className="btn btn-secondary">Secondary</button>
            </CodeSnippet>
        </div>
    );
}

export {Buttons};