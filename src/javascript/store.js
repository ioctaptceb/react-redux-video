import { createStore } from 'redux';
import reducer from './reducers/reducer.js';

const initialState = {
  videoInput: 'https://archive.org/download/bacteria_friend_and_foe/bacteria_friend_and_foe_512kb.mp4'
};

const mapStateToVideoProps = (state) => ({
  videoInput: state.videoInput,
  duration: state.duration,
  playState: state.playState
});

const store = createStore(reducer, initialState);

export { mapStateToVideoProps, store };

