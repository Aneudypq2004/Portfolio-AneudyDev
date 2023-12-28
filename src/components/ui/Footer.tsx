
import { ArrowUP, GitHubIcon, LinkedinIcon, TelegramIcon } from '../../helper/Icons';
import { HandleSmoothScroll } from '../../helper/ScrollIntoView';


function Footer() {

  return (
    <footer className="flex gap-4" >

      <a href="https://github.com/Aneudypq2004" target={'_blank'} >
        <GitHubIcon size={30} />
      </a>
      <a href="https://www.linkedin.com/in/luis-de-los-santos-b23480257" target={'_blank'}>
        <LinkedinIcon size={30} />
      </a>

      <a href="https://t.me/Aneudypq2004" target={'_blank'} >
        <TelegramIcon size={30} />
      </a>
    </footer>
  )
}

export default Footer
