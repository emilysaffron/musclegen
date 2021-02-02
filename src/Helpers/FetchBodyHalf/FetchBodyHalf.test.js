import FetchBodyHalf from "./FetchBodyHalf";

test("FetchBodyHalf upper", () => {
  expect(FetchBodyHalf("upper")).toHaveLength(52);
  expect(FetchBodyHalf("upper")).toEqual(
    expect.arrayContaining([expect.objectContaining({ type: "upper" })])
  );
});

test("FetchBodyHalf lower", () => {
  expect(FetchBodyHalf("lower")).toHaveLength(11);
  expect(FetchBodyHalf("lower")).toEqual(
    expect.arrayContaining([expect.objectContaining({ type: "lower" })])
  );
});
