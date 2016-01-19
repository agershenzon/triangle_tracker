describe('triangleTracker', function() {
  it("will return an equilateral triangle if all 3 values are equal", function() {
    expect(triangleTracker(3, 3, 3)).to.equal("equilateral triangle");
  });

  it("will return an isoceles triangle if only 2 values are equal", function(){
    expect(triangleTracker(2,2,3)).to.equal("isoceles triangle");
  });

  it("will return a scalene triangle if all 3 values are different", function() {
    expect(triangleTracker(14,9,13)).to.equal("scalene triangle");
  });

  it("will return a non-triangle if the sum of two sides are less than or equal to the 3rd side", function(){
    expect(triangleTracker(2,2,5)).to.equal("non-triangle - please enter in different values!");
  })

  it("will return not a vlid value, if value is less than or equal to 0", function() {
    expect(triangleTracker(0,0,0)).to.equal("not valid, please enter in a value larger than 0");
  });
});
