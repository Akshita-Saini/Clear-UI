import {CodeSnippet} from "../../utilities/CodeSnippet";
import "../styles.css";
import "./Modal.css";

function Modal()
{
    return (
        <div className="component-container-outer">
        <h1 className="component-header">Modal</h1>
        <CodeSnippet heading="Modal" description="This is a modal." code={[`<button class="btn btn-primary">Primary</button>`]} >
            <div className="modal">
                <h2 className="modal-heading">Title</h2>
                <p className="modal-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <button className="modal-button">Close</button>
            </div>
        </CodeSnippet>
        </div>
    );
}

export {Modal};