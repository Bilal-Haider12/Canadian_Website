import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;