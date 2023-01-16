import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../sign-up/Sign-Up";
import { createAuthUserWithEmailAndPAssword } from "../../utils/firebase/firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);
    // console.log(userRef);
  };

  async function login(formData) {
    const { displayName, email, password, confirmPassword } = formData;
    console.log("login", displayName, email);
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPAssword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      console.log("response", user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email is aleready in use");
      }
    }
  }

  return (
    <div>
      <h1>Sign up Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm onSubmit={login} />
    </div>
  );
}

export default SignIn;
