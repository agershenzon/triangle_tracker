describe('triangleTracker', function() {
  it("will take in 3 value that are all equal", function() {
    expect(triangleTracker(3, 3, 3)).to.equal("equilateral");
  });

  it("will take in 2 value that are equal but not equal to the 3rd side", function(){
    expect(triangleTracker(2,2,3)).to.equal("isoceles");
  });

  it("will take in 3 values that are not equal", function() {
    expect(triangleTracker(14,9,13)).to.equal("scalene");
  });

  it("take the sum of two sides is less than or equal to the 3rd side", function(){
    expect(triangleTracker(2,2,5)).to.equal("error");
  })

  it("take a number that is less than zero and return NaN", function() {
    expect(triangleTracker(0,0,0)).to.equal("please enter a number larger than 0");
  });
});
