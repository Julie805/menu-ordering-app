
import { menuArray } from './data.js'

//shows the order section of the app and gets control of the id of the clicked add button, passing the id to the handleAddClick function
document.addEventListener('click',function(event){
  const orderDiv = document.getElementById("order-div")
  orderDiv.classList.remove("hide-order")
  if(event.target.dataset.add) {
    handleAddClick(event.target.dataset.add)
  }
})

const order =[]
//filters the menuArray data to take control of the correct menu object, then pushes the target object into the order array
function handleAddClick(itemId){
  const targetMenuObj = menuArray.filter(function(menuItem){
        return menuItem.id == itemId    
  })
  order.push(targetMenuObj)
  //console.log(order)
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

function renderOrder() {
  document.getElementById('order').innerHtmL = `
    <p>${order.name}</p>
    <p>$${order.price}</p>
    `

}

renderOrder()
  
