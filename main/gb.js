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
