import { EducationForm } from "../EducationForm/EducationForm";
import '../styles/dropdownMenu.css';

export function EducationDropdown() {
  const toggleForm = () => {
    document.querySelector(".education-form").classList.toggle("hidden");
  }

  return (
    <section className="dropdown-menu">
      <button onClick={toggleForm}><h2>Education</h2></button>
      <div className="dropdown-form">
        <EducationForm />
      </div>
    </section>
  );
}