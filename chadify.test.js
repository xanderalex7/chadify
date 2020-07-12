const chadify = require("./index");

describe("Chadify function", () => {
  const expectedResult = "Yes.";

  it("Should return Yes. if a string is passed", () => {
    const response = chadify("string");

    expect(response).toBe(expectedResult);
  });
});
