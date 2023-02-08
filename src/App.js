import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
