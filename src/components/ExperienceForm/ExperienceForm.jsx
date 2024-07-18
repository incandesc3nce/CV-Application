import './ExperienceForm.css';

export function ExperienceForm() {
  return (
    <form className="experience-form">
      <div className='input-field'>
        <label htmlFor="company">Company Name</label>
        <input type="text" name="company" />
      </div>
      <div className='input-field'>
        <label htmlFor="position">Position Title</label>
        <input type="text" name="position" />
      </div>
      <div className='date-form'>
        <div className='date-input'>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" />
        </div>
        <div className='date-input'>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" />
        </div>
      </div>
      <div className='input-field'>
        <label htmlFor="description">Description</label>
        <textarea name="description" />
      </div>
    </form>
  );
}