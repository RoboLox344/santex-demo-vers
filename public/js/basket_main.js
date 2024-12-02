

const INPUTS_FORM = document.querySelector('.inputs-basket-info-payment-method-wp');
/* console.log(INPUTS_FORM); */
INPUTS_FORM.addEventListener('click', function(e){
    var Input_Items = INPUTS_FORM.getElementsByTagName("input")
/*     console.log(Input_Items) */
    let Arr_Inputs_Items = Array.from(Input_Items);
/*     console.log(Arr_Inputs_Items) */
    Arr_Inputs_Items.forEach(({id}) => {
 /*        console.log(id); */
        /* console.log(e.target.id) */
        if(id == e.target.id){
            let a = document.getElementById(id);
            let b = a.parentElement.querySelector('.payment-method-radio-custom-before');
            b.classList.add('payment-method-radio-custom-before-active');
            let round = b.querySelector('.payment-method-radio-custom-after');
            round.classList.add('payment-method-radio-custom-after-active');
            console.log(`Радио ${id} актив`)
            let Payment = id;
            localStorage.setItem('Payment', JSON.stringify(Payment))
            console.log(a)
        }else if(id != e.target.id){
            let a = document.getElementById(id);
            let b = a.parentElement.querySelector('.payment-method-radio-custom-before');
            b.classList.remove('payment-method-radio-custom-before-active');
            let round = b.querySelector('.payment-method-radio-custom-after');
            round.classList.remove('payment-method-radio-custom-after-active');
            console.log(`Радио ${id} пасив`)
            
        }
    });
})




        /* id:'elll21',
        name:'Насосная группа   Rommer - Ду2 (без насоса)',
        img:'img/moi-do-dir.png',
        price: '3089789$',
        art:'23423423423',
        sale: '13%',
        sbname:'Котеальное оборудование',
        category:'Отполение',
        brend:'Valtec', */

document.addEventListener("DOMContentLoaded", function(){

    const RootBaket = document.querySelector('.basket-products-wp')//korz wp
    const InfoWp = document.querySelector('.basket-info-product-information-wp')//wp zakaz
    let ArrID = JSON.parse(localStorage.getItem('Basket'));//инфа из локалки
    ResultCountAll()
    BasketInfo(ArrID)
    CreateItemBasket(ArrID)

    function CreateItemBasket(base){
        base.forEach(element => {
            let  Html = '';
            Html += `   

                 <div class="favourites-item-wp " id='${element.id}'>
                                <div class="favourites-img-description-wp">
                                    <img src="${element.img}" alt="" class="favourites-img">
                                    <div class="favourites-description-wp">
                                    <p class="favourites-description">
                                        ${element.name}
                                    </p>
                                    </div>
                                </div>
        
                                <div class="favourites-price-button-wp">
                                    <div class="basket-count-wp">
                                        <p class="favourites-text">Кол-во</p>
                                        <div class="basket-count-counter-wp">
                                            <div class="basket-button-subtract" id="BasketSubtract">
                                                <svg width="10" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="1" x2="7" y2="1" stroke="white" stroke-width="2"/>
                                                </svg>
                                                    
                                            </div>
                                            <div class="basket-quantity">${element.count}</div>
                                            <div class="basket-button-addition" id="BasketAddition">
                                                <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                                                    <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                                    </g>
                                                </svg>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="basket-price-wp">
                                        <p class="favourites-text">Цена</p>
                                        <p class="favourites-price-text">${element.price}$</p>
                                    </div> 
                                    <div class="favourites-button-wp">
                                        <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg" class='svg-bsket-delete'>
                                            <path d="M21.789 10.6895C21.789 22.0498 23.4242 27.1848 12.4255 27.1848C1.42539 27.1848 3.09436 22.0498 3.09436 10.6895"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M23.8798 6.33476H1"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17.2929 6.33476C17.2929 6.33476 18.0417 1 12.4398 1C6.83921 1 7.58802 6.33476 7.58802 6.33476"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

            `;

            RootBaket.insertAdjacentHTML("beforeend", Html)
        });
    }
    
    function BasketInfo(date){
        let AllCount = 0;
        let Sale = 0
        let Sum =0
        date.forEach(element => {
            AllCount += element.count;
            Sum += element.price
        });
        Sale = (Sum * Sale) / 100
        let res = Sum - Sale
        BasketInfoRender(AllCount, Sum, Sale, res)
    }


    function BasketInfoRender(tovar, summ, sale, res){
        let Html = ''
        Html  +=`       

                            <div class="product-information-item-wp">
                                <p class="product-information-item"><b>${tovar}</b> товаров на сумму</p>
                                <p class="product-information-item">${summ}$</p>
                            </div>
                            <div class="product-information-item-wp">
                                <p class="product-information-item">Скидка</p>
                                <p class="product-information-item">-${sale}</p>
                            </div>
                            <div class="product-information-item-wp">
                                <p class="product-information-item">К оплате</p>
                                <p class="product-information-item">${summ}$</p>
                            </div>    


        `; 
        InfoWp.insertAdjacentHTML("beforeend", Html)
    }


    RootBaket.addEventListener('click', CartBasketDelte); 
    RootBaket.addEventListener('click', CartBasketMinus) ; //basket-button-subtract
    RootBaket.addEventListener('click', CartBasketPlus) ; 
 
    function  CartBasketDelte(event){
        const Btn = event.target.closest('.svg-bsket-delete'); 
        if(!Btn){
          return
        }
        let Id = Btn.parentElement.parentElement.parentElement.id;
        
        ArrID.splice(ArrID.findIndex(matchesEl), 1);

        function matchesEl(el) {
            return el.id === Id;
        }
        document.getElementById(Id).remove();
        InfoWp.innerHTML = ''; 
        BasketInfo(ArrID)
        ResultCountAll()
        localStorage.setItem('Basket', JSON.stringify(ArrID));
        console.log(ArrID)
    }



        
    function WarningPop (name){
        let DivWp  = document.createElement('div');
        let divText  = document.createElement('div');
        
        DivWp.classList.add('pop-basket-wp-warning');
        divText.classList.add('basket-pop-text');
        divText.textContent = `${name} `;
        DivWp.append(divText)
        setTimeout(function(){
          DivWp.classList.add('pop-basket-wp-active');
        }, 100)
        return{
          DivWp, 
          
        }
    };

    function ResultCountAll(){
        let res = 0
        ArrID.forEach(elem => {
          res += elem.count 
        });
        document.querySelector('.item-basket-pop-count').textContent = +res
      }


    function CartBasketMinus(event){
        const Btn = event.target.closest('.basket-button-subtract');
        if(!Btn){
            return
          }
        let Id = Btn.parentElement.parentElement.parentElement.parentElement.id; 
        console.log(Id)//basket-quantity
        let Elem  = document.getElementById(Id)
        ArrID.forEach(element => {
            if(element.id ==  Id){
                if(element.count <= 1){
                    let warning = 'Меньше одной единицы быть не может'
                    let Pop = WarningPop(warning)
                    let  a = document.body;
                    console.log(a);
                    a.append(Pop.DivWp);
            
                    setTimeout(function(){
                    document.querySelector('.pop-basket-wp-warning').remove();
                        
                    }, 3000);
    
                    }
                else if( element.count > 1){
                        
                            element.price -= element.price / element.count;
                            element.count -= 1
                            Elem.querySelector('.basket-quantity').textContent = +element.count;
                            Elem.querySelector('.favourites-price-text').textContent = `${element.price}$`
                            InfoWp.innerHTML = ''; 
                            BasketInfo(ArrID)
                    }
                
            }
        });
        ResultCountAll()
        localStorage.setItem('Basket', JSON.stringify(ArrID));
    }

    function CartBasketPlus(event){
        const Btn = event.target.closest('.basket-button-addition'); 
        if(!Btn){
            return
          }
        let Id = Btn.parentElement.parentElement.parentElement.parentElement.id
        console.log(Id)
        let Elem  = document.getElementById(Id)
        ArrID.forEach(element => {
            if(element.id ==  Id){
         
                element.price += element.price / element.count;
                element.count += 1
                Elem.querySelector('.basket-quantity').textContent = +element.count;
                Elem.querySelector('.favourites-price-text').textContent = `${element.price}$`
                InfoWp.innerHTML = ''; 
                BasketInfo(ArrID)  
            }
        });
        ResultCountAll()
        localStorage.setItem('Basket', JSON.stringify(ArrID));
    }

})
