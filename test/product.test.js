const { fetchProduct } = require("./dataService");

describe("Product API Testing", () => {
    it("should return product data with id 1", async () => {
        const productData = await fetchProduct({ id: 1 });
        // Test Case 1: should return product data with id 1
        expect(productData.id).toBe(1);
        // Assertion: Validate other properties of the fetched product with ID 1
        expect(productData.title).toBe("Product Title");
        expect(productData.price).toBe(100);
        // Add more assertions to validate the correctness of productData
      });
      

      it("should check products.length with limit", async () => {
        const productsData = await fetchProduct({ limit: 5 });
        // Test Case 2: should check products.length with limit
        expect(productsData.length).toBe(5);
        // Assertion: Validate other aspects of the fetched productsData with limit 5
        expect(productsData[0].id).toBe(1);
        expect(productsData[1].title).toBe("Product Title 2");
        // Add more assertions to validate the correctness of productsData with limit
      });
      

      it("should have unique properties in each product", async () => {
        const productsData = await fetchProduct({ category: "electronics" });
        // Test Case 3: should have unique properties in each product
        const propertySet = new Set();
        let isUnique = true;
        productsData.forEach((product) => {
          if (!isUnique) return;
          const keys = Object.keys(product);
          keys.forEach((key) => {
            if (propertySet.has(key)) {
              isUnique = false;
              return;
            }
            propertySet.add(key);
          });
        });
        expect(isUnique).toBe(true);
        // Assertion: Validate other aspects or properties of productsData for electronics category
        // Add more assertions if necessary
      });
});  
