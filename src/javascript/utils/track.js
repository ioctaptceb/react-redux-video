import {store} from '../store';
import {updateCurrentPosition, updateTotalTime} from '../actions/time';

let interval;

const dispatchChanges = (currentPosition) => {
  store.dispatch(updateCurrentPosition(currentPosition + 1));
  store.dispatch(updateTotalTime());
};

const trackQuarterly = (currentPosition, duration) => {
  if (currentPosition % (duration / 4) === 0) {
    const quarter = (currentPosition / duration) * 100;
    console.info(`Quarterly Event: ${quarter}%`); // eslint-disable-line no-console
  }
};

const trackAdImpression = (totalTime) => {
  if (totalTime >= 5) {
    console.info('Ad Impression Event'); // eslint-disable-line no-console
  }
};

const trackClickthrough = () => {
  console.info('Click Through Event'); // eslint-disable-line no-console
};

const track = (currentPosition, duration, totalTime, play) => {
  clearTimeout(interval);
  if (play) {
    interval = setTimeout(() => {
      dispatchChanges(currentPosition);
      trackQuarterly(currentPosition, duration);
      trackAdImpression(totalTime);
    }, 1000);
  }
};


export {track, trackClickthrough};

