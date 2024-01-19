/* eslint-disable jsx-a11y/anchor-is-valid */
import './perfil.scss';
import Developer from '../../img/Developer.jpeg'

function Perfil({ perfil }) {
    return (
        <section className="Hero">
            <div className='Hero__info'>
                <h1 className="Hero__title" >{perfil.name}
                    <br></br>
                    <span>Ingeniero de Software</span>
                </h1>
                <h2>{perfil.profession}</h2>
                <ul>
                    <li>
                        <span className='Hero_icon'>📱</span>
                        <a href={`tel:${perfil.mobile}`} className='Hero__link'>{perfil.mobile}</a>
                    </li>
                    <li>
                        <span className='Hero_icon'>📧</span>
                        <a href={`mailto:${perfil.email}`} className='Hero__link'>{perfil.email}</a>
                    </li>
                </ul>
            </div>
            <div className='Hero__image'>
                <img src={Developer} alt='Men Developer' />
            </div>
        </section>
    )
}

export default Perfil;