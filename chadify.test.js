const chadify = require("./index");

describe("Chadify function", () => {
  const expectedResult = "Yes.";

  it("Should return Yes. if a string is passed", () => {
    const response = chadify("string");

    expect(response).toBe(expectedResult);
  });

  it("Should return Yes. if an integer is passed", () => {
    const response = chadify(135);

    expect(response).toBe(expectedResult);
  });

  it("Should return Yes. if more than one value is passed", () => {
    const response = chadify("First value", "Second value");

    expect(response).toBe(expectedResult);
  });

  it("Should return Yes. if true is passed", () => {
    const response = chadify(true);

    expect(response).toBe(expectedResult);
  });

  it("Should return Yes. if false is passed", () => {
    const response = chadify(false);

    expect(response).toBe(expectedResult);
  });

  it("Should return Yes. if no value is passed", () => {
    const response = chadify();

    expect(response).toBe(expectedResult);
  });
});
