import { sendBox } from '/send-box';

// step 1
// on click on each box make "sendBox" async request
// request should be: boxId, current timestamp
// print result of the call to the console

// step 2
// implement "isLoading" state of the box which sets when "sendBox" is send
// use class "box-loading" on the box to visualize this state

// step 3
// write code that will delay "sendBox" function calls for 1 second time window
// so the request is only made if there are no clicks for > 1 second
// if you continue to click every 0.5 seconds nothing will be send

// example usage

function clickedBox(id, date, box) {
  box.setAttribute('class', 'box-loading');
  try {
    sendBox(id, date)
      .then((d) => console.log(d))
      .then(() => box.setAttribute('class', `box-${id}`));
  } catch {
    console.log('error');
  }
}

const boxes = Array.from(document.querySelector('#boxes').children);
boxes.map((box) => {
  let timeoutId;
  box.addEventListener('click', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      clickedBox(box.getAttribute('data-id'), Date.now(), box);
    }, 1000);
  });
});
