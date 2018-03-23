
function main(){
    $(".item").hide();
    $("#about").on('click', function(){
      $(".item").hide();
      $(".main").toggleClass("hidden");
      $(".item.about").toggle();
    })
    $("#cv").on('click', function(){
      $(".item").hide();
      $(".main").toggleClass("hidden");
      $(".item.cv").toggle();
    })
    $("#blog").on('click', function(){
      $(".item").hide();
      $(".main").toggleClass("hidden");
      $(".item.blog").toggle();
    })
    $("#image-credits").on('click', function(){
      $(".item").hide();
      $(".main").toggleClass("hidden");
      $(".item.image-credits").toggle();
    })
};



$(document).ready(main());
