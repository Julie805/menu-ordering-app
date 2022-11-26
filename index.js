
import { menuArray } from './data.js'

//grabs the id of the clicked add button and passes it to the handleAddClick function
document.addEventListener('click',function(event){
  if(event.target.dataset.add) {
    handleAddClick(event.target.dataset.add)
  }
})

//where I left off...
function handleAddClick(itemId){
  let order = ''

  <div>
    <h3>Your order</h3>
    <h3>Total price:</h3>
    <button>Complete order</button>

  </div>

  console.log(itemId, "hello")
}

function getHtml() {
  let html = ''
  menuArray.forEach(function(menuItem) {
      html +=
      `<div class="menu-item">
          <p class="emoji">${menuItem.emoji}</p>
          <div>
          <h3>${menuItem.name}</h3>
          <p>${menuItem.ingredients}</p>
          <p>$${menuItem.price}</p>
          </div>
          <span class="plus"><i class="fa-solid fa-circle-plus" data-add="${menuItem.id}"></i></span>
      </div>
      <hr></hr>`
  })
  return html
}

function render() {
  document.getElementById('feed').innerHTML = getHtml()
}
render()
