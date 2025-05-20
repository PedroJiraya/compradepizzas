let modalQt = 1;
let cart = []
let modalKey = 0;

const c = (el)=> document.querySelector(el)
const cs = (el)=> document.querySelectorAll(el)


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML = (item.price).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    pizzaItem.querySelector('.pizza-item--img img').setAttribute('src',`./${item.img}`)
    c('.pizza-area').append(pizzaItem)
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault()
        
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt = 1;
        modalKey = key;

        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaInfo--actualPrice').innerHTML = (pizzaJson[key].price).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })


        c('.pizzaInfo--qt').innerHTML = modalQt
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex'

    
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 100);

    
    })
})                                                                                                                       

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click',closeModal)
})

function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none'
    },300)
}

c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    
    if(modalQt > 1){
        modalQt --
    }
    c('.pizzaInfo--qt').innerHTML = modalQt
})
c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt ++
    c('.pizzaInfo--qt').innerHTML = modalQt
})
cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected')
        e.currentTarget.classList.add('selected')
    })
})

c('.pizzaInfo--addButton').addEventListener('click',()=>{
    let size =  Number(c('.pizzaInfo--size.selected').getAttribute('data-key'))
    
    let identifier = pizzaJson[modalKey].id +'@'+size
    
    let key = cart.findIndex(item=> item.identifier == identifier)

    if(key > -1){
        cart[key].qt += modalQt
    }else{
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
            
        }
    )}
    updateCart()
    closeModal()
})
function updateCart(){
    if(cart.length >0){
        c('aside').classList.add('show')
        c('.cart').innerHTML = ''
        for(let i in cart){
            let pizzaItem =pizzaJson.find((item)=>item.id == cart[i].id)
            let cartItem = c('.models .cart--item').cloneNode(true)

            cartItem.querySelector('img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaItem.name

            c('.cart').append(cartItem)
        }
    }else{
        c('aside').classList.remove('show')
    }

    // minuto -06 aula 12
}















c('.backToMarket').addEventListener('click', backToMarket)

function backToMarket(){
    c('aside').classList.remove('show')
}

