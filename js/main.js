    /// <reference types="../@types/jquery" />

   //var products = document.getElementById("productDetails")
   const toggleButton = document.getElementById('navbarToggle');
   const navbarMenu = document.getElementById('navbarMenu');
   
   // Add click event listener to the toggle button
   toggleButton.addEventListener('click', () => {
       navbarNavDropdown.classList.toggle('show'); // Toggle the 'show' class
   });

  $('#about .arrow').on('click' , function () {  
    $('#about .aboutChange').animate({height : 'toggle'  } , 2000 , function() {
      $('#about .about-arrow').toggleClass('fa-angle-down fa-angle-up' )
     
      
    })

  })
  $('#products #productDetails').on('click' , function(){
    
    $('#products .productsChange').animate({height : 'toggle'  } , 2000 )
  })

  var imgs = Array.from(document.querySelectorAll('.item img'))
             var lightBox = document.querySelector('.lightBox')
             var closeIcone = document.getElementById('close')
             var boxData = document.getElementById('boxData')
             var nextIcon = document.getElementById('next')
             var prevIcon = document.getElementById('prev')
             var currentIndex =0;

             for (var i =0 ; i<imgs.length ; i++){
              imgs[i].addEventListener('click', function(e){
                 var currentTarget = e.target
                currentIndex= imgs.indexOf(currentTarget)
                 
                 lightBox.classList.remove('d-none')
                 var currentSrc = e.target.getAttribute('src')
                  boxData.style.backgroundImage= `url(${currentSrc})` 
                 
              })
           }
           closeIcone.addEventListener('click' , function(){
              closeSlide()
           })
           nextIcon.addEventListener('click' , function (e) {
                nextSlide()
                 
             })
           prevIcon.addEventListener('click' , function (e) {
              prevSlide()
                 
             })

             function closeSlide(){
              lightBox.classList.add('d-none')

            }

            function nextSlide(){
             currentIndex++; 
             if(currentIndex == imgs.length){
              currentIndex=0;
           }
           currElementSrc = imgs[currentIndex].getAttribute('src')
           console.log(currElementSrc);
           boxData.style.backgroundImage=`url(${currElementSrc})`
                
              
            }
            function prevSlide(){
            currentIndex--; 
             if(currentIndex < 0){
              currentIndex=imgs.length-1;
           }
           currElementSrc = imgs[currentIndex].getAttribute('src')
           console.log(currElementSrc);
           boxData.style.backgroundImage=`url(${currElementSrc})` 
            }

            document.addEventListener('click' , function(e){
              if(e.target == lightBox){
                 closeSlide()
              }
            })


            document.addEventListener('keydown' , function (e) { 
               //  console.log(e.key);
               
                  switch (e.key){
                         case "ArrowRight":
                            nextSlide();
                            break;
                            
                         case "ArrowLeft":
                            prevSlide();
                            break;
                         case "Escape":
                            closeSlide();
                            break;

                  }
                 
             })