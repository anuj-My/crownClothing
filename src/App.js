import HomePage from "./routes/home/HomePage";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/Auth";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
