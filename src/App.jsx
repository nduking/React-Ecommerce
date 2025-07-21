import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Router>
        <Routes>
          <Navbar />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
