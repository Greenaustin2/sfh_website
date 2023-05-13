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
}

// $(function () {
//   $(".logo-top").hover(
//     () => {
//       $(this).attr("src", "images/full_logo_brown.png");
//     },
//     function () {
//       $(this).attr("src", "images/full_logo.png");
//     }
//   );
// });
