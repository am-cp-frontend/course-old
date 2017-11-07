const $btn = document.getElementById('counter')
let couter = 0

$btn.addEventListener('click', function() {
  $btn.textContent = ++couter
})