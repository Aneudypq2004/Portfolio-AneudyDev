
const tecnologies: string[] = ["react", "tailwind CSS", "typescript", "c", "git",
    "Microsoft sql server", ".net core", "HTML", "CSS",]

export default function Skills() {
    return (

        <div className='flex  overflow-x-scroll gap-24 pb-4 mb-8 text-white'>

            {tecnologies.map(tecnology => (

                <div key={tecnology + "12031"}
                    className='group flex  justify-between  flex-col'>
{/* 
                    <p className='text-center opacity-0 top-16 whitespace-nowrap absolute max-w-max z-[999]  capitalize  group-hover:opacity-100 
                        transition-opacity duration-500 ease-in-out'>{tecnology}</p> */}

                    <img src={`/src/assets/icon/tecnologies/${tecnology}.svg`}
                        width={60}
                        className="min-w-[50px] max-w-[60px]"
                        height={60}
                        alt={`Icon ${tecnology}`} />
                </div>

            ))}
        </div>
    )
}
