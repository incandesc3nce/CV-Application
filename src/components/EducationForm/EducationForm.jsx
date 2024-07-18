import "../styles/form.css";

export function EducationForm({ education, setEducation, selected }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".education-form").classList.add("hidden");
    document.querySelector('.edu_btn').classList.remove('plain-corners');
  };

  const handleChange = (e) => {
    const updatedEducation = { ...selected, [e.target.name]: e.target.value };
    const updatedEducations = [...education];
    updatedEducations[education.indexOf(selected)] = updatedEducation;
    setEducation(updatedEducations);
  };

  return (
    <form className="education-form hidden">
      <div className="input-field">
        <label htmlFor="school">School Name</label>
        <input
          type="text"
          name="school"
          id="school"
          value={selected ? selected.school : ""}
          onChange={handleChange}
          placeholder="MIT"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={selected ? selected.degree : ""}
          onChange={handleChange}
          placeholder="Bachelor of Science"
          required
        />
      </div>
      <div className="date-form">
        <div className="date-input">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            name="startDate"
            id="startDate"
            value={selected ? selected.startDate : ""}
            onChange={handleChange}
            placeholder="mm/yyyy"
            required
          />
        </div>
        <div className="date-input">
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            name="endDate"
            id="endDate"
            value={selected ? selected.endDate : ""}
            onChange={handleChange}
            placeholder="mm/yyyy"
            required
          />
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={selected ? selected.location : ""}
          onChange={handleChange}
          placeholder="Enter Location"
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
