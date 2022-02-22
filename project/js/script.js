

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
