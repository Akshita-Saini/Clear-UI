function CodeSnippet({heading, description,code, children})
{
    return (
    <div className="component-container-inner">
        <h2 className="component-heading">{heading}</h2>
        <p className="component-description">{description}</p>
        <div className="component-demo">{children}</div>
        <code className="component-code">{code}</code>
    </div>
    );
}

export {CodeSnippet};