import React from "react";
import PropTypes from "prop-types";
import { VideoDetailsContainer } from "../styles/videoDetailsStyles";

const VideoDetails = ({ viewers }) => {
  return (
    <VideoDetailsContainer>
      <p>{viewers} watching</p>
      <span id="smalltext"><p>ddm&apos;s Lightspeed stream</p></span>
    </VideoDetailsContainer>
  );
};

export default VideoDetails;

VideoDetails.propTypes = {
  viewers: PropTypes.number,
};
