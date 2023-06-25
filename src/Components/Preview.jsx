import React from "react";
import "../styles/Preview.scss";

const Preview = ({ edus, exps , pinfo}) => {
  return (
    <div className="preview">
      <Header {...pinfo}/>
      <section>
        <Main edus={edus} exps={exps} pinfo={pinfo} />
        <PersonalDetails {...pinfo}/>
      </section>
    </div>
  );
};

export default Preview;

function Header({name, title}) {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </header>
  );
}

function Main({ edus, exps, pinfo }) {
  return (
    <div className="main">
      <div className="description">
        <h3 className="heading">Description</h3>
        <p>
         {pinfo.description}
        </p>
      </div>
      <Experiences exps={exps} />
      <Education edus={edus} />
    </div>
  );
}

function Education({ edus }) {
  return (
    <div className="experiences">
      <h3 className="heading">Education</h3>
      {edus &&
        edus.map((edu) => {
          return <Edu key={edu.id} {...edu} />;
        })}
    </div>
  );
}

function Edu({ timeline, schoolName, degree, subject }) {
  return (
    <div className="experience">
      <p className="timeLine">{timeline}</p>
      <div className="experience-info">
        <p className="bold">{schoolName}</p>
        <p>Degree: {degree}</p>
        <p>Subject: {subject}</p>
      </div>
    </div>
  );
}

function Experiences({ exps }) {
  return (
    <div className="experiences">
      <h3 className="heading">Experiences</h3>
      {exps &&
        exps.map((exp) => {
          return <Experience key={exp.id} {...exp} />;
        })}
    </div>
  );
}

function Experience({ timeline, jobtitle, company }) {
  return (
    <div className="experience">
      <p className="timeLine bold">{timeline}</p>
      <div className="experience-info">
        <p className="bold">{jobtitle}</p>
        <small>{company}</small>
      </div>
    </div>
  );
}

function PersonalDetails({title,address,name,phNumber, email, file}) {
  return (
    <div className="personalDetails">
      <div className="imgContainer">
        <img src={file} alt="Picture" />
      </div>
      <div className="details">
        <h3 className="heading">Personal Details</h3>
        <p className="bold">Address</p>
        <small>{address}</small>
        <p className="bold">Phone Number</p>
        <small> {phNumber}</small>
        <p className="bold">Email</p>
        <small>{email}</small>
      </div>
    </div>
  );
}
