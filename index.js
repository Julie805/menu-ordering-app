
import { menuArray } from './data.js'
//https://scrimba.com/scrim/cpJBkpUd

//holds the clicked items (aka the order) - works.
const orderArray =[]

//shows the order section of the app and gets control of the id of the clicked add button, passing the id to the addMenuItem function
document.addEventListener('click',function(event){
  if(event.target.dataset.add) {
    addMenuItem(event.target.dataset.add)
  } else if (event.target.dataset.index) {
    removeMenuItem(event.target.dataset.index)
  }
})

function getMenuHtml() {
  let menuHtml = ''
  menuArray.forEach(function(menuItem) {
      menuHtml +=
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
  return menuHtml
}

//Maps over the order array while rendering HTML based on what's in the array
function getOrderHtml() {
  let totalPrice = 0
  let orderHtml = `<h3 class="center">Your order</h3>`
  //adds items from the orderArray
  orderArray.forEach(function(item, index) {
    orderHtml += `
      <div class="order">
        <h3>${item.name}<span class="remove-btn" data-index=${index}>remove</span></h3
        <h3>$${item.price}</h3>
      </div>`
      totalPrice += item.price
  })
  orderHtml += `
    <div>
      <hr>
      <div class="order-line">
      <h3>Total price:</h3>
      <h3>$${totalPrice}</h3>
      </div>
    </div>
    <button>Complete order</button>
    `  
  return orderHtml  
   
}


//filters the menuArray data to take control of the correct menu object, then pushes the target object into the order array
function addMenuItem(itemId){
  orderArray.push(menuArray.filter(function(menuItem){
    return menuItem.id == itemId 
  })[0])
  renderOrder()
}

function removeMenuItem(itemIndex){
  orderArray.pop(menuArray.filter(function(itemIndex){
    return itemIndex.id === itemIndex
  }))
  renderOrder()
}

function renderOrder() {
  document.getElementById('order-container').innerHTML = getOrderHtml()
}

function renderMenu() {
  document.getElementById('menu').innerHTML = getMenuHtml()
}
renderMenu()

  
