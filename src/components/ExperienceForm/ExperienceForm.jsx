import "../styles/form.css";

export function ExperienceForm({
  experience,
  setExperience,
  selected,
  setSelected,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".experience-form").classList.add("hidden");
    document.querySelector(".exp_btn").classList.remove("plain-corners");
  };

  const handleChange = (e) => {
    const updatedExperience = { ...selected, [e.target.name]: e.target.value };
    const updatedExperiences = [...experience];
    updatedExperiences[experience.indexOf(selected)] = updatedExperience;
    setExperience(updatedExperiences);
    setSelected(updatedExperience);
  };

  return (
    <form className="experience-form hidden">
      <div className="input-field">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          id="company"
          value={selected ? selected.company : ""}
          onChange={handleChange}
          placeholder="Arasaka Corporation"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="exp_location">
          Location <i>(optional)</i>
        </label>
        <input
          type="text"
          name="location"
          id="exp_location"
          value={selected ? selected.location : ""}
          onChange={handleChange}
          placeholder="USA"
        />
      </div>
      <div className="input-field">
        <label htmlFor="position">Position Title</label>
        <input
          type="text"
          name="position"
          id="position"
          value={selected ? selected.position : ""}
          onChange={handleChange}
          placeholder="Software Engineer"
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
        <label htmlFor="description">
          Description <i>(optional)</i>
        </label>
        <textarea
          name="description"
          id="description"
          value={selected ? selected.description : ""}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
