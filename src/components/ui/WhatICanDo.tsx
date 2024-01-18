import Title from "./Title"
import { useTranslation } from 'react-i18next';

function WhatICanDo() {

  const { t } = useTranslation();

  return (
    <div>
      <Title title={t("Resume.WhatICanDo.Title")} />

      <div className='bg-main p-4 text-white  border  border-blue mb-4 grid gap-2 rounded'>

        <h4 className="text-blue uppercase font-bold text-lg">Frontend</h4>

        <ul className=" list-disc ml-4">

          <li>{t("Resume.WhatICanDo.Frontend.Develop")}</li>

          <li>{t("Resume.WhatICanDo.Frontend.Styles")}</li>

          <li>{t("Resume.WhatICanDo.Frontend.Responsive")}</li>

          <li>{t("Resume.WhatICanDo.Frontend.Zustand")}</li>

        </ul>

      </div>

      <div className='bg-main p-4  text-white mb-4 border  border-blue grid gap-2 rounded'>

        <h4 className="text-blue uppercase font-bold text-lg" >Backend</h4>

        <ul className=" list-disc ml-4" >

          <li>{t("Resume.WhatICanDo.Backend.Develop")}</li>

          <li>Microsoft SQL Server </li>

          <li>Clean architecture</li>

          <li>Entity framework</li>

        </ul>


      </div>
    </div>
  )
}

export default WhatICanDo