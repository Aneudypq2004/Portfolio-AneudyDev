import Skills from './ui/Skills';
import Title from './ui/Title';
import WhatICanDo from './ui/WhatICanDo';
import { useTranslation } from 'react-i18next'
// SVG 

export default function Resume() {

  const { t } = useTranslation();

  return (
    <>
      <Title title={t("Resume.SoftwareSkills")} />

      <Skills />

      <div className='grid grid-cols-1 md:grid-cols-2  gap-4 tracking-wide text-white '>

        {/* Second Part  */}

        <WhatICanDo />


        {/* First Part  */}

        <div>

          <Title title={t("Resume.Education.Title")} />

          <div className='text-lg bg-main p-4  rounded border  border-blue mb-4'>

            <h4 className=''>Tec. {t("Resume.Education.Career")}  2023 - <span className='font-bold '>TODAY
            </span>  </h4>
            <p className='text-blue'> {t("Resume.Education.Institute")} </p>

          </div>

          {/* LOYOLA  */}

          {/* <div className='text-lg bg-main p-4 rounded border  border-blue mb-4'>

            <h4 className=''>High School <span className='font-bold '> 2018 - 2022
            </span>  </h4>
            <p className='text-blue'>Instituto Politécnico Loyola - IPL</p>

          </div> */}

        </div>


      </div>
    </>
  )
}
