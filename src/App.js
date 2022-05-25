import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Home from "./pages/Home";
import "./styles/categories.styles.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
