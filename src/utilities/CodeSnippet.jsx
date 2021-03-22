import "./CodeSnippet.css";

function CodeSnippet({heading, description, code, children})
{
    return (
    <div className="component-container-inner">
        <h2 className="component-heading">{heading}</h2>
        <p className="component-description">{description}</p>
        <div className="component-demo">{children}</div>
        <code><div className="component-code">{code.map(line => <div className="component-code-line">{line}</div>)}</div></code>
    </div>
    );
}

export {CodeSnippet};