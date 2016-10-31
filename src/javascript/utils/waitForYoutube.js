export default new Promise((resolve) => {
  if (!window.YT) {
    window.onYouTubeIframeAPIReady = () => {
      resolve(window.YT);
    };
  } else {
    resolve(window.YT);
  }
});
