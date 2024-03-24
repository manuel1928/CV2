/* eslint-disable react/style-prop-object */
import "./Aptitudes.scss"

function Aptitudes() {

    return (
        <section class="about skills">
                <h2 class="title2">Habilidades Profesionales</h2>
                <h5>Lenguajes de programación</h5>
                <div class="box">
                    <h4>Java</h4>
                    <div class="percent">
                        <div style={{width:"65%"}}></div>
                    </div>
                </div>
                <div class="box">
                    <h4>Python</h4>
                    <div class="percent">
                        <div style={{width:"25%"}}></div>
                    </div>
                </div>
                <div class="box">
                    <h4>JavaScript</h4>
                    <div class="percent">
                        <div style={{width:"45%"}}></div>
                    </div>
                </div>
                <h5>Gestores de base de datos</h5>
                <div class="box">
                    <h4>PostgreSQL</h4>
                    <div class="percent">
                        <div style={{width:"70%"}}></div>
                    </div>
                </div>
                <div class="box">
                    <h4>MySQL</h4>
                    <div class="percent">
                        <div style={{width:"10%"}}></div>
                    </div>
                </div>
                <div class="box">
                    <h4>MongoDB</h4>
                    <div class="percent">
                        <div style={{width:"5%"}}></div>
                    </div>
                </div>
                <h5>Frameworks</h5>
                <div class="box">
                    <h4>React</h4>
                    <div class="percent">
                        <div style={{width:"60%"}}></div>
                    </div>
                </div>
                <div class="box">
                    <h4>Angular</h4>
                    <div class="percent">
                        <div style={{width:"40%"}}></div>
                    </div>
                </div>
                <div class="box">
                    <h4>next</h4>
                    <div class="percent">
                        <div style={{width:"30%"}}></div>
                    </div>
                </div>
            </section>
    )
    
}

export default Aptitudes;