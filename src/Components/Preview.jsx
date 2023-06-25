import React from "react";
import "../styles/Preview.scss";
const Preview = ({ edus, exps }) => {
  return (
    <div className="preview">
      <Header></Header>
      <section>
        <Main edus={edus} exps={exps}></Main>
        <PersonalDetails></PersonalDetails>
      </section>
    </div>
  );
};

export default Preview;

function Header() {
  return (
    <header>
      <h1>Jone Sky Hoverer</h1>
      <h2>Sky Flyer Developer</h2>
    </header>
  );
}
function Main({ edus, exps }) {
  return (
    <div className="main">
      <div className="description">
        <h3 className="heading">Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad
          veniam earum quos aliquam consectetur repellendus, velit dicta optio
          beatae illum maxime asperiores deserunt reiciendis eaque assumenda,
          corrupti vero numquam molestias voluptatibus! Numquam dignissimos,
          dicta repellat nobis eum quis earum saepe, minus ex quisquam, suscipit
          illo officiis corporis nam dolor!
        </p>
      </div>
      <Experiences exps={exps}></Experiences>
      <Education edus={edus}></Education>
    </div>
  );
}
function Education({edus}) {
  return (
    <div className="experiences">
      <h3 className="heading">Education</h3>
      {edus && edus.map(edu=>{
        return <Edu key={edu.id} {...edu}></Edu>
      })}
      
    </div>
  );
}
function Edu({timeline,schoolName,degree,subject}){
  return (<div className="experience">
        <p className="timeLine">{timeline}</p>
        <div className="experience-info">
          <p className="bold">{schoolName}</p>
          <p>Degree: {degree}</p>
          <p>Subject : {subject}</p>
        </div>
      </div>)
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


function PersonalDetails() {
  return (
    <div className="personalDetails">
      <div className="imgContainer">
        <img src="angle.jpg" alt="" />
      </div>
      <div className="details">
        <h3 className="heading">Personal Details</h3>
        <p className="bold">Address</p>
        <small>Example Street 10</small>
        <p className="bold">Phone NUmber</p>
        <small>09345345738459</small>
        <p className="bold">Email</p>
        <small>asdf;h@gmial.com</small>
      </div>
    </div>
  );
}
