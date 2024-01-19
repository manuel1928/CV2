import Work from './Work';
import './portafolio.scss';

function Portfolio({ portafolio }) {
    return (
        <section className='Portafolio'>
            <h2 className='Portafolio_title'>Portafolio</h2>
            <div className='Portafolio__wrap'>
                {portafolio.map((work,index)=> <Work key={work.alt + index} work={work}/>)}
            </div>
        </section>
    )
}


export default Portfolio;