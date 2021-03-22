import {CodeSnippet} from "../../utilities/CodeSnippet";
import "../styles.css";
import "./Buttons.css";

function Buttons()
{
    return (
        <div className="component-container-outer">
            <h1 className="component-header">Buttons</h1>
            <CodeSnippet heading="Solid Button" description="These are solid buttons." code={[`<button class="btn btn-primary">Primary</button>`,
                                                             `<button class="btn btn-primary">Primary</button>`]} >
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
            </CodeSnippet>
            <CodeSnippet heading="Outline Button" description="These are outline buttons." code={[`<button className="btn btn-outline btn-primary">Primary</button>`
                ,`<button className="btn btn-outline btn-secondary">Secondary</button>`]} >
                <button className="btn btn-outline btn-primary">Primary</button>
                <button className="btn btn-outline btn-secondary">Secondary</button>
            </CodeSnippet>
        </div>
    );
}

export {Buttons}