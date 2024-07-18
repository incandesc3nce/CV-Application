import { ExperienceForm } from "../ExperienceForm/ExperienceForm";

export function ExperienceDropdown() {
  const toggleForm = () => {
    document.querySelector(".experience-form").classList.toggle("hidden");
  }

  return (
    <section className="dropdown-menu">
      <button onClick={toggleForm}>Experience</button>
      <div className="dropdown-form">
        <ExperienceForm />
      </div>
    </section>
  );
}