import { ExperienceForm } from "../ExperienceForm/ExperienceForm";
import { ExperienceOptions } from "./ExperienceOptions";
import "../styles/dropdownMenu.css";

export function ExperienceDropdown({ experience, setExperience }) {
  const toggleOptions = () => {
    const options = document.querySelector(".options-exp");
    const form = document.querySelector(".experience-form");
    options.classList.toggle("hidden");
    form.classList.add("hidden");
    document.querySelector(".exp_btn").classList.toggle("plain-corners");

    if (
      !options.classList.contains("hidden") ||
      !form.classList.contains("hidden")
    ) {
      document.querySelector(".exp_btn").classList.add("plain-corners");
    }
  };

  return (
    <section className="dropdown-menu">
      <button className="exp_btn" onClick={toggleOptions}>
        <h2>Experience</h2>
      </button>
      <div className="dropdown-form">
        <ExperienceOptions
          experiences={experience}
          setExperiences={setExperience}
        />
      </div>
    </section>
  );
}
