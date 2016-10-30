import React from 'react';

const Seekbar = ({elapsedTime, onSeek}) => (
  <input type='range' onChange={onSeek} value={elapsedTime} />
);

export default Seekbar;

