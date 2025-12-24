    //  hamberger button  
    document.querySelector(".mobil-navbar-btn").addEventListener('click',()=>{
      document.querySelector(".header").classList.toggle("active")
    })

    
  //  slider section

    let slider = document.querySelector(".slider");
    
      // top image slider section 
      let slides = document.querySelectorAll(".slide");
   
  
  
   let slideNumber = 1;
    //  create clone
   let firstChild= slides[0].cloneNode(true);
   let lastSlide= slides[slides.length-1].cloneNode(true);
      //  atteched clone
   slider.appendChild(firstChild);
   slider.insertBefore(lastSlide,slides[0]);
  //  update slides
   slides= document.querySelectorAll(".slide");


// slider.style.transform=`translateX(-${slideNumber*100}%)`;


let startSlider=()=>{
  if(slideNumber===slides.length-1)return;
    slideNumber++;
    slider.style.transition=`transform .5s linear`;
    slider.style.transform=`translateX(-${slideNumber*100}%)`;
    console.log("slide click")
  }


let next= document.querySelector(".rightBtn");

next.addEventListener("click",startSlider)


let prev=document.querySelector(".leftBtn");

let previous=()=>{  
  if(slideNumber<=0) return; 
     slideNumber--;
     slider.style.transition=`transform .5s linear`;
     slider.style.transform=`translateX(-${slideNumber*100}%)`;
};

prev.addEventListener("click",previous)

// infinit loop 

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
  if(activeIndex>=0 && activeIndex<slides.length-2){
    dots[activeIndex].classList.add("active")
  }
  })
}
console.log('lenght : ',slides.length)

        // products quantity section
      //  increase and decrease buttons
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
      


      // testimonial functionality
const testimonialSlider = document.querySelector(".testimonial-grid")

let testimonialSlides= document.querySelectorAll('.card-wrapper');
let length = testimonialSlides.length; 
const tFirstClone= testimonialSlides[0].cloneNode(true);
const tLastClone = testimonialSlides[length-1].cloneNode(true);

testimonialSlider.appendChild(tFirstClone);
testimonialSlider.insertBefore(tLastClone,testimonialSlider[0]);
testimonialSlides= document.querySelectorAll(".card-wrapper");

let slideWidth = testimonialSlides[0].clientWidth;
let tslideIndex=1
console.log("testimonial",testimonialSlider)
console.log("testimonial slides",testimonialSlides)

let tAutoslider=()=>{
  if(tslideIndex===testimonialSlides.length-1) return;
  tslideIndex++;
  testimonialSlider.style.transition=`transform 3s linear`;
  testimonialSlider.style.transform=`translateX(-${tslideIndex*100}px)`;
  console.log("testimonial run")
}

document.querySelector('.nextslide').addEventListener("click",tAutoslider);
// setInterval(tAutoslider,4000);

// loop funcitionality
testimonialSlider.addEventListener("transitionend",()=>{
  if(tslideIndex===testimonialSlides.length-1){
    tslideIndex=1;
    testimonialSlider.style.transition=`none`;
    testimonialSlider.style.transform=`translateX(-${tslideIndex*400}px)`;

  }

  if(tslideIndex===0){
    tslideIndex= testimonialSlides.length-2;
    testimonialSlider.style.transition=`none`;
    testimonialSlider.style.transform=`translateX(-${tslideIndex*400}px)`;

  }
})

    // copy clone nodes
      
// create dots for testimonial

// const testimonialSlider = document.querySelector(".testimonial-grid");

// let testimonialSlides = document.querySelectorAll('.card-wrapper');
// let length = testimonialSlides.length; 

// const tFirstClone = testimonialSlides[0].cloneNode(true);
// const tLastClone  = testimonialSlides[length - 1].cloneNode(true);

// testimonialSlider.appendChild(tFirstClone);
// testimonialSlider.insertBefore(tLastClone, testimonialSlider[0]);

// testimonialSlides = document.querySelectorAll(".card-wrapper");
// let tslideIndex = 1;

// let tAutoslider = () => {
//   // condition temporarily disable kar deta hoon to dekho move ho raha hai ya nahi
//   if(tslideIndex===length-1);
//   tslideIndex++;
//   testimonialSlider.style.transition = `transform .5s linear`;
//   testimonialSlider.style.transform  = `translateX(-${tslideIndex * 400}px)`;
// };

// setInterval(tAutoslider, 2000);

  //  why-choose-us-card  section function
//   let boxContainer= document.querySelectorAll(".why-choose-us-card");
// let colorBoxes=document.querySelectorAll(".chooseIcon");

//   boxContainer.forEach((box,)=>{
//     let setIntervalId
//     let icon= box.querySelector(".chooseIcon")



//     box.addEventListener("mouseenter",()=>{
//       clearInterval(setIntervalId);

//     setIntervalId =setInterval(()=>{
//         let color1 = Math.round(Math.random()*255);
//         let color2 = Math.round(Math.random()*255);
//         let color3 = Math.round(Math.random()*255);
     
//           icon.style.backgroundColor=`rgb(${color1},${color2},${color3})`
    
//       },600);

      
//     })
//     icon
//  box.addEventListener("mouseleave",()=>{
//     clearInterval(setIntervalId);
//         icon.style.backgroundColor=`white`
      
//  })

//   });

// find culpret ouline method 
//   document.querySelectorAll("*").forEach(el => {
//   if (el.scrollWidth > el.clientWidth) {
//     console.log("Overflow ho raha hai:", el);
//   }
// });
