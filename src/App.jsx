import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portofolio">
        <Portofolio />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
