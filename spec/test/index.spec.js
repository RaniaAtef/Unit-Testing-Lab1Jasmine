const User = require("../../jasmineLab");

describe("Testing User", () => {
  // let user = new User("rania", 123456);
  let user;
  beforeAll(() => {
    user = new User("rania", 123456);
  });

  it("Should have one item, after adding one", () => {
    const item = {
      name: "hamada",
      price: 100,
    };
    user.addToCart(item);
    expect(user.cart).toHaveSize(1);
    expect(user.cart[0].price).toEqual(100);
    expect(user.cart[0].name).toEqual("hamada");
  });
  // describe("calculateTotalCartPrice", () => {
  it("Should return total of items price", () => {
    //check  total price integer
    expect(user.calculateTotalCartPrice()).not.toBeNaN;
    //check  total price = 100
    expect(user.calculateTotalCartPrice()).toEqual(100);
  });
  it("should call fake function", function () {
    let fakeObj = jasmine.createSpyObj([
      "isVerify",
      "goToVerifyPage",
      "returnBack",
    ]);
    fakeObj.isVerify.and.callFake(function () {
      return true;
    });
    let fakeFunction = jasmine.createSpy("deliveryOrder");
    user.checkout(fakeObj, fakeFunction);
    expect(fakeObj.goToVerifyPage).toHaveBeenCalled();
    expect(fakeObj.returnBack).toHaveBeenCalled();
    expect(fakeObj.isVerify).toHaveBeenCalled();
  });
});
