import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./signUp.styles.scss";

const SignUpForm = ({ onSubmit }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = e.target.elements;

    onSubmit({
      displayName: displayName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          forLabel="displayName"
          type="text"
          required="required"
          id="displayName"
          name="displayName"
          placeholder="DisplayName"
        />

        <FormInput
          label="Email"
          forLabel="email"
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
        />

        <FormInput
          label="Pasword"
          forLabel="password"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
        />

        <FormInput
          label="Confirm Password"
          forLabel="confirmPassword"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="ConfirmPassword"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
