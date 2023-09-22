const sorteador = document.getElementById('sorteador')
const form = sorteador.querySelector('form')
const output = form.querySelector('output')

function sortear(n1, n2) {
  return Math.floor(Math.random() * n2 + n1) 
}

function render(resultado) {
  output.value = resultado
  output.classList.add('sorteado')
  form.removeChild(output)
  form.appendChild(output)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const [ input1, input2 ] = e.target.elements
  const n1 = Number(input1.value)
  const n2 = Number(input2.value)
  const resultado = sortear(n1, n2)
  render(resultado)
})
