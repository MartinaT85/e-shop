import {FormEvent} from 'react'
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./signUp.styles.scss";

export interface SignUpFormProps {
  onSubmit: (values: {
    email: string;
    password: string;
  }) => void;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string
    const email = formData.get('email') as string
    console.log(email, password)

    onSubmit({
      email: email,
      password: password,
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
          required
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
        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
