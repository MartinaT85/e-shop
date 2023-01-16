import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../componets/sign-up/Sign-Up";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import SignInForm from "../../componets/sign-in/Sign-In";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import "./authentification.styles.scss";

function Authentification() {
  const { setCurrentUser } = useContext(UserContext);
  async function register(formData) {
    const { displayName, email, password, confirmPassword } = formData;
    console.log("register", displayName, email);
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      console.log("response", user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email is aleready in use");
      }
    }
  }

  async function login(formData) {
    const { email, password } = formData;
    console.log("login", email, password);

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
    } catch (error) {
      console.log(error.code);
    }
  }

  return (
    <div className="auth-container">
      <SignInForm onSubmit={login} />
      <SignUpForm onSubmit={register} />
    </div>
  );
}

export default Authentification;
