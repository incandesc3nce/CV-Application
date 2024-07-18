import { ExperienceForm } from "../ExperienceForm/ExperienceForm";
import '../styles/dropdownMenu.css';

export function ExperienceDropdown() {
  const toggleForm = () => {
    document.querySelector(".experience-form").classList.toggle("hidden");
    document.querySelector('.exp_btn').classList.toggle('plain-corners');
  }

  return (
    <section className="dropdown-menu">
      <button className="exp_btn" onClick={toggleForm}><h2>Experience</h2></button>
      <div className="dropdown-form">
        <ExperienceForm />
      </div>
    </section>
  );
}