
// import {revProduct} from './revProduct'

const TabsCategori = document.querySelectorAll('.tabs-pointer');
console.log(TabsCategori);
TabsCategori.forEach(({id}) => {
    let Stroka = document.getElementById(id);
    const ContentList = document.querySelectorAll('.tabs-panel');
    Stroka.addEventListener('click', function(){
            if(id == 'Char'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Char'){
                        
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if( id == 'CharCont'){ 
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('OpisContent').classList.remove('tabs-panel--active');
                        document.getElementById('OtziviContent').classList.remove('tabs-panel--active');
                    } 
                });
            }else if (id == 'Opisanie'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Opisanie'){
                        
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if(id == 'OpisContent'){
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('CharCont').classList.remove('tabs-panel--active');
                        document.getElementById('OtziviContent').classList.remove('tabs-panel--active');
                    }
                });
            }else if (id == 'Otzivi'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Otzivi'){
                        
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if(id == 'OtziviContent'){
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('CharCont').classList.remove('tabs-panel--active');
                        document.getElementById('OpisContent').classList.remove('tabs-panel--active');
                    }
                });
            }

        
    });
    
});

async function getProdInfo (sku){
    try {
        const res = await fetch(`/santeh/id/${sku}`)
        if(!res.ok){
            throw new Error("error" , res.statu);      
        }
        const collection = ['sku',"name", null,"brand_id", "category", "price", "final_price", "disc" , "product_type", "description"]
        const data  = await res.json()
        const filtetData = Object.entries(data).filter((el) => el = (collection.includes(el[0])=== false && collection.includes(el[1])=== false))
        
        htmlList(filtetData)
        console.log(filtetData)
    } catch (error) {
        
    }
}
function htmlList(data){
    const wp = document.getElementById('charList')
    data.forEach((el) => {
        const {translete} = translate(el[0])
        // const {newString } = voidAutocompletion(translete, el[1])
        const html  = `
            <div class="list-char-wp">
                <div class="name-of-char">${translete}</div>
                <div class="char-dop-color">${el[1]}</div>
            </div>
        `
        wp.insertAdjacentHTML("beforeend", html)
    })
}
const dictionary = {
    "model": "Модель",
    "color": "Цвет",
    "availability": "Доступность",
    "power": "Мощность",
    "you": "ты",
    "goodbye": "до свидания",
    "thank you": "спасибо",
    "please": "пожалуйста",
    "yes": "да",
    "no": "нет",
};
/**change block */
function ChangeBlock(){
    const arrId = ['1', '2', '3', '4']
    document.body.addEventListener('click', Block)

    function Block(event){
        const Item  = event.target.closest('.dop-foto-prod-item')
        if(!Item){
            return
        }
        const src1 = Item.querySelector('.foto-prod-dop').getAttribute('src')
        console.log(src1)
        const Main = document.getElementById('main')
        console.log(Main)
        const scrMain = Main.querySelector('.img-tovar-main').getAttribute('src')
        Main.querySelector('.img-tovar-main').src  = `${src1}`
        const newSrc = scrMain
        Item.style.opacity = '0'
        Item.style.order = '100'
        Item.style.poinerEvents = 'none'
        setTimeout(() => {
            Item.remove()
            dopFhoto(Item.id, newSrc)
        }, 500);
        // dopFhoto(Item.id)
    }
    function MainPhoto(){

    }
    function dopFhoto(id, scrMain){
        const html = `
            <li id="${id}" class="dop-foto-prod-item">
                <img src="${scrMain}" alt="" class="foto-prod-dop">
            </li>
        `
        document.querySelector('.dop-foto-prod-wp').insertAdjacentHTML("beforeend", html)
    }
}
function voidAutocompletion(item ,item2){
    let newString  = item
    newString =  Array.from(newString)
    
    item2 = String(item2)
   
    let tottalLength = item.length + item2.length
    console.log(tottalLength)
    
    for (let index = 80; index > tottalLength; index--) {
        newString.push('_')
        
    }
    // console.log(newString.join(''))
    console.log(newString.join('').length + item2.length)
    return {newString : newString.join('')}
    
}
// Функция для перевода слова
function translate(word) {
    const lowercasedWord = word.toLowerCase(); 
    return {translete: dictionary[lowercasedWord] || word}; 
}
// const revProd  = new revProduct()
getProdInfo((document.getElementById('sku').textContent).split(':').slice(1).join(''))


ChangeBlock()



 