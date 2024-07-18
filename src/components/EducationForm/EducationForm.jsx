export function EducationForm() {
  return (
    <form className="education-form">
      <div className='input-field'>
        <label htmlFor="school">School Name</label>
        <input type="text" name="school" placeholder='Wayne College' required/>
      </div>
      <div className='input-field'>
        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" placeholder='Bachelor of Science' required/>
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
        <label htmlFor="country">Location</label>
        <input type="text" name="country" placeholder="USA" required/>
      </div>
      <div className='input-field'>
        <label htmlFor="description">Description</label>
        <textarea name="description" required></textarea>
      </div>
    </form>
  )
}