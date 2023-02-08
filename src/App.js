import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
