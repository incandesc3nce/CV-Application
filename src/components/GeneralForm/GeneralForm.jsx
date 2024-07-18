import "../styles/form.css";

export function GeneralForm({ name, email, phone, location }) {
  return (
    <>
      <h2>Personal Details</h2>
      <form className="general-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name.name}
          onChange={(e) => name.setName(e.target.value)}
          placeholder="Enter your full name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email.email}
          onChange={(e) => email.setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone.phone}
          onChange={(e) => phone.setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
        <label htmlFor="gen_location">Location</label>
        <input
          type="text"
          name="gen_location"
          id="gen_location"
          value={location.location}
          onChange={(e) => location.setLocation(e.target.value)}
          placeholder="City, Country"
        />
      </form>
    </>
  );
}
