import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import {Propos} from "./components/Propos";
import { Skills } from "./components/Skills";
import { Experiences } from './components/Experiences';
import { Formations } from './components/Formation';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Propos />
      <Skills />
      <Experiences/>
      <Formations />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
