
import { menuArray } from './data.js'

//holds the clicked items of the order
const orderArray =[]
const form = document.querySelector('#form')

//controls all the click events on the app
document.addEventListener('click',function(event){
  if(event.target.dataset.add) {
    addMenuItem(event.target.dataset.add)
  } else if (event.target.dataset.index) {
    removeMenuItem(event.target.dataset.index)
  } else if (event.target.id = 'orderBtn')
    openPaymentModal()
})

//Controls the submit event of payment info. Prevent default cancels submitting the info and rendering in the browser string
form.addEventListener('submit', function(event){
  event.preventDefault()
  confirmOrder()  
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
  let orderHtml = `<h3 class="display-order">Your order</h3>`
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
    <button id="order-btn">Complete order</button>
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

//turns the form data into an object where the value of name can be used
function confirmOrder() {
  const formData = new FormData(form)
  const name = formData.get('full-name')
  document.querySelector('#payment-form').style.display = 'none'
  document.querySelector('#order-container').innerHTML = 
  `<h3 class="confirmation">Thanks ${name}! Your order is on its way!</h3>`
  orderArray.length = 0
}

function openPaymentModal(){
  document.querySelector('#payment-form').style.display = 'block'
}

function renderOrder() {
  document.getElementById('order-container').innerHTML = getOrderHtml()
}

function renderMenu() {
  document.getElementById('menu-container').innerHTML = getMenuHtml()
}
renderMenu()

  
