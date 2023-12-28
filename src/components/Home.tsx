import { useTranslation } from "react-i18next";
import cvPdf from "../assets/CvAneudy.pdf"

export default function Home() {
    const { t } = useTranslation();
    return (
        <>

            <div>

                <h1 className=' text-4xl text-white'>
                    &lt;<span className='text-blue'>Luis Aneudy </span> De Los Santos Tejeda /&gt;
                </h1>

                <div className='flex justify-between mt-4'>

                    <a download href={cvPdf} className='text-lg border border-blue hover:bg-blue hover:text-black
                     rounded uppercase transition-colors ease-in-out duration-200 p-4 tracking-wide mt-4 text-right text-white'>
                        {t("cv")}
                    </a>

                    <p className='text-lg uppercase p-4 tracking-wide mt-4 text-right text-blue'>
                        {t("Job")}</p>
                </div>
            </div>

            {/* About me  */}

            <div className="h-full">

                {/* <Title title={t("Home.About")} /> */}

                <p className='text-gray-300 text-justify mb-2'>{t("Description")}</p>

            </div>
        </>
    )
}
