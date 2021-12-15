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
