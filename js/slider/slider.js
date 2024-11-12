$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 980,
            settings: {
               adaptiveHeight: false,
            },
         },
      ],
   });
});
