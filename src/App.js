import Navbar from "./components/NavBar/navbar.js";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.jsx";
import Work from "./components/Portfolio/works.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
