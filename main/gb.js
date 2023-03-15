var pclick = "blank"

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
} 



// $(document).ready(function (){
//   $('#com').click(function (){
//               $('#content').empty();
//       $('#content').prepend('#com1');
//   });
// });




function populate(id) {
  document.getElementById(pclick).style.visibility = "hidden";
  var div = document.getElementById(id)
  div.style.visibility = "visible";
  pclick = id
  // var imgSrc = "..."
  // div.innerHTML = "<img src=\'images/sfcard.png\' id=\"image\">";
}

// $(document).ready(function (){
//     $('.buttons button').click(function (){
//         $('#info').empty();
//         $('#info').html($("#" + $(this).data('link')).html());
//     });    
//  });