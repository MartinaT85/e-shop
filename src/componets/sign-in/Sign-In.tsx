 
import { FormEvent } from "react";
 import {
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./signIn.styles.scss";



export interface SignInFormProps {
  onSubmit: (values: {
    email: string;
    password: string;
  }) => void;
}



const SignInForm  = ({ onSubmit }: SignInFormProps) => {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
