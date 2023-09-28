const app = document.getElementById('codigoDeBarras')
const input = app.querySelector('input')
const output = app.querySelector('output')

function calcularCodigoDeBarrasDaUnidade(codigoDeBarrasDaEmbalagem) {
  const array = codigoDeBarrasDaEmbalagem.slice(1, -1).split('')
  const soma = array.reduce((total, numero, i) => total += i % 2 === 0 ? numero * 1 : numero * 3, 0)
  const ultimoDigito = (Math.floor(soma / 10) + 1) * 10 - soma
  const codigo = array.join('') + ultimoDigito
  return codigo
}

function copiarCodigo(codigo) {
  navigator.clipboard.writeText(codigo)
}

function notificarCodigoCopiado() {
  const notificacao = document.querySelector('.notificacao')
  notificacao.classList.remove('none')
  setTimeout(() => {
    notificacao.classList.add('none')
  }, 3000)
}

function render(content) {
  output.value = content
}

input.addEventListener('change', e => {
  const codigoDeBarrasDaEmbalagem = e.target.value
  if (codigoDeBarrasDaEmbalagem.length !== 14) {
    render('O código de barras da embalagem deve conter 14 dígitos')
    return
  }
  const codigoDeBarrasDaUnidade = calcularCodigoDeBarrasDaUnidade(codigoDeBarrasDaEmbalagem)
  render(codigoDeBarrasDaUnidade)
  copiarCodigo(codigoDeBarrasDaUnidade)
  notificarCodigoCopiado()
})