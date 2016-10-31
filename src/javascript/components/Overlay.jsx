import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store';
import {trackClickthrough} from '../utils/track';

const Overlay = ({clickthrough}) => {

  const onClick = () => trackClickthrough();

  return (
    <a
      onClick={onClick}
      href={clickthrough}
      target="_blank"
      className="overlay">
    </a>
  );
};

export default connect(mapStateToProps)(Overlay);

