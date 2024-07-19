import { useState } from "react";
import { EducationForm } from "../EducationForm/EducationForm";

export function AddEducation({
  educations,
  setEducations,
  selected,
  setSelected,
}) {
  return (
    <li>
      <button
        onClick={() => {
          const newEducation = {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
          };

          setEducations([...educations, newEducation]);
          document.querySelector(".education-form").classList.remove("hidden");
          document.querySelector(".options").classList.add("hidden");
          setSelected(newEducation);
        }}>
        + Add Education
      </button>
    </li>
  );
}

export function EducationOptions({ educations = [], setEducations }) {
  const [selectedEducation, setSelectedEducation] = useState(educations[0]);
  const handleSelect = (e) => {
    setSelectedEducation(
      educations.find((education) => education.school === e.target.textContent)
    );
    document.querySelector(".options").classList.add("hidden");
    document.querySelector(".education-form").classList.remove("hidden");
  };

  function DeleteEducation({ education = "" }) {
    const handleDelete = () => {
      setSelectedEducation(null);
      setEducations(
        educations.filter((listEducation) => listEducation !== education)
      );
      document.querySelector(".education-form").classList.add("hidden");
      document.querySelector(".options").classList.remove("hidden");
    };

    return (
      <>
        <button onClick={handleDelete}>X</button>
      </>
    );
  }

  return (
    <>
      <ul className="options hidden">
        {educations.map((education, index) => (
          <li key={index}>
            <button onClick={handleSelect}>{education.school}</button>
            <DeleteEducation education={education} />
          </li>
        ))}
        <AddEducation
          educations={educations}
          setEducations={setEducations}
          selected={selectedEducation}
          setSelected={setSelectedEducation}
        />
      </ul>
      <EducationForm
        education={educations}
        setEducation={setEducations}
        selected={selectedEducation}
        setSelected={setSelectedEducation}
      />
    </>
  );
}
