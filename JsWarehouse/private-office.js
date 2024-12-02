const Categori = document.querySelectorAll('.categor-text');
/* база для избранного */
const FAV_CART_BASE = [
    {
        id:'el0001',
        img:'img/dush.png',
        name: 'Насосная группа без смесителя Rommer - Ду (без насоса)',
        price:'4 545$',

    },
    {
        id:'el0002',
        img:'img/tualet-noFon.png',
        name: 'Насосная группа без смесителя Rommer - Ду25 (без насоса)',
        price:'4 545$',

    },
    {
        id:'el0003',
        img:'img/gazona-kosilka-NoFon.png',
        name: 'Насосная группа без смесителя Rommer - Ду25 (без насоса)',
        price:'4 545$',

    },
    {
        id:'el0004',
        img:'img/tovar.png',
        name: 'Насосная группа без смесителя Rommer - Ду25 (без насоса)',
        price:'4 545$',

    },
];


const User = [
    {
        status:'',
        login:'ilya12345',
        password:'ilya12345',
        mail:'ilya.pavlenko@gmail.com',
        number:'+79162801202',
        name:'Илья',
        surname:'Павленко',
        img:'', 
        adress:'ул. Пудовкина 7',
        fav:[
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
        ],
        orders:[
            {   
                staus:'processing',
                number:'Заказ №3432424',
                date:'12.02.2024',
                idZak:'Z111',
                address:'',
                payment:'',
                totalPrice:'',
                products:[

                ],
                step1:[
                    {   stepStatus:'ready',
                        ferstAtr:'order-text-status-active',
                        secondAtr:'order-step-img-wp-active,',
                        svgReady:`
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>

                        `,
                    },
                ],
                step2:[
                    {   stepStatus:'ready',
                        ferstAtr:'order-text-status-active',
                        secondAtr:'order-step-img-wp-active,',
                        svgReady:`
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>

                        `,
                    },
                ],
                step3:[
                    {   stepStatus:'no-ready',
                        ferstAtr:'order-text-status-active',
                        secondAtr:'order-step-img-wp-active,',
                        svgReady:`
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>

                        `,
                    },
                ],
            }, 
            {
                staus:'processing',
                number:'Заказ №288888888',
                date:'15.02.2024',
                idZak:'Z111',
                step1:[
                    {   stepStatus:'ready',
                        ferstAtr:'order-text-status-active',
                        secondAtr:'order-step-img-wp-active,',
                        svgReady:`
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>

                        `,
                    },
                ],
                step2:[
                    {   stepStatus:'no-ready',
                        ferstAtr:'order-text-status-active',
                        secondAtr:'order-step-img-wp-active,',
                        svgReady:`
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>

                        `,
                    },
                ],
                step3:[
                    {   stepStatus:'no-ready',
                        ferstAtr:'order-text-status-active',
                        secondAtr:'order-step-img-wp-active,',
                        svgReady:`
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>

                        `,
                    },
                ],
            }
        ],
        
    },
    {   
        status:'',
        login:'popa1234',
        password:'popa1234',
        mail:'popa.pavlenko@gmail.com',
        number:'+791801202',
        name:'Popa',
        surname:'Павленко',
        img:'', 
        adress:'ул. Пудовкина 7',
        fav:[
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
        ],
        orders:[
            
            
        ]
        
    },
    {   
        status:'',
        login:'admin12345',
        password:'admin12345',
        mail:'popa.pavlenko@gmail.com',
        number:'+791801202',
        name:'Popa',
        surname:'Павленко',
        img:'', 
        adress:'ул. Пудовкина 7',
        fav:[
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
        ],
        orders:[
            
            
        ]
        
    },
    {   
        status:'',
        login:'Bandera888',
        password:'Bandera888',
        mail:'ilya.pavlenko@gmail.com',
        number:'+79162801202',
        name:'Bandera',
        surname:'Gitler',
        img:'', 
        adress:'Ukrain',
        fav:[
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
           
        ],
        
    },
    {   
        status:'',
        login:'ilya123445',
        password:'ilya123445',
        mail:'ilya.pavlenko@gmail.com',
        number:'+79162801202',
        name:'Илья',
        surname:'Павленко',
        img:'', 
        adress:'ул. Пудовкина 7',
        fav:[
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
            {
                id:'elll21',
                name:'Насосная группа   Rommer - Ду2 (без насоса)',
                img:'img/moi-do-dir.png',
                price: '3089789$',
                art:'23423423423',
                sale: '13%',
                sbname:'Котеальное оборудование',
                category:'Отполение',
                brend:'Valtec'
            },
        ],
        
    },
]
localStorage.setItem('BaseUsers', JSON.stringify(User));

/* обработка клика */

document.addEventListener("DOMContentLoaded", function(){
let UserEntry = JSON.parse(localStorage.getItem('User'))
    if(UserEntry.status != 'active'){
        User.forEach(element => {
            if(element.password == UserEntry.password && element.login == UserEntry.login){
                let Status ='active';
                UserEntry.status = Status;
                UserEntry.mail = element.mail;
                UserEntry.number = element.number;
                UserEntry.name = element.name;
                UserEntry.surname = element.surname;
                UserEntry.img = element.img;
                UserEntry.adress = element.adress;
                UserEntry.login = element.login;
                let ListFav = [];
                UserEntry.fav = ListFav;
                UserEntry.fav.forEach(favEl => {
                    ListFav.push(favEl)
                });
                let OrderList = [];
                UserEntry.orders = OrderList
                UserEntry.orders = element.orders;
            }
        });
        localStorage.setItem('User', JSON.stringify(UserEntry));

    }
    if(UserEntry.staus == 'active'){
        UserEntry.fav = UserEntry.fav
        UserEntry.orders = UserEntry.orders
    }

    const ButtonEx = document.getElementById('ButtonExPrivOf')
    ButtonEx.addEventListener('click', function(){
        localStorage.removeItem('User')
    })
    ButtonEx.addEventListener("mouseover", function(){
        let Svg  = document.querySelector('.svg-acc-exit');
        Svg.style.stroke = '#F6D863'
    })
    ButtonEx.addEventListener("mouseout", function(){
        let Svg  = document.querySelector('.svg-acc-exit');
        Svg.style.stroke = '#7880B5'
    })
   /*  if(UserEntry.status == 'active'){
        document.querySelector('.')
    } */




Categori.forEach(({id}) => {
    var AccId= id;
    let Clickelemet = document.getElementById(id);
    /* путь до родителя */
    let RoditelCase = Clickelemet.parentElement;
    let GrandPa = RoditelCase.parentElement;
    let step1 = GrandPa.parentElement;
    let step2 = step1.parentElement;
    
    let step3 = step2.parentElement;
    
    let MainCont = step3.parentElement;
  
    var InfoCatefgoty = MainCont.querySelector('.persAcc-data-wp');
    console.log(InfoCatefgoty)
/* начальный контент */
    if(AccId == 'Acc'){
        CreateContentAcc();
 
    }
/* раздел с функциями */
     /* адресс рендер контента  */
     function CreateContentAddress(){
        let ContentAddress = '';
        ContentAddress = `
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
                <img src="img/adress-category-bg.png" alt="">
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentAddress);

        document.getElementById('AddressPersInfo').value = UserEntry.adress
        
    };
    /* акк ренедер контент */
    function CreateContentAcc(){
        let ContentAcc = '';
        ContentAcc = `
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
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Почта</p>
                                                <input type="email" name="Post"   id="Post" class="input-entry-pers-info" placeholder="Введите почту" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Логин</p>
                                                <input type="text" name="Login"  id="Login" class="input-entry-pers-info" placeholder="Введите логин" required  minlength="4">
                                            </div>
                                            
                                        </div>

                                        <div class="second-pers-info-wp">
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name bg-inuput-pers-info-name">Фамииля</p>
                                                <input type="text" name="SurName" id="SurName" class="input-entry-pers-info" placeholder="Введите ваше фамилию" required  minlength="4">
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
                
                                </div>
                                <div class="pers-info-passwor-item">
                                    <h3 class="heading-text-pers-info">Изменение пароля</h3>
                                    <div class="info-passwor-form-wp">
                                        <div class="ferst-pers-info-wp">
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name ">Старый пароль</p>
                                                <input type="text" name="PasswordOld"  class="input-entry-pers-info" placeholder="Введите старый пароль" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp">
                                                <p class="inuput-pers-info-name ">Новый пароль</p>
                                                <input type="text" name="PasswordNew"  class="input-entry-pers-info" placeholder="Введите новый пароль" required  minlength="4">
                                            </div>
                                            <div class="input-pers-info-wp input-pers-info-wp-no-bottom">
                                                <p class="inuput-pers-info-name ">Введите еще раз новый пароль</p>
                                                <input type="text" name="PasswordNewSuc"  class="input-entry-pers-info" placeholder="Введите еще раз новый пароль" required  minlength="4">
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <button class="button button-pers-info--save">Сохранить</button>
                            </div>
                        </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentAcc);

        document.getElementById('Name').value  = UserEntry.name;
        document.getElementById('Post').value = UserEntry.mail;
        document.getElementById('SurName').value = UserEntry.surname;
        document.getElementById('Numder').value =  UserEntry.number;
        document.getElementById('Login').value = UserEntry.login;
    };
    
    /* избранное рендер контент */
    function CreateContentFav (){
        let ContentFav = '';
        ContentFav = `
            <div class="favourites-category-wp persAcc-data-active">
                <h2 class="heading-favourites-text">Избранное</h2>
                <div class="favourites-item-list-wp">
                    
                </div>
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentFav);
    };
    /* рендер контента */
    function CreateContentFavCart (data){
        const ListFav = InfoCatefgoty.querySelector('.favourites-item-list-wp');
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

    /* заказы рендер контент */
    function CreateContentОrdersWP(){
        let ContentОrders = '';
        ContentОrders = `
            <div class="оrders-category-wp persAcc-data-active">
                <h2 class="heading-text-odrers">Ваши заказы</h2>
              
                <div class="order-item-wp">
                    
                </div>
            </div>

        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentОrders);
    };

    function CreateContentОrders(date, wp){

        date.forEach(element => {

        let stepReadyTaxt = '';
        let stepReadyFoto = '';
        let divSvgReady = '';
        let stepReadyTaxt2  = '';
        let stepReadyFoto2 = '';
        let divSvgReady2 = '';
        let stepReadyTaxt3  = '';
        let stepReadyFoto3 = '';
        let divSvgReady3 = '';
        
            element.step1.forEach(elem => {
                if(elem.stepStatus == 'ready'){
                    stepReadyTaxt =   elem.ferstAtr;
                    stepReadyFoto = elem.secondAtr;
                    divSvgReady = elem.svgReady;
                    return 
                }
            });
            element.step2.forEach(elem => {
                if(elem.stepStatus == 'ready'){
                    stepReadyTaxt2 =   elem.ferstAtr;
                    stepReadyFoto2 = elem.secondAtr;
                    divSvgReady2 = elem.svgReady;
                    return 
                }
            });
            element.step3.forEach(elem => {
                if(elem.stepStatus == 'ready'){
                    stepReadyTaxt3 =   elem.ferstAtr;
                    stepReadyFoto3 = elem.secondAtr;
                    divSvgReady3 = elem.svgReady;
                    return 
                }
            });
        

            let Html ='';                                               
            Html = `

                    
                        <div class='number-of-order'>
                             <div class='order-info-header'>инфа</div>
                             <div class='order-info-main-wp'></div>
                            <div class='order-info-close'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z" fill="#d9d9d9" fill-rule="evenodd"></path></g></svg>
                            </div>
                            <!-- <div class='order-info-more'>
                                <svg class='order-svg-exp' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.293,9.707a1,1,0,0,1,0-1.414L18.586,4H16a1,1,0,0,1,0-2h5a1,1,0,0,1,1,1V8a1,1,0,0,1-2,0V5.414L15.707,9.707a1,1,0,0,1-1.414,0ZM3,22H8a1,1,0,0,0,0-2H5.414l4.293-4.293a1,1,0,0,0-1.414-1.414L4,18.586V16a1,1,0,0,0-2,0v5A1,1,0,0,0,3,22Z"></path></g></svg>
                            </div> -->
                        </div>
                        <div class="order-way">
                            <p class="order-number">${element.number}</p>
                            <p class="order-date">Ожидаемая дата прибытия ${element.date}</p>
                            <a href="#" class="order-details-definite" id='${element.idZak}'>Детали заказа</a>
                        </div>
                        <div class="order-details-wp">
                            <div class="order-details">
                                <div class="order-step-1">
                                    <p class="order-text-status ${stepReadyTaxt}">собирается</p>
                                    <div class="order-step-img-wp ${stepReadyFoto}">
                                        <img src="img/step-1img.png" alt="" class="step-img-size">
                                        ${divSvgReady}
                                    </div>
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
                                    <p class="order-text-status ${stepReadyTaxt2}">доставляется
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </p>
                                    <div class="order-step-img-wp ${stepReadyFoto2}">
                                        <img src="img/ste-2img.png" alt="" class="step-img-size">
                                        ${divSvgReady2}
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">заказ уже едет</div>
                                </div>
                                <div class="order-step-3">
                                    <p class="order-text-status ${stepReadyTaxt3}">ждет вас</p>
                                    <div class="order-step-img-wp ${stepReadyFoto3}">
                                        <img src="img/step-3img.png" alt="" class="step-img-size">
                                        ${divSvgReady3}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-line"></div>
                    


            `;
            wp.insertAdjacentHTML("beforeend", Html)
        });
    }
    /* поддержка рендер контент */
    function CreateContentSupport(){
        let ContentSupport = '';
        ContentSupport = `
            <div class="support-category-wp persAcc-data-active">
                    напишите нам, мы вас всегда поддержим
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentSupport);
    };
     /* корзина рендер контент */
     function CreateContentBasket(){
        let ContentBasket = '';
        ContentBasket = `
            <div class="basket-category-wp persAcc-data-active">
                    возможно тут будет корзина возможно тут будет корзина возможно тут будет корзина
                    возможно тут будет корзина возможно тут будет корзина возможно тут будет корзина
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentBasket);
    };


/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

    Clickelemet.addEventListener('click', function(e){
        if (AccId == e.target.id){
            Clickelemet.classList.add('categor-text-active');
            

            function ResultCountAll3(arr){
                let res = 0
                arr.forEach(elem => {
                  res += elem.count 
                });
                document.querySelector('.item-basket-pop-count').textContent = +res
              }

              function WarningPopFav (name){
                let DivWp  = document.createElement('div');
                let divText  = document.createElement('div');
                
                DivWp.classList.add('pop-basket-wp');
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

           
            switch(AccId){
                case'Acc':
                    InfoCatefgoty.innerHTML="";
                    CreateContentAcc();
                break;
                case'Adress':
                    InfoCatefgoty.innerHTML="";
                    CreateContentAddress();
                    document.getElementById('AddressPersInfo').value = UserEntry.adress

                    const BtnAdressCt = document.querySelector('.button-adress-category')
                    BtnAdressCt.addEventListener('click', function(){
                        let AdressValue = document.getElementById('AddressPersInfo').value
                        if(AdressValue.length > 0){
                            UserEntry.adress = AdressValue;
                            localStorage.setItem('User', JSON.stringify(UserEntry));
                            document.getElementById('AddressPersInfo').style.border = '1px solid red'
                        }
                        console.log('ok')
                    })
                break;
                case'Favourites':
                    console.log(UserEntry.fav)
                    
                    if(UserEntry.fav != 0){
                        InfoCatefgoty.innerHTML="";
                        CreateContentFav();
                        CreateContentFavCart(UserEntry.fav);

                        const RemveFav = document.querySelector('.favourites-item-list-wp')
                        RemveFav.addEventListener('click', FavDelete) ;
                        RemveFav.addEventListener('click', FavGoBasket) ;
                        RemveFav.addEventListener('click', CartBasketMinusAcc) 
                        RemveFav.addEventListener('click', CartBasketPlusAcc);

                    }
                    else{
                        
                        function NoInfo(){
                        
                            let Wp = document.createElement('div');
                            let Text = document.createElement('p');

                            Wp.classList.add('wp-pusto-acc')
                            Text.classList.add('text-acc-pusto')
                            Text.textContent = "Tут как-то пусто";
                            
                            Wp.append(Text)
                            return Wp
                        }
                        
                        InfoCatefgoty.innerHTML='';
                        let pop = NoInfo();
                        CreateContentFav();
                        let a = document.querySelector('.favourites-item-list-wp')
                        a.append(pop)

                    }


                    
                   


                    function FavGoBasket(event){
                        const Btn = event.target.closest('.nav-cart-cont-basket-fav'); 
                        if(!Btn){
                        return
                        }
                        let Id = Btn.parentElement.parentElement.parentElement.id;
                        let ArrID = UserEntry.fav;
                        console.log('это')
                        console.log(ArrID)
                        let ArrBasket = [];
                        if(JSON.parse(localStorage.getItem('Basket')) != null){
                            ArrBasket = JSON.parse(localStorage.getItem('Basket'))
                            console.log('кр до получила ')
                            console.log(ArrBasket)
                        }
                        let Objadd = {};
                        ArrID.forEach(el =>{
                            if(el.id == Id){
                                Objadd = el
                            }
                            return Objadd
                        })

                        Objadd.id = Id;

                        let existingItem = ArrBasket.find(el => el.id === Id);
                        if (existingItem) {
                            existingItem.count += Objadd.count; // Увеличиваем количество//////////////////////////////////////////////////////////////
                            existingItem.price += Objadd.price;
                            console.log('ok')
                        } else {
                            Objadd.price = Objadd.price; 
                            Objadd.count = Objadd.count;
                            Objadd.img = Objadd.img;
                            Objadd.name = Objadd.name;
                            ArrBasket.push(Objadd); // Добавляем новый элемент
                        }



                        document.getElementById(Id).remove()
                        localStorage.setItem('Basket', JSON.stringify(ArrBasket))

                        let warning = `Товар ${Objadd.name} добавлен в коризну`;
                        let Pop = WarningPopFav(warning)
                        let  a = document.body;
                        console.log(a);
                        a.append(Pop.DivWp);
                            
                        setTimeout(function(){
                        document.querySelector('.pop-basket-wp').remove();
                                        
                        }, 3000);
                        
                                    /*     const BasketElemWp2 = BasketModWp.querySelector('.kozina-modal-wp')
                        /* BasketElemWp2.innerHTML=""; */
                        document.querySelector('.kozina-modal-wp').innerHTML= '';
                        AllBasketPrice(ArrBasket);
                        RenderBasket(ArrBasket);
                        ResultCountAll3(ArrBasket)
                        console.log(Objadd)
                        console.log('после')
                        console.log(ArrBasket)

                        
                    }

                    function FavDelete(event) {
                        const Btn = event.target.closest('.button-delete-fav'); 
                        if(!Btn){
                        return
                        }

                        let Id = Btn.parentElement.parentElement.parentElement.id;
                        let ArrID = UserEntry.fav;
                        ArrID.splice(ArrID.findIndex(matchesEl), 1);

                        function matchesEl(el) {
                            return el.id === Id;
                        }
                        document.getElementById(Id).remove();
                        UserEntry.fav = ArrID;
                        console.log(UserEntry)
                        localStorage.setItem('User', JSON.stringify(UserEntry));
                        console.log('это удалить')
                    }

                    function CartBasketPlusAcc(event){
                        const Btn = event.target.closest('.basket-button-addition'); 
                        if(!Btn){
                            return
                          }
                        let Id = Btn.parentElement.parentElement.parentElement.parentElement.id
                        console.log(Id)
                        let Elem  = document.getElementById(Id)
                        UserEntry.fav.forEach(element => {
                            if(element.id ==  Id){
                         
                                element.price += element.price / element.count;
                                element.count += 1
                                Elem.querySelector('.basket-quantity').textContent = +element.count;
                                Elem.querySelector('.favourites-price-text').textContent = `${element.price}$`
                                InfoWp.innerHTML = ''; 
                                BasketInfo(ArrID)  
                            }
                        });
                        ResultCountAll3()
                        localStorage.setItem('Basket', JSON.stringify(UserEntry));
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

                    function CartBasketMinusAcc(event){
                        const Btn = event.target.closest('.basket-button-subtract');
                        if(!Btn){
                            return
                          }
                        let Id = Btn.parentElement.parentElement.parentElement.parentElement.id; 
                        console.log(Id)//basket-quantity
                        let Elem  = document.getElementById(Id)
                        UserEntry.fav.forEach(element => {
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
                        ResultCountAll3()
                        localStorage.setItem('Basket', JSON.stringify(UserEntry));
                    }
                   
                break;
                case'Orders':
                        Arr = Array.from(UserEntry.orders).length
                        console.log('dfdf')
                        console.log(Arr)
                        if(Arr > 0){
                        console.log(UserEntry.orders)
                        InfoCatefgoty.innerHTML="";
                        CreateContentОrdersWP();
                         let Wp = document.querySelector('.order-item-wp')
                         CreateContentОrders(UserEntry.orders, Wp)
                        const Zakaz = document.querySelectorAll('.order-details-definite')
                        Zakaz.forEach(({id}) => {
                        let HRef = document.getElementById(id);
                        HRef.addEventListener('click', function(){
                             let OrderInfo = HRef.parentElement.parentElement.querySelector('.number-of-order')
                             OrderInfo.classList.add('number-of-order-active')
                        })
                        const ButtonOrderClose = HRef.parentElement.parentElement.querySelector('.order-info-close')
                        ButtonOrderClose.addEventListener('click', function(){
                            let OrderInfo = HRef.parentElement.parentElement.querySelector('.number-of-order')
                            OrderInfo.classList.remove('number-of-order-active')
                        })
                        
                        });
                        
                    }
                    else{
                        
                        function NoInfo(){
                        
                            let Wp = document.createElement('div');
                            let Text = document.createElement('p');

                            Wp.classList.add('wp-pusto-acc')
                            Text.classList.add('text-acc-pusto')
                            Text.textContent = "Тут как-то пусто";
                            
                            Wp.append(Text)
                            return Wp
                        }

                        InfoCatefgoty.innerHTML='';
                        let pop = NoInfo();
                        InfoCatefgoty.append(pop)
                    } 
                     
        
                break;
                case'Support':
                    InfoCatefgoty.innerHTML="";
                    CreateContentSupport();
                break;
                case'Basket':
                    InfoCatefgoty.innerHTML="";
                    CreateContentBasket();
                break;

                
                
            }
            let Line = GrandPa.querySelector('.line-categori');
            Line.classList.add('line-active');
            let SvgColor = RoditelCase.querySelector('.svg-categori')
            SvgColor.classList.add('svg-categori-active');
            if ( AccId == 'Support' || AccId == 'Orders'){
                console.log('BimBIm');
                SvgColor.classList.remove('svg-categori-active');
                SvgColor.classList.add('svg-categori-stroke-active');
            }
            
            console.log("bomba")
            Categori.forEach(({id}) => {   
                if(id !== AccId){
                    let NoClickelement = document.getElementById(id);
                    let NoTargetRoditelCase = NoClickelement.parentElement;
                    let NoGrandPa = NoTargetRoditelCase.parentElement;
                    let NoSvgColor = NoTargetRoditelCase.querySelector('.svg-categori')
                    NoSvgColor.classList.remove('svg-categori-active');
                    let NoLine = NoGrandPa.querySelector('.line-categori');
                    NoClickelement.classList.remove('categor-text-active');
                    NoLine.classList.remove('line-active');
                    NoSvgColor.classList.remove('svg-categori-active');
                    if ( id == 'Support' || id == 'Orders'){
                        console.log('BimBIm');
                        NoSvgColor .classList.remove('svg-categori-stroke-active');
                        
                    }
                }
                else if(id === AccId){
                    return
                }
            });
        }
    });
});
})










