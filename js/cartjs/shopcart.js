const btn = document.querySelectorAll(".add-cart")
btn.forEach(function(button,index) {
	button.addEventListener("click", function(event){{
		var btnItem  = event.target
		var product = btnItem.parentElement
		var productImg = product.querySelector("img").src
		var productName = product.querySelector("h3").innerText
		var productPrice = product.querySelector("h2.price").innerText
		addcart(productPrice,productImg,productName)
		console.log(productPrice,productImg,productName)
	}})
})
function addcart(productPrice,productImg,productName) {
	var addtr = document.createElement("tr")	
	var trcontent = '<tr><td style="display:flex; align-items: center;"><img style="width: 100px;" src="'+productImg+'"><span>'+productName+'</span></td><td><p><span>'+productPrice+'</span></p></td><td><input style="width: 30px; outline: none;text-align: center;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-remove">Remove</span></td></tr>'
	addtr.innerHTML = trcontent
	var cartTable = document.querySelector("tbody")
	cartTable.append(addtr)
	carttotal()
	removeCart()
}

function carttotal (){
	var cartItem = document.querySelectorAll("tbody tr")
	var total2=0
	for (var i=0;i<cartItem.length;i++) {
		var quantity = cartItem[i].querySelector("input").value
		var ProductPrice =parseFloat(cartItem[i].querySelector("p").innerText.replace('$',''))
		total1 = quantity * ProductPrice
		total2 = total2 + total1
	}
	var carttotal = document.querySelector(".price-total span") 
	carttotal.innerHTML = total2
	inputchange()
	removeCart()
}

function removeCart () {
	var cartItem=document.querySelectorAll("tbody tr")
	for (var i=0;i<cartItem.length;i++) {
		var productT = document.querySelectorAll(".cart-remove")
	 	productT[i].addEventListener("click",function(event){
			var cartDelete = event.target
			var cartitemR = cartDelete.parentElement.parentElement.remove()
			carttotal()
		})
	}
}

function inputchange () {
	var cartItem=document.querySelectorAll("tbody tr")
	for (var i=0;i<cartItem.length;i++) {
		var inputValue =cartItem[i].querySelector("input")
	 	inputValue.addEventListener("change",function(){
	 		carttotal()
	 	})
	}
}
const cartshow = document.querySelector(".fa-shopping-cart") 
const cartbtn = document.querySelector(".fa-angle-double-right")
cartshow.addEventListener("click",function() {
	document.querySelector(".cart").style.right="0"
	document.querySelector(".cart").style.transition = '0.3s'
})
cartbtn.addEventListener("click",function() {
	document.querySelector(".cart").style.right="-100%"
	document.querySelector(".cart").style.transition = '0.3s'
})

