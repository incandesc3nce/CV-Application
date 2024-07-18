export function Experience({
  startDate = "",
  endDate = "",
  location = "",
  position = "",
  company = "",
  description = "",
}) {
  return (
    <li className="job">
      <div className="job-info">
        <div className="job-date">
          <p>
            {startDate} - {endDate}
          </p>
          <p>{location}</p>
        </div>
        <div className="job-position">
          <div>
            <h4>{position}</h4>
            <p>{company}</p>
          </div>
          <p className="job-description">{description}</p>
        </div>
      </div>
    </li>
  );
}
