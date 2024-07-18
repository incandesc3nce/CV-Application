import { EducationForm } from "../EducationForm/EducationForm";
import { AddEducation, EducationOptions } from "./EducationOptions";
import "../styles/dropdownMenu.css";

export function EducationDropdown({ educations, setEducations }) {
  const toggleOptions = () => {
    const form = document.querySelector(".education-form");
    if (form.classList.contains("hidden")) {
      document.querySelector(".options").classList.remove("hidden");
    } else {
      document.querySelector(".options").classList.add("hidden");
    }
    document.querySelector(".education-form").classList.add("hidden");
    document.querySelector(".edu_btn").classList.toggle("plain-corners");
  };

  return (
    <section className="dropdown-menu">
      <button className="edu_btn" onClick={toggleOptions}>
        <h2>Education</h2>
      </button>
      <div className="dropdown-form">
        <EducationOptions
          educations={educations}
          setEducations={setEducations}
        />
        
      </div>
    </section>
  );
}
