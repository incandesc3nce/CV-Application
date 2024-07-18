import '../styles/form.css';

export function ExperienceForm() {
  return (
    <form className="experience-form hidden">
      <div className="input-field">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Arasaka Corporation"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="exp_location">Location</label>
        <input type="text" name="location" id="exp_location" placeholder="USA" required />
      </div>
      <div className="input-field">
        <label htmlFor="position">Position Title</label>
        <input
          type="text"
          name="position"
          id="position"
          placeholder="Software Engineer"
          required
        />
      </div>
      <div className="date-form">
        <div className="date-input">
          <label htmlFor="startDate">Start Date</label>
          <input type="text" name="startDate" id="startDate" required />
        </div>
        <div className="date-input">
          <label htmlFor="endDate">End Date</label>
          <input type="text" name="endDate" id="endDate" required />
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="description">
          Description <i>(optional)</i>
        </label>
        <textarea name="description" id="description" />
      </div>
    </form>
  );
}
