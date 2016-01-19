function triangleTracker(side1, side2, side3){
  // if value 0 or less alert to enter in value larger than 0
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    $("#results").hide();
    alert('Enter in a value larger than 0');
    return true;
  }
  
  if ((side1 + side2 <= side3) ||(side2 + side3 < side1) || (side3 + side1 < side2)) {
    $("#results").hide();
    alert('not a triangle, try again.');
    return true;
  } else if (side1 === side2 && side2 ===side3) {
    $("#results").show();
    $("#triangle").text("Equilateral");
    return true;
  } else if ((side1 === side2)||(side2 === side3)||(side3 === side1)) {
    $("#results").show();
    $("#triangle").text("Isoceles");
    return true;
  } else if ((side1 !== side2)&&(side2 !== side3)&&(side3 !== side1)) {
    $("#results").show();
    $("#triangle").text("Scalene");
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
