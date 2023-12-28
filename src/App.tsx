import { HandleSmoothScroll } from './helper/ScrollIntoView';


import Header from './components/ui/Header';
import { useTranslation } from 'react-i18next';
import Contact from './components/Contact';

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

      <main className='container mx-auto p-4'>

        {/* Home  */}

        <section id='home' className='h-screen grid grid-cols-1 md:grid-cols-2  gap-4 content-center '>

          <Home />

        </section>

        {/* Resume */}

        <Title title='Resume' />

        <section id='summary' className=' bg-second container mx-auto p-2'>
          <Resume />
        </section>

        {/* Projects  */}

        <Title title='Projects' />

        <section id='projects' className='min-h-screen'>

          <Projects />

        </section>

        {/* Contact  */}


        <Title title={t("Contact.contact")} />

        <section id='contact' className='w-full md:w-11/12 mx-auto mb-4'>
          <Contact />
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
