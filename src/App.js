import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HelloWorld from "./Components/HelloWorld";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
