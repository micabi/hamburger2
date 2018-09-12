$(document).ready(function(){

  var menu = $('#openMenu');
  var nav = $('nav');
  var layer = $('#layer');
  var state = false;
  var scrollposition;

  menu.on('click', function(){
        nav.toggleClass('open');
        layer.toggleClass('open');

        if(state == false){
          scrollposition = $(window).scrollTop();
          $('body').addClass('fixed');
          $('body').css({'top': -scrollposition}); // window ではなく body に対して
          state = true;

          layer.on('click', function(){
            $(this).removeClass('open');
            nav.removeClass('open');
            $('body').removeClass('fixed');
            $('body').css({'top': 0});
            //window.scrollTo(0, scrollposition); //javascriptの書き方
            $(window).scrollTop(scrollposition); // jQueryの書き方
            state = false;
          });

        }else{
          $('body').removeClass('fixed');
          $('body').css({'top': 0});
          //window.scrollTo(0, scrollposition); //javascriptの書き方
          $(window).scrollTop(scrollposition); // jQueryの書き方
          state = false;
        }

    });

});
