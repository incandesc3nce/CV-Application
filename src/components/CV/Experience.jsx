export function Experience(props) {
  return (
    <li className="job">
      <div className="job-info">
        <div className="job-date">
          <p>{props.startDate} - {props.endDate}</p>
          <p>{props.location}</p>
        </div>
        <div className="job-position">
          <div>
            <h4>{props.position}</h4>
            <p>{props.company}</p>
          </div>
          <p className="job-description">{props.description}</p>
        </div>
      </div>
    </li>
  )
}