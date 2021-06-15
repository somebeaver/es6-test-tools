export function output(...args) {
  let el = document.querySelector('#output')
  let current = el.innerText
  let argsArray = Array.from(args)
  
  el.innerText = `${current}<div>${argsArray.join(' ')}</div>`

  el.scrollTo(0, el.scrollHeight)
}