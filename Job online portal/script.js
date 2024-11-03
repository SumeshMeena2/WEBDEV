function locomotive(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
    });
    
  
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    

}
 
function navAnimation() {
    const nav = document.querySelector("nav");
    let tl;

    nav.addEventListener("mouseenter", function () {
        if (tl && tl.isActive()) tl.kill(); // Stop any running animation
        tl = gsap.timeline();

        tl.to(".nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        .to(".nav-top h5", {
            display: "block",
            duration: 0.1
        })
        .to(".nav-top h5 span", {
            y: 0,
            stagger: { amount: 0.5 }
        });
    });

    nav.addEventListener("mouseleave", function () {
        if (tl && tl.isActive()) tl.kill(); // Stop any running animation
        tl = gsap.timeline();

        tl.to(".nav-top h5 span", {
            y: 25,
            stagger: { amount: 0.2 }
        })
        .to(".nav-top h5", {
            display: "none",
            duration: 0.1
        })
        .to(".nav-bottom", {
            height: 0,
            duration: 0.2
        });
    });
}

function page1_animation(){
    
    document.querySelectorAll(".cont h5").forEach(h5 => {
        h5.addEventListener("mouseenter", () => {
            gsap.to(h5, {
                textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 15px rgba(0,153,255,0.8)",
                duration: 0.3,
                color: "#fff",
                scale: "1.1"
            });
        });
    
        h5.addEventListener("mouseleave", () => {
            gsap.to(h5, {
                textShadow: "0 0 0 rgba(0,0,0,0)",
                duration: 0.3,
                color: "#000",
                scale: "1" 
            });
        });
    });
}



function page2_animation(){


      
let elem = document.querySelectorAll('.elem-cont') ;
       
       elem.forEach(function(e){
                
        e.addEventListener('mouseenter' , function(){
                  
               
            gsap.to(e.childNodes[3],{
              opacity : 1,
              scale : 1 

            })
         
            })
            e.addEventListener('mousemove' , function(dets){
                
              
                gsap.to(e.childNodes[3],{
                    
                    x: dets.x - e.getBoundingClientRect().x -50    ,
                    y: dets.y - e.getBoundingClientRect().y - 160
                })   
                
                
                
            })
            e.addEventListener('mouseleave' , function(){
                      
                 gsap.to(e.childNodes[3],{

                     opacity : 0 , 
                    scale : 0 
                 })  
               
             
                })
       })
    


      


}

function page3_videoanimation(){
             
    let video = document.querySelector('.page-3 video')  
    let play_button = document.querySelector('.icon')         

    play_button.addEventListener('click',function(){
        
               video.play() 
               gsap.to(video,{
                
            
                   transform :  "scaleX(1) scaleY(1) ",
                   borderRadius : "0%" ,
                   opacity: 1,
                   duration : 0.75


               })
               
            

    })
    
    video.addEventListener('click',function(){
              
          video.pause()
        
             gsap.to('video',{
                 
             transform :  "scaleX(0.4) scaleY(0) ",
              borderRadius : '20%',
              opacity: 0,
              duration : 0.6,
              onComplete(){
                  video.load() 
              }
             })
    


    })

}      

  function page5_flip_animation2() {

   
    const clickme = document.querySelectorAll('.small-cont-card')
    
    clickme.forEach(card => {
        const hoverMessage = card.querySelector('card .hover-message');
        
        card.addEventListener('mouseenter', () => {
            // Fade the card slightly and show "Click me" message
            gsap.to(card, { duration: 0.4, opacity: 0.8 });
            gsap.to(hoverMessage, { duration: 0.4, bottom: '50px', opacity: 1, ease: 'power1.out' });
        });
        
        card.addEventListener('mouseleave', () => {
            // Restore card opacity and hide "Click me" message
            gsap.to(card, { duration: 0.4, opacity: 1 });
            gsap.to(hoverMessage, { duration: 0.4, bottom: '-30px', opacity: 0, ease: 'power1.in' });
        });
    });
    
    


    const cards = document.querySelectorAll('.small-cont-card');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        // Check if card is flipped, and toggle flip state
        const isFlipped = card.classList.toggle('flipped');
  
        // Apply flip animation
        gsap.to(card.querySelector('.card-content'), {
          duration: 1.5,
          rotateY: isFlipped ? 180 : 0,
          transformStyle: 'preserve-3d',
          ease: 'power2.inOut'
        });
      });
    });
  }
  
  // Call the functions to apply animations

  


function page6_videoanimation(){
          
    let target = document.querySelectorAll('.page-6 .section .right')
    
    
    
    
    target.forEach(function(e){
        
        let video = e.childNodes[3] 
        let circle = e.childNodes[5]
        let mouseLeaveTimeout 
     
        e.addEventListener('mouseenter',function(){     
            
            clearTimeout(mouseLeaveTimeout   )
            
            video.play()
            
            gsap.to(video,{
                
                opacity : 1  ,
            })   
            gsap.to(circle,{
                 
                opacity : 1  
            }) 
            
           })
              
           e.addEventListener('mouseleave',function(){   
                video.pause()

                gsap.to(video,{
                     
                    opacity :0
                    

                })   

                gsap.to(circle,{
                     
                    opacity : 0 
                }) 
                mouseLeaveTimeout = setTimeout(function() {
                    video.load();
                }, 1000);
               
           })



           e.addEventListener('mousemove',function(dets){
                
            gsap.to(circle,{

             
             
             x: dets.x - e.getBoundingClientRect().x- 70 ,
             y: dets.y - e.getBoundingClientRect().y - 600


                 
            })    
           })











 }) 


}

function page6_videoanimation2(){
      
    let section = document.querySelectorAll('.page-6 .section2 .left')    
   
    section.forEach(function(e){
        let para = e.childNodes[3]
        let cont = e.childNodes[5]
          let video = e.childNodes[5].childNodes[3]
          let image = e.childNodes[5].childNodes[1]
          
          cont.addEventListener('mouseenter',function(){
                    

            video.play()
                 gsap.to(para,{
                     
                    opacity : 0 ,
                    transform: "scaleY(0)" 
                    
                 })
                 
                 gsap.to(image,{
                      
                    opacity : 0 
                 })

                 gsap.to(cont,{
                     
                    
                     transform : "scaleY(1.4)" ,
                     transform : "scaleX(1.4)",
                     transform : "translateY(-100px)"


                 })

                 gsap.to(video,{
                     
                    opacity : 1 ,
                    height : "100%" ,
                    transform : "scaleY(1.4)"
                

                 })
                 

          })


          cont.addEventListener('mouseleave',function(){
                   video.pause()
                 gsap.to(para,{
                     
                    opacity : 1 ,
                    transform: "scaleY(1)" 
                    
                 })
                 
                 gsap.to(image,{
                      
                    opacity : 1
                    
                 })

                 gsap.to(cont,{
                     
                    
                     transform : "scaleY(1)" ,
                     transform : "scaleX(1)" 
                     

                 })

                 gsap.to(video,{
                     
                    opacity : 0 ,
                    height : "100%" ,
                    transform : "scaleY(1)",
                    transform : "scaleX(1)"
                

                 })
                 

          })
          
    })


}

function page7_animation(){
      
    let elem_cards = document.querySelectorAll('.elem-cards')
    let head_cont = document.querySelectorAll('.head-cont div h4')

           elem_cards.forEach(function(e){
                
            e.addEventListener('mouseenter',function(){
                   
                console.log(e.childNodes)
                 
                  gsap.to(e.childNodes[7],{
                     
                   top : "0%" , 
                    opacity : 1 
                   
                  })

                gsap.to(e.childNodes[1],{
                      
                    marginLeft : "2vh" 
                })

                gsap.to(e.childNodes[5],{
                      
                    marginRight : "2vh" 
                })
                
                
                
            })
            e.addEventListener('mouseleave',function(){
                   
                
                gsap.to(e.childNodes[7],{
                    
                   top : "100%" ,
                   
                   opacity : 0 ,
                   onComplete(){

                 e.childNodes[7].style.top = "-100%" 
                    }
                    
                })
                gsap.to(e.childNodes[1],{
                      
                    marginLeft : "0vh" 
                })
            
                gsap.to(e.childNodes[5],{
                      
                    marginRight : "0vh" 
                })
                
            })
            
            
        })
        
        
        
        
    }
    
 
 function page8_animation(){
       
    let scroll_cont = document.querySelectorAll('.scroll-cont')   
       
    scroll_cont.forEach(function(e){
         
        
        gsap.from(e,{
              
            x: 0 ,  
            duration: 4 ,

            stagger : {
                 amount : 2
            }  ,

          scrollTrigger : {
          trigger : ".section-3" ,
          scroller : "body" ,
         marker : true ,
         start : "top 80%" ,
         end : "top 10%" ,
         scrub : true 
             
        }         
        })
      
        gsap.to(".comparts",{
             
            opacity : 1 ,       
            
            scrollTrigger : {
                trigger : ".section-3" ,
                scroller : "body" ,
               marker : true ,
               start : "top 80%" ,
               end : "top 0%" ,
               scrub : true 
                   
              }         
         
             
        })



    })
     
          

 }


 function loading_animation(){
           
    // Slight delay to ensure the scroll position is reset
    setTimeout(() => {
        var tl = gsap.timeline();

        tl.from('.page1', {
            opacity: 0,
            duration: 0.2,
            delay: 0.2
        });
        tl.from('.page1', {
            transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
            borderRadius: "50px",
            duration: 1 ,
            ease: "expo.out"
        });
        tl.from("nav", {
            top : "-20%",
            opacity: 0,
            delay: -0.1
        });
        tl.from(".page1 h1, .page1 p, .page1 div", {
            opacity: 0,
            duration: 1,
            stagger: 0.3
        });
        
    }, 2 );

 }
   


function button_animation() {
    let target = document.querySelectorAll('button');
    let spans = document.querySelectorAll('.spans');

    // Event listeners for .spans elements
    spans.forEach(function(e) {
        e.addEventListener('mouseenter', function() {
            e.classList.add('gradient-text'); // Add gradient class
            e.style.cursor = 'pointer';
            gsap.to(e, {
                duration: 0.3,
                scale: 1.1
            });
        });

        e.addEventListener('mouseleave', function() {
            e.classList.remove('gradient-text'); // Remove gradient class
            e.style.cursor = 'default';
            gsap.to(e, {
                duration: 0.3,
                scale: 1
            });
        });
    });

    // Event listeners for button elements
    target.forEach(function(e) {
        e.addEventListener('mouseenter', function() {
            e.style.cursor = 'pointer';
            gsap.to(e, {
                duration: 0.3,
                scale: 1.1
            });
        });

        e.addEventListener('mouseleave', function() {
            e.style.cursor = 'default';
            gsap.to(e, {
                duration: 0.3,
                scale: 1
            });
        });
    });
}


function movinganiamto(){

gsap.to(".move", {
    x: "-100%",            // Move the images to the left by 100%
    duration: 8,          // Total duration for the animation
    ease: "linear",        // Linear animation for smooth, constant scrolling
    repeat: -1,            // Infinite repeat
});

}




function main(){
    page5_flip_animation2()
    page1_animation()
    page2_animation()
    navAnimation()
    page3_videoanimation()
    page6_videoanimation()
    page6_videoanimation2()
    page7_animation()
    page8_animation()
    loading_animation()
    button_animation()
    
}


main()
