import "./GeneralForm.css";

export function GeneralForm() {
  return (
    <form className="general-form">
      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" value="Bruce Wayne" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" value="ceo@waynecorp.com" />
      <label htmlFor="phone">Phone</label>
      <input type="text" value="(123)456-7890" />
    </form>
  );
}
