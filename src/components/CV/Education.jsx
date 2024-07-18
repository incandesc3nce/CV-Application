export function Education({
  startDate = "",
  endDate = "",
  location = "",
  degree = "",
  school = "",
}) {
  return (
    <li className="degree">
      <div className="degree-date">
        <p>
          {startDate} - {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div className="degree-school">
        <h4>{school}</h4>
        <p>{degree}</p>
      </div>
    </li>
  );
}
