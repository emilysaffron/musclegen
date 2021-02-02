import ConvertLabel from "./ConvertLabel";

test("ConvertLabel", () => {
  expect(ConvertLabel("UpperBody")).toBe("upper");
  expect(ConvertLabel("LowerBody")).toBe("lower");
});
