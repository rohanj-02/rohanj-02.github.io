import React from "react";
import chat_icon from "../images/chat_icon.svg";
import github_gray from "../images/github_gray.svg";
import linkedin_gray from "../images/linkedin_gray.svg";

export default function AppNavBar() {
  return (
    <div className="nav">
      <div className="contact_me">
        <a href="mailto:rohan19095@iiitd.ac.in">
          <img src={chat_icon} alt="chat logo" />
          Contact Me
        </a>
      </div>
      <div className="nav_icons">
        <a href="https://github.com/rohanj-02">
          <img src={github_gray} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/rohanj02/">
          <img src={linkedin_gray} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}
