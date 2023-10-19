// VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div>
      <h2>Course Preview</h2>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=wWgIAphfn2U'
        controls={true}
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default VideoPlayer;
