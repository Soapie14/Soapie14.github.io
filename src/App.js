import Navbar from "./components/NavBar/navbar.js";
import Skills from "./components/Skills/skills.jsx";
import Work from "./components/Portfolio/works.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";
import ResponsiveIntro from "./components/Intro/intro.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Test from "./components/Test/Test.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ResponsiveIntro/>
      <Skills/>
      <Work/>
      <Contact/>
      <ContactForm/>
      <Footer/>
      <Test/>
    </div>
  );
}

export default App;
