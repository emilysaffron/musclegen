import FetchVideos from "../Helpers/FetchVideos";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledModal = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px;
`;
const StyledTitle = styled.button`
  background: #a8bbce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  align-items: center;
  border-radius: 20px;
  width: 385px;
  height: 50px;

  cursor: pointer;
`;
const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  align-items: center;
  border-radius: 20px;
  width: max-content;
  cursor: pointer;
`;

const Videos = () => {
  const [playVideo, togglePlayVideo] = useState(false);
  const [videoToPlaySrc, updateVideoToPlaySrc] = useState("");
  const videos = FetchVideos();

  const clickedLink = (src) => {
    updateVideoToPlaySrc(src);
    togglePlayVideo(!playVideo);
  };
  return !playVideo ? (
    videos.map((item) => {
      let title = item.title;
      let src = item.src;
      return (
        <StyledPage>
          <StyledTitle onClick={() => clickedLink(src)}>{title}</StyledTitle>
        </StyledPage>
      );
    })
  ) : (
    <StyledPage>
      <StyledModal>
        <BackButton onClick={() => togglePlayVideo(!playVideo)}>
          Back
        </BackButton>
        <iframe
          key={Math.random()}
          title="video"
          width="560"
          height="315"
          src={videoToPlaySrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </StyledModal>
    </StyledPage>
  );
};

export default Videos;
