import About from "./components/About";
import Beaches from "./components/Beaches";
import Hero from "./components/hero";
import Islands from "./components/Island";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="island" className="min-h-screen">
        <Islands />
      </section>
      <section id="beaches" className="min-h-screen">
        <Beaches />
      </section>
      <section id="blog" className="min-h-screen">
        <Blog />
      </section>
      <Footer />
    </>
  );
}

export default App;
