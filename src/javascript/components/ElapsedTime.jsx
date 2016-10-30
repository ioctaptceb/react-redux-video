import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store.js';

const ElapsedTime = ({duration, currentPosition}) => {
  return (
    <div>
      {currentPosition} : {duration}
    </div>
  );
};

export default connect(mapStateToProps)(ElapsedTime);
