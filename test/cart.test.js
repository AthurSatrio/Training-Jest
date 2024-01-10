const { fetchCartsData } = require("./dataService");
const dummyCartData = require("../src/data/cart.js");

jest.mock("./dataService", () => ({
  fetchCartsData: jest.fn(),
}));

describe("Cart API Testing", () => {
  // Mocking fetchCartsData function to return dummyCartData
  fetchCartsData.mockReturnValue(dummyCartData);

  it("should compare the length of data carts with total", () => {
    const cartsData = fetchCartsData();
    // Test Case: compare the length of data carts with total
    expect(cartsData.length).toBe(dummyCartData.length);
    // Assertion: Validate other aspects or properties of cartsData and dummyCartData length
    // For example:
    expect(cartsData[0].id).toBe(1);
    expect(cartsData[1].quantity).toBe(2);
    // Add more assertions to validate the correctness of cartsData length and properties
  });
});
