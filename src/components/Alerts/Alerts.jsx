import {CodeSnippet} from "../../utilities/CodeSnippet";
import "../styles.css";
import "./Alerts.css";
import { Info, CheckCircle, Warning, Error  } from '@material-ui/icons';
function Alerts()
{
    return (
        <div className="component-container-outer">
        <h1 className="component-header">Alerts</h1>
        <CodeSnippet heading="Alerts" description="These are the various alerts." code={[`<div    class="alert"><i class="material-icons"/>info</i> <span className="alert-text">Alert: A new update is available.</span></div>`,
            `<div class="alert alert-success"><i class="material-icons">checkcircle<i/><span className="alert-text">Success: Successfully uploaded</span></div>`,
            `<div class="alert alert-danger"><i class="material-icons">error<i/><span className="alert-text">Error: There were two errors in your submission</span></div>`,
            `<div class="alert alert-warning"><i class="material-icons">warning<i/><span className="alert-text">Warning: You have no credits left</span></div>`]} >
            <div className="alert"><Info /> <span className="alert-text">Info Alert: A new update is available.</span></div>
            <div className="alert alert-success"><CheckCircle/> <span className="alert-text">Success: Successfully uploaded</span></div>
            <div className="alert alert-danger"><Error/> <span className="alert-text">Error: There were two errors in your submission</span></div>
            <div className="alert alert-warning"><Warning/> <span className="alert-text">Warning: You have no credits left</span></div>
        </CodeSnippet>
        </div>
    );
}

export {Alerts};