import { useEffect, useState } from "react";
import "../styles/UserInput.scss";

const UserInput = ({getExps, getEdus}) => {
  let [experiences, setExperiences] = useState([]);
  let [educations, setEducations] = useState([]);

  function handleExperiences(newExp) {
    setExperiences((currentArr) => {
      return [...currentArr, newExp];
    });
  }
useEffect(()=>{
    getEdus(educations),
    getExps(experiences)
},[experiences,educations])
  function handleEducations(newEdu) {
    setEducations((currentArr) => {
      return [...currentArr, newEdu];
    });
  }

  function deleteExp(id) {
    setExperiences((exps) => {
      return exps.filter((exp) => exp.id !== id);
    });
  }

  function deleteEdu(id) {
    setEducations((edus) => {
      return edus.filter((edu) => edu.id !== id);
    });
  }

  return (
    <div className="userInput">
      <AddExperience handleExperiences={handleExperiences} />
      {experiences &&
        experiences.map((exp) => {
          return <Experience key={exp.id} {...exp} deleteExp={deleteExp} />;
        })}
      <AddEducation handleEducations={handleEducations} />
      {educations &&
        educations.map((edu) => {
          return <Education key={edu.id} {...edu} deleteEdu={deleteEdu} />;
        })}
    </div>
  );
};

export default UserInput;

function Experience({ id, timeline, jobtitle, company, deleteExp }) {
  return (
    <div className="experience">
      <p>TimeLine: {timeline}</p>
      <p>title: {jobtitle}</p>
      <p>company: {company}</p>
      <p>id: {id}</p>
      <button onClick={() => deleteExp(id)}>Delete</button>
    </div>
  );
}

function Education({ id, timeline, schoolName, degree, subject, deleteEdu }) {
  return (
    <div className="education">
      <p>TimeLine: {timeline}</p>
      <p>School Name: {schoolName}</p>
      <p>Degree: {degree}</p>
      <p>Subject: {subject}</p>
      <p>id: {id}</p>
      <button onClick={() => deleteEdu(id)}>Delete</button>
    </div>
  );
}

function AddExperience({ handleExperiences }) {
  let [experience, setExperience] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const formValues = {
      jobtitle: e.target.elements.jobtitle.value,
      timeline: e.target.elements.timeline.value,
      company: e.target.elements.company.value,
      id: crypto.randomUUID(),
    };

    handleExperiences(formValues);
    e.target.reset();
  }

  return (
    <form action="#" className="myForm" onSubmit={handleSubmit}>
        <legend>Add your Job Experiences</legend>
      <label htmlFor="jobtitle">
        Job Title
        <input
          maxLength={20}
          type="text"
          required
          placeholder="Web developer"
          id="jobtitle"
        />
      </label>
      <label htmlFor="timeline">
        Timeline
        <input
          maxLength={20}
          type="text"
          required
          placeholder="1990 - Present"
          id="timeline"
        />
      </label>
      <label htmlFor="company">
        Company
        <input
          maxLength={20}
          type="text"
          required
          placeholder="Facebook.Inc"
          id="company"
        />
      </label>
      <input type="submit" value={"Add"} />
    </form>
  );
}

function AddEducation({ handleEducations }) {
  let [education, setEducation] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const formValues = {
      timeline: e.target.elements.timeline.value,
      schoolName: e.target.elements.schoolName.value,
      degree: e.target.elements.degree.value,
      subject: e.target.elements.subject.value,
      id: crypto.randomUUID(),
    };

    handleEducations(formValues);
    e.target.reset();
  }

  return (
    <form action="#" className="myForm" onSubmit={handleSubmit}>
        <legend>Add your Educations</legend>
      <label htmlFor="timeline">
        Timeline
        <input
          maxLength={20}
          type="text"
          required
          placeholder="1990 - Present"
          id="timeline"
        />
      </label>
      <label htmlFor="schoolName">
        School Name
        <input
          maxLength={20}
          type="text"
          required
          placeholder="ABC University"
          id="schoolName"
        />
      </label>
      <label htmlFor="degree">
        Degree
        <input
          maxLength={20}
          type="text"
          required
          placeholder="Bachelor's Degree"
          id="degree"
        />
      </label>
      <label htmlFor="subject">
        Subject
        <input
          maxLength={20}
          type="text"
          required
          placeholder="Computer Science"
          id="subject"
        />
      </label>
      <input type="submit" value={"Add"} />
    </form>
  );
}
