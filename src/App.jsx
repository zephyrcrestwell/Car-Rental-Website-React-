import Banner from "./components/banner";
import Choose from "./components/choose";
import Download from "./components/download";
import Features from "./components/features";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Nav from "./components/Nav";
import Testimonials from "./components/testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Models from "./pages/Models";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models/>} />
        </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App; 
