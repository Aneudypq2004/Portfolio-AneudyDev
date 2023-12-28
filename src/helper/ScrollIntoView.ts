// SMOOTH SCROLL

export const HandleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    e.preventDefault();
  
    // GET THE SECCION ID
  
    const targetId = e.currentTarget.getAttribute("href") ?? "#Home";
  
    // GET THE SECCION
  
    const seccion = document.querySelector(targetId);
  
    seccion?.scrollIntoView({ behavior: "smooth" });
  }