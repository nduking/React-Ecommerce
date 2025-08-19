import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Catelogpage from "./Pages/Catelogpage";
import Productpage from "./Pages/Productpage";
const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth font-poppins">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catelogs" element={<Catelogpage />} />
          <Route path="/product-page" element={<Productpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
