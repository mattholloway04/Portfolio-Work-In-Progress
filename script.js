// let time = document.getElementById('time');

// function currentTime() {
//   let date = new Date();
//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();
//   if (second < 10) {
//     second = '0' + second.toString();
//   }
//   let millisecond = date.getMilliseconds();
//   if (millisecond < 10) {
//     millisecond = '00' + millisecond.toString();
//   } else if (millisecond < 100) {
//     millisecond = '0' + millisecond.toString();
//   }

//   if (hour > 12) {
//     time.innerHTML = `${(hour -= 12)}:${minute}:${second}.${millisecond} PM`;
//   } else {
//     time.innerHTML = `${hour}:${minute}:${second}.${millisecond} AM`;
//   }
// }

function about(x) {
  let calculator = document.getElementById(x);
  if (calculator.classList.contains('about')) {
    calculator.classList.remove('about');
    calculator.classList.add('hidden');
  } else {
    calculator.classList.add('about');
    calculator.classList.remove('hidden');
  }
}
