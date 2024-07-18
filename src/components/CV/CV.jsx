import "../styles/cv.css";

export function CV(props) {
  return (
    <section className="cv-container">
      <header>
        <h2>{props.name}</h2>
        <div className="info">
          <p className="email-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>{" "}
            {props.email}
          </p>
          <p className="phone-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>phone-classic</title>
              <path d="M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z" />
            </svg>{" "}
            {props.phone}
          </p>
          <p className="location-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>map-marker</title>
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>{" "}
            {props.location}
          </p>
        </div>
      </header>
      <main>
        <div className="edu-info">
          <div className="heading">
            <h3>Education</h3>
          </div>
          <div className="edu">

          </div>
        </div>
        <div className="exp-info">
          <div className="heading">
            <h3>Professional Experience</h3>
          </div>
          <div className="exp">

          </div>
        </div>
      </main>
    </section>
  );
}
