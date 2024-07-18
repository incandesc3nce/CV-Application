import { useState } from "react";
import "./App.css";
import { GeneralForm } from "./components/GeneralForm/GeneralForm";
import { EducationDropdown } from "./components/DropdownMenu/EducationDropdown";
import { ExperienceDropdown } from "./components/DropdownMenu/ExperienceDropdown";
import { CV } from "./components/CV/CV";

function App() {
  const [name, setName] = useState('Bruce Wayne');
  const [email, setEmail] = useState('ceo@waynecorp.com');
  const [phone, setPhone] = useState('(123)456-7890');
  const [location, setLocation] = useState('Gotham City, US');
  const [experience, setExperience] = useState([]);

  return (
    <>
    <div className="forms-wrapper">
      <section className="general-form">
        <GeneralForm name={{name, setName}} email={{email, setEmail}} phone={{phone, setPhone}} location={{location, setLocation}}/>
      </section>
      <EducationDropdown />
      <ExperienceDropdown />
    </div>
    <div className="cv-wrapper">
      <CV name={name} email={email} phone={phone} location={location} experience={experience}/>
    </div>
    </>
  );
}

export default App;
