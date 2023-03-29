// import "fslightbox";

let pclick = "blank";

let toggler = document.getElementsByClassName("caret");
let i;

// caret toggle functionality
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

// Makes visible respective content div on right side of screen
// hides previously selected div
function populate(id) {
  document.getElementById(pclick).style.display = "none";
  let div = document.getElementById(id);
  div.style.display = "grid";
  pclick = id;
  // var imgSrc = "..."
  // div.innerHTML = "<img src=\'images/sfcard.png\' id=\"image\">";
}

$().

// h2 text stretch function
// $.fn.strech_text = function () {
//   var elmt = $(this),
//     cont_width = elmt.width(),
//     txt = elmt.html(),
//     one_line = $('<span class="stretch_it">' + txt + "</span>"),
//     nb_char = elmt.text().length,
//     spacing = cont_width / nb_char,
//     txt_width;

//   elmt.html(one_line);
//   txt_width = one_line.width();

//   if (txt_width < cont_width) {
//     var char_width = txt_width / nb_char,
//       ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

//     one_line.css({ "letter-spacing": ltr_spacing });
//   } else {
//     one_line.contents().unwrap();
//     elmt.addClass("justify");
//   }
// };

// $(document).ready(function () {
//   $(".stretch").each(function () {
//     $(this).strech_text();
//   });
// });

// Image Lightbox Gallery
// fsLightboxInstances["first-lightbox"].props.onOpen = function () {
//   console.log("The first lightbox has opened.");
// };
// fsLightboxInstances["second-lightbox"].props.onOpen = function () {
//   console.log("The second lightbox has opened.");
// };

// $(document).on("click", '[data-toggle="lightbox"]', function (event) {
//   event.preventDefault();
//   $(this).ekkoLightbox();
// });

// Image Lightbox Gallery

// $(document).ready(function (){
//   $('#com').click(function (){
//               $('#content').empty();
//       $('#content').prepend('#com1');
//   });
// });

// $(document).ready(function (){
//     $('.buttons button').click(function (){
//         $('#info').empty();
//         $('#info').html($("#" + $(this).data('link')).html());
//     });
//  });

// console.log(`${div}`)
// Push()
// pop()
// condition ? expression1 : expression2
// switch(expression) {
//   case:
//   case:
//   default:
// }
