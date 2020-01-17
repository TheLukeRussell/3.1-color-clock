// (function () {
// 'use strict';
//   let $element = document.querySelector('span');
//   // console.log($element);
//
//   $element.textContent = 'Hello, Johnny';

//***********************************************//

// let $text = document.querySelector('#water');
// // console.log($text);
//
// console.log($text.textContent);
//
//
// console.log(document.querySelector('#water').textContent);

//**********************************************//



// let currentTime;

// *********************************************//

// // setInterval(function, ms);
// setInterval(() => {
//   currentTime = new Date ();
//   console.log(currentTime);
// }, 1000);

//*************************************************//


// let getCurrentTime = () => {
//   currentTime = new Date();
//   console.log (currentTime);
// };
//
//
// setInterval(currentTime, 1000);

//*************************************************//

// let $button = document.querySelector('button');
//
// $button.addEventListener('click', () => {
//   console.log('you just clicked a button');
// });

// })();

//**********************PRACTICE***********************
(function() {
  'use strict';

  const container = document.querySelector('.container');
  const color = document.querySelector('.color');
  const clock = document.querySelector('#clock');

  function startTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.querySelector('.container').style.backgroundColor = '#' + hr + min + sec;
    document.querySelector('#clock').textContent =
      hr + ":" + min + ":" + sec;

    let clock = document.querySelector('#clock');

    clock.onmouseover = logMouseOver;

    function logMouseOver() {
      clock.textContent = '#' + hr + min + sec;
    }


  // *****watching to see if color still changes**
    // document.querySelector('.color').textContent = '#' + hr + min + sec;
    //*********************************************
    // document.addEventListener(mouseover, function startTime(){document.quertSelector('#clock').textContent = '#' + hr + min + sec;});
    // `${hr}:${min}:${sec}`;

  let timeBar = (sec/60);
  let width = timeBar * 500;
  let pixelWidth = width + "px"
  document.querySelector('#underline').style.width = pixelWidth
}

  function checkTime(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }

  startTime();
  setInterval(startTime, 1000);

  //*****watching to see if color still changes**
  // document.querySelector('.color').textContent = '#' + hr + min + sec;
  //*********************************************


  // identified html element to target clock //
  // let $time
  // = document.querySelector('#clock')
  // console.log($time);
  // **************************************** //

}());
