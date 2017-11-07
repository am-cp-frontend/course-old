const $inupt = document.getElementById('name')
const $display = document.querySelector('.greet')

$inupt.addEventListener('keyup', function(event) {
  $display.textContent = 'Привет, ' + event.target.value
})