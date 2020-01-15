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

(function () {
  'use strict';


  let currentTime = () => {
    currentTime = new Date();

    console.log(currentTime);
  };


  setInterval(currentTime, 1000);



})();
