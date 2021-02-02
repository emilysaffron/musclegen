import FetchExercises from "./FetchExercises";

test("FetchExercises", () => {
  expect(FetchExercises()).toHaveLength(63);
  expect(FetchExercises()).toEqual(
    expect.arrayContaining([expect.objectContaining({ type: "upper" })]),
    expect.arrayContaining([expect.objectContaining({ type: "lower" })])
  );
});
