export function Education(props) {
  return (
    <li className="degree">
      <div className="degree-date">
        <p>{props.startDate} - {props.endDate}</p>
        <p>{props.location}</p>
      </div>
      <div className="degree-school">
        <h4>{props.school}</h4>
        <p>{props.degree}</p>
      </div>
    </li>
  )
}