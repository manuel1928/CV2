import './footer.scss';

function Footer({ footer }) {
    return (
        <div className='Footer'>
            <section>
                <h4>{footer.info}</h4>
                <h4>{footer.email}</h4>
                <h4>{footer.page}</h4>
            </section>
        </div>
    )
    
}

export default Footer;