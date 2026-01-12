    //  hamburger button  
    document.querySelector(".mobil-navbar-btn").addEventListener('click',()=>{
      document.querySelector(".header").classList.toggle("active")
    })

    
  // ===================================
  //      image slider section
  // ===============================
  let slider = document.querySelector(".slider");
  let slides = document.querySelectorAll(".slide");
    
   let slideNumber = 1;
    //  create clone
   let firstChild= slides[0].cloneNode(true);
   let lastSlide= slides[slides.length-1].cloneNode(true);
   
   //  attached clone
   slider.appendChild(firstChild);
   slider.insertBefore(lastSlide,slides[0]);
  
   //  update slides
   slides= document.querySelectorAll(".slide");



let startSlider=()=>{
  if(slideNumber===slides.length-1)return;
    slideNumber++;
    slider.style.transition=`transform .5s linear`;
    slider.style.transform=`translateX(-${slideNumber*100}%)`;
    console.log("slide click")
  }


let next= document.querySelector(".rightBtn");

next.addEventListener("click",startSlider)


let prev = document.querySelector(".leftBtn");

let previous=()=>{  
  if(slideNumber<=0) return; 
     slideNumber--;
     slider.style.transition=`transform .5s linear`;
     slider.style.transform=`translateX(-${slideNumber*100}%)`;
};

prev.addEventListener("click",previous)

// infinite loop 

slider.addEventListener("transitionend",()=>{
  if(slideNumber===slides.length-1){
    slideNumber=1;
    slider.style.transition=`none`;
    slider.style.transform=`translateX(-${slideNumber*100}%)`;
  }
  if(slideNumber===0){
    slideNumber=slides.length-2;
    slider.style.transition=`none`
    slider.style.transform=`translateX(-${slideNumber*100}%)`;
  }
  updateDotes()
})

// dots functionality

let dotsContainer= document.querySelector(".dots-wrapper");


for(let i=0; i<slides.length-2;i++){
  
  let div=document.createElement("div");
  div.classList.add("dot");
  if(i===0) div.classList.add("active")
    dotsContainer.appendChild(div);
}

let dots= document.querySelectorAll(".dot");

dots.forEach((dot,i)=>{
  
  dot.addEventListener("click",()=>{
  slider.style.transform=`translateX(-${i*100}%)`;
  slideNumber=i+1
  updateDotes();
})
})

let updateDotes=()=>{
  dots.forEach(dot=>{
    dot.classList.remove("active");
   let  activeIndex = slideNumber-1;
  if(activeIndex >=0 && activeIndex<slides.length-2){
    dots[activeIndex].classList.add("active")
  }
  })
}

        
// =================================
// products quantity section
// =================================


      let cardContainer = document.querySelectorAll(".btncontainer");
 
      cardContainer.forEach((container) => {
        let plus = container.querySelector(".plus");
        let minus = container.querySelector(".minus");
        let productNumber = container.querySelector(".itemNumber");

        let count = 0;

        plus.addEventListener("click", () => {
          if (count < 10) {
            count++;
            productNumber.innerText = count;
          }
        });

        minus.addEventListener("click", () => {
          if (count > 0) {
            count--;
            productNumber.innerText = count;
          }
        });
      });
      

// ==========================
//  Testimonial section 
// ==========================

const testimonialSlider =document.querySelector(".testimonial-grid");

const totalSlides = testimonialSlider.children;

let slideWidth= totalSlides[0].clientWidth;

console.log("slides before update :",totalSlides)

let isPaused= false;
let scrollPosition=0;
let speed = 1;
  
testimonialSlider.innerHTML+=testimonialSlider.innerHTML;

console.log("total slides after update ",testimonialSlider.children)

let length= totalSlides.length;

let marquee=()=>{
  if(!isPaused) scrollPosition+=speed;
 
  if(scrollPosition >= slideWidth*(length/2)) scrollPosition=0;
  testimonialSlider.style.transform=`translateX(-${scrollPosition}px)`;
  requestAnimationFrame(marquee);
}
requestAnimationFrame(marquee);

testimonialSlider.addEventListener("mouseenter",()=>isPaused=true);
testimonialSlider.addEventListener("mouseleave",()=>isPaused=false);