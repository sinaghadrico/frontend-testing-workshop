// 1. The method we want to test
function add(x, y) {
    return x + y
  }
  
  // 2. A test suite
  describe("add method", () => {
  
    // 3. A unit test
    it("should return 2", () => {
      // 4. An assertion
      expect(add(1, 1)).toBe(2)
    })
  })