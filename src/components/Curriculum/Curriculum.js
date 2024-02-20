import { useState } from 'react';
import Descriptions from './Descriptions';
import './Curriculum.scss';

function Curriculum({ curriculumSections }) {
    const { experience, education } = curriculumSections;
    const [showExperience, setShowExperience] = useState(false);

    return (
        <section className='Curriculum'>
            <nav className='nav'>
                <button className='btns style2' onClick={() => setShowExperience(false)}>Educación</button>
                <button className='btns style2' onClick={() => setShowExperience(true)}>Experiencia</button>
            </nav>
            {showExperience 
                ? <Descriptions descriptions={experience}/>
                : <Descriptions descriptions={education}/>
            }
        </section>
    )
    
}

export default Curriculum;