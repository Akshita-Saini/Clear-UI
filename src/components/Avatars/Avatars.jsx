import {CodeSnippet} from "../../utilities/CodeSnippet";
import "../styles.css";
import "./Avatars.css";
import profile from "../../images/profile.png";

function Avatars()
{
    return (
        <div className="component-container-outer">
            <h1 className="component-header">Avatars</h1>
            <CodeSnippet heading="Avatars" description="This is an avatar." code={[`<img className="avatar" src={profile} alt="avatar"/>`,
                    `<img className="avatar avatar-sm" src={profile} alt="avatar"/>`,
                    `<img className="avatar avatar-xs" src={profile} alt="avatar"/>`]}>
                <div className="avatar-container">
                    <img className="avatar" src={profile} alt="avatar"/>
                    <img className="avatar avatar-sm" src={profile} alt="avatar"/>
                    <img className="avatar avatar-xs" src={profile} alt="avatar"/>
                </div>
            </CodeSnippet>
            <CodeSnippet heading="Avatars with Badges" description="This is an avatar with a badge." code={[``]}>
                <div className="avatar-container">
                    <img className="avatar avatar-online" src={profile} alt="avatar"/>
                    <img className="avatar avatar-sm" src={profile} alt="avatar"/>
                    <img className="avatar avatar-xs" src={profile} alt="avatar"/>
                </div>
            </CodeSnippet>
        </div>
    );
}

export {Avatars};