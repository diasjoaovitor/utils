const app = document.getElementById('porcentagem')
const percentInput = app.querySelector('#percent')
const valueInput = app.querySelector('#value')
const output = app.querySelector('output')

valueInput.addEventListener('change', e => {
  const percent = Number(percentInput.value) || 1
  const value = Number(e.target.value)
  const result = value + value * percent / 100
  output.textContent = result
})
