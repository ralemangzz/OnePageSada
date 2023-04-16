import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div className='App '>
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />

   </div>
  );
}

export default App;
