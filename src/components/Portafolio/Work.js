import './Work.scss'

function Work({ work }) {
    return(
        <article className='Work'>
            <img alt={work.alt} src={work.url}/>
        </article>
    )
    
}

export default Work;