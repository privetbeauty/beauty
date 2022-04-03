            $(document).ready(function(){       
                   var scroll_start = 0;
                   var startchange = $('.nav');
                   var offset = startchange.offset();
                   color_1 = document.querySelector("#black");
                   color_2 = document.querySelector("#white");
                   $(document).scroll(function() { 
                      scroll_start = $(this).scrollTop();
                      if(scroll_start > offset.top) {
                          $('.nav').css('background-color','rgba(82,82,82,0.8)');
                       } else {
                          $('.nav').css('background-color', 'transparent');
                       }
                   });
                });
   
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style. top = "0px", CSSPageRule;
              } else {
                document.getElementById("navbar").style. top = "-22vh";
              } 
              prevScrollpos = currentScrollPos;
            }
            
      
            $(function () {
              $('.burger').on('click', function () {
                  $('.navbar-nav').slideToggle(0, function () {
                      if ($(this).css('display') === 'none') {
                          $(this).removeAttr('style');
                      }
                  });
                  $('.nav-link, .nav-link-a').on('click', function () {
                      $('.navbar-nav').hide(900, function(){
                          if ($(this).css('display') === 'none');
                      })
                  });
              });
              });     



              
            
            
