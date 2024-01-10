const { fetchProduct } = require("./dataService");
const { convertToRupiah, countDiscount, setProductsCard } = require("./dataUtils");

describe("Product Utility Testing", () => {
  let productData;

  beforeAll(async () => {
    // Setup: Fetch product data from API and store it in productData
    productData = await fetchProduct({ category: "test" });
  });

  it("should convert price to rupiah correctly", () => {
    const price = 100000;
    const convertedPrice = convertToRupiah(price);
    expect(convertedPrice).toBe("Rp 1.543.600.000");
    // Add more assertions to validate the conversion
  });
  

  it("should handle zero price correctly", () => {
    const price = 0;
    const convertedPrice = convertToRupiah(price);
    expect(convertedPrice).toBe("Rp 0");
    // Add more assertions to validate the handling of zero price
  });
  

  it("should calculate discount accurately", () => {
    const price = 20000;
    const discount = 20;
    const discountedPrice = countDiscount(price, discount);
    expect(discountedPrice).toBe(16000);
    // Add more assertions to validate the discount calculation
  });
  

  it("should handle no discount scenario correctly", () => {
    const price = 50000;
    const discount = 0;
    const discountedPrice = countDiscount(price, discount);
    expect(discountedPrice).toBe(price);
    // Add more assertions to validate scenarios without discount
  });
  

  it("should set correct key for products card", () => {
    const products = setProductsCard(productData);
    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toHaveProperty("id");
    expect(products[0]).toHaveProperty("title");
    expect(products[0]).toHaveProperty("price");
    expect(products[0]).toHaveProperty("after_discount");
    expect(products[0]).toHaveProperty("image");
    // Add more assertions to validate the keys in the returned products
  });  
});
