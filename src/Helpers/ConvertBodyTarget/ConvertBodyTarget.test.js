import ConvertBodyTarget from "./ConvertBodyTarget";

test("ConvertBodyTarget", () => {
  expect(ConvertBodyTarget("UpperBody")).toBe("upper");
  expect(ConvertBodyTarget("LowerBody")).toBe("lower");
});
