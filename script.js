let modalQt = 1;

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


            c('.cart--item--qt').innerHTML = modalQt
            c('.pizzaWindowArea').style.opacity = 0;
            c('.pizzaWindowArea').style.display = 'flex'

        
            setTimeout(() => {
                c('.pizzaWindowArea').style.opacity = 1;
            }, 100);

        
        })
})                                                                                                                       