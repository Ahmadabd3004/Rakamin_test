import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HelloWorld from "./Components/HelloWorld";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
