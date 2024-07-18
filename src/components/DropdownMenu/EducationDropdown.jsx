import { EducationForm } from "../EducationForm/EducationForm";
import '../styles/dropdownMenu.css';

export function EducationDropdown() {
  const toggleForm = () => {
    document.querySelector(".education-form").classList.toggle("hidden");
    document.querySelector('.edu_btn').classList.toggle('plain-corners');
  }

  return (
    <section className="dropdown-menu">
      <button className="edu_btn" onClick={toggleForm}><h2>Education</h2></button>
      <div className="dropdown-form">
        <EducationForm />
      </div>
    </section>
  );
}