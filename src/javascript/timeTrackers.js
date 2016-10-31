export default (currentPosition, duration, totalTime) => {
  if (currentPosition % (duration / 4) === 0) {
    const quarter = (currentPosition / duration) * 100;
    console.info(`Quarterly Event: ${quarter}%`);
  }

  if (totalTime >= 5) {
    console.info('Ad Impression');
  }
};
