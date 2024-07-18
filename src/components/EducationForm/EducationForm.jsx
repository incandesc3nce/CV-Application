import "../styles/form.css";

export function EducationForm() {
  return (
    <form className="education-form hidden">
      <div className="input-field">
        <label htmlFor="school">School Name</label>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="Wayne College"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Bachelor of Science"
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
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter Location"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" required></textarea>
      </div>
    </form>
  );
}
