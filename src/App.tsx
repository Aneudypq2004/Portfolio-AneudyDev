import { HandleSmoothScroll } from './helper/ScrollIntoView';
import { SendIcon } from "./helper/Icons";

import Header from './components/ui/Header';
import { useTranslation } from 'react-i18next';
//import Contact from './components/Contact';

import Projects from './components/Projects';
import Footer from './components/ui/Footer';
import { ArrowUP } from './helper/Icons';
import Title from './components/ui/Title';
import Home from './components/Home';
import Resume from './components/Resume';


function App() {

  const { t } = useTranslation();

  return (
    <>
      <Header />


      {/* Home  */}

      <section id='home' className='h-screen grid grid-cols-1 md:grid-cols-2 p-4  gap-4 content-center bg-image '>

        <Home />

      </section>

      <main className='container mx-auto p-4 '>

        {/* Resume */}

        <Title title={t("Resume.Title")} />

        <section id='summary' className=' bg-second container mx-auto p-2'>
          <Resume />
        </section>

        {/* Projects  */}

        <Title title={t("Contact.contact")} />

        <section id='projects' className='min-h-screen'>

          <Projects />

        </section>

        {/* Contact  */}


        <Title title={t("Contact.contact")} />

        <section id='contact' className='w-full flex justify-center md:w-11/12 mx-auto mb-4'>

        <a
        href='mailto:dluisaneudy82@gmail.com?subject=Quiero decirte algo'
        className={`mt-4 self-end  px-8 py-4 rounded-sm text-black text-lg 
        flex items-center  gap-4 max-w-max bg-blue`}
        type="submit"> <SendIcon /> {t("Contact.Title")}</a>

        </section>


        {/* Footer  */}

        <Footer />

        <a href="#home" onClick={e => HandleSmoothScroll(e)} className='fixed right-0  bottom-2 '>
          <ArrowUP size={40} />
        </a>
      </main>

    </>
  )
}

export default App
