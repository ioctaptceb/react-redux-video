import React from 'react';

const VideoInput = ({onBlur, children}) => (
  <label> {children}
    <input onBlur={onBlur} />
  </label>
);

export default VideoInput;
