
                $(document).ready(function slickFunc(){
                    $('.products_cards_men').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay:true,
                    speed:600,
                    arrows:true,
                    prevArrow: '.left_men',
                    nextArrow: '.right_men',
                    draggable:false,


                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                              draggable:true,
                              centerMode: true,
                              centerPadding: '40px',
                              slidesToShow: 2
                            }
                          },
                        {
                          breakpoint: 768,
                          settings: {
                            draggable:true,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                          }
                        },
                        {
                          breakpoint: 576,
                          settings: {
                            draggable:true,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                          }
                        }
                      ]



                   
                    });

                    $('.products_cards_women').slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay:true,
                        speed:600,
                        arrows:true,
                        prevArrow: '.left_women',
                        nextArrow: '.right_women',
                        draggable:false,

                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                  draggable:true,
                                  centerMode: true,
                                  centerPadding: '40px',
                                  slidesToShow: 2
                                }
                              },
                            {
                              breakpoint: 768,
                              settings: {
                                draggable:true,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                              }
                            },
                            {
                              breakpoint: 576,
                              settings: {
                                draggable:true,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                              }
                            }
                          ]
                    });

                    $('.products_cards_children').slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay:true,
                        speed:600,
                        arrows:true,
                        prevArrow: '.left_children',
                        nextArrow: '.right_children',
                        draggable:false,

                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                  draggable:true,
                                  centerMode: true,
                                  centerPadding: '40px',
                                  slidesToShow: 2
                                }
                              },
                            {
                              breakpoint: 768,
                              settings: {
                                draggable:true,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                              }
                            },
                            {
                              breakpoint: 576,
                              settings: {
                                draggable:true,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                              }
                            }
                          ]
                    });



                       
                         
                });          


// Animation arrow down in header
const arrowDtimer = setInterval(arrowDownAnim,1200);

            function arrowDownAnim(){
                $('#header_arrow').css({
                    transform:"translateY(10px)"
                
                });

                setTimeout(function(){
                    $('#header_arrow').css({
                        transform:"translateY(0px)"
                    
                    });
                },600);
            
            };


const checks = $(".product_type");
$(checks).prop("checked",true);

for(let i=0;i<checks.length;i++){
   
    $(checks[i]).on("change",function(){
        console.log((this.id).slice(13,));

        $("#products_"+(this.id).slice(13,)).slideToggle(500);

        // $('.products_cards_'+(this.id).slice(13,)).slick("unslick");

    })
    
}


let contentTop = $("#content").position();
$("#header_arrow").click(function(){
    $('html, body').animate({
        scrollTop: contentTop.top,
      }, 800);
 });

 let productsTop = $("#products_cont").position();
 $("#all_products_btn").click(function(){
     $('html, body').animate({
         scrollTop: productsTop.top,
       }, 500);
  });



let size_btns = $(".card_size_cont");
$(".card_sizes_block").slideToggle(0);
for(let i=0;i<size_btns.length;i++){
    $(size_btns[i]).on("click",function(){
        sizeBtn(this);
    })
}


function sizeBtn(elem){
    $(elem).children(".card_sizes_block").slideToggle(200);
}

