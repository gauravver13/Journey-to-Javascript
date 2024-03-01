const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();          
//   clock.textContent = date.toLocaleTimeString();     :) this one also works almost same for the above, but what it it see the previous js files to know more! 
}, 1000);

