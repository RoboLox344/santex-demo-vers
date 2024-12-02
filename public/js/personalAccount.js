/* const pool = require('../config/db'); */

class Profile{

    constructor(){
        this.filterCategoryWp = document.querySelector('.categor-items-list-wp')
        this.windowWp = document.querySelector('.persAcc-data-wp')
        this.btnExit = document.getElementById('ButtonExPrivOf')
        this.windowWp.addEventListener('click', this.ToggleFormPassword.bind(this))
        this.btnExit.addEventListener('click', this.Logout.bind(this))
        this.filterCategoryWp.addEventListener('click', this.Sections.bind(this))
        this.windowWp.addEventListener('click', this.orderInfo.bind(this))
        this.windowWp.addEventListener('click', this.btnOrderClose.bind(this))
        this.windowWp.addEventListener('click', this.updateProfileMainInfo.bind(this))
        this.windowWp.addEventListener('click', this.updatePassword.bind(this))
        this.windowWp.addEventListener('click', this.noColorInput.bind(this))
        this.windowWp.addEventListener('click', this.updateAddress.bind(this))
        this.InfoUser
    }
    /**загрузочная инфа Полчение информации о пользов */
    async GetUserStart() {
        try {
            const res = await fetch('/my');
            if (!res.ok) {
                throw new Error(`Ошибка получения заказов: ${res.status}`);
            }
            this.InfoUser  = await res.json();
            console.log(this.InfoUser) 
            this.CreateContentAcc(this.InfoUser);
        } catch (error) {
            console.error('Ошибка получения заказов:', error);
            // Обработка ошибки
            return null;
        }
    }
    /** Полчение информации о пользов */
    async GetUserMainInfo() {
        try {
            const res = await fetch('/my');
            if (!res.ok) {
                throw new Error(`Ошибка получения данных: ${res.status}`);
            }
            this.InfoUser  = await res.json();
        } catch (error) {
            console.log('Ошибка получения данных:', error);
            // Обработка ошибки, например, отображение сообщения пользователю
            return null;
        }
    }
    /**Получение информации о заказах*/
    async GetOrder(userId) {
        try {
            const res = await fetch(`/orders/all`);
            if (!res.ok) {
                throw new Error(`Ошибка получения заказов: ${res.status}`);
            }
            const data = await res.json();
            const filterData = data.filter((el) => (el.profile_id === userId))
            return { Orders: filterData };
        } catch (error) {
            console.error('Ошибка получения заказов:', error);
            // Обработка ошибки
            return null;
        }
    }
    /**данные доставки*/
    async GetDelivery(deliveryId){
        
        try {
            const res  = await fetch(`/delivery/id/${deliveryId}`)
            if(res.ok){
                const data  = await res.json()
                
                return{delivery : data}
                
            }
            throw new Error(`Ошибка получения заказов: ${res.status}`);
        } catch (error) {
            console.error('Ошибка получения заказов:', error);
            return null;
        }
    }
    async GetOrderProduct(orderId){
        try {
            const res = await fetch(`/order/${orderId}`)
            if(res.ok){
                const {products} = await res.json()
                console.log(products)
                return {products:products}
            }
            throw new Error(`${res.status}`)
        } catch (error) {
            console.error('Ошибка получения заказов:', error);
            return null;
        }
    }
    // TODO FIX
    async fetchProductImage(productId) {
        console.log(productId)
        try {
            const res = await fetch(`/product/image/${productId}`);
    
            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            const data  = await res.json();
            
            console.log(data)   
            // const imgfile = data
            return {src : data}
            
        } catch (error) {
            console.error('Failed to fetch product image:', error);
        }
    }
    /**Форма адресса  */
    CreateContentAddress(user){
        
        const ContentAddress = `
            <div class="adress-category-wp persAcc-data-active">

                <div class="adress-category-content-wp">
                    <div class="adress-category-item">
                        <h3 class="heading-text-pers-info">Персональная информация</h3>
                        <div class="adress-category-form-wp">
                            <div class="ferst-adress-category-wp">
                                <div class="input-adress-category-wp ">
                                    <p class="inuput-pers-info-name ">Адресс</p>
                                    <input type="text" name="AddressPersInfo"  id="AddressPersInfo" class="input-entry-pers-info" autocomplete="street-address" placeholder="Введите адресс доставки" required  minlength="4">
                                </div>
                                <button class="button button-adress-category">Сохранить</button>
                            </div>
                            <div class="adress-categor-text-wp">
                                Данный адресс будет автоматически указываться при офромлении заказа, при необходимости его можно поменять
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adress-category-bg">
                <img src="/img/adress-category-bg.png" alt="">
            </div>
        `;
        this.windowWp.insertAdjacentHTML("beforeend", ContentAddress);

        (user[0].address !== null && user[0].address !== undefined) ? document.getElementById('AddressPersInfo').value = user[0].address : null;
    };
    /**Форма Юзера */
    CreateContentAcc(user){
        const ContentAcc = `
             <div class="personal-information-category-wp persAcc-data-active">
                            
                            <div class="pers-info-content-wp">
                                <div class="pers-info-item">
                                    <h3 class="heading-text-pers-info">Персональная информация</h3>
                                    <div class="pers-info-form-wp">
                                        <div class="ferst-pers-info-wp">
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Имя</p>
                                                <input type="text" name="Name" id="Name" class="input-entry-pers-info" placeholder="Введите ваше имя" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Фамииля</p>
                                                <input type="text" name="SurName" id="SurName" class="input-entry-pers-info" placeholder="Введите ваше фамилию" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Логин</p>
                                                <input type="text" name="LoginLogin"  id="LoginLogin" class="input-entry-pers-info" placeholder="Введите логин" required  minlength="4">
                                            </div>
                                            
                                        </div>

                                        <div class="second-pers-info-wp">
                                            
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Почта</p>
                                                <input type="email" name="Post"   id="Post" class="input-entry-pers-info" placeholder="Введите почту" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp ">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Номер телефона</p>
                                                <input type="tel" name="Numder"  id="Numder" class="input-entry-pers-info" placeholder="Введите номер телефона" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom ">
                                                <p class="inuput-pers-info-name inuput-pers-info-name--foto">Фото</p>
                                                <form>
                                                <div class="input-pers-info-wp--flex">
                                                    <div type="file" class="foto-pers-info-wp">
                                                        <input type="file" class='inviz-input-acc'>
                                                        <button class="button-pers-info">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="button-pers-info-svg" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 18.937 5.063 21.25 12 21.25C18.937 21.25 21.25 18.937 21.25 12C21.25 5.063 18.937 2.75 12 2.75C5.063 2.75 2.75 5.063 2.75 12Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6001 8.78444C10.6001 9.75744 9.81213 10.5454 8.83913 10.5454C7.86713 10.5454 7.07812 9.75744 7.07812 8.78444C7.07812 7.81144 7.86713 7.02344 8.83913 7.02344C9.81213 7.02344 10.6001 7.81144 10.6001 8.78444Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M21.1188 14.6667C20.2378 13.7607 18.9918 11.9297 16.7028 11.9297C14.4138 11.9297 14.3638 15.9677 12.0278 15.9677C9.69084 15.9677 8.74984 14.5967 7.22684 15.3127C5.70484 16.0277 4.46484 18.8737 4.46484 18.8737"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    
                                                    <button class="button button-pers-info--change">Поменять</button>
                                                    <button class=" button-pers-info--back">вернуть</button>
                                                </div>
                                                </form>
                                            </div>
                            
                                        </div>
                                    </div>

                                    <button class="button button-pers-info--save" id="main-info-button">Сохранить</button>
                
                                </div>
                                <div class="pers-info-passwor-item">
                                    <div class="heading-text-pers-info-wp ">
                                        <h3 class="heading-text-pers-info">Изменение пароля</h3>
                                        <svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-filter-item">
                                            <path d="M35.1522 0L33.646 1.27944L44.9223 10.8581H0V12.6677H44.9223L33.6438 22.25L35.15 23.5294L49 11.7629L35.1522 0Z" fill="#F6D863"/>
                                            <path d="M13.8478 16.4707L15.354 17.7501L4.07765 27.3288H49V29.1384H4.07765L15.3562 38.7207L13.85 40.0001L7.15256e-07 28.2336L13.8478 16.4707Z" fill="white"/>
                                        </svg>


                                    </div>
                                    <div class="info-passwor-form-wp info-passwor-form-wp-active">
                                        <div class="ferst-pers-info-wp">
                                            <div class="input-pers-info-wp ">
                                                <p class="inuput-pers-info-name ">Старый пароль</p>
                                                <input type="text" name="PasswordOld"  id="PasswordOld" class="input-entry-pers-info" placeholder="Введите старый пароль" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name ">Новый пароль</p>
                                                <input type="text" name="PasswordNew"  id="PasswordNew" class="input-entry-pers-info" placeholder="Введите новый пароль" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom">
                                                <p class="inuput-pers-info-name ">Введите еще раз новый пароль</p>
                                                <input type="text" name="PasswordNewSuc" id="PasswordNewSuc" class="input-entry-pers-info" placeholder="Введите еще раз новый пароль" required  minlength="4">
                                            </div>
                                        </div>

                                        <button class="button button-pers-info--save" id="change-password">Сохранить</button>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>
        `;
        this.windowWp.insertAdjacentHTML("beforeend", ContentAcc);

        /* console.log(document.getElementById('Login')) */
        /* console.log(user[0].first_name) */
        (user[0].first_name !== null && user[0].first_name !== undefined) ? document.getElementById('Name').value  = user[0].first_name : null;
        (user[0].last_name !== null && user[0].last_name !== undefined) ? document.getElementById('SurName').value = user[0].last_name : null;
        (user[0].email !== null && user[0].email !== undefined) ? document.getElementById('Post').value = user[0].email : null;
        (user[0].phone !== null && user[0].phone !== undefined) ? document.getElementById('Numder').value =  user[0].phone : null;
        (user[0].login !== null && user[0].login !== undefined) ? document.getElementById('LoginLogin').value  = user[0].login : null;
        console.log(user[0].login)
        console.log(user)
       
    };
    /**Форма Избранное */
    CreateContentFav (data){ 
        const ContentFav = `
            <div class="favourites-category-wp persAcc-data-active">
                <h2 class="heading-favourites-text">Избранное</h2>
                <div class="favourites-item-list-wp">
                    
                </div>
            </div>
        `;
        this.windowWp.insertAdjacentHTML("beforeend", ContentFav);
        const ListFav = this.windowWp.querySelector('.favourites-item-list-wp');
        data !== null ? this.CreateContentFav : this.NoItem(ListFav)
    };
    /**No Item */
    NoItem(wp){
        
        wp.innerHTML = ''
        const html = `<div class="wp-item-none">
            Список пока пуст
            <div class="svg-easy-wp">
                
                <svg class="svg-easy-size" viewBox="0 0 87 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.6437 10.214C52.8344 -6.59533 27.6203 1.80935 10.811 18.6187C-5.99836 35.428 2.40631 43.8327 19.2157 60.6421C36.025 77.4514 61.239 69.0467 78.0484 52.2374C94.8577 35.428 78.0484 18.6187 69.6437 10.214Z" fill="white" stroke="#7880B5" stroke-width="2"/>
                <path  id="pupil" d="M36.3786 43.4816C40.8251 47.9281 48.0343 47.9281 52.4808 43.4816C56.9273 39.0351 56.9273 31.8258 52.4808 27.3793C48.0343 22.9328 40.8251 22.9328 36.3786 27.3793C31.9321 31.8258 31.9321 39.0351 36.3786 43.4816Z" fill="black" stroke="#7880B5"/>
                <path  id="pupil2" d="M44.2538 41.4482C48.5748 41.4228 45.8473 38.8721 45.825 35.0749C45.8027 31.2777 48.5033 29.0466 44.1824 29.072C39.8614 29.0974 42.7864 31.4715 42.8087 35.2687C42.831 39.0659 39.9328 41.4736 44.2538 41.4482Z" fill="#FF214F"/>
                </svg>

                <svg class="svg-easy-size" viewBox="0 0 85 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2157 10.214C33.025 -6.59533 58.239 1.80935 75.0484 18.6187C91.8577 35.428 83.4531 43.8327 66.6437 60.6421C49.8344 77.4514 24.6203 69.0467 7.81099 52.2374C-8.99836 35.428 7.81099 18.6187 16.2157 10.214Z" fill="white" stroke="#7880B5"/>
                <path id="pupil3" d="M49.4808 43.4816C45.0343 47.9281 37.8251 47.9281 33.3786 43.4816C28.9321 39.0351 28.9321 31.8258 33.3786 27.3793C37.8251 22.9328 45.0343 22.9328 49.4808 27.3793C53.9273 31.8258 53.9273 39.0351 49.4808 43.4816Z" fill="black" stroke="#7880B5"/>
                <path id="pupil4" d="M41.6056 41.4482C37.2846 41.4228 40.0121 38.8721 40.0344 35.0749C40.0567 31.2777 37.356 29.0466 41.677 29.072C45.998 29.0974 43.073 31.4715 43.0506 35.2687C43.0283 39.0659 45.9265 41.4736 41.6056 41.4482Z" fill="#FF214F"/>
                </svg>
                  
            </div>
        </div>`
        wp.insertAdjacentHTML("beforeend", html);
        this.EasyAnimation('pupil');
        this.EasyAnimation('pupil2');
        this.EasyAnimation('pupil3');
        this.EasyAnimation('pupil4');
        this.goToProduct(wp)
       /*  window.addEventListener('load', this.EasyAnimation.bind(this)); */
    }
    /**Предложение продуктов*/
    goToProduct(wp){
        const html  = `

            <a class="no-product-text" href="/product/heating">Посмотреть выгодные предложения</a>
        `
        wp.insertAdjacentHTML("beforeend", html);
    }
    /**Анимация глаз */
    EasyAnimation(id) {
        const container = document.querySelector('.dark-theme');
        const pupil = document.getElementById(id);

        container.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            const rect = container.getBoundingClientRect();
          
            // Координаты мыши относительно SVG:
            const x = clientX - rect.left - container.offsetWidth / 2; 
            const y = clientY - rect.top - container.offsetHeight / 2; 
          
            const maxDistance = 14;
            const angle = Math.atan2(y, x);
            const newX = Math.cos(angle) * maxDistance; 
            const newY = Math.sin(angle) * maxDistance; 
          
            pupil.setAttribute('transform', `translate(${newX}, ${newY})`);
          });

    }
    /**Item fav */
    CreateContentFavCart(data){
        const ListFav = this.windowWp.querySelector('.favourites-item-list-wp');
        ListFav.innerHTML = ''
        data.forEach(({id, img, name, price, count}) => {
            let HTMLFavCart = '';
            HTMLFavCart += `
                <div class="favourites-item-wp" id='${id}'>
                        <div class="favourites-img-description-wp">
                            <img src="${img}" alt="" class="favourites-img">
                            <div class="favourites-description-wp">
                            <p class="favourites-description">
                                ${name}
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
                                            <div class="basket-quantity">${count}</div>
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

                            <div class="favourites-price-wp">
                                <p class="favourites-text">Цена</p>
                                <p class="favourites-price-text">${price}</p>
                            </div> 
                            <div class="favourites-button-wp">
                                <a class="nav-cart-cont  nav-cart-cont-basket-fav" >
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                    </svg>
                                </a>
                                <a class="nav-cart-cont button-delete-fav" >
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                        <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>                                        

                            </div>
                        </div>
                    </div>
            `;

            ListFav.insertAdjacentHTML("beforeend", HTMLFavCart);

        });
    };
    /**Обертка заказов  */
    CreateContentОrdersWP(data){
        
        const  ContentОrders = `
            <div class="оrders-category-wp persAcc-data-active">
                <h2 class="heading-text-odrers">Ваши заказы</h2>
              
                <div class="order-item-wp">
                    
                </div>
            </div>

        `;

        this.windowWp.insertAdjacentHTML("beforeend", ContentОrders);
        const wp = document.querySelector('.order-item-wp')
        data.length > 0 ? this.OrederForm(data, wp) : this.NoItem(wp)
    };
    /**Создание информации о заказах */
    OrederForm(data, wp){
        wp.innerHTML = ''
        data.forEach((order) => {                                        
                const Html = `
                            
                            <div class="order-way">
                                <p class="order-number">Заказ №${order.order_id}</p>
                                <p class="order-date">Ожидаемая дата прибытия ${order.order_date.split('T').slice(0,1)}</p>
                                <a href="#" class="order-details-definite" id='${order.order_id}'>Детали заказа</a>
                            </div>
                            <div class="order-details-wp">
                                <div class="order-details">
                                    <div class="order-step-1">
                                        ${order.status === 'Создание заказа' || order.status === 'Передается' || order.status === 'Доставлен'  ?
                                        `
                                        <p class="order-text-status order-text-status-active">собран</p>
                                        <div class="order-step-img-wp order-step-img-wp-active">
                                            <img src="/img/step-1img.png" alt="" class="step-img-size">
                                            <div class="order-step-ready">
                                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                                </svg>  
                                            </div>
                                        </div>
                                        `
                                        : 
                                        `<p class="order-text-status ">собирается</p>
                                        <div class="order-step-img-wp ">
                                            <img src="/img/step-1img.png" alt="" class="step-img-size">
                                        </div>`
                                        }      
                                    </div>
                                    <div class="order-line-wp">
                                        <div class="order-line-way">передается
                                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg order-svg-active" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                                <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>   
                                        </div>
                                    </div>
                                    <div class="order-step-2">
                                        ${order.status === 'Передается' || order.status === 'Доставлен'  ?
                                        `
                                        <p class="order-text-status order-text-status-active">доставляется
                                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                                <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </p>
                                        <div class="order-step-img-wp order-step-img-wp-active">
                                            <img src="/img/ste-2img.png" alt="" class="step-img-size">
                                            <div class="order-step-ready">
                                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                                </svg>  
                                            </div>
                                        </div>
                                        `
                                        : 
                                        `
                                        <p class="order-text-status ">доставляется
                                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                                <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </p>
                                        <div class="order-step-img-wp ">
                                            <img src="/img/ste-2img.png" alt="" class="step-img-size">
                                        </div>
                                        `
                                        }  
                                        
                                    </div>
                                    <div class="order-line-wp">
                                        <div class="order-line-way">заказ уже едет</div>
                                    </div>
                                    <div class="order-step-3">
                                        ${order.status === 'Доставлен'  ?
                                            `
                                            <p class="order-text-status order-text-status-active">ждет вас</p>
                                            <div class="order-step-img-wp order-step-img-wp-active">
                                                <img src="/img/step-3img.png" alt="" class="step-img-size">
                                                <div class="order-step-ready">
                                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                                    </svg>  
                                                </div>
                                            </div>
                                            `
                                            : 
                                            `
                                            <p class="order-text-status ">ждет вас</p>
                                            <div class="order-step-img-wp ">
                                                <img src="/img/step-3img.png" alt="" class="step-img-size">
                                            </div>
                                            `
                                            }
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="order-line"></div>
                        
    
    
                `;
                wp.insertAdjacentHTML("beforeend", Html)
            })
            
        
    } 
    /**Создание подробное опсиание информации о заказе*/
    async orderInfo (event){
        const Item  = event.target.closest('.order-details-definite')
        if(!Item){
            return
        }
        const productImg = {}
        const {Orders} = await this.GetOrder(this.InfoUser[0].id)
        const order = Orders.filter((el) => el.order_id === Number(Item.id))
        const {delivery} = await this.GetDelivery(order[0].delivery_type)
        const {products} = await this.GetOrderProduct(order[0].order_id)
        const imagePromise  = products.map(async (el) => {
            const {src} = await this.fetchProductImage(el.product_id)
            return { productId: el.product_id, src };
        })
        const results = await Promise.all(imagePromise);
        results.forEach(({ productId, src }) => {
            productImg[productId] = src;
        });
        console.log(order)
        console.log(delivery)
       
        this.orderHtmlFrom(order, delivery, products , productImg)
        

    }
    /**Закартые заказа*/
    async btnOrderClose(event){
        const Item =  event.target.closest('.order-info-close')
        if(!Item){
            return
        }
        const {Orders} = await this.GetOrder(this.InfoUser[0].id);
        this.windowWp.innerHTML = ''
        this.resizePadding()  
        this.CreateContentОrdersWP(Orders)
    }
    /**Создание html элемента формы*/
    async orderHtmlFrom(order, delivery,products, prodImg){
        
        this.windowWp.innerHTML = ''
        this.windowWp.style.padding = '0px'
        const html = `
            <div class='number-of-order'>
                <div class='order-info-header'>Информаиця о заказе
                    <div class="btn-order-info-wp">
                        <div class='order-info-more'>
                            <svg class='order-svg-exp' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.293,9.707a1,1,0,0,1,0-1.414L18.586,4H16a1,1,0,0,1,0-2h5a1,1,0,0,1,1,1V8a1,1,0,0,1-2,0V5.414L15.707,9.707a1,1,0,0,1-1.414,0ZM3,22H8a1,1,0,0,0,0-2H5.414l4.293-4.293a1,1,0,0,0-1.414-1.414L4,18.586V16a1,1,0,0,0-2,0v5A1,1,0,0,0,3,22Z"></path></g></svg>
                        </div>
                        <div class='order-info-close'>
                            <svg class="svg-order-info-close" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"  fill-rule="evenodd"></path></g></svg>
                        </div>
                    </div>
                </div>
                <div class='order-info-main-wp'>
                    <div class="order-line-one order-info-basic-flex">
                        <p>Заказ от <span class="order-inf-dop-color">${order[0].order_date.split('T').slice(0,1)}</span></p>
                        <p>Номер зааказа -<span class="order-inf-dop-color">${order[0].order_id}</span></p>
                    </div>
                    <div class="order-line-one order-info-basic-flex">
                        <p>Статус доставки: <span class="order-inf-dop-color">${order[0].status.toLowerCase()}</span></p>
                        <p>Тип доставки: <span class="order-inf-dop-color">${delivery.type.toLowerCase()}</span></p>
                        ${
                            order[0].delivery_time !== null ? 
                            `<p>Дата доставки: <span class="order-inf-dop-color">${order[0].delivery_time.toLowerCase()}</span></p>`
                            :`<p>Дата доставки: <span class="order-inf-dop-color">орпеделяется</span></p>`
                            

                        }
                    </div>
                    <div class="order-line-one oreder-info-product-wp">
                        <p>Товары</p>
                        <div class="order-info-product-list">
                            ${products.map((el) =>{
                                const src = prodImg[el.product_id]
                                const html =  `<a class="oreder-info-prodacut-item" href="/product/santeh/id/${el.product_id}" id="${el.product_id}" >
                                    <img class="order-info-product-img" src="/img/${src}.webp" alt="">
                                    <span class="product-count">${el.quantity}</span>
                                </a>`
                                return html
                            }).join('')}
                        </div>
                    </div>
                    <div class="order-line-one order-info-basic-flex"">
                        <p>Цена заказа: <span class="order-inf-dop-color">${Math.round(order[0].total_price)}р</span></p>
                        <p>Цена доставки: <span class="order-inf-dop-color">${delivery.price}р</span></p>
                        <p>Итоговая цена: <span class="order-inf-dop-color">${Math.round(order[0].total_price) + +delivery.price}р</span></p>
                    </div>
                
                
            </div>
        `
        this.windowWp.insertAdjacentHTML('beforeend', html)
    }
    /**Преключатель */
    ToggleFormPassword(event) {
        const Item = event.target.closest('.heading-text-pers-info-wp');
        if (!Item) {
            return; 
        }
        console.log('click');
        const FormPassword = document.querySelector('.info-passwor-form-wp')
        const Svg = Item.querySelector('.svg-filter-item')
        Svg.classList.toggle('svg-filter-item-active')
        FormPassword ? FormPassword.classList.toggle('info-passwor-form-wp-active') : null; 
    }
    /**Отображение окон */
    async SwitchingProcessing(AccId){
        
        // const {InfoUser} = await this.GetUserMainInfo();
        const FavList = null
         
        switch(AccId){
            case'Acc':
                this.windowWp.innerHTML = ''
                this.resizePadding()
                this.CreateContentAcc(this.InfoUser)
               
            break;
            case'Adress':
                this.windowWp.innerHTML = ''
                this.resizePadding()
                this.CreateContentAddress(this.InfoUser)
                
            break;
            case'Favourites':
                this.windowWp.innerHTML = ''
                this.resizePadding()
                this.CreateContentFav(FavList)
                
            break;
            case'Orders':
                const {Orders} = await this.GetOrder(this.InfoUser[0].id);
                this.windowWp.innerHTML = ''
                this.resizePadding()  
                this.CreateContentОrdersWP(Orders)
               
                
            break;
            case'Support':
                this.windowWp.innerHTML = ''
                this.resizePadding()
                this.NoItem(this.windowWp)
                
            break;    
        }
    }
    ///////////////////////////////////////////////////////////////////////////////
    /** Tabs */

    /**Переключатель */
    Sections(event){
        const Item = event.target.closest('.categor-item-cont');
        if (!Item) {
            return;
        }
        this.LineRemove()
        const Line  = Item.parentElement.querySelector('.line-categori')
        const Text  = Item.querySelector('.categor-text')
        const Svg = Item.querySelector('.svg-categori')
        Line.classList.add('line-active')
        Text.classList.add('categor-text-active')
        this.SwitchingProcessing(Text.id)
        Svg.id ? Svg.classList.add('svg-categori-stroke-active'):Svg.classList.add('svg-categori-active')
    }
    /** Удаление эффектов*/ 
    LineRemove(){
        const AllLine  = document.querySelectorAll('.line-active')
        const AllText   = document.querySelectorAll('.categor-text-active')
        const AllSvg = document.querySelectorAll('.svg-categori-active')
        const AllStrokeSvg = document.querySelectorAll('.svg-categori-stroke-active')
        AllLine ? AllLine.forEach((el) =>{
            el.classList.remove('line-active')
        }):null
        AllText ? AllText.forEach((el) =>{
            el.classList.remove('categor-text-active')
        }):null
        AllSvg ? AllSvg.forEach((el) =>{
            el.classList.remove('svg-categori-active')
        }): null
        AllStrokeSvg ? AllStrokeSvg.forEach((el) =>{
            el.classList.remove('svg-categori-stroke-active')
        }): null
    }
    /**resize */
    resizePadding(){
        
        const width = window.innerWidth
        if(width > 992){
            this.windowWp.style.padding = '46px 48.5px'
        }else if(width <= 991 && width >= 768){
            this.windowWp.style.padding = '25px 25.5px'
        }else if(width <= 767 && width >= 481){
            this.windowWp.style.padding = '13px 15px'
        }else if(width <= 480){
            this.windowWp.style.padding = '10px 12px'
        }
    }
    /**update main info */
    updateProfileMainInfo(event){
        const Item  = event.target.closest('.button-pers-info--save')
        if(!Item || Item.id !== 'main-info-button'){
            return
        }
        const data = {}
        let valid = true
        data.id  = this.InfoUser[0].id
        const name  = document.getElementById('Name')
        
        this.stringInputValidation(name.value) ? data.first_name = name.value && this.successValid(name) : valid  = this.errorValid(name)
        const surName  = document.getElementById('SurName')
        this.stringInputValidation(surName.value) ? data.last_name = surName.value && this.successValid(surName) : valid  = this.errorValid(surName)
        const Login  = document.getElementById('LoginLogin')
        this.stringInputValidationLogin(Login.value) ? data.login = Login.value && this.successValid(Login) : valid  = this.errorValid(Login)
        const email  = document.getElementById('Post')
        this.stringInputValidationMail(email.value) ? data.email = email.value && this.successValid(email) : valid  = this.errorValid(email)
        const phone  = document.getElementById('Numder')
        this.stringInputValidationNumber(phone.value) ? data.phone = phone.value && this.successValid(phone) : valid  = this.errorValid(phone)

        if(valid){
            this.putMainInfo(data)
            this.pushPopSuccess()
        }else{
            this.pushPopError()
        }
        
        
    }
    /**update password */
    updatePassword(event){
        const Item  = event.target.closest('.button-pers-info--save')
        if(!Item || Item.id !== 'change-password'){
            return
        }
        const data = {}
        let valid = true
        data.id  = this.InfoUser[0].id
        const pasOld = document.getElementById('PasswordOld')
        this.validOldPassword(this.InfoUser[0].id, pasOld.value)
            .then(isValid => {
                if (isValid) {
                    this.successValid(pasOld);
                } else {
                    this.errorValid(pasOld);
                }
            })
            .catch(error => {
                console.error("Ошибка в валидации пароля:", error);
                this.errorValid(pasOld); // Обработка ошибок, если это необходимо
            });
        
        const newPas = document.getElementById('PasswordNew')
        this.passwordValid(newPas.value) ? data.password = newPas.value && this.successValid(newPas) : valid  = this.errorValid(newPas);
        const newPasСonfirmation  = document.getElementById('PasswordNewSuc')
        newPasСonfirmation.value ===  newPas.value && newPasСonfirmation.value !== "" ? this.successValid(newPasСonfirmation ) : valid  = this.errorValid(newPasСonfirmation);
        console.log(newPasСonfirmation.value)
        if(valid){
            this.putPassword(data)
            this.pushPopSuccess()
        }else{
            this.pushPopError()
        }
        
        
    }
    /**update password */
    updateAddress(event){
        const item  = event.target.closest('.button-adress-category')
        if(!item){
            return
        }
        const data={}
        let valid  = true
        data.id  = this.InfoUser[0].id
        const adress = document.getElementById('AddressPersInfo')
        console.log(adress.value)
        this.addressValid(adress.value) ? data.address = adress.value && this.successValid(adress) : valid  = this.errorValid(adress);
        //г Москва , ул Пудовкина , дом 7
        if(valid){
            this.putMainInfo(data)
            this.pushPopSuccess()
        }else{
            this.pushPopError()
        }
        
    }
    /**валидация  */
    stringInputValidation(string){
        const validateLogin = string => /^[а-яА-ЯёЁa-zA-Z-]{2,15}$/.test(string);
        return validateLogin(string)
        
    }
    stringInputValidationLogin(string){
        const validateLogin = string => /^[а-яА-ЯёЁa-zA-Z-0-9]{2,20}$/.test(string);
        return validateLogin(string)
        
    }
    stringInputValidationMail(string){
        const validateLogin = string => /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(string);
        return validateLogin(string) 
    }
    stringInputValidationNumber(string){
        const validateLogin = string => /^\s*(?:\+7|7|8)?\s*\(?(\d{3})\)?\s*(\d{3})\s*[-]?(\d{2})\s*[-]?(\d{2})\s*$/.test(string);
        return validateLogin(string) 
    }
    passwordValid(string){
        const validateLogin = string => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(string);
        return validateLogin(string)
    }
    addressValid(item){
        const reg = /^(?:г\.|город|с\.|п\.|пос\.|дер\.|район|р-н)?\s*([А-Яа-яёЁ]+\s+)?([А-Яа-яёЁ]+\s*[-\w]*\.?\s*)(?:д\.?\s*\d+[a-zA-Zа-яёА-Я]*,?)?\s*(.*?)\s*,?\s*(\d{6})?$/
        const valid  = item => reg.test(item);
        return (valid(item.trim()))
    }
    errorValid(item){
        item.style.boxShadow = 'inset 0px 0px 10px 1px #D95D5D'
        const valid  = false
        return valid
    }
    successValid(item){
        item.style.boxShadow = 'inset 0px 0px 10px 1px green'
        return item.value
    }
    noColorInput(event){
        const item = event.target.closest(`.input-entry-pers-info`)
        if(!item){
            return
        }
        item.style.boxShadow = 'none'
    }
    pushPopSuccess(){
        const html = () => {
            let DivWp  = document.createElement('div');
            let divText  = document.createElement('div');
            
            DivWp.classList.add('pop-basket-wp');
            divText.classList.add('basket-pop-text');
            divText.textContent = `Данные успешно обновлены`;
            DivWp.append(divText)
            setTimeout(function(){
            DivWp.classList.add('pop-basket-wp-active');
            }, 100)
            return{
            DivWp, 
            }
        }
        const  Pop = html()
        const  a = document.body;
        a.append(Pop.DivWp);

        setTimeout(function(){
        document.querySelector('.pop-basket-wp').remove();
                          
        }, 3000);
    }
    pushPopError(){
        const html = () => {
            let DivWp  = document.createElement('div');
            let divText  = document.createElement('div');
            
            DivWp.classList.add('pop-basket-wp-warning');
            divText.classList.add('basket-pop-text');
            divText.textContent = `Ошибка обновления`;
            DivWp.append(divText)
            setTimeout(function(){
            DivWp.classList.add('pop-basket-wp-active');
            }, 100)
            return{
            DivWp, 
            }
        }
        const  Pop = html()
        const  a = document.body;
        a.append(Pop.DivWp);

        setTimeout(function(){
        document.querySelector('.pop-basket-wp-warning').remove();
                          
        }, 3000);
    }
    /**отправка инофрмации на обновления */
    async putMainInfo(data){
        try {
            const res = await fetch(`/user/:login`,{
                method:"PUT", 
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            if(!res.ok){
                throw new Error("error", res.status);
            }
            console.log('updated success')
            this.GetUserMainInfo()
        } catch (error) {
            
        }
    }
    /**проверка старого пароля */
    async validOldPassword(id, pas){
        try {
            const data = {
                id:id,
                password: pas,
            }
            const res = await fetch(`/user/password_old`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            if(res.ok){
                return true
            }
            return false
        } catch (error) {
            return false
        }
    }
    /**смена пароля*/
    async putPassword(data){
        try {
            const res = await fetch(`/user/:login`,{
                method:"PUT", 
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            if(!res.ok){
                throw new Error("error", res.status);
            }
            console.log('updated success')
        } catch (error) {
            
        }
    }
    ///////////////////////////////////////////////////////////////////////////////
    
    /**Обработка выхода */
    async Logout(){
        const res = await fetch('/logout', {
            method: 'POST'
        });
        if(res.ok){
            window.location.href = "/"
        }else console.log('чет-то не так ')
    }
}

const Test = new Profile
window.addEventListener('DOMContentLoaded',function(){
    Test.GetUserStart()
    Test.fetchProductImage(73)
})
