const chadify = require("./index");

describe("Chadify function", () => {
  const expectedResult = "Yes.";

  it("Should return Yes. if a string is passed", () => {
    const response = chadify("string");

    expect(response).toBe(expectedResult);
  });

  it("Should return Yes. if false is passed", () => {
    const response = chadify(false);

    expect(response).toBe(expectedResult);
  });
});
