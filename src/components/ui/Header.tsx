import IconMenu from '/icon/menu.svg';
import { InView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";

import { HandleSmoothScroll } from '../../helper/ScrollIntoView'
import { useState } from 'react';
import { GitHubIcon } from '../../helper/Icons';


export default function Header() {

  const { t } = useTranslation();

  const [extend, setExtend] = useState(false);


  return (
    <header className="bg-second text-lg overflow-hidden font-bold text-gray-300 border-main border-b p-2 z-50 sticky top-0  w-full flex justify-between content-center">

      <a className="" target='_blank' href="https://github.com/Aneudypq2004">

        <GitHubIcon size={40} />
      </a>

      <img onClick={() => setExtend(!extend)} width={40} className="hover:cursor-pointer absolute z-[999] right-2   md:hidden text-white" src={IconMenu} />

      {/* Navigation  */}

      <nav className={`bg-second group 
      flex gap-4 flex-col md:flex-row w-full md:max-w-max h-full md:translate-x-0  fixed  justify-center items-center md:relative transition-transform duration-500 ease-in-out
        ${extend ? 'translate-x-0 ' : 'translate-x-[100rem]'} `}>

        <a
          onClick={e => HandleSmoothScroll(e)}
          className="hover:text-black hover:bg-blue p-2 rounded"
          href="#home">
          {t("header.Home")}</a>

        <a
          onClick={e => HandleSmoothScroll(e)}
          className="hover:text-black hover:bg-blue p-2 rounded"
          href="#summary">{t("header.Summary")}</a>
        <a
          onClick={e => HandleSmoothScroll(e)}
          className="hover:text-black hover:bg-blue p-2 rounded" href="#projects">
          {t("header.Project")}
        </a>

        <a
          className="hover:text-black hover:bg-blue p-2 rounded"
          onClick={e => HandleSmoothScroll(e)}
          href="#contact">{t("header.Contact")}</a>
      </nav>
    </header>
  )
}
