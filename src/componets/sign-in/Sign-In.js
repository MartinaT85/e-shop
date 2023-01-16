import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./signIn.styles.scss";

const SignInForm = ({ onSubmit }) => {
  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;

    onSubmit({
      email: email.value,
      password: password.value,
    });
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
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
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
