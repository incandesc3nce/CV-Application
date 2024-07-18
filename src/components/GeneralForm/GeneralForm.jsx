import "../styles/form.css";

export function GeneralForm() {
  return (
    <>
      <h2>Personal Details</h2>
      <form className="general-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          value="Bruce Wayne"
          placeholder="Enter your full name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value="ceo@waynecorp.com"
          placeholder="Enter your email"
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          value="(123)456-7890"
          placeholder="Enter your phone number"
        />
        <label htmlFor="gen_location">Location</label>
        <input
          type="text"
          value="Gotham City, US"
          placeholder="City, Country"
        />
      </form>
    </>
  );
}
