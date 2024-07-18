import { useState } from "react";
import { GeneralForm } from "./components/GeneralForm/GeneralForm";
import { EducationDropdown } from "./components/DropdownMenu/EducationDropdown";
import { ExperienceDropdown } from "./components/DropdownMenu/ExperienceDropdown";
import { CV } from "./components/CV/CV";

function App() {
  const [name, setName] = useState("Bruce Wayne");
  const [email, setEmail] = useState("ceo@waynecorp.com");
  const [phone, setPhone] = useState("(123)456-7890");
  const [location, setLocation] = useState("Gotham City, US");

  const [education, setEducation] = useState([
    {
      school: "MIT",
      degree: "Bachelor of Computer Science",
      startDate: "09/2016",
      endDate: "05/2020",
      location: "Cambridge, MA",
    },
    {
      school: "Harvard",
      degree: "Master of Computer Science",
      startDate: "09/2020",
      endDate: "05/2022",
      location: "Cambridge, MA",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "Amazon",
      position: "Senior Vice President of Engineering",
      startDate: "09/2022",
      endDate: "05/2023",
      location: "Cambridge, MA",
      description:
        "As the Senior Vice President of Engineering at Amazon, I have led the development of innovative products and services that have revolutionized the retail industry. I have been instrumental in shaping Amazon's engineering culture and promoting a collaborative and innovative work environment. Under my leadership, Amazon has continued to expand its market share and become a household name in the technology industry.",
    },
    {
      company: "Wayne Enterprises",
      position: "CEO",
      startDate: "09/2000",
      endDate: "05/2016",
      location: "Gotham City, US",
      description:
        "As the CEO of Wayne Enterprises, I have been leading the development and success of the company, guiding the team towards innovation and growth. My leadership has been instrumental in expanding the company's portfolio into various industries, from technology to finance. Under my guidance, Wayne Enterprises has become a household name and a symbol of success in Gotham City.",
    },
  ]);

  return (
    <>
      <div className="forms-wrapper">
        <section className="general-form">
          <GeneralForm
            name={{ name, setName }}
            email={{ email, setEmail }}
            phone={{ phone, setPhone }}
            location={{ location, setLocation }}
          />
        </section>
        <EducationDropdown
          educations={education}
          setEducations={setEducation}
        />
        <ExperienceDropdown />
      </div>
      <div className="cv-wrapper">
        <CV
          name={name}
          email={email}
          phone={phone}
          location={location}
          education={education}
          experience={experience}
        />
      </div>
    </>
  );
}

export default App;
