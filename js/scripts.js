function triangleTracker(side1, side2, side3){

  if ((side1 + side2 <= side3) ||(side2 + side3 < side1) || (side3 + side1 < side2)) {
    alert('not a triangle');
    return true;
  } else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    alert('Enter in a value larger than 0');
    return true;
  } else if (side1 === side2 && side2 ===side3) {
    alert('equilateral');
    return true;
  } else if ((side1 === side2)||(side2 === side3)||(side3 === side1)) {
    alert('isoceles');
    return true;
  } else if ((side1 !== side2)&&(side2 !== side3)&&(side3 !== side1)) {
    alert('scalene');
    return true;
  }
}

$ (document).ready(function(){
  $("form#triangle-tracker").submit(function(event){
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var results = triangleTracker(side1, side2, side3);

    event.preventDefault();
  });
});


// if ((side1 === side2) && (side2 === side3) && (side1 !== 0)) {
//   alert("equilateral");
//   return true;
// } else if (((side1 === side2) && (side2 !== side3) || (side2 === side3) && (side1 !== side3) || (side1 === side3) && (side3 !== side2)) && (side1, side2, side3 !== 0)) {
//   alert("isoceles");
//   return true;
// } else if (((side1 + side2 > side3) && (side1 !== side2) || (side2 + side3 > side1) && (side2 !== side3) || (side1 + side3 > side2) && (side1 !== side3) && ((side1 !== 0) && (side2 !== 0) && (side3 !== 0)))) {
// alert("scalene");
// return true;
// } else if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
//   alert("try again");
//   return true;
// }
