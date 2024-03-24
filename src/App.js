import './App.css';
import Curriculum from './components/Curriculum/Curriculum'
import Footer from './components/Footer/footer';
import Perfil from './components/Perfil/perfil';
import Portfolio from './components/Portafolio/portafolio';
import { FAKE_DB } from './fakeDB/fakeDB';
import Aptitudes from './components/Aptitudes/Aptitudes';

const { perfil, curriculumSections,portafolio,footer } = FAKE_DB;

function App() {
  return (
    <div className="App">
      <Perfil perfil={perfil}/>
      <Curriculum curriculumSections={curriculumSections}></Curriculum>
      <Portfolio portafolio={portafolio}/>
      <Aptitudes/>
      <Footer footer={footer}></Footer>
    </div>
  );
}

export default App;