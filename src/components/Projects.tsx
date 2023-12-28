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
}

export default function Projects() {

  const { t } = useTranslation();

  // ALL PROJECTS

  const projects: Iproject[] = [

    {
      name: "LastFinance", description: t("Projects.RentMovies"),
      image: "project1",
      tecnologies: ["React", "Tailwind css"]
    },

    {
      name: "LastFinance", description: t("Projects.RentMovies"),
      image: "project1",
      tecnologies: ["React", "Tailwind css"]
    },

    {
      name: "RentMovies", description: t("Projects.RentMovies"),
      image: "project3",
      githubPath: "https://github.com/",
      tecnologies: ["React", "TailwindCSS", ".Net", "Typescript",]
    }
  ]

  return (
    <div className="flex justify-center  gap-2 flex-wrap">

      {projects.map((project: Iproject) => (
        <>
          <figure key={project.name} style={{
            backgroundImage: `url(/src/assets/${project.image}.png)`

          }} className="md:w-5/12  container bg-center bg-cover bg-no-repeat bg-black group overflow-hidden 
          relative w-full rounded h-[400px]">

            {/* Card Content  */}

            <div className="bg-second absolute bottom-0 rounded-lg p-2 h-5/6 
             w-full translate-y-full  group-hover:translate-y-0 transition-all duration-300 ease-linear">

              {/* Github Path  */}

              <div className="flex gap-2 absolute right-4 z-50">

                <a href={project.githubPath}>
                  <GitHubIcon />
                </a>
                <a href={project.livePath}>
                  <ExternalLinkIcon />
                </a>

              </div>

              <figcaption className="text-center text-2xl my-4 text-blue ">{project.name}</figcaption>

              <p className="text-gray-300">{project.description}</p>

              {/* Project tecnologies */}

              <p className="text-lg mt-2 text-gray-200">Made with :</p>


              <div className="flex gap-4 mt-2 flex-wrap">

                {project.tecnologies.map(tecn => (
                  <>
                    <p key={tecn} className="bg-blue flex-wrap rounded p-2">{tecn}</p>
                  </>
                ))}

              </div> {/* Tecnology div  */}

            </div>
          </figure>

        </>
      ))}
    </div>
  )
}
