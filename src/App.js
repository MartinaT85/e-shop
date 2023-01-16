import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Authentification from "./pages/authentification/Authentification";
import Home from "./pages/Home";
import "./styles/categories.styles.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentification />} />
      </Route>
    </Routes>
  );
};

export default App;
