import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Catelogpage from "./Pages/Catelogpage";
import Reviewpage from "./Pages/Reviewpage";
import Productpage from "./Pages/productpage";
import SignupPage from "./Pages/SignupPage";
const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth font-poppins">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catelogs" element={<Catelogpage />} />
          <Route path="/product-page" element={<Productpage />} />
          <Route path="/review-page" element={<Reviewpage />} />
          <Route path="/signup-page" element={<SignupPage/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
