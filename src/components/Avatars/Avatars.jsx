import {CodeSnippet} from "../../utilities/CodeSnippet";
import "../styles.css";
import "./Avatars.css";
import profile from "../../images/profile.png";
import male_user from "../../images/male_user.png";
import female_user from "../../images/female_user.png";

function Avatars()
{
    return (
        <div className="component-container-outer">
            <h1 className="component-header">Avatars</h1>
            <CodeSnippet 
                heading="Avatars" 
                description="This is an avatar." 
                code={[`<img className="avatar" src={profile} alt="avatar"/>`,
                       `<img className="avatar avatar-sm" src={profile} alt="avatar"/>`,
                       `<img className="avatar avatar-xs" src={profile} alt="avatar"/>`]}>
                <div className="avatar-container">
                    <img className="avatar" src={profile} alt="avatar"/>
                    <img className="avatar avatar-sm" src={profile} alt="avatar"/>
                    <img className="avatar avatar-xs" src={profile} alt="avatar"/>
                </div>
            </CodeSnippet>
            <CodeSnippet 
                heading="Avatars with Badges" 
                description="These are avatars with badges." 
                code={[`<div className="avatar-with-badge">`,
                       `    <img className="avatar" src={profile} alt="avatar"/>`,
                       `    <div className="badge online-badge"></div>`,
                       `</div>`,
                       `<div className="avatar-with-badge">`,
                       `    <img className="avatar" src={profile} alt="avatar"/>`,
                       `    <div className="badge do-not-disturb-badge"></div>`,
                       `</div>`,
                       `<div className="avatar-with-badge">`,
                       `    <img className="avatar" src={profile} alt="avatar"/>`,
                       `<div className="badge offline-badge"></div>`,
                       `</div>`]}>
                <div className="avatar-container">
                    <div className="avatar-with-badge">
                        <img className="avatar" src={profile} alt="avatar"/>
                        <div className="badge online-badge"></div>
                    </div>
                    <div className="avatar-with-badge">
                        <img className="avatar" src={profile} alt="avatar"/>
                        <div className="badge do-not-disturb-badge"></div>
                    </div>
                    <div className="avatar-with-badge">
                        <img className="avatar" src={profile} alt="avatar"/>
                        <div className="badge offline-badge"></div>
                    </div>
                </div>
            </CodeSnippet>
            <CodeSnippet 
                heading="Avatars with Shapes" 
                description="These are the different avatar shapes that can be used." 
                code={[`<img className="avatar" src={profile} alt="avatar"/>`,
                       `<img className="avatar avatar-square" src={profile} alt="avatar"/>`]}>
                <div className="avatar-container">
                    <img className="avatar" src={male_user} alt="avatar"/>
                    <img className="avatar avatar-square" src={female_user} alt="avatar"/>
                </div>
            </CodeSnippet>
        </div>
    );
}

export {Avatars};