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
      name: "LastFinance", description: t("Projects.RentMovies"),
      image: "project1",
      githubPath: "https://github.com/Aneudypq2004/LastFinance",
      livePath: "https://lastfinance.netlify.app/wallet",
      tecnologies: ["React", "Tailwind css", "Cripto Compare Api", "ChartJs"]
    },

    {
      name: "RentMovies", description: t("Projects.RentMovies"),
      image: "project2",
      demo: false,
      githubPath: "https://github.com/Aneudypq2004/RentMovies",
      tecnologies: ["React", "TailwindCSS", "Material UI", "Typescript",]
    },

    {
      name: "RentMovies API", description: t("Projects.RentMovies"),
      image: "project3",
      githubPath: "https://github.com/Aneudypq2004/RENTMOVIES-API_REST",
      demo: false,
      tecnologies: ["ASP NET CORE", "Entity Framework", "N-Layer", "Sql server",]
    },

    {
      name: "WebApis Company", description: "CRUD Company, Employee, Position made with Onion arquitecture, repository pattern ,entity framework",
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

            <p className="text-gray-300">{project.description}</p>

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
