import './App.css';
import Curriculum from './components/Curriculum/Curriculum'
import Perfil from './components/Perfil/perfil';
import Portfolio from './components/Portafolio/portafolio';
import { FAKE_DB } from './fakeDB/fakeDB';

const { perfil, curriculumSections,portafolio,footer } = FAKE_DB;

function App() {
  return (
    <div className="App">
      <Perfil perfil={perfil}/>
      <Curriculum curriculumSections={curriculumSections}></Curriculum>
      <Portfolio portafolio={portafolio}/>
    </div>
  );
}

export default App;