// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.autocomplete');
//     var instances = M.Autocomplete.init(elems, options);
//   });


//   // Or with jQuery

//   $(document).ready(function(){
//     $('input.autocomplete').autocomplete({
//       data: {
//         "Apple": null,
//         "Microsoft": null,
//         "Google": 'https://placehold.it/250x250'
//       },
//     });
//   });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $('a','nav').mouseover(function(){
    $('span','nav').animate({
        'width': $(this).width(),
         'left': $(this).position().left}
    ,'fast')
})