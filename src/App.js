import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {
  Routes,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
