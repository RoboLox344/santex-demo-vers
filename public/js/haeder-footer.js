

document.body.classList.add('dark-theme');
//пуш cookie

// if(JSON.parse(sessionStorage.getItem('coockieAccept')) != null){

// }
/**куки уведомление  */
JSON.parse(sessionStorage.getItem('coockieAccept')) ? 
JSON.parse(sessionStorage.getItem('coockieAccept')) === true ? null : CookieModal()
:CookieModal()

function CookieModal(){
  let wp  = document.createElement('div')
  wp.classList.add('cookie-wp')
  let textWp = document.createElement('div')
  let text1 = document.createElement('p')
  text1.textContent = 'Наш сайт использует COOKIE.'
  let text2 = document.createElement('p')
  text2.textContent = 'Продолжая им пользоваться, вы соглашаетесь на обработку персональных данных в соответствии с '
  let Href  = document.createElement('a')
  Href.classList.add('cookie-href')
  Href.href = `https://normativ.kontur.ru/document?moduleId=1&documentId=476043`
  Href.text  = 'полтитикой конфиденциальности.'
  let button = document.createElement('button')
  let div  = document.createElement('div')
  let button2 = document.createElement('button')
  button.classList.add('cookie-btn')
  button2.classList.add('cookie-btn2')
  button.textContent = 'Принять'
  button2.textContent = 'Продолжить'
  div.classList.add('cookie-btn-wp')
  div.append(button, button2)
  text2.append(Href)
  textWp.append(text1, text2)
  wp.append(textWp, div)
  document.body.append(wp)
  
  button.addEventListener('click', function(){
    sessionStorage.setItem('coockieAccept', true)
    CookieWindowRemove()
  })
  button2.addEventListener('click', function(){
    sessionStorage.setItem('coockieAccept', true)
    CookieWindowRemove()
  })



  function CookieWindowRemove(){
    wp.remove()
  }
}

const LoginButton = document.querySelector('.button-login');//кнопка логина 
const ModalLogin = document.querySelector('.modal-login');//серый экран заднего фона входа
const BtnLoginEx = document.querySelector('.button-modal--exit'),//кнопка выхода на форме входа
BtnLoginExx = document.getElementById('Button-ex-login');//кнопка выхода на форме 
const ModalWinowEntry = document.querySelector('.wraper-modal-entry');// окна входа
const ModalWinowLogin = document.querySelector('.wraper-modal-login');// окна регситрации 
const TransitionToRegistration = document.querySelector('.modal-text-regist'),//кнопка перехода к регистрации
TransitionToLogin = document.querySelector('.modal-text-entry');//кнопка перехода к входа
const ButtonCatalog = document.querySelector('.drop-button');//кнопка для выпад списка каталог
const ModalCatalogList = document.querySelector('.modal-catalog');
const LoginButtonDown = document.querySelector('.z-index-button-burger');//кнопка логина mob
//размер окна
if(window.innerWidth <= 480){
  document.querySelector('.loader-example') ? null: MobileHeaderRender()
    const circles = document.querySelectorAll('.circle');

    function update(time) {
        circles.forEach((circle, index) => {
            const angle = time * (2 - index / 2) / 5;
            circle.setAttribute('transform', `rotate(${angle} 0 0)`);
        });

        requestAnimationFrame(update);
    }

    update(0);
}
window.addEventListener('resize', () => {
  
  if(window.innerWidth <= 480){
    
    document.querySelector('.loader-example') ? null: MobileHeaderRender()
    const circles = document.querySelectorAll('.circle');

    function update(time) {
        circles.forEach((circle, index) => {
            const angle = time * (2 - index / 2) / 5;
            circle.setAttribute('transform', `rotate(${angle} 0 0)`);
        });

        requestAnimationFrame(update);
    }

    update(0);
    
  }else if (window.innerWidth >= 481){
    document.querySelector('.loader-example') ? document.querySelector('.loader-example').remove() : null
  }
});
//онка регистрации
LoginButton.onclick = function aaa(){
    // let UserStatus = JSON.parse(localStorage.getItem('User'))
    // if(UserStatus != null){
    //   if(UserStatus.status == 'active'){
    //     location.replace("./acc.html");
        
    //     return
    //   }
    // }
    ModalLogin.classList.add('modal-login-active');
    ModalWinowEntry.classList.add('login-activ');
    
    
    document.body.classList.add('no-scroll-body')
    console.log('fddfd')

    BtnLoginEx.addEventListener('click', function CloseModalLogin(){
      ModalLogin.classList.remove('modal-login-active');
      ModalWinowLogin.classList.remove('login-activ');
      document.body.classList.remove('no-scroll-body')
    });

    TransitionToLogin.addEventListener('click', function OpenLogin(){
      ModalWinowLogin.classList.remove('login-activ');
      ModalWinowEntry.classList.add('login-activ');
      
    });
  
    TransitionToRegistration.addEventListener('click', function OpenRegister(){
      ModalWinowEntry.classList.remove('login-activ');
      ModalWinowLogin.classList.add('login-activ');
    });

    BtnLoginExx.addEventListener('click', function CloseModalRegister(){
      ModalLogin.classList.remove('modal-login-active');
      ModalWinowLogin.classList.remove('login-activ');
      document.body.classList.remove('no-scroll-body')
    });

    
  };

  

    
  
//выпад меню каталог
document.addEventListener("DOMContentLoaded", function() { 
ButtonCatalog.addEventListener('click', function CatalogList(){
  ModalCatalogList.classList.add('md-cat-acitv');
});
window.addEventListener("click", function (event) {
  if (!event.target.matches(".drop-button")) {
    ModalCatalogList.classList.remove('md-cat-acitv');
  }
});
});

//появление контента
document.addEventListener('DOMContentLoaded', function() {

  let blocks = document.querySelectorAll('.container');



  function checkBlocksVisibility() {

    let windowHeight = window.innerHeight;



    blocks.forEach(block => {

      let blockPosition = block.getBoundingClientRect().top;



      if (blockPosition < windowHeight - 100) {

        block.style.opacity = "1";

        block.style.transform = "translateY(0)";

      } else {

        block.style.opacity = "0";

        block.style.transform = "translateY(50px)";

      }

    });

  }



  checkBlocksVisibility();



  window.addEventListener('scroll', checkBlocksVisibility);

});

const ROOT_BASKET = document.body;

const Button_basket_open = document.querySelector('.button-cart');

/* redner basket */
/* function BasketRender (){
  let HtmlModalBasket = '';
  HtmlModalBasket += `
    <!-- модалльная корзина-->
    <div class="kozina-modal-container-wp">
        <div class="kozina-modal-wp">
            <div class='basket-pop-promo-text'>Может че нить купишь уже, тварь</div>
        </div>
    
        <div class="buttons-korzina-wp">
            <a class="button button-korzina" href="korzina.html" id="">Оформить</a>
            <button class="button button-korzina" id="BasketClose">Закрыть</button>
            <div class='total-price-wp'>
                <div class='total-basket-pirce-text'>Общая сумма:</div>
                <div class='total-basket-pirce-wp'>
                    <div class='total-basket-pirce'>0</div>
                    <div class='valuta-basket'>$</div>
                </div>
            </div>
        </div>
    </div>
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  `;
  ROOT_BASKET.insertAdjacentHTML("beforeend", HtmlModalBasket);
};
BasketRender(); */
/* ......................................................................... */
const active = document.querySelector('.kozina-modal-container-wp');
Button_basket_open.addEventListener('click', function(){
  active.classList.toggle('kozina-modal-container-wp-active');
});
/* ........................................................................ */
const Button_Basket_Close = document.getElementById('BasketClose');
Button_Basket_Close.addEventListener('click', function(){
  active.classList.remove('kozina-modal-container-wp-active');
});
/* basket mob-------------------------------------------------------------- */
const Button_basket_open_mob = document.querySelector('.button-cart-mob');
Button_basket_open_mob.addEventListener('click', function(){
  active.classList.toggle('kozina-modal-container-wp-active');
  
});



/* ------------------------мобилка меню каталог--------------------------- */
const Button_Burger = document.querySelector('.header-burger-mob');
Button_Burger.addEventListener('click', function(){
  let Down_menu = document.querySelector('.menu-down-nav');
  let Block_Menu_Down =  document.querySelector('.menu-down-wp')
  Block_Menu_Down.classList.toggle('menu-down-wp-active')
  Down_menu.classList.toggle('menu-down-nav-active')
  let Sub_Cat = document.querySelector('.menu-down-category')
  Sub_Cat.classList.remove('menu-down-category-active')
  Down_menu.classList.remove ('menu-down-nav-active-step2')
})
const Buttun_CAtalog_Doown = document.getElementById('CatalogDown')
Buttun_CAtalog_Doown.addEventListener('click', function(){
  let Sub_Cat = document.querySelector('.menu-down-category')
  Sub_Cat.classList.toggle('menu-down-category-active')
  let Down_menu = document.querySelector('.menu-down-nav');
  Down_menu.classList.toggle('menu-down-nav-active-step2')
})

/* мобилка пущырьки ------------------------------------------ */
const Button_Down_Menu = document.querySelector('.round-menu-wp');
Button_Down_Menu.addEventListener('click', function(){
  let fers = document.querySelector('.round-menu-down-items-1')
  let Second = document.querySelector('.round-menu-down-items-2')
  let TriSukaBlyat = document.querySelector('.round-menu-down-items-3')
  fers.classList.toggle('round-menu-down-items-1-active')
  Second.classList.toggle('round-menu-down-items-2-active')
  TriSukaBlyat.classList.toggle('round-menu-down-items-3-active')
  
})

const Btn = document.querySelector('.svg-burger')
let plaz = document.querySelector('.wp-nav')
  BurderRender(plaz)
  document.addEventListener("DOMContentLoaded", function() {
Btn.addEventListener('click', function(){
  let a = document.querySelector('.List-Mod-burger-wp')
  a.classList.toggle('List-Mod-burger-wp-active')
})})


function BurderRender(btn){
  let Html = '';
  Html +=`
      <div class='List-Mod-burger-wp'>
        
            <ul class="wp-nav list-mob-nav">
                <li class="header-item-list list-mob">
                    <a id="Katalog" class="nav-text drop-button">Каталог</a>
                </li>
                <li class="header-item-list list-mob">
                    <a href="#" class="nav-text">Доставка</a>
                </li>
                <li class="header-item-list list-mob">
                    <a href="brends.html" class="nav-text">Бренды</a>
                </li>
                <li class="header-item-list list-mob">
                    <a href="#" class="nav-text">Контакты</a>
                </li>
            </ul>
        
      </div>
  `;
  btn.insertAdjacentHTML("beforeend", Html)
}
document.body.addEventListener('click', CloseBurgerFerst)
function CloseBurgerFerst(event){
  const Btn = event.target.closest('.nav-text')
    if(!Btn){
      let Sub_Cat = document.querySelector('.menu-down-category')
      Sub_Cat.classList.remove('menu-down-nav-active')
    }
}
document.body.addEventListener('click', CloseMobBuble)

function CloseMobBuble(event){
    const Btn = event.target.closest('.round-menu-wp');
    if(!Btn){
      let fers = document.querySelector('.round-menu-down-items-1')
      let Second = document.querySelector('.round-menu-down-items-2')
      let TriSukaBlyat = document.querySelector('.round-menu-down-items-3')
      fers.classList.remove('round-menu-down-items-1-active')
      Second.classList.remove('round-menu-down-items-2-active')
      TriSukaBlyat.classList.remove('round-menu-down-items-3-active')
  } 
}
/* -------------------------------------------------------------- */


/* мобилка бургеееееееееееееееерр */
const BasketModWp = document.querySelector('.kozina-modal-container-wp')
const BasketElemWp = BasketModWp.querySelector('.kozina-modal-wp');



/* уведолмения--------------------------------------------------------------------------------- */
function NotificatioAnddition (name){
    let DivWp  = document.createElement('div');
    let divText  = document.createElement('div');
    

    DivWp.classList.add('pop-basket-wp');
    divText.classList.add('basket-pop-text');
    divText.textContent = `${name}`;

   

    DivWp.append(divText)

    setTimeout(function(){
      DivWp.classList.add('pop-basket-wp-active');
    }, 100)
    return{
      DivWp, 
      
    }
};

/* function PopBasketAcitve(){
  let a = document.querySelector('.pop-basket-wp')
  a.classList.add('pop-basket-wp-active')
} */

function RenderBasket(base){
  base.forEach(({id, count, img, name, price}) => {
    let BasketItem ='';
  BasketItem += `
      <div class="kozina-cart-wp" id='${id}'>
                <div class='basket-pop-item-ferst'>
                  <div class='count-basket-item'>${count}</div>
                  <div class='basket-photo-item'><img src='${img}' alt='' class='photo-basket-item-size'></div>
                  <div class="kozina-cart-item">${name}</div>
                  <div class="kozina-button-wp">
                      <button class="basket-modal-button-delete">
                          <a class="nav-cart-cont" href="#">
                              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                  <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                  <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </a>  
                      </button>
                  </div> 
                </div>
                <div class='basket-pop-item-second'>
                    <div class='item-count-basket-pop-wp'>
                        <div class='item-basket-minus'>
                            <svg fill="#e3e3e3" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#e3e3e3" class='svg-basket-pop-minus'>
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier"> <path d="M216,140H40a12,12,0,0,1,0-24H216a12,12,0,0,1,0,24Z"></path> </g>
                            </svg>
                        </div>
                        <div class='item-basket-plus'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e3e3e3" class='svg-basket-pop-plus'>
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#ffffff">
                              </path> </g>
                            </svg>
                        </div>
                    </div>
                    <div class='item-sum-price-pop-basket--wp'>
                      <p class='item-sum-price-pop-basket--text'>Цена:</p>
                      <div class='item-sum-price-pop-basket'>${price}</div>
                    </div>
                </div>
        </div>

  `;
  BasketElemWp.insertAdjacentHTML("beforeend", BasketItem);
  });
  
}

// function AllBasketPrice(base){
//   let sum = 0
//   base.forEach(({price}) => {
//     sum += price;
//     console.log(`сумма корзины ${sum}`)
//     document.querySelector('.total-basket-pirce').textContent = sum;
//   });
// }





// /* let A = JSON.parse(localStorage.getItem('Basket')); */
// /* коризан добавление */
// document.addEventListener("DOMContentLoaded", function() {

//   const RomveFBasket =document.querySelector('.kozina-modal-container-wp')
//   const plaz = document.body;
//   plaz.addEventListener('click', CartPull);
//   plaz.addEventListener('click', FavPull);
//   RomveFBasket.addEventListener('click', BsketItemRemove);
//   RomveFBasket.addEventListener('click', BsketCountItemPlus) ;
//   RomveFBasket.addEventListener('click', BsketCountItemMinus) ; 
  
// /*   let String = localStorage.getItem('Basket').length +1 */
//   let ArrID  = [];
//   if(JSON.parse(localStorage.getItem('Basket')) != null){
//     ArrID = JSON.parse(localStorage.getItem('Basket'));
//     BasketElemWp.innerHTML = '';
//     RenderBasket(ArrID);
//     AllBasketPrice(ArrID);
//   }
//   var filteredArray = ArrID;
//   // console.log(ArrID)

//   ResultCountAll()
   
//     /* RenderLoad(ArrID, String) */

//     function RenderLoad(arr, lenght){
//         if(lenght > 2 ){
//           BasketElemWp.innerHTML="";
//           RenderBasket(arr);
//           AllBasketPrice(arr);
//           ResultCountAll()
//         }
//           return
//       }
      
//       function ResultCountAll(){
//         let res = 0
//         filteredArray.forEach(elem => {
//           res += elem.count 
//         });
//         document.querySelector('.item-basket-pop-count').textContent = +res
//       }
    
   
  
//  /*  let BasketLocal = []; */

 
//  /* for (let index = 0; index < A.length; index++) {
//   ArrID.push(A[index])
//   return
// }  */
// // console.log('загрузка')
// // console.log(ArrID)




//  /*  for (let index = 0; index < A .length; index++) {
//     filteredArray.push(A[index])
//     return
//  }  */
 
//   /* if(filteredArray.length == 0){
  
//   }
//   if(long.length == 0){
//     return
//   }
//   else if(long.length > 0){
//     filteredArray = JSON.parse(localStorage.getItem('Basket'));
//     /* filteredArray.forEach(element => {
//       ArrID.push(element)
//     });
//     console.log(`dsfsdf ${ArrID}`) 
//     document.getElementById('Text-lorem').remove();
//     RenderBasket(filteredArray);
//     AllBasketPrice(filteredArray);
//     return {
//       filteredArray,
//       ArrID
//     }
//   } */
  

//   /* document.addEventListener("click", event => {
//     if (event.target.matches(".basket-modal-button-delete")) {
//       console.log(ArrCartBase)
//     console.log('dfdfdf')
//     }
//   }, false); */
//   /* ------------------------------------------------------------------------------------------------------------------ ---------*///УДАЛЕНИЕ
//    function BsketItemRemove(event){
//     const Btn = event.target.closest('.basket-modal-button-delete'); 
//     if(!Btn){
//       return
//     }
//     let IdDelete = Btn.parentElement.parentElement.parentElement.id;


//      //вычт суммы
//      function ResultSumm(idE){
//       filteredArray.forEach(elem => {
//         if(elem.id === idE){
//           let sum = document.querySelector('.total-basket-pirce').textContent;
//           let ResultSum = +sum - elem.price
//           document.querySelector('.total-basket-pirce').textContent = ResultSum
//           return sum 
//         }
//       });

//      }
//      ResultSumm(IdDelete);
//      //вычт kol 
//      function BAsketCount(idE){
//       filteredArray.forEach(elem => {
//         if(elem.id === idE){
//           let CountBasketIn  = document.querySelector('.item-basket-pop-count').textContent;
//           let Minus = elem.count;
//           document.querySelector('.item-basket-pop-count').textContent = +CountBasketIn - Minus
//         }
//       });
//      }
//      BAsketCount(IdDelete)
   
//     //затр элемент
//     filteredArray.splice(filteredArray.findIndex(matchesEl), 1);

//     function matchesEl(el) {
//        return el.id === IdDelete;
//     }

//     ArrID.splice(ArrID.findIndex(matchesEl), 1);

//     function matchesEl(el) {
//        return el.id === IdDelete;
//     } 
   
//     Btn.parentElement.parentElement.parentElement.remove()


//     localStorage.setItem('Basket', JSON.stringify(filteredArray));
//     return {
//       filteredArray,
//       ArrID
//     }
  
//   } 

//   function dataToJson(data){
//      JSON.stringify(filteredArray)
//   }

//   //plus/* ----------------------------------------------------------------------------------------------------------------------------------------- *///ПРИБАВИТЬ
//   function BsketCountItemPlus(event){
//     const Btn = event.target.closest('.item-basket-plus'); 
//     if(!Btn){
//       return
//     }
//     let IdDelete = Btn.parentElement.parentElement.parentElement.id;
//     console.log(IdDelete)
    


//     filteredArray.forEach(element => {
//       if(element.id === IdDelete){
//         element.price += element.price / element.count;
//         element.count += 1; 
//         ResultSumm(IdDelete);
//         ResultSummItem(IdDelete);
//         ResultCountAll(IdDelete);
//         ResultCountCart(IdDelete)
//       }
//       console.log(filteredArray)
//       /* return filteredArray */
//     });

//     /* ArrID.forEach(element => {
//       if(element.id === IdDelete){
//         element.price += element.price / element.count;
//         element.count += 1; 
//       }
//       console.log(filteredArray)
//       /* return filteredArray 
//     }); */
//     //общ суммаа
//     function ResultSumm(idE){
//       filteredArray.forEach(elem => {
//         if(elem.id === idE){
//           let sum = document.querySelector('.total-basket-pirce').textContent;
//           let ResultSum = +sum + (elem.price /  elem.count)
//           document.querySelector('.total-basket-pirce').textContent = ResultSum
//           return sum 
//         }
//       });
//     }
//     //sum konkret tivara
//     function ResultSummItem(idE){
//           let Root = document.querySelectorAll('.kozina-cart-wp');
//           RootNew = Array.from(Root);
//           RootNew.forEach(elll => {
//             if(elll.id === idE){
//                   /* let IdElem = elll.querySelector() */
//               filteredArray.forEach(elem => {
//                 if(elem.id === idE){
                  
//                   let sum = elll.querySelector('.item-sum-price-pop-basket').textContent;
//                   let ResultSum = +sum + (elem.price /  elem.count)
//                   elll.querySelector('.item-sum-price-pop-basket').textContent = ResultSum
//                   return sum 
//                 }
//               });
//             }
//           });
//     }
//     //бобщ суммаа
//     function ResultCountAll(idE){
//       filteredArray.forEach(elem => {
//         if(elem.id === idE){
//           let CountBasketIn  = document.querySelector('.item-basket-pop-count').textContent;
//           let Minus = 1;
//           document.querySelector('.item-basket-pop-count').textContent = +CountBasketIn + Minus
          
//         }
//         console.log(filteredArray)
//         console.log('pizda')
//       });
//     }

//     function ResultCountCart(idE){
//       let Root = document.querySelectorAll('.kozina-cart-wp');
//           RootNew = Array.from(Root);
//           RootNew.forEach(elll => {
//             if(elll.id === idE){
//                   /* let IdElem = elll.querySelector() */
//               filteredArray.forEach(elem => {
//                 if(elem.id === idE){
                  
//                   let sum = elll.querySelector('.count-basket-item').textContent;
//                   let ResultSum = 1
//                   elll.querySelector('.count-basket-item').textContent = +sum +ResultSum
                  
//                 }
//               });
//             }
//           });
//     }

//     localStorage.setItem('Basket', JSON.stringify(filteredArray));
//     return {
//       filteredArray,
//       ArrID
//     }
    
//   }
//   /* -------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------*///УБАВИТЬ
//   function BsketCountItemMinus(event){
//     const Btn = event.target.closest('.item-basket-minus'); 
//     if(!Btn){
//       return
//     }
//     let IdDelete = Btn.parentElement.parentElement.parentElement.id;
//     console.log(IdDelete)


//     filteredArray.forEach(element => {
//       if(element.id === IdDelete){
//         if(element.count > 1){
//           element.price -= element.price / element.count;
//           element.count -= 1;
//           ResultSumm(IdDelete);
//           ResultSummItem(IdDelete);
//           ResultCountAll(IdDelete);
//           ResultCountCart(IdDelete)

//         }
//         else console.log('оибка')
//       }
//       console.log(filteredArray)
//       /* return filteredArray */
//     });
//     /* ArrID.forEach(element => {
//       if(element.id === IdDelete){
//         element.price -= element.price / element.count;
//         element.count -= 1; 
//       }
//       /* return filteredArray 
//     }); */

//     //общ суммаа
//     function ResultSumm(idE){
//       filteredArray.forEach(elem => {
//         if(elem.id === idE){
//           let sum = document.querySelector('.total-basket-pirce').textContent;
//           let ResultSum = +sum - (elem.price /  elem.count)
//           document.querySelector('.total-basket-pirce').textContent = ResultSum
//           return sum 
//         }
//       });
//     }
//     //sum konkret tivara
//     function ResultSummItem(idE){
//           let Root = document.querySelectorAll('.kozina-cart-wp');
//           RootNew = Array.from(Root);
//           RootNew.forEach(elll => {
//             if(elll.id === idE){
//                   /* let IdElem = elll.querySelector() */
//               filteredArray.forEach(elem => {
//                 if(elem.id === idE){
                  
//                   let sum = elll.querySelector('.item-sum-price-pop-basket').textContent;
//                   let ResultSum = +sum - (elem.price /  elem.count)
//                   elll.querySelector('.item-sum-price-pop-basket').textContent = ResultSum
//                   return sum 
//                 }
//               });
//             }
//           });
//     }
//     //бобщ суммаа
//     function ResultCountAll(idE){
//       filteredArray.forEach(elem => {
//         if(elem.id === idE){
//           let CountBasketIn  = document.querySelector('.item-basket-pop-count').textContent;
//           let Minus = 1;
//           document.querySelector('.item-basket-pop-count').textContent = +CountBasketIn - Minus
          
//         }
//       });
//     }

//     function ResultCountCart(idE){
//       let Root = document.querySelectorAll('.kozina-cart-wp');
//           RootNew = Array.from(Root);
//           RootNew.forEach(elll => {
//             if(elll.id === idE){
//                   /* let IdElem = elll.querySelector() */
//               filteredArray.forEach(elem => {
//                 if(elem.id === idE){
                  
//                   let sum = elll.querySelector('.count-basket-item').textContent;
//                   let ResultSum = 1
//                   elll.querySelector('.count-basket-item').textContent = +sum - ResultSum
                  
//                 }
//               });
//             }
//           });
//     }
//     localStorage.setItem('Basket', JSON.stringify(filteredArray));
//     return {
//       filteredArray,
//       ArrID
//     }
//   }
// /* --------------------------------------------------------------------------------------------------------------------------ДоБАВЛЕНИЕ В КОРИЗНУ */
//   function CartPull(event){
//     const Btn = event.target.closest('.nav-cart-cont-basket')
//     if(!Btn){
//       return
//     }
 
//           let count  = 1//колл
//           let ElemenObj = {};
//           let TargetElemID = Btn.parentElement.parentElement.parentElement.id//id
//           let TargetElem = document.getElementById(TargetElemID);
//           let ElemPhoto = TargetElem.querySelector('.img-tovar').getAttribute('src');//ссылка
//           let ElemName = TargetElem.querySelector('.tovar--opisane').textContent;//текст
//           let Price = TargetElem.querySelector('.text-cost').textContent;//цена
//           Price = Price.replace('$', '');
//           Price = Price.replaceAll(' ', '');
//           Price = +Price;
  
  
//           ElemenObj.id = TargetElemID;
  
          
//           existingItem = ArrID.find(el => el.id === TargetElemID);
//           if (existingItem) {
//             existingItem.count += 1; // Увеличиваем количество
//             existingItem.price += Price;
//           } else {
//             ElemenObj.price = Price; 
//             ElemenObj.count = count;
//             ElemenObj.img = ElemPhoto;
//             ElemenObj.name = ElemName;
//             ArrID.push(ElemenObj); // Добавляем новый элемент
//           }
          
//           console.log('это arr')
//           console.log(ArrID)
//           filteredArray = Object.values(ArrID.reduce((acc, obj) => {
//               // Если id уже существует в аккумуляторе
//               if (!acc[obj.id] || acc[obj.id].count < obj.count) {
//                   acc[obj.id] = obj; // Сохраняем объект с большим count
//               }
//              /*  BasketLocal.push(acc) */
//               localStorage.setItem('Basket', JSON.stringify(acc))
//               return acc;
              
//           }, {}));
           
          
//           function LoclalPsuh(date){
            
//              localStorage.setItem('Basket', JSON.stringify(date)); 
//           }

//           console.log('корзина перед рендером ')
//           console.log(filteredArray);
//           console.log('это arr')
//           console.log(ArrID)
//           BasketElemWp.innerHTML="";
//           RenderBasket(filteredArray);
//           AllBasketPrice(filteredArray);
//           LoclalPsuh(filteredArray)
//           let Messeg = `Товар ${ElemName} добавлен в коризу`
//           let Pop = NotificatioAnddition(Messeg)
//           let  a = document.body;
//           console.log(a);
//           a.append(Pop.DivWp);
  
//           setTimeout(function(){
//             document.querySelector('.pop-basket-wp').remove();
            
//           }, 3000);
  
//           let CountBasketIn  = document.querySelector('.item-basket-pop-count');
//           let TextCountBasketIn = CountBasketIn.textContent;
//           CountBasketIn.textContent = +TextCountBasketIn+1 
//           console.log(CountBasketIn)
          
//           return filteredArray
//     }; 

//   /* ----------------------------------------------------------------------------------------------------------------доавбление в избранное */

//   function WarningPopFav (name){
//     let DivWp  = document.createElement('div');
//     let divText  = document.createElement('div');
    
//     DivWp.classList.add('pop-basket-wp-warning');
//     divText.classList.add('basket-pop-text');
//     divText.textContent = `${name} `;
//     DivWp.append(divText)
//     setTimeout(function(){
//       DivWp.classList.add('pop-basket-wp-active');
//     }, 100)
//     return{
//       DivWp, 
      
//     }
//   };

//   let UserStatus  = [];
//   var log = 0;
//   if(JSON.parse(localStorage.getItem('User')) != null){
//     UserStatus = JSON.parse(localStorage.getItem('User'));
//     log = 'зареган'

//   }
//   let UserFavList = UserStatus.fav;
//   var filteredArrayFav = UserFavList;


//   /* let UserStatus = JSON.parse(localStorage.getItem('User'))
//   var log = 0;
//   let UserFavList ;
//   var filteredArrayFav;
//   if(UserStatus != null){
//       log = 'зареган'
//       let UserFavList = UserStatus.fav;
//       var filteredArrayFav = UserFavList;
//   }else{
    
//   }
//    */
// // уведомление
//   function FavPull(event){
//     const Btn = event.target.closest('.nav-cart-fav')
//     if(!Btn){
//       return
//     }
//     if(log != 'зареган'){

//         let warning = 'Авторизуйтесь, для того чтобы добавить товар в избранное';
//         let Pop = WarningPopFav(warning)
//         let  a = document.body;
//         console.log(a);
//         a.append(Pop.DivWp);
              
//         setTimeout(function(){
//         document.querySelector('.pop-basket-wp-warning').remove();
                          
//         }, 3000);
//       return
//     }
  
//     if(log == 'зареган'){

//         if(UserStatus.status != 'active'){

//         let warning = 'Авторизуйтесь, для того чтобы добавить товар в избранное';
//         let Pop = WarningPopFav(warning)
//         let  a = document.body;
//         console.log(a);
//         a.append(Pop.DivWp);
              
//         setTimeout(function(){
//         document.querySelector('.pop-basket-wp-warning').remove();
                          
//         }, 3000);
  
//         return
//       } 
//       if(UserStatus.status == 'active'){
//         let warning = `Товар добавлен в избранное`;
//         let Pop = NotificatioAnddition(warning)
//         let  a = document.body;
//         console.log(a);
//         a.append(Pop.DivWp);
              
//         setTimeout(function(){
//         document.querySelector('.pop-basket-wp').remove();
                          
//         }, 3000);
//         CreateObjFav(Btn);
//       }

//       return
//     }
  

    


//     function CreateObjFav(item){
//       let count  = 1//колл
//       let ElemenObj = {};
//       let TargetElemID = item.parentElement.parentElement.parentElement.id//id
//       let TargetElem = document.getElementById(TargetElemID);
//       let ElemPhoto = TargetElem.querySelector('.img-tovar').getAttribute('src');//ссылка
//       let ElemName = TargetElem.querySelector('.tovar--opisane').textContent;//текст
//       let Price = TargetElem.querySelector('.text-cost').textContent;//цена
//       Price = Price.replace('$', '');
//       Price = Price.replaceAll(' ', '');
//       Price = +Price;

//       ElemenObj.id = TargetElemID;


//       existingItem = UserFavList.find(el => el.id === TargetElemID);
//           if (existingItem) {
//             existingItem.count += 1; // Увеличиваем количество
//             existingItem.price += Price;
//           } else {
//             ElemenObj.price = Price; 
//             ElemenObj.count = count;
//             ElemenObj.img = ElemPhoto;
//             ElemenObj.name = ElemName;
//             UserFavList.push(ElemenObj); // Добавляем новый элемент
//           }

//           filteredArrayFav = Object.values(UserFavList.reduce((acc, obj) => {
//             // Если id уже существует в аккумуляторе
//             if (!acc[obj.id] || acc[obj.id].count < obj.count) {
//                 acc[obj.id] = obj; // Сохраняем объект с большим count
//             }
//            /*  BasketLocal.push(acc) */
//             /* localStorage.setItem('User', JSON.stringify(acc)) */
//             return acc;
            
//         }, {}));


//         UserStatus.fav = filteredArrayFav;
        

//         LoclalPsuh(UserStatus)
        
//         function LoclalPsuh(date){
          
//            localStorage.setItem('User', JSON.stringify(date)); 
//         }
//     }


//     console.log('ты молодец')
//   }
    


// }) 


function MobileHeaderRender(){
  let wp = document.querySelector('.round-menu-wp')

  let Html = ''
  Html += `
    
        <svg class='loader-example' viewBox='0 0 100 100'>
        <defs>
            <filter id='goo'>
                <feGaussianBlur in='SourceGraphic' stdDeviation='8' result='blur' />
                <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0
                                                               0 1 0 0 0
                                                               0 0 1 0 0
                                                               0 0 0 25 -8' result='goo' />
                <feBlend in='SourceGraphic' in2='goo' />
            </filter>
        </defs>
        <g filter='url(#goo)' fill='#0D1115' stroke='#ff214f'>
            <g transform='translate(50, 50)'>
                <g class='circle -a'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='25' cy='50' r='9' />
                    </g>
                </g>
            </g>
            <g transform='translate(50, 50)'>
                <g class='circle -b'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='50' cy='25' r='8'  />
                    </g>
                </g>
            </g>
            <g transform='translate(50, 50)'>
                <g class='circle -c'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='75' cy='50' r='7' />
                    </g>
                </g>
            </g>
            <g transform='translate(50, 50)'>
                <g class='circle -d'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='50' cy='75' r='6' />
                    </g>
                </g>
            </g>
            <g transform='translate(50, 50)'>
                <g class='circle -e'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='25' cy='50' r='5' />
                    </g>
                </g>
            </g>
            <g transform='translate(50, 50)'>
                <g class='circle -f'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='50' cy='25' r='4' />
                    </g>
                </g>
            </g>
            <g transform='translate(50, 50)'>
                <g class='circle -g'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='75' cy='50' r='3' />
                    </g>
                </g>
            </g>
            <g transform='translate(50, 50)'>
                <g class='circle -h'>
                    <g transform='translate(-50, -50)'>
                        <circle cx='50' cy='75' r='2' />
                    </g>
                </g>
            </g>
        </g>
    </svg>
  `;
  wp.insertAdjacentHTML("beforeend", Html)
}


    
    


// LoginButtonDown.onclick = function aaa(){
  //   let UserStatus = JSON.parse(localStorage.getItem('User'))
  //   if(UserStatus != null){
  //     if(UserStatus.status == 'active'){
  //       location.replace("./acc.html");
  //       console.log(Вход)
  //       return
  //     }
  //   }
/*     ModalLogin.classList.add('modal-login-active');
    ModalWinowEntry.classList.add('login-activ');
    document.body.classList.add('no-scroll-body')
    console.log('fddfd')

    BtnLoginEx.addEventListener('click', function CloseModalLogin(){
      ModalLogin.classList.remove('modal-login-active');
      ModalWinowLogin.classList.remove('login-activ');
      document.body.classList.remove('no-scroll-body')
    });

    TransitionToLogin.addEventListener('click', function OpenLogin(){
      ModalWinowLogin.classList.remove('login-activ');
      ModalWinowEntry.classList.add('login-activ');
      
    });
  
    TransitionToRegistration.addEventListener('click', function OpenRegister(){
      ModalWinowEntry.classList.remove('login-activ');
      ModalWinowLogin.classList.add('login-activ');
    });

    BtnLoginExx.addEventListener('click', function CloseModalRegister(){
      ModalLogin.classList.remove('modal-login-active');
      ModalWinowLogin.classList.remove('login-activ');
      document.body.classList.remove('no-scroll-body')
    });
 */
    
  // };

// window.onclick = function (event) {
//     if (event.target == ModalLogin) {
//       ModalLogin.classList.remove('modal-login-active');
//       ModalWinowLogin.classList.remove('login-activ');
//       document.body.classList.remove('no-scroll-body')
//     } 
    
//   }; 

// let ArrUsers = []
//   document.addEventListener("DOMContentLoaded", function() { 
//     ArrUsers = JSON.parse(localStorage.getItem('BaseUsers'))
//   })



    

