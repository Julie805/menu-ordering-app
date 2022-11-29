
import { menuArray } from './data.js'

//grabs the id of the clicked add button and passes it to the handleAddClick function
document.addEventListener('click',function(event){
  document.classList.remove("hide-order")
  if(event.target.dataset.add) {
    handleAddClick(event.target.dataset.add)
  }
})

//where I left off. This function should add the items clicked to an object array, and then render the values in that array. Problem: the console log works, but nothing is being added to the array. Also renderOrder() seems to cause errors?//
function handleAddClick(itemId){
  //let order = document.getElementById('order')
  //const targetMenuObj = menuArray.filter(function(menuItem){
      //return menuItem.id === itemId
     // if (menuItem.name === itemId) {
        //order.document.addHTML = <p>Booya</p>
      //}
  //console.log(targetMenuObj)
}
   
  
  
    
 
  //renderOrder()




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

//function renderOrder() {
//  document.getElementById('order').innerHtmL = handleAddClick()
//}

