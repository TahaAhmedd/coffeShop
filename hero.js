
const background = document.querySelector(".hero")
const images = document.querySelectorAll(".hero-images img")

if(images){
  images.forEach((element , index)  => {
    element.addEventListener("click",(e)=>{
      switch(index){
        case 0 :{
          background.classList.remove("hero2")
          background.classList.remove("hero3")
          background.classList.add("hero1")
          break;
        }
        case 1 :{
          background.classList.remove("hero1")
          background.classList.remove("hero3")
          background.classList.add("hero2")
          break;
        }
        case 2 :{
          background.classList.remove("hero1")
          background.classList.remove("hero2")
          background.classList.add("hero3")
          break;
        }
      }
    })
  });
}
