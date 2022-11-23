
import { menuArray} from './data.js'

function getHtml() {
  let html = ''
  menuArray.forEach(function(menuItem) {
      html +=
      `<div>
          <p>${menuItem.emoji}</p>
          <h3>${menuItem.name}</h3>
          <p>${menuItem.ingredients}</p>
          <p>${menuItem.price}</p>
      </div>`
  })
  return html
}

function render() {
  document.getElementById('feed').innerHTML = getHtml()
}
render()
