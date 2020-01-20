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

  const $container = document.querySelector('.container');
  const $clock = document.querySelector('.clock');
  let isHovering = false;
  const $underline = document. querySelector('#underline')

//function to display current time
  function startTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    // variables to change color of elements
    let hex = (`${hr}${min}${sec}`);
    let hexCode = ('0' + Number(hr).toString(16)).slice(-2) + ('0' + Number(min).toString(16)).slice(-2) + ('0' + Number(sec).toString(16)).slice(-2);
    let time = $clock.textContent = (`${hr}:${min}:${sec}`);

      // changes color of background, line, and numbers to hex code
    $container.style.backgroundColor = ('#' + hexCode);
    $underline.style.backgroundColor = ('#' + (Number(hex).toString(16)).slice(-3) + (Number(hex).toString(16)).slice(-3));
    $clock.style.color = ('#' + (Number(hex).toString(16)).slice(-3) + (Number(hex).toString(16)).slice(-3));

    //adds hover effect//
    if (isHovering === false) {
      $clock.textContent = time;
    } else {
      $clock.textContent = ("#" + hexCode);
    }

    $clock.addEventListener("mouseenter", function(){isHovering = true});
    $clock.addEventListener("mouseout", function(){isHovering = false});
    
    // transforms hexcode to uppercase
    $clock.style.textTransform = "uppercase";

    // timebar effect
    let timeBar = (sec / 60);
    let width = timeBar * 500;
    let pixelWidth = width + 'px'
    document.querySelector('#underline').style.width = pixelWidth
  }

  // statement to add '0' in front of number if its lower than 10
  function checkTime(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }

  //recalling the function
  startTime();

  setInterval(startTime, 50);
}());
