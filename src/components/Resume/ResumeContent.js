import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <h6 className={props.compagny ? "resume-compagny" : "resume-no-compagny"}>{props.compagny}</h6>
        <h6 className={props.school ? "resume-school" : "resume-no-school"}>{props.school}</h6>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
