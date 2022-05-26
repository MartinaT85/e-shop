import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import SignIn from "./componets/navbar/SignIn";
import Home from "./pages/Home";
import "./styles/categories.styles.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
