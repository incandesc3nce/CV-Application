import { useState } from "react";
import { ExperienceForm } from "../ExperienceForm/ExperienceForm";

export function AddExperience({
  experiences,
  setExperiences,
  selected,
  setSelected,
}) {
  return (
    <li>
      <button
        onClick={() => {
          const newExperience = {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
          };

          setExperiences([...experiences, newExperience]);
          document.querySelector(".experience-form").classList.remove("hidden");
          document.querySelector(".options-exp").classList.add("hidden");
          setSelected(newExperience);
        }}>
        + Add Experience
      </button>
    </li>
  );
}

export function ExperienceOptions({ experiences = [], setExperiences }) {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const handleSelect = (e) => {
    setSelectedExperience(
      experiences.find(
        (experience) => experience.company === e.target.textContent
      )
    );
    document.querySelector(".options-exp").classList.add("hidden");
    document.querySelector(".experience-form").classList.remove("hidden");
  };

  function DeleteExperience({ experience }) {
    const handleDelete = () => {
      setSelectedExperience(null);
      setExperiences(
        experiences.filter((listExperience) => listExperience !== experience)
      );
      document.querySelector(".experience-form").classList.add("hidden");
      document.querySelector(".options-exp").classList.remove("hidden");
    };

    return (
      <>
        <button className="delete-exp" onClick={handleDelete}>
          X
        </button>
      </>
    );
  }

  return (
    <>
      <ul className="options-exp hidden">
        {experiences.map((experience, index) => (
          <li key={index}>
            <button className="select-exp" onClick={handleSelect}>
              {experience.company}
            </button>
            <DeleteExperience experience={experience} />
          </li>
        ))}

        <AddExperience
          experiences={experiences}
          setExperiences={setExperiences}
          selected={selectedExperience}
          setSelected={setSelectedExperience}
        />
      </ul>

      <ExperienceForm
        experience={experiences}
        setExperience={setExperiences}
        selected={selectedExperience}
        setSelected={setSelectedExperience}
      />
    </>
  );
}
