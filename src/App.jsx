import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Registration from "./components/Register/Registration";
import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
