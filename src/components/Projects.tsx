import { useTranslation } from "react-i18next";
import { ExternalLinkIcon, GitHubIcon } from "../helper/Icons";

// Icons

interface Iproject {
  name: string;
  description: string;
  image: string;
  tecnologies: string[];
  githubPath?: string;
  livePath?: string;
  demo?: boolean
}

export default function Projects() {

  const { t } = useTranslation();

  // ALL PROJECTS

  const projects: Iproject[] = [

    {
      name: "LastFinance", description: "Proyecto hecho con React + typescript para mejorar las habilidades del frontend",
      image: "project1",
      githubPath: "https://github.com/Aneudypq2004/LastFinance",
      livePath: "https://lastfinance.netlify.app",
      tecnologies: ["React + Typescript", "Tailwind css", "Cripto Compare Api", "ChartJs"]
    },

    {
      name: "Rest API – Sistema de agenda de citas medicas",
       description: "El proyecto fue realizado con .NET 6 , aplicando buenas prácticas respetando los principios solid, utilicé la arquitectura clean para dividir la aplicación por responsabilidad. Y algunos patrones de diseño que facilitan la escalabilidad de la aplicación como el patrón CQRS.   ",
      image: "project3",
      githubPath: "https://github.com/Aneudypq2004/Rest-API-Sistema-de-agenda-de-citas-medicas",
      demo: false,
      tecnologies: ["ASP NET CORE", "Entity Framework", "Arquitectura Clean", "Patrón Mediator",]
    },

    {
      name: "RentMovies", description: "Proyecto para alquilar películas , similar a amazon, se utiliza una api externa para los datos de las películas",
      image: "project2",
      demo: false,
      githubPath: "https://github.com/Aneudypq2004/RentMovies",
      tecnologies: ["React", "TailwindCSS", "Material UI", "Typescript",]
    },

    {
      name: "WebApis Company", description: "Api para manejar los empleados de la compañia",
      image: "project4",
      demo: false,
      githubPath: "https://github.com/Aneudypq2004/OnionWebApi",
      tecnologies: ["ASP NET CORE", "Entity Framework", "Onion arquitecture", "Sql server",]
    }
  ]

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4">

      {projects.map((project: Iproject) => (
        <figure key={project.name} className="bg-black group overflow-hidden  relative rounded-lg">

          <img src={`/${project.image}.png`} alt="" />

          {/* Card Content  */}

          <div className="bg-second absolute bottom-0 rounded-lg p-2 h-5/6 
             w-full translate-y-full  group-hover:translate-y-0 transition-all duration-300 ease-linear">

            {/* Github Path  */}

            <div className="flex gap-2 absolute right-4 z-50">

              <a target="_blank" href={project.githubPath}>
                <GitHubIcon />
              </a>

              {project.demo ?? (
                <a target="_blank" href={project.livePath}>
                  <ExternalLinkIcon />
                </a>
              )}


            </div>

            <figcaption className="text-center text-2xl my-4 text-blue ">{project.name}</figcaption>

            <p className="text-gray-300 text-justify">{project.description}</p>

            {/* Project tecnologies */}

            {/* <p className="text-lg mt-2 text-gray-200">Tecnologies: </p> */}

            <div className="flex gap-4 mt-2 flex-wrap">

              {project.tecnologies.map(tecn => (
                <>
                  <p key={tecn} className="bg-blue flex-wrap rounded p-2">{tecn}</p>
                </>
              ))}

            </div> {/* Tecnology div  */}

          </div>
        </figure>
      ))}
    </div>
  )
}
