import img1 from '../img/scrapping.png';
import img2 from '../img/AutomsticDocument.png';
import img3 from '../img/Hacker News.png';
import img4 from '../img/CRUD.png';
import img5 from '../img/CRUD2.png';

export const FAKE_DB = {
    perfil: {
        name: "Jose Manuel Vazquez Rojas",
        profession: "Frontend Developer",
        mobile: "+52 271 263-4022",
        email: "manuel1998angel@outlook.com",
    },
    curriculumSections: {
        education: [
            {
                title: "Ingenieria de Software",
                year: 2019,
                description: "Proporcionar soluciones que involucren la abstracción, análisis, " + 
                "diseño, implementación y prueba de software, asi como la selección de metodologías y herramientas a emplear."
            }
        ],
        experience: [
            {
                title: "Wed Developer",
                year: 2019,
                description: "Como desarrollador web, he trabajado con React, Angular y PostgreSQL,"+
                "lo que me ha brindado una experiencia integral en la creación de aplicaciones web."+
                " Estos frameworks y tecnologías son fundamentales en mi campo y me permiten desarrollar interfaces de usuario dinámicas y escalables,"+
                "así como gestionar eficientemente los datos de mis aplicaciones."+
                " Con mi experiencia en el desarrollo front-end y back-end, puedo crear soluciones web completas y eficaces, desde la presentación hasta el almacenamiento de datos."
            }
        ]
    },
    portafolio: [
        {
            url: img1,
            alt: "scrappi"
        },
        {
            url: img2,
            alt: "Automatic Documents"
        },
        {
            url: img3,
            alt: "Hackers News"
        },
        {
            url: img4,
            alt: "CRUD"
        },
        {
            url: img5,
            alt: "CRUD"
        },

    ],
    footer: {
        info: "👨‍💻 Code with passion 👨‍💻 ",
        email: "manuel1998angel@outlook.com",
        page: "Pagina desarrollada en react ⚛️"
    },
}