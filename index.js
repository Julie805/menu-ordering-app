
import { menuArray } from './data.js'

//shows the order section of the app and gets control of the id of the clicked add button, passing the id to the handleAddClick function
document.addEventListener('click',function(event){
  if(event.target.dataset.add) {
    handleAddClick(event.target.dataset.add)
  }
  renderOrder()
})

//holds the clicked items (aka the order) - works.
const order =[]
//filters the menuArray data to take control of the correct menu object, then pushes the target object into the order array
function handleAddClick(itemId){
  const targetMenuObj = menuArray.filter(function(menuItem){
        return menuItem.id == itemId    
  })
  order.push(targetMenuObj)
}
//console.log(Object.values(order))
//Shows the order section, and maps over the order while rendering HTML based on what's in the array
function getOrderHtml() {
  const orderDiv = document.getElementById("order-div")
  orderDiv.classList.remove("hide-order")
  //let orderItems = ''
  
  //Object.values(order).forEach(function(orderItem) {
    //console.log(orderItem)
   // orderItems += `
    //<p>${orderItem.name}</p>`
  
  //return orderItems  
}

function renderOrder() {
  document.getElementById('order').innerHtmL = getOrderHtml()
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

function renderMenu() {
  document.getElementById('menu').innerHTML = getHtml()
}
renderMenu()

  
