const iframe = document.querySelector('iframe')
const list = document.getElementById('appList')
const links = list.querySelectorAll('a')

iframe.onload = () => definirAlturaDoIframe(iframe)

function definirAlturaDoIframe(iframe) {
  iframe.height = 0
  iframe.height = iframe.contentWindow.document.documentElement.scrollHeight + 40
}

links.forEach(link => {
  link.onclick = e => {
    e.preventDefault()
    definirAlturaDoIframe(iframe)
    const { pathname } = e.target
    iframe.src = pathname
  }
})
