const FetchVideos = () => {
  let data = require("../Data/videos.json");
  let videos = data.body;

  return videos;
};

export default FetchVideos;
