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

function startTime() {



  // let date = () => {
    let date = new Date();
    // console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    min = checkTime(min);
    sec = checkTime(sec);

  let $time = document.querySelector('#clock').textContent =

   `${hr}:${min}:${sec}`;

let time = setTimeout(function(){startTime()});
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// setInterval(date, 1000);

// identified html element to target clock //
// let $time
// = document.querySelector('.time')
// console.log($time);
// **************************************** //

// $time.textContent = ('date');


startTime();
