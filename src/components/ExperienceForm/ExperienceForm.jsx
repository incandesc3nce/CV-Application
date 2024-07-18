import './ExperienceForm.css';

export function ExperienceForm() {
  return (
    <form className="experience-form">
      <div className='input-field'>
        <label htmlFor="company">Company Name</label>
        <input type="text" name="company" placeholder='Arasaka Corporation' required/>
      </div>
      <div className='input-field'>
        <label htmlFor="position">Position Title</label>
        <input type="text" name="position" placeholder='Software Engineer' required/>
      </div>
      <div className='date-form'>
        <div className='date-input'>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" required/>
        </div>
        <div className='date-input'>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" required/>
        </div>
      </div>
      <div className='input-field'>
        <label htmlFor="description">Description <i>(optional)</i></label>
        <textarea name="description" />
      </div>
    </form>
  );
}