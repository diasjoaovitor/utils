const somadores = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]

const app = document.getElementById('codigoDeBarras')
const input = app.querySelector('input')
const output = app.querySelector('output')

function separarCodigoDeBarras(codigoDeBarras) {
  const primeiroDigito = codigoDeBarras.slice(0, 1)
  const ultimoDigito = codigoDeBarras.slice(-1)
  const meio = codigoDeBarras.slice(1, codigoDeBarras.length - 1)
  return { primeiroDigito, ultimoDigito, meio }
}

function calcularCodigoDeBarras(primeiroDigito, ultimoDigito, meio) {
  const somador = somadores[primeiroDigito]
  const novoUltimoDigito = (Number(ultimoDigito) + somador) % 10
  return meio + novoUltimoDigito
}

function copiarCodigo(codigoDeBarras) {
  navigator.clipboard.writeText(codigoDeBarras)
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
    render('O código de barras deve conter 14 dígitos')
    return
  }
  const { primeiroDigito, ultimoDigito, meio } = separarCodigoDeBarras(codigoDeBarrasDaEmbalagem)
  if (!somadores[primeiroDigito]) {
    render('Validação não implementada! confira se existe o caso nas tabelas')
    return
  }
  const codigoDeBarras = calcularCodigoDeBarras(primeiroDigito, ultimoDigito, meio)
  render(codigoDeBarras)
  copiarCodigo(codigoDeBarras)
  notificarCodigoCopiado()
})
