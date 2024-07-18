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
          id="name"
          value="Bruce Wayne"
          placeholder="Enter your full name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value="ceo@waynecorp.com"
          placeholder="Enter your email"
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value="(123)456-7890"
          placeholder="Enter your phone number"
        />
        <label htmlFor="gen_location">Location</label>
        <input
          type="text"
          name="gen_location"
          id="gen_location"
          value="Gotham City, US"
          placeholder="City, Country"
        />
      </form>
    </>
  );
}
