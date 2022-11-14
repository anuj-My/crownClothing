import HomePage from "./routes/home/HomePage";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
