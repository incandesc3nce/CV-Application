import { EducationForm } from "../EducationForm/EducationForm";
import '../styles/dropdownMenu.css';

export function EducationDropdown() {
  const toggleForm = () => {
    document.querySelector(".education-form").classList.toggle("hidden");
  }

  return (
    <section className="dropdown-menu">
      <button onClick={toggleForm}>Education</button>
      <div className="dropdown-form">
        <EducationForm />
      </div>
    </section>
  );
}