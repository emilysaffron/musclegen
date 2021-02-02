import FetchVideos from "./FetchVideos";

test("FetchVideos", () => {
  expect(FetchVideos()).toHaveLength(8);
  expect(FetchVideos()).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: "Resistance Band Back and Arm Workout",
      }),
    ]),
    expect.arrayContaining([
      expect.objectContaining({
        src: "https://www.youtube.com/embed/h879U6ZQOGU",
      }),
    ])
  );
});
