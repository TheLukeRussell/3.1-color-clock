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
  const $color = document.querySelector('.color');
  const $clock = document.querySelector('.clock');
  let isHovering = false;


  // mouseover change isHovering to true


  // mouseout change isHovering to false






  function startTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    // changes backgrund color to hex code
    let hex = (`${min}${sec}${min}`);
    let hexCode = (Number(hex).toString(16)).slice(-3) + (Number(hex).toString(16)).slice(-3);
    let time = $clock.textContent = (`${hr}:${min}:${sec}`);
    $container.style.backgroundColor = ('#' + hexCode);

    //adds hover effect//

    if (isHovering === false){
        $clock.textContent = time;                   //assigns the time to the content of clock in our HTML
      }else{
        $clock.textContent = hexCode;
      }

      $clock.addEventListener("mouseover", function(){isHovering = true});
      $clock.addEventListener("mouseout", function(){isHovering = false});

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
