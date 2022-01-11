// Code your solution in this file!
describe('selectingDrivers', function () {
  it('has the `returnFirstTwoDrivers` function to as its first element', function () {
    expect(selectingDrivers[0]).to.eql(returnFirstTwoDrivers);
  });

  it('has the `returnLastTwoDrivers` function to as its last element', function () {
    expect(selectingDrivers[1]).to.eql(returnLastTwoDrivers);
  });

  it('allows us to invoke either function from the array', function () {
    expect(selectingDrivers[0](drivers)).to.eql(['Sally', 'Bob']);

    expect(selectingDrivers[1](drivers)).to.eql(['Freddy', 'Claudia']);
  });
});