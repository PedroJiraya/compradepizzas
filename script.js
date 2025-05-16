const c = (el)=> document.querySelector(el)
const cs = (el)=> document.querySelector(all)


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML = (item.price).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    pizzaItem.querySelector('.pizza-item--img img').setAttribute('src',`./${item.img}`)


// parou na aula 3 a proxima é a 4


    c('.pizza-area').append(pizzaItem)
})                                                                                                                       