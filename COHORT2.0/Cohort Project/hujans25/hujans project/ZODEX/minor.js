gsap.registerPlugin(ScrollTrigger);



//let t1 = gsap.timeline();

let temp1 = document.querySelector("#temp1");
let temp2 = document.querySelector("#temp2");
let temp3 = document.querySelector("#temp3");

let t1  = gsap.timeline({
    y: 50,
    rotate: "-30%",
   
scrollTrigger:{
    trigger: temp1,
    scrub: 1,
    duration: 8,
    start: "top 5%",
    end: "bottom 10%",
  
    // markers: true,
  
    pin: true,
}
})

let t2  = gsap.timeline({
    y: 80,
   
scrollTrigger:{
    trigger: temp2,
    scrub: 1,
    duration: 8,
    start: "top 2%",
    end: "bottom 10%",
  
    // markers: true,
  
    pin: true,
}
})


let t3  = gsap.timeline({
    // y: 80,
scrollTrigger:{
    trigger: temp3,
    scrub: 1,
   
    start: "top -50%",
    end: "bottom 50%",
  
    // markers: true,
  
    pin: true,
}
})

t1.to("#temp1" , {
    rotate:"30%",
   scale:0,
   opacity:0

})
t2.to("#temp2" , {
    rotate:"30%",
   scale:0,
   opacity:0

})
t3.to("#temp3" , {
    // rotate:"30%",
//    scale:0,
//    opacity:0

})


















// let tl2 = gsap.to("#temp2" , {
//     rotate: "60%",
//     duration: 5,
//     y: "-100%",
//     scale:0,
//     opacity:0,
//     delay:4,

//     scrollTrigger: {
//         tigger: "#temp2",
//         scrub: 1,
//         start: "90%",
//         end:"bottom 0%",
//         opacity: 1,
//         duration: 12,
//      scrollbar: false,
//         markers: true

//     }
// });


// gsap.to("#temp3" , {
//     rotate: "60%",
//     duration: 2,
//     y: "-200%",
//     scale:0,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#temp3",
//         scrub: 1,
//         start:" 100%",
//         end:"bottom 0%",
//         opacity: 1,
//         duration: 12,
//         markers: true
//     }
// })
