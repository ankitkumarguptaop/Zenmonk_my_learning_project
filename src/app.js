import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import Signin from "./pages/signin/signin.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
