import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import DummyFormInput from "./components/DummyFormInput.jsx";
export default function App() {
  return (
    <div className="bg-zinc-200">
      <Navbar />
      <Hero />
      <DummyFormInput />
      <Footer />
    </div>
  );
}
