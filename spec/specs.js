describe('triangleTracker', function() {
  it("will take in 3 value that are all equal", function() {
    expect(triangleTracker(3, 3, 3)).to.equal(true);
  });

  it("will take in 2 value that are equal but not equal to the 3rd side", function(){
    expect(triangleTracker(2,2,3)).to.equal(true);
  });

  it("will take in 3 values that are not equal", function() {
    expect(triangleTracker(2,3,4)).to.equal(true);
  });

  it("take the sum of two sides is less than or equal to the 3rd side", function(){
    expect(triangleTracker(2,2,5)).to.equal(true);
  })
});
