// //roots
// const ROOT_PRODUCTSHIT = document.getElementById('HitsCaruseel');




// //карусель
// document.addEventListener("DOMContentLoaded", function() { 
//     const carousel = document.querySelector(".hits-slider"); 
//     const arrowBtns = document.querySelectorAll(".btn-f"); 
//     const wrapper = document.querySelector(".container-hits"); 
   
//     const CartArr = ArrHitsReceive()
//     console.log('fgfgf')
//     console.log(CartArr)
//     const CatrsLong = CartArr.length;
//     const arrHits = CartArr.slice(0, CatrsLong )
//     var newCartCountHits = arrHits.length;
//     CreadeCartHits(arrHits)
//     CreadeCartHits(arrHits)
//     CreadeCartHits(arrHits)
    
//     console.log(`длинна ${CatrsLong}`)
   
    
//     /* ---------------- */
//     const firstCard = carousel.querySelector(".cart-wrapper"); 
//     const firstCardWidth =  firstCard.offsetWidth ;

//     const totalCardWidth = carousel.scrollWidth;
//     const maxScrollLeft = totalCardWidth - carousel.offsetWidth ; 
//     var long  = CartArr.length
//     var Chag = totalCardWidth / long
//     var n = 0;

//     function ScrollWidth(d){
//         if(d >= 1200){
//             n = 5
//             return n;
//         }
//         else if( d >= 992 &&  d <= 1119){
//             n = 4
//             return n;
//         }else if( d >= 768 &&  d <= 991){
//             n = 3
//             return n;
//         }
//         else if(  d <= 767){
//             n = 1.5
//             return n;
//         }
        
//     }

//     var Second = n;

//     function CartHitsClearR(count){
//         Second += count;
//         console.log(`попка + ${Second}`)
        
//         /* RemoveR(window.screen.width); */
//         if(Second >= CatrsLong ){
//             CreadeCartHits(arrHits);
//             CreadeCartHits(arrHits);
//             console.log('генерация карт')
//             RemoveR(window.screen.width);
//             Second = count;
//             return Second
//         }
//     };
//     function RemoveR(d){
//         const BaseNew =  document.getElementById('HitsCaruseel');
//         let b = BaseNew.querySelectorAll('.cart-wrapper')
//         const ArrBaseNew = Array.from(b);
//         let DeleteArr = ArrBaseNew.slice(0 , CatrsLong);
//   /*       console.log(ArrBaseNew); */
//         console.log(b)        
//         if(d >= 1200){
//             if(Second >= CatrsLong){
//                 DeleteArr.forEach(element => {
//                     console.log(element)
//                     element.remove()
//                 });
//                 Second = n;   
//                 }
//                 return Second
//         }
//         else if( d >= 992 &&  d <= 1119){
//             if(Second >= CatrsLong){
//                 DeleteArr.forEach(element => {
//                     console.log(element)
//                     element.remove()
//                 });
//                 Second = n;   
//                 }
//                 return Second
                
//         }
        
//         else if( d >= 768 &&  d <= 991){
//             if(Second >= CatrsLong){
//                 DeleteArr.forEach(element => {
//                     console.log(element)
//                     element.remove()
//                 });
//                 Second = n;   
//                 }
//                 return Second
//         }
//         else if(  d <= 767){
//             if(Second >= CatrsLong){
//                 DeleteArr.forEach(element => {
//                     console.log(element)
//                     element.remove()
//                 });
//                 Second = n;   
//                 }
//                 return Second
//         }
        
//     };

//     function CartHitsClearL(count){
//         Second -= count;
//         console.log(`попка + ${Second}`)     
//         if(Second <= count){
//             Second  = count;
//         }
//     };
  
  
//     let isDragging = false, 
//         startX, 
//         startScrollLeft, 
//         timeoutId; 
  
//     const dragStart = (e) => {  
//         isDragging = true; 
//         carousel.classList.add("dragging"); 
//         startX = e.pageX; 
//         startScrollLeft = carousel.scrollLeft; 
//     }; 
  
//     const dragging = (e) => { 
//         if (!isDragging) return; 
      
//         // Calculate the new scroll position 
//         const newScrollLeft = startScrollLeft - (e.pageX - startX); 
      
//         // Check if the new scroll position exceeds  
//         // the carousel boundaries 
//         if (newScrollLeft <= 0 || newScrollLeft >=  
//             carousel.scrollWidth - carousel.offsetWidth) { 
              
//             // If so, prevent further dragging 
//             isDragging = false; 
//             return; 
//         } 
      
//         // Otherwise, update the scroll position of the carousel 
//         carousel.scrollLeft = newScrollLeft; 
//     }; 
  
//     const dragStop = () => { 
//         isDragging = false;  
//         carousel.classList.remove("dragging"); 
//     }; 
  
//     const autoPlay = () => { 
      
//         // Return if window is smaller than 800 
//        /*  if (window.innerWidth < 800) return;   */
          
//         // Calculate the total width of all cards 
//         const totalCardWidth = carousel.scrollWidth; 
         
          
//          //Calculate the maximum scroll position 
//         const maxScrollLeft = totalCardWidth - carousel.offsetWidth ; 
        
          
//          //If the carousel is at the end, stop autoplay 
//         if (carousel.scrollLeft >= maxScrollLeft) return; 
          
//         // Autoplay the carousel after every 2500ms 
//         timeoutId = setTimeout(() =>  
            
//             carousel.scrollLeft += firstCardWidth*n, 1000); 
//         CartHitsClearR(n)
//     }; 
  
//     carousel.addEventListener("mousedown", dragStart); 
//     carousel.addEventListener("mousemove", dragging); 
//     document.addEventListener("mouseup", dragStop); 
//     wrapper.addEventListener("mouseenter", () =>  
//         clearTimeout(timeoutId)); 
//     wrapper.addEventListener("mouseleave", autoPlay()); 
  
//     // Add event listeners for the arrow buttons to  
//     // scroll the carousel left and right 
//     arrowBtns.forEach(btn => { 
//         console.log('b')
//         btn.addEventListener("click", () => { 
//             ScrollWidth(window.offsetWidth)
//             if(btn.id === "right"){
//                 CartHitsClearR(n)
//                 console.log('право')
//             }
//             else if (btn.id === "left"){     
//                 CartHitsClearL(n);
//             }
//             carousel.scrollLeft += btn.id === "left" ?  
//                 -firstCardWidth*n : firstCardWidth*n;
//         }); 
//     }); 
// }); 

// //cсоздание карточек хиты продаж
// function CreadeCartHits(baseHits){
//     baseHits.forEach(({id, name, price, img, art, sale}) => {
//         let HtmlCatalog = '';
//         HtmlCatalog +=`
                
//                      <div class="cart-wrapper" id='${id}'>
//                         <div class="cart catalog-cart">
//                              <span class="nav-cart">
//                                 <a class="nav-cart-cont nav-cart-cont-basket" href="#">
//                                     <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
//                                         <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
//                                     </svg>
//                                 </a>
//                                 <a class="nav-cart-cont" href="#">
//                                     <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-like">
//                                         <g clip-path="url(#clip0_203_1038)">
//                                         <rect x="0.0742188" width="20" height="20" fill="#252525"/>
//                                         <path d="M10.0742 18.8873C9.78949 18.8873 9.51498 18.7842 9.30106 18.5968C8.4931 17.8903 7.71414 17.2264 7.02689 16.6408L7.02338 16.6377C5.00845 14.9207 3.26849 13.4378 2.05786 11.9771C0.70456 10.3441 0.0742191 8.79578 0.074219 7.10434C0.0742189 5.46097 0.637726 3.94485 1.66083 2.83508C2.69614 1.71219 4.11673 1.09375 5.66138 1.09375C6.81586 1.09375 7.87314 1.45874 8.80377 2.1785C9.27344 2.54181 9.69916 2.98645 10.0742 3.5051C10.4494 2.98645 10.875 2.54181 11.3448 2.1785C12.2755 1.45874 13.3327 1.09375 14.4872 1.09375C16.0317 1.09375 17.4525 1.71219 18.4878 2.83508C19.5109 3.94485 20.0742 5.46097 20.0742 7.10434C20.0742 8.79578 19.444 10.3441 18.0907 11.9769C16.8801 13.4378 15.1403 14.9205 13.1257 16.6374C12.4372 17.224 11.657 17.8889 10.8472 18.5971C10.6335 18.7842 10.3588 18.8873 10.0742 18.8873ZM5.66138 2.26532C4.44785 2.26532 3.33304 2.74963 2.52203 3.62915C1.69897 4.52194 1.24564 5.75607 1.24564 7.10434C1.24564 8.52692 1.77435 9.79919 2.95981 11.2296C4.10559 12.6122 5.80985 14.0645 7.78311 15.7462L7.78677 15.7492C8.47662 16.3371 9.25864 17.0036 10.0725 17.7153C10.8913 17.0023 11.6746 16.3347 12.3658 15.7458C14.3389 14.0642 16.043 12.6122 17.1888 11.2296C18.3741 9.79919 18.9028 8.52692 18.9028 7.10434C18.9028 5.75607 18.4495 4.52194 17.6264 3.62915C16.8156 2.74963 15.7006 2.26532 14.4872 2.26532C13.5982 2.26532 12.782 2.54791 12.0614 3.10516C11.4191 3.60199 10.9717 4.23004 10.7094 4.66949C10.5746 4.89548 10.3371 5.03036 10.0742 5.03036C9.81131 5.03036 9.57388 4.89548 9.439 4.66949C9.17685 4.23004 8.72946 3.60199 8.08707 3.10516C7.36639 2.54791 6.5502 2.26532 5.66138 2.26532Z" />
//                                         </g>
//                                     </svg>
//                                 </a>
//                                 <a class="nav-cart-cont" href="TovarPage.html">
//                                     <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-lups">
//                                         <g clip-path="url(#clip0_203_1042)">
//                                         <rect x="0.078125" y="-0.00439453" width="19.9913" height="20" fill="#252525"/>
//                                         <path d="M14.6439 15.9978C10.6487 19.1814 5.0638 18.3005 2.1056 14.6492C-0.749577 11.1241 -0.571012 6.03872 2.52642 2.82017C5.72686 -0.505158 10.7585 -0.949076 14.406 1.77874C15.7128 2.75586 16.6887 3.99895 17.3243 5.50365C17.9636 7.01709 18.1578 8.59172 17.9361 10.2157C17.7151 11.8321 17.0702 13.2725 16.0206 14.6168C16.1055 14.6723 16.1961 14.7123 16.261 14.7772C17.4148 15.926 18.5642 17.0792 19.7181 18.228C19.9915 18.5003 20.1276 18.8174 20.0465 19.1995C19.8854 19.96 18.9801 20.2535 18.3994 19.7315C18.1272 19.4874 17.8768 19.2183 17.6183 18.9598C16.6706 18.0126 15.7234 17.0649 14.7757 16.1177C14.7363 16.0803 14.6951 16.0453 14.6439 15.9978ZM16.0312 8.98194C16.0412 5.12217 12.9251 2.00163 9.05655 1.99601C5.19866 1.9904 2.085 5.08596 2.06814 8.94323C2.05128 12.8124 5.1612 15.9416 9.04157 15.9598C12.8839 15.9779 16.0212 12.8455 16.0312 8.98194Z" />
//                                         </g>
//                                     </svg>
//                                 </a>
//                             </span>
//                             <div class="cart--sale">
//                                 <div class="sale">
//                                     <p class="sale-text">${sale}</p>
//                                 </div>
//                                 <div class="action">
//                                     <p>акция</p>
//                                 </div>
//                             </div>
//                             <a href="TovarPage.html" class="wrapper-tover--ref">
//                                 <div class="img-tover-center">
//                                     <img class="img-tovar" src="${img}" alt="товар" >
//                                 </div>
                                
//                                 <div class="cart--descr">
//                                     <p class="tovar--opisane">${name}</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div class="container-art-cost">
//                             <p class="text-art">
//                                 Арт:${art}
//                             </p>
//                             <p class="text-cost">
//                                 ${price}
                                 
//                             </p>
//                         </div>
//                     </div>
//         `;
  
//         ROOT_PRODUCTSHIT.insertAdjacentHTML("beforeend",HtmlCatalog);
//       });
//   };


// function ArrHitsReceive(){

//     let HistArr =[]
//     let DomHits = document.getElementById('HitsCaruseel')
//     let Cart = DomHits.querySelectorAll('.wp-sale')
//     Cart.forEach(el => {
//         let Obj = {};
//         Obj.id = el.id;
//         Obj.sale = el.querySelector('.sale-text').textContent
//         Obj.img  = el.querySelector('.img-tovar').src
//         Obj.name = el.querySelector('.tovar--opisane').textContent
//         Obj.art = el.querySelector('.text-art').textContent
//         Obj.price = el.querySelector('.text-cost').textContent
//         HistArr.push(Obj)
        
//     });
//     console.log(HistArr)
//     return HistArr
// }


class sliderHits{
    
    constructor(){
        this.ArrCart = []
        this.mainWp  = document.getElementById('HitsCaruseel')
        this.toatalCartWidth = this.mainWp.offsetWidth
        this.btnRight = document.querySelector('.container-hits-bt--rt')
        this.btnLeft = document.querySelector('.container-hits-bt--lf')
        this.countClick = 1

        this.btnLeft.addEventListener('click', this.GoLeft.bind(this))
        this.btnRight.addEventListener('click', this.GoRight.bind(this))
        this.btnLeft.addEventListener('doubleclick', this.GoLeftDouble.bind(this))
        this.btnRight.addEventListener('doubleclick', this.GoRightDouble.bind(this))
    }
    
    getCartInfo(){
        
        let DomHits = document.getElementById('HitsCaruseel')
        let Cart = DomHits.querySelectorAll('.wp-sale')
        Cart.forEach(el => {
            let Obj = {};
            Obj.id = el.id;
            Obj.sale = el.querySelector('.sale-text').textContent
            Obj.img  = el.querySelector('.img-tovar').src
            Obj.name = el.querySelector('.tovar--opisane').textContent
            Obj.art = el.querySelector('.text-art').textContent
            Obj.price = el.querySelector('.text-cost').textContent
            this.ArrCart.push(Obj)
            
        });
        console.log(this.mainWp.style.width)
    }

    GoLeft(){
        this.mainWp.scrollLeft -= this.toatalCartWidth
        console.log(this.toatalCartWidth)
    }

    GoRight(){
        if(this.countClick != 0 && this.countClick %2 == 0 ){
            // this.mainWp.scrollLeft  -= this.toatalCartWidth* this.countClick
            // console.log(this.mainWp.scrollLeft)
            this.countClick = 1
            // this.removeCartR()
            this.CreadeCartHits(this.ArrCart)
        }
        
        setTimeout(() => {
            this.countClick++ 
            this.mainWp.scrollLeft += this.toatalCartWidth
        }, 100);
        // console.log(this.mainWp.scrollLeft)
        // console.log(this.toatalCartWidth)
    }
    GoLeftDouble(){
        this.mainWp.scrollLeft -= this.toatalCartWidth *2
        console.log(this.toatalCartWidth)
    }
    GoRightDouble(){
        this.mainWp.scrollLeft += this.toatalCartWidth *2
        console.log(this.toatalCartWidth)
    }
    removeCartR(){
        const allCart = document.querySelectorAll('.cart-wrapper')
        const Counter = this.ArrCart.length
        let item  = 0 
        allCart.forEach(el => {
            if(item < Counter -1){
                item++
                el.remove()
            }return
        })   
    }

    CreadeCartHits(baseHits){
        baseHits.forEach(({id, name, price, img, art, sale}) => {
           
            const HtmlCatalog =`
                    
                         <div class="cart-wrapper" id='${id}'>
                            <div class="cart catalog-cart">
                                 <span class="nav-cart">
                                    <a class="nav-cart-cont nav-cart-cont-basket" href="#">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                            <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                        </svg>
                                    </a>
                                    <a class="nav-cart-cont" href="#">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-like">
                                            <g clip-path="url(#clip0_203_1038)">
                                            <rect x="0.0742188" width="20" height="20" fill="#252525"/>
                                            <path d="M10.0742 18.8873C9.78949 18.8873 9.51498 18.7842 9.30106 18.5968C8.4931 17.8903 7.71414 17.2264 7.02689 16.6408L7.02338 16.6377C5.00845 14.9207 3.26849 13.4378 2.05786 11.9771C0.70456 10.3441 0.0742191 8.79578 0.074219 7.10434C0.0742189 5.46097 0.637726 3.94485 1.66083 2.83508C2.69614 1.71219 4.11673 1.09375 5.66138 1.09375C6.81586 1.09375 7.87314 1.45874 8.80377 2.1785C9.27344 2.54181 9.69916 2.98645 10.0742 3.5051C10.4494 2.98645 10.875 2.54181 11.3448 2.1785C12.2755 1.45874 13.3327 1.09375 14.4872 1.09375C16.0317 1.09375 17.4525 1.71219 18.4878 2.83508C19.5109 3.94485 20.0742 5.46097 20.0742 7.10434C20.0742 8.79578 19.444 10.3441 18.0907 11.9769C16.8801 13.4378 15.1403 14.9205 13.1257 16.6374C12.4372 17.224 11.657 17.8889 10.8472 18.5971C10.6335 18.7842 10.3588 18.8873 10.0742 18.8873ZM5.66138 2.26532C4.44785 2.26532 3.33304 2.74963 2.52203 3.62915C1.69897 4.52194 1.24564 5.75607 1.24564 7.10434C1.24564 8.52692 1.77435 9.79919 2.95981 11.2296C4.10559 12.6122 5.80985 14.0645 7.78311 15.7462L7.78677 15.7492C8.47662 16.3371 9.25864 17.0036 10.0725 17.7153C10.8913 17.0023 11.6746 16.3347 12.3658 15.7458C14.3389 14.0642 16.043 12.6122 17.1888 11.2296C18.3741 9.79919 18.9028 8.52692 18.9028 7.10434C18.9028 5.75607 18.4495 4.52194 17.6264 3.62915C16.8156 2.74963 15.7006 2.26532 14.4872 2.26532C13.5982 2.26532 12.782 2.54791 12.0614 3.10516C11.4191 3.60199 10.9717 4.23004 10.7094 4.66949C10.5746 4.89548 10.3371 5.03036 10.0742 5.03036C9.81131 5.03036 9.57388 4.89548 9.439 4.66949C9.17685 4.23004 8.72946 3.60199 8.08707 3.10516C7.36639 2.54791 6.5502 2.26532 5.66138 2.26532Z" />
                                            </g>
                                        </svg>
                                    </a>
                                    <a class="nav-cart-cont" href="TovarPage.html">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-lups">
                                            <g clip-path="url(#clip0_203_1042)">
                                            <rect x="0.078125" y="-0.00439453" width="19.9913" height="20" fill="#252525"/>
                                            <path d="M14.6439 15.9978C10.6487 19.1814 5.0638 18.3005 2.1056 14.6492C-0.749577 11.1241 -0.571012 6.03872 2.52642 2.82017C5.72686 -0.505158 10.7585 -0.949076 14.406 1.77874C15.7128 2.75586 16.6887 3.99895 17.3243 5.50365C17.9636 7.01709 18.1578 8.59172 17.9361 10.2157C17.7151 11.8321 17.0702 13.2725 16.0206 14.6168C16.1055 14.6723 16.1961 14.7123 16.261 14.7772C17.4148 15.926 18.5642 17.0792 19.7181 18.228C19.9915 18.5003 20.1276 18.8174 20.0465 19.1995C19.8854 19.96 18.9801 20.2535 18.3994 19.7315C18.1272 19.4874 17.8768 19.2183 17.6183 18.9598C16.6706 18.0126 15.7234 17.0649 14.7757 16.1177C14.7363 16.0803 14.6951 16.0453 14.6439 15.9978ZM16.0312 8.98194C16.0412 5.12217 12.9251 2.00163 9.05655 1.99601C5.19866 1.9904 2.085 5.08596 2.06814 8.94323C2.05128 12.8124 5.1612 15.9416 9.04157 15.9598C12.8839 15.9779 16.0212 12.8455 16.0312 8.98194Z" />
                                            </g>
                                        </svg>
                                    </a>
                                </span>
                                <div class="cart--sale">
                                    <div class="sale">
                                        <p class="sale-text">${sale}</p>
                                    </div>
                                    <div class="action">
                                        <p>акция</p>
                                    </div>
                                </div>
                                <a href="TovarPage.html" class="wrapper-tover--ref">
                                    <div class="img-tover-center">
                                        <img class="img-tovar" src="${img}" alt="товар" >
                                    </div>
                                    
                                    <div class="cart--descr">
                                        <p class="tovar--opisane">${name}</p>
                                    </div>
                                </a>
                            </div>
                            <div class="container-art-cost">
                                <p class="text-art">
                                    Арт:${art}
                                </p>
                                <p class="text-cost">
                                    ${price}
                                     
                                </p>
                            </div>
                        </div>
            `;
      
            this.mainWp.insertAdjacentHTML("beforeend",HtmlCatalog);
          });
};
}


const HitsNew  = new sliderHits()
document.addEventListener('DOMContentLoaded', () => {
    HitsNew.getCartInfo()
})

  