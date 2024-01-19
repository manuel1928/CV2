import { useState } from 'react';
import Descriptions from './Descriptions';
import './Curriculum.scss';

function Curriculum({ curriculumSections }) {
    const { experience, education } = curriculumSections;
    const [showExperience, setShowExperience] = useState(false);

    return (
        <section className='Curriculum'>
            <nav>
                <button onClick={() => setShowExperience(false)}>Eduacación</button>
                <button onClick={() => setShowExperience(true)}>Experiencia</button>
            </nav>
            {showExperience 
                ? <Descriptions descriptions={experience}/>
                : <Descriptions descriptions={education}/>
            }
        </section>
    )
    
}

export default Curriculum;