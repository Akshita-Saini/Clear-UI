import { Component } from "../../utilities/Component";
import Highlight from "react-highlight";
import "../styles.css";
import "./Avatars.css";
import profile from "../../images/profile.png";
import male_user from "../../images/male_user.png";
import female_user from "../../images/female_user.png";

function Avatars() {
  return (
    <div className="component-container-outer">
      <h1 className="component-header">Avatars</h1>
      <div className="component-style-link">
        <Highlight>
          @import
          url("https://clear-ui-v2.netlify.app/components/Avatars/Avatars.css");
        </Highlight>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://clear-ui-v2.netlify.app/components/Avatars/Avatars.css"></link>`}
        </Highlight>
      </div>

      <Component
        heading="Avatars"
        description="By default avatar has dimensions of 7.5rem, avatar-sm has dimensions of 5rem and avatar-xs has dimensions of 2.5rem. Custom dimensions can be specified by overwriting height and width in styles for the given class."
        code={[
          `<img className="avatar" src={profile} alt="avatar"/>`,
          `<img className="avatar avatar-sm" src={profile} alt="avatar"/>`,
          `<img className="avatar avatar-xs" src={profile} alt="avatar"/>`,
        ]}
      >
        <div className="avatar-container">
          <img className="avatar" src={profile} alt="avatar" />
          <img className="avatar avatar-sm" src={profile} alt="avatar" />
          <img className="avatar avatar-xs" src={profile} alt="avatar" />
        </div>
      </Component>
      <Component
        heading="Avatars with Badges"
        description="For using avatars with badges, add avatar-with-badge class to the parent container of the avatar. Then add an empty div with badge class to add badge."
        code={[
          `<div className="avatar-with-badge">`,
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
          `</div>`,
        ]}
      >
        <div className="avatar-container">
          <div className="avatar-with-badge">
            <img className="avatar" src={profile} alt="avatar" />
            <div className="badge online"></div>
          </div>
          <div className="avatar-with-badge">
            <img className="avatar" src={profile} alt="avatar" />
            <div className="badge dnd"></div>
          </div>
          <div className="avatar-with-badge">
            <img className="avatar" src={profile} alt="avatar" />
            <div className="badge offline"></div>
          </div>
        </div>
      </Component>
      <Component
        heading="Avatars with Shapes"
        description="To use a square avatar instead, add avatar-square class."
        code={[
          `<img className="avatar" src={profile} alt="avatar"/>`,
          `<img className="avatar avatar-square" src={profile} alt="avatar"/>`,
        ]}
      >
        <div className="avatar-container">
          <img className="avatar" src={male_user} alt="avatar" />
          <img
            className="avatar avatar-square"
            src={female_user}
            alt="avatar"
          />
        </div>
      </Component>
    </div>
  );
}

export { Avatars };
