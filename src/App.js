import Navbar from "./components/NavBar/navbar.js";
import Skills from "./components/Skills/skills.jsx";
import Work from "./components/Portfolio/works.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";
import ResponsiveIntro from "./components/Intro/intro.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ResponsiveIntro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
