export function sendBox(id, timestamp) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Box ${id} saved at ${timestamp}`);
    }, 400);
  });
}
