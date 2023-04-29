
// productNameel.forEach((namePro)=>{
//  const productName= namePro.innerText
//  console.log(productName)
// })


// console.log(productName)
const addToCart=document.querySelectorAll('.btn')

const cartItem=document.querySelector('.cart')


addToCart.forEach((btn )=> {
 btn.addEventListener('click',()=>{

  const product=btn.parentNode.parentNode;
  const productName=product.querySelector('.name').innerText




  const productPrice=product.querySelector(' span').innerText;

   const productImage=product.querySelector('img').src;
  
   
   console.log(productImage)
  

  // console.log(`product: ${productName}  price:${productPrice}`)

//  cart delelet button create section
  const cart=document.querySelector('.cart-item');
  const removeEl=document.createElement('button')
  removeEl.classList.add('delete')
  removeEl.innerText='remove';
  cart.appendChild(removeEl)


  // this js show how many item were selected from the drop down selected option (1-10) numbers
  const inputNumber=product.querySelector('.item').value;
  const inputNumberSecion=document.createElement('p')
  const toatlOneItemPrice=inputNumber*productPrice;
  inputNumberSecion.innerText=`${inputNumber} $ ${toatlOneItemPrice}`;
  cart.appendChild(inputNumberSecion)
  console.log(inputNumber)
 updateScore(toatlOneItemPrice)
   
    //remove button
   


  removeEl.addEventListener('click',()=>{
    cartProductName.remove();
    Image.remove()
    removeEl.remove()
    inputNumberSecion.remove();
    updateScore(`${-toatlOneItemPrice}`)
  })
  
 
  const cartProductName=document.createElement('li')
  const Image=document.createElement('img')
  // const deleteEl=document.createElement('button')

  Image.classList.add('cartImg')
  Image.src=productImage;
  cart.appendChild(Image)
  cartProductName.innerText=` product name : ${productName}\n $ ${productPrice}`;
  
  cart.appendChild(cartProductName)



// updateScore(productPrice)
 
 })
});


// total price section contain total price,order placed button address button
const totalprice=document.querySelector('.totalprice');

total=0;
function updateScore(price){

// 
total+=Number(price)

 totalprice.innerText=`total $${total}`


 const order=document.createElement('button')
 order.innerText+='place order';
order.classList.add('placeOrder')
totalprice.appendChild(order)
//placeorder
const placeOrder=document.querySelector('.placeOrder');
const addressForm=document.querySelector('.addressForm');
placeOrder.addEventListener('click',()=>{
  if(total===0){
    alert('update the cart')
   }else if(total>0){
    if(addressForm.classList.contains('showAddress')){
      addressForm.classList.remove('showAddress')
    }else{
      addressForm.classList.add('showAddress')
     
    

   }

  }
 
})
// address form close btn

const addressCloseBtn=document.querySelector('.address-close-btn')

addressCloseBtn.addEventListener('click',()=>{
  if(addressForm.classList.contains('showAddress')){
    addressForm.classList.remove('showAddress')
   
}
})

// address form last stage btn ordre place it will popup the message it order sucessfully close the section also in this stage


const checkoutBtn=document.querySelector('.checkout-btn');
checkoutBtn.addEventListener('click',()=>{

  
 
  setTimeout(()=>{
    checkoutBtn.value='loading.....'
    setTimeout(()=>{
      alert(`order sucessfully placed \n you paid $${total}`)
      addressForm.classList.remove('showAddress')
      checkoutBtn.value='Continue to checkout'
    },2000)
  },0000)
     
  // alert('hello')
  // addressForm.classList.remove('showAddress')
})


// address secction in cart section
// const address=document.createElement('button');
// address.innerText='add address';
// address.classList.add('addAddress')
// totalprice.appendChild( address)

   
}

//cart show and close section 


const addtocartbtn=document.querySelector('.addtocart')
const cartBtn=document.querySelector('.cartSection')

cartBtn.addEventListener('click',()=>{
if(addtocartbtn.classList.contains('show')){
  addtocartbtn.classList.remove('show')
 
}else{
  addtocartbtn.classList.add('show')
  addtocartbtn.classList.remove('hide')
}
 
})

const closeBtn=document.createElement('button')
closeBtn.innerText='x';
closeBtn.classList.add('close-btn')
addtocartbtn.appendChild(closeBtn)

// const cartClose=document.querySelector('.close-btn');

closeBtn.addEventListener('click',()=>{
  if(addtocartbtn.classList.contains('hide')){
     addtocartbtn.classList.remove('hide')
  }else{
    addtocartbtn.classList.add('hide')
    addtocartbtn.classList.remove('show')
  }
})


// size and color section action section 


const imageSection=document.querySelector('.img-section');
const hiddenSection=document.querySelectorAll('.hiddenSection');
const btns=document.querySelectorAll('.img-btn')


const removeImg=document.querySelector('.selected')


imageSection.addEventListener('click',(e)=>{

  const id=e.target.dataset.id;

  if(id){
    btns.forEach((btn)=>{
     removeImg.remove();
      btn.classList.remove('live')
    }) 
   e.target.classList.add('live')

   hiddenSection.forEach((box)=>{
   
    box.classList.remove('live')
   })
   const element=document.getElementById(id);
   element.classList.add('live')

  }
})



// // pendrive differnt model show action




const imageSectionTwo=document.querySelector('.img-section-2',);
const hiddenSectionTwo=document.querySelectorAll('.hiddenSection-2',);
const btnsTwo=document.querySelectorAll('.img-btn-2',)


const removeImgTwo=document.querySelector('.selected-2')


imageSectionTwo.addEventListener('click',(e)=>{

  const id=e.target.dataset.id;

  if(id){
    btns.forEach((btn)=>{
     removeImgTwo.remove();
      btn.classList.remove('live')
    }) 
   e.target.classList.add('live')

   hiddenSectionTwo.forEach((box)=>{
   
    box.classList.remove('live')
   })
   const element=document.getElementById(id);
   element.classList.add('live')

  }
})


// js-toogle dark
const navWrapper=document.querySelector('.nav-wrapper')
const searchSectionInput=document.querySelector('.searchSection input')
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
        navWrapper.classList.add('navdark')
        searchSectionInput.classList.add('searchboxColor')
        searchSvg.classList.add('searchSvgColorChange')
    } else {
        body.classList.remove('dark-theme');
        navWrapper.classList.remove('navdark')
        searchSectionInput.classList.remove('searchboxColor')
        searchSvg.classList.remove('searchSvgColorChange')
    }
});



// pop up search box action start here
//main image section marggin top action also here
   //input section up ward
const ImgSection=document.querySelector('.imgSection')
const searchSvg=document.querySelector('.searchSection svg')

searchSvg.addEventListener('click',()=>{
  if(searchSectionInput.classList.contains('searchboxShow')){
    searchSectionInput.classList.remove('searchboxShow')
    
    ImgSection.classList.remove('img-marginTop')
  }else{
    searchSectionInput.classList.toggle('searchboxShow')
    ImgSection.classList.remove('img-marginTop')
    ImgSection.classList.toggle('img-marginTop')
  }
})

// SWIPER JS AP ACTION HERE
//blog swippper
/*swiper */
var swiper = new Swiper(".image-section", {
  loop:true,
  spaceBetween:30,
  centereSlides:true,
  autoplay:{
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
