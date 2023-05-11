import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Authentification from "./pages/authentification/Authentification";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import "./styles/categories.styles.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
