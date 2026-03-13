import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeDetails from "./pages/HomeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/:id" element={<HomeDetails />} />
    </Routes>
  );
}

export default App;