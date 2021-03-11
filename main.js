var bottoneMenu = $(".header-right > a");
var menu = $(".hamburger-menu");
var close = $(".close");

bottoneMenu.click(
  function(){
      menu.addClass("active");
      console.log("apro");
  }
);

close.click(
  function(){
    menu.removeClass("active");
    console.log("chiudo");
  }
);
