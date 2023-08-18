import React from "react";
import PropTypes from "prop-types";
import {
  VideoDetailsContainer,
  DetailsTop,
  ViewerTag,
} from "../styles/videoDetailsStyles";

const VideoDetails = ({ viewers }) => {
  return (
    <VideoDetailsContainer>
      <DetailsTop>
        <ViewerTag>
          <span>{viewers} watching</span>
        </ViewerTag>
      </DetailsTop>
    </VideoDetailsContainer>
  );
};

export default VideoDetails;

VideoDetails.propTypes = {
  viewers: PropTypes.number,
};
