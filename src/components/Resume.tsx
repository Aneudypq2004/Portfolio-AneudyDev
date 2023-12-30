import Skills from './ui/Skills';
import Title from './ui/Title';
import WhatICanDo from './ui/WhatICanDo';

// SVG 

export default function Resume() {

  return (
    <>
      <Title title="Software Skills" />

      <Skills />

      <div className='grid grid-cols-1 md:grid-cols-2  gap-4 tracking-wide text-white '>

        {/* Second Part  */}

        <WhatICanDo />


        {/* First Part  */}

        <div>

          <Title title="Education" />

          <div className='text-lg bg-main p-4  rounded border  border-blue mb-4'>

            <h4 className=''>Tec. Software Development  2023 - <span className='font-bold '>TODAY
            </span>  </h4>
            <p className='text-blue'>Instituto Tecnológico de Las Américas - ITLA</p>

          </div>

          {/* LOYOLA  */}

          <div className='text-lg bg-main p-4 rounded border  border-blue mb-4'>

            <h4 className=''>High School <span className='font-bold '> 2018 - 2022
            </span>  </h4>
            <p className='text-blue'>Instituto Politécnico Loyola - IPL</p>

          </div>

        </div>


      </div>
    </>
  )
}
