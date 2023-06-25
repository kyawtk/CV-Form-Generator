import React, { useEffect, useState } from "react";
import "../styles/UserInput.scss";
import PersonalDetail from "./PersonalDetail";
const UserInput = ({ getExps, getEdus , handleChange }) => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  // Trigger the callback functions with updated experiences and educations whenever they change
  useEffect(() => {
    getEdus(educations);
    getExps(experiences);
  }, [experiences, educations]);

  // Handle adding a new experience
  function handleExperiences(newExp) {
    setExperiences((currentArr) => [...currentArr, newExp]);
  }

  // Handle adding a new education
  function handleEducations(newEdu) {
    setEducations((currentArr) => [...currentArr, newEdu]);
  }

  // Handle deleting an experience by its ID
  function deleteExp(id) {
    setExperiences((exps) => exps.filter((exp) => exp.id !== id));
  }

  // Handle deleting an education by its ID
  function deleteEdu(id) {
    setEducations((edus) => edus.filter((edu) => edu.id !== id));
  }

  return (
    <div className="userInput">
      <PersonalDetail handleChange={handleChange}></PersonalDetail>
      <AddExperience handleExperiences={handleExperiences} />
      <div className="cards">
      {experiences.map((exp) => (
        <Experience key={exp.id} {...exp} deleteExp={deleteExp} />
      ))}</div>
      <AddEducation handleEducations={handleEducations} />
      <div className="cards">
      {educations.map((edu) => (
        <Education key={edu.id} {...edu} deleteEdu={deleteEdu} />
      ))}</div>
    </div>
  );
};

export default UserInput;

function Experience({ id, timeline, jobtitle, company, deleteExp }) {
  return (
    <div className=" card experience">
      <p>TimeLine: {timeline}</p>
      <p>Title: {jobtitle}</p>
      <p>Company: {company}</p>
      <p>ID: {id}</p>
      <button onClick={() => deleteExp(id)} className='btn delete'>Delete</button>
    </div>
  );
}

function Education({ id, timeline, schoolName, degree, subject, deleteEdu }) {
  return (
    <div className=" card education">
      <p>TimeLine: {timeline}</p>
      <p>School Name: {schoolName}</p>
      <p>Degree: {degree}</p>
      <p>Subject: {subject}</p>
      <p>ID: {id}</p>
      <button onClick={() => deleteEdu(id)} className="btn delete">Delete</button>
    </div>
  );
}

function AddExperience({ handleExperiences }) {
  const [experience, setExperience] = useState({});

  // Handle form submission for adding a new experience
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
      {/* Job Title input */}
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
      {/* Timeline input */}
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
      {/* Company input */}
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
      {/* Submit button */}
      <input type="submit" value="Add" />
    </form>
  );
}

function AddEducation({ handleEducations }) {
  const [education, setEducation] = useState({});

  // Handle form submission for adding a new education
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
      {/* Timeline input */}
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
      {/* School Name input */}
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
      {/* Degree input */}
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
      {/* Subject input */}
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
      {/* Submit button */}
      <input type="submit" value="Add" />
    </form>
  );
}
