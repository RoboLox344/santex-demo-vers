const Categori = document.querySelectorAll('.categor-text');

const SubCtOtop = [
    {
        id:'001',
        sbname:'Котеальная разводка',
    },
    {
        id:'002',
        sbname:'Котеальное оборудование',
    },
    {
        id:'003',
        sbname:'Расширительные баки',
    },
    {
        id:'004',
        sbname:'Сантехническая арматура',
    },
    {
        id:'005',
        sbname:'Теплоноситель',
    },
    {
        id:'006',
        sbname:'Насосы',
    },
    {
        id:'007',
        sbname:'Системы защиты от протечеки воды',
    },
    {
        id:'008',
        sbname:'Радиаторы отопления',
    },
    {
        id:'009',
        sbname:'Водонагреватели',
    },
    {
        id:'010',
        sbname:'Канализационное оборудование',
    },
    {
        id:'011',
        sbname:'Конвекторы',
    },
];
const Users =[
    {
        login:'a',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a2',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a3',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a4',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a5',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a6',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a7',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a8',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a9',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a10',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a11',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    {
        login:'a12',
        name:'ilya',
        surname:'pavlenko',
        mail:'ilya@gmail'
    },
    
];
/* база для избранного */
const FAV_CART_BASE = [
    {
        id:'el0001',
        img:'img/dush.png',
        sbname: 'Насосная группа без смесителя Rommer - Ду (без насоса)',
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
const SubCtSantex = [
    {
        id:'001',
        sbname:'Полотенцесушители',
    },
    {
        id:'002',
        sbname:'Ванны',

    },
    {
        id:'003',
        sbname:'Инсталяции',

    },
    {
        id:'004',
        sbname:'Унитазы',

    },
    {
        id:'005',
        sbname:'Равковины',

    },
    {
        id:'006',
        sbname:'Писсуары',

    },
    {
        id:'007',
        sbname:'Биде',

    },
];
const DopCagracter = [
    {
        id:'тип контролера',
        param:[
            "раз",
            "dva",
             "tri",
        ]

    },
    {
        id:'еще чето',
        param:[
            "раз",
            "dva",
             "tri",
        ]

    },
    {
        id:'и еще',
        param:[
            "пять",
            "восемь",
             "tri",
        ]

    },
    {
        id:'письки',
        param:[
            "раз",
            "dva",
             "tri",
        ]

    },
];
console.log(DopCagracter)
console.log(SubCtOtop)


/* const SubCtDacha = [

];
const SubCtInstrum = [

]; */

/* const Body  = document.body;
Body.addEventListener('click', ProductsCategory);
Body.addEventListener('click', ChoosingAnActionProduct);
Body.addEventListener('click', ActionProdButton); */
/* обработка клика */
const Body  = document.body;

console.log('низ')
Body.addEventListener('click', ProductsCategory);
Body.addEventListener('click', ChoosingAnActionProduct);
Body.addEventListener('click', ActionProdButton);
Body.addEventListener('click', UsersShearch);
Body.addEventListener('click', UsersCartOpen);
let CategoryProduct = '';
let SubCategoryProduct = '';

function UsersShearch(event){
    const Btn = event.target.closest('.btn-usres-srech');
    if(!Btn){
      return
    }
    let WpUser = document.querySelector('.usres-list-wp');
    let User = document.getElementById('users').value;
    if(User == 0){
        WpUser.innerHTML='';
        RenderUserAll(Users,WpUser)
    }
    if(User !=0){
        console.log(User)
        console.log('cerf')
        let UnicUser = [];
        Users.forEach(element => {
            if(element.login == User){
                UnicUser.push(element)
                console.log('сука')
                console.log(element.login)
                return UnicUser
            }
        });
        console.log(UnicUser)
        WpUser.innerHTML='';
        RenderUserAll(UnicUser,WpUser)
    }

}
function RenderUserAll(base, wp){
    base.forEach(({login, name, surname}) => {
        let Html = '';
        Html += `
            <div class='usres-item-wp' id='${login}'>
                <div class='users-login'>Логин:${login}</div>
                <div class='users-name'>Имя:${name}</div>
                <div class='users-surname'>Фамилия:${surname}</div>
                <div class='button btn-chek-user'>Посмотреть</div>
            </div>
        
        `;
        wp.insertAdjacentHTML("beforeend", Html)
    });
}

function UsersCartOpen(event){
    const Btn = event.target.closest('.btn-chek-user');
    if(!Btn){
      return
    }
    let WpUser1 = document.querySelector('.usres-list-wp');
    let User = Btn.parentElement.id;
    
    let UserInfo = [];
    Users.forEach(element => {
        if(element.login == User){
            UserInfo.push(element)
        }
    });
    WpUser1.innerHTML='';
    RenderInfoUser(UserInfo,WpUser1)
}
function RenderInfoUser(base,wp){
    base.forEach(({login, name, surname, mail}) => {
        let Html ='';
        Html += `
            <div class='info-user-wp'id='${login}'>
                <div class='text-users-info login-text-users'>Логни:${login}</div>
                <div class='info-users'>
                    <div class='text-users-info'>Имя:${name}</div>
                    <div class='text-users-info'>Фамилия:${surname}</div>
                    <div class='text-users-info'>Email:${mail}</div>
                </div>
            </div>
        
        `;
        wp.insertAdjacentHTML("beforeend", Html)
    });
}

function ProductsCategory(event){
    const Btn = event.target.closest('.ptoducts-category');
    if(!Btn){
      return
    }
    var InfoCatefgoty = document.querySelector('.persAcc-data-wp');
    let Category  = Btn.querySelector('.category-name-admin')
     CategoryProduct = Category.textContent
    if(CategoryProduct  == 'Сантехника'){
        console.log('жопка')
        InfoCatefgoty.innerHTML="";
        RenderSubCutWP()
        let wp = document.querySelector('.sub-ct-prod-admin-wp')
        RenderSubCut(SubCtSantex, wp)
    }
    else if(CategoryProduct == 'Отполение'){
        InfoCatefgoty.innerHTML="";
        RenderSubCutWP()
        let wp = document.querySelector('.sub-ct-prod-admin-wp')
        RenderSubCut(SubCtOtop, wp)
    }
    
     console.log(CategoryProduct)
}




function RenderSubCut(base, wp){
    base.forEach(({id, sbname}) => {
        let HTMLFavCart = '';
        HTMLFavCart += `
            
                
                <a  id='${id}' class="sub-catalog--item">
                        <div class='sbprod'>${sbname}</div> 
                </a>
           
        
        `;
        wp.insertAdjacentHTML("beforeend", HTMLFavCart);

    });
};
function RenderSubCutWP(){
        var InfoCatefgoty = document.querySelector('.persAcc-data-wp');
        let Wp  = document.createElement('div')
        Wp.classList.add('sub-cat-prod-wp')
        InfoCatefgoty.append(Wp)
        let H3 = document.createElement('h3');
        H3.textContent = 'Подкатегории'
        Wp.append(H3)
        H3.classList.add('heading-text-pers-info');
        let WpItem = document.createElement('div')
        WpItem.classList.add('sub-ct-prod-admin-wp')
        Wp.append(WpItem)
};

function ChoosingAnActionProduct(event){
    const Btn = event.target.closest('.sub-catalog--item');
    if(!Btn){
      return
    }
    var InfoCatefgoty = document.querySelector('.persAcc-data-wp');
    let CATALOG_BASE_TOVAR_PAGE = JSON.parse(localStorage.getItem('BigBase'))//общая база
    let Sub = Btn.querySelector('.sbprod').textContent
    SubCategoryProduct = Sub;
    let Prod_Base = [];
    CATALOG_BASE_TOVAR_PAGE.forEach(element => {
        if(element.category == CategoryProduct && element.sbname == SubCategoryProduct){
            Prod_Base.push(element)
            InfoCatefgoty.innerHTML = '';
            FormProd(InfoCatefgoty);
        }
        return Prod_Base
    });
    console.log(CategoryProduct)
    console.log(SubCategoryProduct)
    console.log(Prod_Base)
}

function FormProd(plaz){
    let FormHtml = '';
    FormHtml += `

        <div class='form-products-choos'>
            <div class='form-products-wp'>
                <h2 class='admin-form-heading'>Товары</h2>
                <div class='actions-wp'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class='action-svg' id='ProdAdd'>
                            <path d="M20.5 16H16M16 16H11.5M16 16V11.5M16 16V20.5" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M8.5 3.00673C10.7063 1.73046 13.2679 1 16 1C24.2842 1 31 7.71572 31 16C31 24.2842 24.2842 31 16 31C7.71572 31 1 24.2842 1 16C1 13.2679 1.73046 10.7063 3.00673 8.5" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>


                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class='action-svg' id='ProdDelete'>
                            <path d="M27.31 6.44449C27.153 6.24208 26.9243 6.10762 26.671 6.06885C26.4177 6.03008 26.1593 6.08996 25.9489 6.23614C25.7385 6.38232 25.5923 6.60364 25.5404 6.85443C25.4885 7.10523 25.5349 7.36637 25.67 7.58398C26.8355 9.25779 27.5905 11.1823 27.8739 13.2019C28.1574 15.2214 27.9613 17.2793 27.3015 19.2091C26.6417 21.1388 25.5368 22.8863 24.0761 24.31C22.6154 25.7338 20.84 26.794 18.8934 27.4047C16.9468 28.0155 14.8837 28.1597 12.871 27.8257C10.8583 27.4918 8.9525 26.689 7.30776 25.4823C5.66302 24.2756 4.32551 22.6989 3.40343 20.8797C2.48134 19.0605 2.00057 17.05 2 15.0106C2.0126 12.2146 2.92165 9.49628 4.59369 7.2547C6.26573 5.01312 8.61268 3.36638 11.29 2.55623C11.4161 2.51882 11.5335 2.45696 11.6357 2.37418C11.7378 2.29139 11.8227 2.18931 11.8853 2.07375C11.948 1.95819 11.9873 1.83143 12.001 1.70069C12.0146 1.56995 12.0024 1.43781 11.965 1.31179C11.9276 1.18578 11.8657 1.06837 11.7829 0.966267C11.7 0.864162 11.5979 0.779364 11.4823 0.716712C11.3667 0.654061 11.2399 0.614784 11.1091 0.601123C10.9783 0.587463 10.8461 0.599686 10.72 0.637096C8.05366 1.43053 5.66062 2.94951 3.80832 5.02425C1.95602 7.09899 0.717452 9.64775 0.231051 12.3856C-0.25535 15.1236 0.02958 17.9427 1.05399 20.5281C2.07841 23.1134 3.80194 25.3631 6.03196 27.0256C8.26198 28.6881 10.9106 29.698 13.6818 29.9423C16.4531 30.1867 19.2377 29.6559 21.7244 28.4093C24.2112 27.1627 26.3022 25.2494 27.7636 22.8833C29.225 20.5171 29.9993 17.7914 30 15.0106C30.0056 11.9468 29.0663 8.9556 27.31 6.44449Z" fill="#7880B5"/>
                            <path d="M18.707 2.55673C20.266 3.02955 21.7215 3.7926 22.997 4.80572C23.1001 4.8871 23.2182 4.94739 23.3446 4.98315C23.471 5.0189 23.6032 5.02942 23.7337 5.01411C23.8642 4.99879 23.9903 4.95794 24.105 4.89389C24.2197 4.82983 24.3206 4.74383 24.402 4.64079C24.4834 4.53775 24.5438 4.41969 24.5795 4.29334C24.6153 4.167 24.6258 4.03486 24.6105 3.90445C24.5952 3.77404 24.5543 3.64793 24.4902 3.53331C24.4262 3.41869 24.3401 3.3178 24.237 3.23642C22.7509 2.06011 21.0539 1.17806 19.237 0.637588C18.9824 0.562035 18.7082 0.590674 18.4747 0.717204C18.2413 0.843734 18.0676 1.05779 17.992 1.31228C17.9164 1.56678 17.9451 1.84086 18.0717 2.07424C18.1983 2.30762 18.4124 2.48117 18.667 2.55673H18.707ZM14.287 1.7271C14.3842 1.81539 14.4959 1.88639 14.617 1.937C14.7367 1.98989 14.8662 2.0172 14.997 2.0172C15.1279 2.0172 15.2573 1.98989 15.377 1.937C15.4981 1.88621 15.6097 1.81523 15.707 1.7271C15.7997 1.6337 15.873 1.52293 15.9228 1.40115C15.9726 1.27937 15.9978 1.14896 15.997 1.01742C15.9934 0.752769 15.8898 0.499283 15.707 0.307736C15.5916 0.187386 15.4478 0.0978191 15.2889 0.0471907C15.13 -0.00343769 14.9609 -0.0135186 14.797 0.0178659C14.7344 0.028949 14.6738 0.0491552 14.617 0.0778389C14.5532 0.0994925 14.4927 0.129759 14.437 0.167799L14.287 0.287745C14.196 0.382806 14.1246 0.4949 14.077 0.617597C14.0232 0.74396 13.9959 0.880065 13.997 1.01742C13.9986 1.14804 14.0258 1.27708 14.077 1.39725C14.1279 1.51829 14.1989 1.62982 14.287 1.7271ZM21.707 8.30415C21.5197 8.11798 21.2662 8.01348 21.002 8.01348C20.7378 8.01348 20.4844 8.11798 20.297 8.30415L14.997 13.6018L9.70704 8.30415C9.51574 8.14039 9.26967 8.05483 9.01799 8.06454C8.76631 8.07426 8.52757 8.17854 8.34948 8.35656C8.17139 8.53457 8.06705 8.773218.05733 9.02477C8.04761 9.27633 8.13322 9.5223 8.29704 9.71351L13.587 15.0111L8.28704 20.2988C8.18236 20.3884 8.09734 20.4986 8.03732 20.6226C7.9773 20.7467 7.94356 20.8817 7.93825 21.0194C7.93293 21.157 7.95613 21.2943 8.00641 21.4226C8.05668 21.5508 8.13294 21.6673 8.23039 21.7648C8.32785 21.8622 8.4444 21.9384 8.57272 21.9886C8.70105 22.0389 8.83838 22.0621 8.9761 22.0568C9.11382 22.0515 9.24895 22.0177 9.37301 21.9577C9.49708 21.8977 9.60739 21.8128 9.69704 21.7081L14.997 16.4205L20.287 21.7081C20.4783 21.8719 20.7244 21.9574 20.9761 21.9477C21.2278 21.938 21.4665 21.8337 21.6446 21.6557C21.8227 21.4777 21.927 21.2391 21.9367 20.9875C21.9465 20.7359 21.8609 20.49 21.697 20.2988L16.407 15.0111L21.697 9.72351C21.7914 9.63125 21.8666 9.52122 21.9182 9.39977C21.9698 9.27833 21.9969 9.14786 21.9978 9.01591C21.9988 8.88396 21.9735 8.75313 21.9236 8.63096C21.8737 8.5088 21.8001 8.39773 21.707 8.30415Z" fill="#7880B5"/>
                        </svg>

                        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg" class='action-svg' id='ProdChange'>
                            <path d="M2.87109 9.33292C4.41146 6.78957 6.7903 4.80152 9.63845 3.67729C12.4866 2.55306 15.6448 2.35553 18.6229 3.11535C21.601 3.87517 24.2324 5.54985 26.1089 7.8795C27.9853 10.2091 29.0018 13.0635 29.0006 15.9995" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.1295 22.6666C25.5892 25.2099 23.2103 27.198 20.3622 28.3222C17.514 29.4465 14.3558 29.644 11.3778 28.8842C8.39966 28.1243 5.7682 26.4497 3.89175 24.12C2.0153 21.7904 0.998801 18.936 1 16" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.75 1V9.33324H11.5007" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.2507 31.0002V22.667H18.5" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </div>
            </div>
            <div class='form-action-main-wp'>
                    <div class='action-main-text-lorem'>Выберите действие</div>
            </div>
        </div>

    `;
    plaz.insertAdjacentHTML("beforeend",FormHtml )

}

function ActionProdButton(event){
    const Btn = event.target.closest('.action-svg');
    let Wp = document.querySelector('.form-action-main-wp');
    let CATALOG_BASE_TOVAR_PAGE = JSON.parse(localStorage.getItem('BigBase'))//общая база
    let Prod_Base = [];
    CATALOG_BASE_TOVAR_PAGE.forEach(element => {
        if(element.category == CategoryProduct && element.sbname == SubCategoryProduct){
            Prod_Base.push(element)
        }
        return Prod_Base
    });
    console.log(Wp)
    if(!Btn){
      return
    }
    if(Btn.id == 'ProdAdd'){
        Wp.innerHTML ='';
        ProductFormAdd(Wp);
        document.getElementById('category').value = CategoryProduct;
        document.getElementById('sbCat').value = SubCategoryProduct;
        let PlazDop = document.querySelector('.dop-caracter-wp')
        DopCarcterRender(DopCagracter, PlazDop)
        RenderAtrubuts(DopCagracter)
       
        console.log(`add in ${CategoryProduct} in ${SubCategoryProduct}`)
    }
    else if(Btn.id == 'ProdDelete'){
        Wp.innerHTML ='';
        ProductFormDelete(Wp)
        document.getElementById('category').value = CategoryProduct;
        document.getElementById('sbCat').value = SubCategoryProduct;
        let Mesto = document.getElementById('art');
        let mestoName = document.getElementById('name')
        RenderArtDelete(Prod_Base, Mesto)
        RenderNameDelete(Prod_Base, mestoName)
           
            
       
        /* document.querySelector('.prod-label-art-delete').value = 'Введите Арт'; */
        document.getElementById('name').value = 'Введите Название';

        Body.addEventListener('click', ButtonDeleteSerch);
        function ButtonDeleteSerch(event){
            const Btn = event.target.closest('.btn-serch-form');
            if(!Btn){
              return
            } 
            let plaz = document.querySelector('.form-item-wp')
            let CATALOG_BASE_TOVAR_PAGE = JSON.parse(localStorage.getItem('BigBase'))//общая база
            let Prod_base_delete = [];
            CATALOG_BASE_TOVAR_PAGE.forEach(element => {
                if(element.category == CategoryProduct && element.sbname == SubCategoryProduct){
                    Prod_base_delete.push(element)
                    
                }
                
            });
            FilterRender(Prod_base_delete, plaz)
            
            
            let Art =   document.querySelector('.prod-label-art-delete').value;
            let NameProd = document.getElementById('name').value ;
            let ArrFilter = [];
            Prod_base_delete.forEach(element => {
                if(Art == +element.art){
                    console.log(typeof(Art))
                    console.log(element.art)
                    console.log(typeof(element.art))
                    ArrFilter.push(element)
                    return ArrFilter
                }else{
                    console.log('нет таког Арт')
                }
            });
            Prod_base_delete.forEach(element => {
                if(NameProd == element.name){
                    console.log(typeof(NameProd))
                    console.log(typeof(element.name))
                    ArrFilter.push(element)
                    
                }else{
                    console.log('нет такго названия')
                }
            });
            if(ArrFilter.length >0){
                plaz.innerHTML = '';
                FilterRender(ArrFilter, plaz)
                ArrFilter = 0;
                Prod_base_delete = 0;
            }

            
           
        }
        

        console.log(`delete from ${CategoryProduct} from ${SubCategoryProduct}`)
    }
    else if(Btn.id == 'ProdChange'){
        Wp.innerHTML ='';
        ProductFormChange(Wp)
        document.getElementById('category').value = CategoryProduct;
        document.getElementById('sbCat').value = SubCategoryProduct;
        let Mesto = document.getElementById('art');
        let mestoName = document.getElementById('name')
        RenderArtDelete(Prod_Base, Mesto)
        RenderNameDelete(Prod_Base, mestoName)
        let PlazDop = document.querySelector('.dop-caracter-wp')
        DopCarcterRender(DopCagracter, PlazDop)
        RenderAtrubuts(DopCagracter)
        console.log(`change in ${CategoryProduct} in ${SubCategoryProduct}`)

        let plaz = document.querySelector('.form-item-wp')
        let CATALOG_BASE_TOVAR_PAGE = JSON.parse(localStorage.getItem('BigBase'))//общая база
        /* let Prod_base_delete = [];
            CATALOG_BASE_TOVAR_PAGE.forEach(element => {
                if(element.category == CategoryProduct && element.sbname == SubCategoryProduct){
                    Prod_base_Change.push(element)
                    FilterRender(Prod_base_Change, plaz)
                    
                    
                }
                return Prod_base_Change
            }); */

            let Art =   document.querySelector('.prod-label-art-delete').value;
            let NameProd = document.getElementById('name').value ;
            let ArrFilter = [];
            Prod_base_delete.forEach(element => {
                if(Art == +element.art){
                    console.log(typeof(Art))
                    console.log(element.art)
                    console.log(typeof(element.art))
                    ArrFilter.push(element)
                    return ArrFilter
                }else{
                    console.log('нет таког Арт')
                }
            });
            Prod_base_delete.forEach(element => {
                if(NameProd == element.name){
                    console.log(typeof(NameProd))
                    console.log(typeof(element.name))
                    ArrFilter.push(element)
                    return Prod_base_delete
                }else{
                    console.log('нет такго названия')
                }
            });
            if(ArrFilter.length >0){
                plaz.innerHTML = '';
                FilterRender(ArrFilter, plaz)
                ArrFilter = 0;
            }
    }
}
/* -----------------form add */
function ProductFormAdd(Wp){
    let Form = '';
    Form += `
        <form>
        <div class='class-form-add-wp'>
            <div class='name-and-art-prod-wp'>
                <div class='name-prod-wp'>
                    <label for='name' class='heading-text-form'>Название</label>
                    <input type='text' name='name' id='name' class='prod-label-name'>
                </div>
                <div class='art-prod-wp'>
                    <label for='art' class='heading-text-form'>Aртикул</label>
                    <input type='text' name='art' id='art' class='prod-label-art'>
                </div>
            </div>
            
                            
            <div class='price-sale-and-more-wp'>

                    <div class='price-sale-count'>

                        <div class='price-ad-wp'>
                            <label for='price' class='heading-text-form'>Цена</label>
                            <input type='text' name='price' id='price' class='prod-label-price'>
                        </div>

                        <div class='count-ad-wp'>
                            <label for='count' class='heading-text-form'>Кол-во</label>
                            <input type='text' name='count' id='count' class='prod-label-count'>
                        </div>

                        <div class='sale-ad-wp'>
                            <label for='sale' class='heading-text-form'>Скидка</label>
                            <input type='text' name='sale' id='sale' class='prod-label-sale'>
                        </div>

                    </div>

                    <div class='img-add-wp'>
                        <p class='heading-text-form'>Фото</p>
                        <div class='img-prod-add-wp'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" class='prod-add-img'>
                                <circle cx="25" cy="25" r="25" fill="#393939"/>
                                <circle cx="25" cy="25" r="24.5" stroke="#0D1115"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 25C15.75 31.937 18.063 34.25 25 34.25C31.937 34.25 34.25 31.937 34.25 25C34.25 18.063 31.937 15.75 25 15.75C18.063 15.75 15.75 18.063 15.75 25Z" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6001 21.7844C23.6001 22.7574 22.8121 23.5454 21.8391 23.5454C20.8671 23.5454 20.0781 22.7574 20.0781 21.7844C20.0781 20.8114 20.8671 20.0234 21.8391 20.0234C22.8121 20.0234 23.6001 20.8114 23.6001 21.7844Z" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M34.1188 27.6667C33.2378 26.7607 31.9918 24.9297 29.7028 24.9297C27.4138 24.9297 27.3638 28.9677 25.0278 28.9677C22.6908 28.9677 21.7498 27.5967 20.2268 28.3127C18.7048 29.0277 17.4648 31.8737 17.4648 31.8737" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    
                    <div class='brends-category'>

                        <div class='brends-ad-wp'>
                            <label for='brends' class='heading-text-form'>Бренды</label>
                            <input type='text' name='brends' id='brends' class='prod-label-brends'>
                        </div>

                        <div class='categor-ad-wp'>
                            <label for='category' class='heading-text-form'>Категория</label>
                            <input type='text' name='category' id='category' class='prod-label-categor'>
                        </div>

                        <div class='sb-cat-ad-wp'>
                            <label for='sbCat' class='heading-text-form'>Подкатегория</label>
                            <input type='text' name='sbCat' id='sbCat' class='sbCat-label-sale'>
                        </div>

                    </div>

            </div>

            <div class='dop-caracter-wp'>
                    
                    
            </div>

            <div class='wp-btn-form-add-prod'>
                <button class='button tbn-prod-add' type='sumbit'>Добавить</button>
            </div>
            
        </div>
        </form>
    `;
    Wp.insertAdjacentHTML("beforeend", Form)
}

function DopCarcterRender(base,mesto){
        base.forEach(element => {
                let Html = '';
                 Html += `
                <div class='category-chek-prod-wp chang-chek'>
                    <label for="${element.id}">${element.id}</label>
                    <div class='c'>
                        <select name="${element.id}" id="${element.id}">
                            <option value="">${element.id}</option>
                        </select>
                    </div>
                </div>

            `;

            mesto.insertAdjacentHTML("beforeend", Html)
            
            
        }); 
}
function RenderAtrubuts(base){
    base.forEach(element => {
        let Id = document.getElementById(element.id);
        element.param.forEach(elem => {
            let AtrHtml = '';
            AtrHtml = `
                <option value="${elem}">${elem}</option>
            `;
            Id.insertAdjacentHTML("beforeend", AtrHtml)
        });
        
    });

}

function ProductFormDelete(Wp){
    let Form = '';
    Form += `
        <form>
        <div class='class-form-delete-wp'>
            <div class='art-name-category-delete-wp'>

                <div class='art-prod-wp art-prod-wp-delete'>
                    <label for='art' class='heading-text-form'>Aртикул</label>
                    <select  name="art" id="art" class='prod-label-art prod-label-art-delete'>
                        <option value="0">Введи Арт</option>
                    </select>
                </div>

                 <div class='categor-ad-wp categor-ad-wp-delete'>
                     <label for='category' class='heading-text-form'>Категория</label>
                     <input type='text' name='category' id='category' class='prod-label-categor prod-label-categor-delete'>
                 </div>

                 <div class='sb-cat-ad-wp sb-cat-ad-wp-delete'>
                     <label for='sbCat' class='heading-text-form'>Подкатегория</label>
                     <input type='text' name='sbCat' id='sbCat' class='sbCat-label-sale sbCat-label-sale-delete'>
                 </div>


                <div class='name-prod-wp name-prod-wp-delete'>
                    <label for='name' class='heading-text-form'>Название</label>
                    <select  name="name" id="name" class='prod-label-name prod-label-name-delete'>
                        <option value="0">Введи Название</option>
                    </select>
                </div>

                <div class='button btn-serch-form'>Поиск</div>
                
            </div>
            

            <div class='form-delete-items-main-wp'>
                    <p class='heading-text-form'>Товары</p>
                    <div class='form-item-wp'>

                    </div>
            </div> 
            
        </div>
            <div class='wp-btn-form-add-prod'>
                <button class='button tbn-prod-delete' type='sumbit'>Удалить</button>
            </div>
        </form>
    `;
    Wp.insertAdjacentHTML("beforeend", Form)
}


function FilterRender(base, plaz){
        base.forEach(element => {
            let Html = '';
            Html +=`    
                <div class='delete-item-wp' id='${element.id}'>
                    <div class='text-delete-form-wp'>${element.name}</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class='svg-suc'>
                        <path d="M14 0H6C2.691 0 0 2.691 0 6V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H14C17.309 20 20 17.309 20 14V6C20 2.691 17.309 0 14 0ZM18 14C18 16.206 16.206 18 14 18H2V6C2 3.794 3.794 2 6 2H14C16.206 2 18 3.794 18 6V14Z" fill="#999999"/>
                        <path d="M8.99997 11.586L6.70697 9.29297L5.29297 10.707L8.99997 14.414L15.207 8.20697L13.793 6.79297L8.99997 11.586Z" fill="#999999"/>
                    </svg>

                </div>


            `;
            plaz.insertAdjacentHTML("beforeend", Html)
        });
}

function RenderArtDelete(base, plaz){
   
    base.forEach(element => {
        let Html  = '';
        Html +=`
            <option value="${element.art}">${element.art}</option>
        `;
        plaz.insertAdjacentHTML("beforeend", Html)
    });
}
function RenderNameDelete(base, palz){
    base.forEach(element => {
        let Html ='';
        Html +=`

            <option value="${element.name}">${element.name}</option>
        `;
        palz.insertAdjacentHTML("beforeend", Html)
    });
}
function ProductFormChange(Wp){
    let Form = '';
    Form += `
        <form>
        <div class='class-form-delete-wp'>
            <div class='art-name-category-delete-wp'>

                <div class='art-prod-wp art-prod-wp-delete'>
                    <label for='art' class='heading-text-form'>Aртикул</label>
                    <select  name="art" id="art" class='prod-label-art prod-label-art-delete'>
                        <option value="0">Введи Арт</option>
                    </select>
                </div>

                 <div class='categor-ad-wp categor-ad-wp-delete'>
                     <label for='category' class='heading-text-form'>Категория</label>
                     <input type='text' name='category' id='category' class='prod-label-categor prod-label-categor-delete'>
                 </div>

                 <div class='sb-cat-ad-wp sb-cat-ad-wp-delete'>
                     <label for='sbCat' class='heading-text-form'>Подкатегория</label>
                     <input type='text' name='sbCat' id='sbCat' class='sbCat-label-sale sbCat-label-sale-delete'>
                 </div>


                <div class='name-prod-wp name-prod-wp-delete'>
                    <label for='name' class='heading-text-form'>Название</label>
                    <select  name="name" id="name" class='prod-label-name prod-label-name-delete'>
                        <option value="0">Введи Название</option>
                    </select>
                </div>

                <div class='button btn-serch-form'>Поиск</div>
                
            </div>
            

            <div class='form-delete-items-main-wp'>
                    <p class='heading-text-form'>Товары</p>
                    <div class='form-item-wp'>

                    </div>
            </div> 
            
        </div>
        <div class='chaenge-cont-wp'>
            <div class='price-ccount-sale-wp'>
                    <div class='price-ad-wp'>
                            <label for='price' class='heading-text-form'>Цена</label>
                            <input type='text' name='price' id='price' class='prod-label-price'>
                        </div>

                        <div class='count-ad-wp'>
                            <label for='count' class='heading-text-form'>Кол-во</label>
                            <input type='text' name='count' id='count' class='prod-label-count'>
                        </div>

                        <div class='sale-ad-wp'>
                            <label for='sale' class='heading-text-form'>Скидка</label>
                            <input type='text' name='sale' id='sale' class='prod-label-sale'>
                        </div>


                        <div class='img-add-wp'>
                        <p class='heading-text-form'>Фото</p>
                        <div class='img-prod-add-wp'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" class='prod-add-img'>
                                <circle cx="25" cy="25" r="25" fill="#393939"/>
                                <circle cx="25" cy="25" r="24.5" stroke="#0D1115"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 25C15.75 31.937 18.063 34.25 25 34.25C31.937 34.25 34.25 31.937 34.25 25C34.25 18.063 31.937 15.75 25 15.75C18.063 15.75 15.75 18.063 15.75 25Z" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6001 21.7844C23.6001 22.7574 22.8121 23.5454 21.8391 23.5454C20.8671 23.5454 20.0781 22.7574 20.0781 21.7844C20.0781 20.8114 20.8671 20.0234 21.8391 20.0234C22.8121 20.0234 23.6001 20.8114 23.6001 21.7844Z" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M34.1188 27.6667C33.2378 26.7607 31.9918 24.9297 29.7028 24.9297C27.4138 24.9297 27.3638 28.9677 25.0278 28.9677C22.6908 28.9677 21.7498 27.5967 20.2268 28.3127C18.7048 29.0277 17.4648 31.8737 17.4648 31.8737" stroke="#7880B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

            </div>   

            <div class='dop-caracter-wp dop-change'>
                    
                    
            </div>

        </div>
            <div class='wp-btn-form-add-prod'>
                <button class='button tbn-prod-delete' type='sumbit'>Изменить</button>
            </div>
        </form>
    `;
    Wp.insertAdjacentHTML("beforeend", Form)
}


/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
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
    if(AccId == 'Products'){
        
        CreateContentAcc();
    }

/* переменные для пути ути пути пути ни путю-------------------------------------------- */


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* раздел с функциями */
     /* адресс рендер контента  */
     function CreateContentUsers(){
        let ContentAddress = '';
        ContentAddress = `
            <div class='users-form-wp'>
                <h3 class="heading-text-pers-info">Поиск юзеров</h3>
                <div class='usres-list-wp'>

                </div>
                <div class='serch-usres-panel-wp'>
                    <div class='sb-cat-ad-wp-users'>
                        <label for='users' class='heading-text-form'>Введите логин</label>
                        <input type='text'  name='users' id='users' class='login-users-input'></input>
                    </div>

                    <div class='button btn-usres-srech'>Поиск</div>
                </div>
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentAddress);
    };
    /* акк ренедер контент */
    function CreateContentAcc(){
        let ContentAcc = '';
        ContentAcc = `
             <div class="personal-information-category-wp persAcc-data-active">
                            
                            <div class="pers-info-content-wp">
                                <div class="pers-info-item">
                                    <h3 class="heading-text-pers-info">Выберети категорию</h3>
                                    
                                        <div class="category-admin-wp">
                                            <a href='#' class="category-item ptoducts-category id='Santex'">
                                                    <div class='category-name-admin'>Сантехника</div>
                                            </a>
                                            <a href='#' class="category-item ptoducts-category" id='Otop'>
                                                    <div class='category-name-admin'>Отполение</div>
                                            </a>
                                            <a href='#' class="category-item ptoducts-category" id='Dacha'>
                                                    <div class='category-name-admin'>Дача</div>
                                            </a>
                                            <a href='#' class="category-item ptoducts-category" id='Instrum'>
                                                    <div class='category-name-admin'>Инструменты</div>
                                            </a>
                                            
                                        </div>
                   
                                    
                
                                </div>
                            </div>
                        </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentAcc);
    };


    /* ---------------------------------------------------------------- */
    const ArrCardsFav = FAV_CART_BASE.slice(0, length.FAV_CART_BASE);
    console.log(length.FAV_CART_BASE)
    /* избранное рендер контент */
    function CreateContentBrand (){
        let ContentFav = '';
        ContentFav += `
            <div class="favourites-category-wp persAcc-data-active">
                <h2 class="heading-favourites-text">Бренды</h2>
                <div class="favourites-item-list-wp">
                    <div class='brand-cr-wp'>
                        <div class='btn-brand-wp'>
                            <button class='button btn-brand-create'>Добавить Бренд</button>
                            <button class='button btn-brand-change'>Изменить Бренд</button>
                            <button class='button btn-brand-delete'>Удалить Бренд</button>
                        </div>
                        <div class='brand-info-wp'>

                            
                           
                        </div>
                    </div>
                </div>
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentFav);
    };
    /* рендер контента */
    function CreateContentBrandCartAdd (){
            let HTMLFavCart = '';
            HTMLFavCart += `
                            <div class='wp-brand-add'>
                                <label class='brand-name-wp' for='brand-name'>Введите название бренда
                                    <input class='brand-name' name='brand-name' id='brand-name'>
                                </label>
                                <button class='button btn-brand-add'>Сохранить</button>
                            </div>
                            
                            <div>
                                <label class='brand-descr-wp' for='brand-description'>Введите описание бренда
                                    <textarea class='brand-description' name='brand-description' id='brand-description'>

                                    </textarea>
                                </label>
                            </div>
            `;

            document.querySelector('.brand-info-wp').insertAdjacentHTML("beforeend", HTMLFavCart);

        
    };
    function CreateContentBrandCartDelete (){
        let HTMLFavCart = '';
        HTMLFavCart += `
                        <div class='wp-brand-add'>
                            <label class='brand-name-wp' for='brand-name'>Введите название бренда
                                <select class='brand-name' name='brand-name' id='brand-name'>
                                    <option value="">--Please choose an option--</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="hamster">Hamster</option>
                                    <option value="parrot">Parrot</option>
                                    <option value="spider">Spider</option>
                                    <option value="goldfish">Goldfish</option>
                                <select>
                            </label>
                            <button class='button btn-brand-add'>Удалить</button>
                        </div>
                        
                       
        `;

        document.querySelector('.brand-info-wp').insertAdjacentHTML("beforeend", HTMLFavCart);

    
};
function CreateContentBrandCartChange (){
    let HTMLFavCart = '';
    HTMLFavCart += `
                    <div class='wp-brand-add'>
                        <label class='brand-name-wp' for='brand-name'>Введите название бренда
                            <select class='brand-name' name='brand-name' id='brand-name'>
                                <option value="">--Please choose an option--</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="hamster">Hamster</option>
                                <option value="parrot">Parrot</option>
                                <option value="spider">Spider</option>
                                <option value="goldfish">Goldfish</option>
                            <select>
                        </label>
                        <button class='button btn-brand-add'>Изменить</button>
                    </div>
                    
                    <div>
                        <label class='brand-descr-wp' for='brand-description'>Введите описание бренда
                            <textarea class='brand-description' name='brand-description' id='brand-description'>

                            </textarea>
                        </label>
                    </div>
    `;

    document.querySelector('.brand-info-wp').insertAdjacentHTML("beforeend", HTMLFavCart);


};

    /* заказы рендер контент */
    function CreateContentОrders(){
        let ContentОrders = '';
        ContentОrders = `
            <div class="оrders-category-wp persAcc-data-active">
                <h2 class="heading-text-odrers">Ваши заказы</h2>
              
                <div class="order-item-wp">
                    <!-- заказ -->
                    <div class="order-item">
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
                            <p class="order-number">Заказ №3432424</p>
                            <p class="order-date">Ожидаемая дата прибытия 12.02.2024</p>
                            <a href="#" class="order-details-definite" id='z1'>Детали заказа</a>
                        </div>
                        <div class="order-details-wp">
                            <div class="order-details">
                                <div class="order-step-1">
                                    <p class="order-text-status order-text-status-active">собирается</p>
                                    <div class="order-step-img-wp order-step-img-wp-active">
                                        <img src="img/step-1img.png" alt="" class="step-img-size">
                                        <div class="order-step-ready">
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" class="svg-ready-order" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8072 50 50 38.8072 50 25C50 19.9072 48.4772 15.1701 45.8619 11.2192L25.9861 33.3036C24.0622 35.4414 20.8244 35.7572 18.5234 34.0314L9.44444 27.2222C8.21714 26.3017 7.96842 24.5606 8.88889 23.3333C9.80936 22.1061 11.5505 21.8572 12.7778 22.7778L21.8567 29.5869L42.2611 6.91542C37.7739 2.63103 31.6942 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8072 11.1929 50 25 50Z" fill="#7880B5"/>
                                            </svg>  
                                        </div>
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
                                    <p class="order-text-status">доставляется
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </p>
                                    <div class="order-step-img-wp">
                                        <img src="img/ste-2img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">заказ уже едет</div>
                                </div>
                                <div class="order-step-3">
                                    <p class="order-text-status">ждет вас</p>
                                    <div class="order-step-img-wp">
                                        <img src="img/step-3img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-line"></div>
                    </div>
                    <!-- заказ -->
                    <div class="order-item">
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
                            <p class="order-number">Заказ №3432424</p>
                            <p class="order-date">Ожидаемая дата прибытия 12.02.2024</p>
                            <a href="#" class="order-details-definite" id='z2'>Детали заказа</a>
                        </div>
                        <div class="order-details-wp">
                            <div class="order-details">
                                <div class="order-step-1">
                                    <p class="order-text-status">собирается
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </p>
                                    <div class="order-step-img-wp ">
                                        <img src="img/step-1img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">передается
                                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="order-svg " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2875 8.1875L21.375 5.3125C21.2606 5.13878 21.1047 4.99636 20.9213 4.89814C20.738 4.79991 20.533 4.749 20.325 4.75H16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H17.25C17.25 15.337 17.5134 14.7011 17.9822 14.2322C18.4511 13.7634 19.087 13.5 19.75 13.5C20.413 13.5 21.0489 13.7634 21.5178 14.2322C21.9866 14.7011 22.25 15.337 22.25 16H23.5V8.875C23.4981 8.62996 23.4242 8.39088 23.2875 8.1875Z" fill="#7880B5"/>
                                            <path d="M16 16V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H4.75C4.75 15.337 5.01339 14.7011 5.48223 14.2322C5.95107 13.7634 6.58696 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16H16ZM16 16V4.75H20.325C20.533 4.749 20.738 4.79991 20.9213 4.89814C21.1047 4.99636 21.2606 5.13878 21.375 5.3125L23.2875 8.1875C23.4242 8.39088 23.4981 8.62996 23.5 8.875V16H22.25C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5C19.087 13.5 18.4511 13.7634 17.9822 14.2322C17.5134 14.7011 17.25 15.337 17.25 16H16Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.75 16C9.75 16.4945 9.60338 16.9778 9.32868 17.3889C9.05397 17.8 8.66352 18.1205 8.20671 18.3097C7.74989 18.4989 7.24723 18.5484 6.76228 18.452C6.27732 18.3555 5.83187 18.1174 5.48223 17.7678C5.1326 17.4181 4.8945 16.9727 4.79804 16.4877C4.70157 16.0028 4.75108 15.5001 4.9403 15.0433C5.12952 14.5865 5.44995 14.196 5.86108 13.9213C6.2722 13.6466 6.75555 13.5 7.25 13.5C7.91304 13.5 8.54893 13.7634 9.01777 14.2322C9.48661 14.7011 9.75 15.337 9.75 16ZM19.75 13.5C19.2555 13.5 18.7722 13.6466 18.3611 13.9213C17.95 14.196 17.6295 14.5865 17.4403 15.0433C17.2511 15.5001 17.2016 16.0028 17.298 16.4877C17.3945 16.9727 17.6326 17.4181 17.9822 17.7678C18.3319 18.1174 18.7773 18.3555 19.2623 18.452C19.7472 18.5484 20.2499 18.4989 20.7067 18.3097C21.1635 18.1205 21.554 17.8 21.8287 17.3889C22.1034 16.9778 22.25 16.4945 22.25 16C22.25 15.337 21.9866 14.7011 21.5178 14.2322C21.0489 13.7634 20.413 13.5 19.75 13.5Z" stroke="#FCF2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="order-step-2">
                                    <p class="order-text-status">доставляется</p>
                                    <div class="order-step-img-wp">
                                        <img src="img/ste-2img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                                <div class="order-line-wp">
                                    <div class="order-line-way">заказ уже едет</div>
                                </div>
                                <div class="order-step-3">
                                    <p class="order-text-status">ждет вас</p>
                                    <div class="order-step-img-wp">
                                        <img src="img/step-3img.png" alt="" class="step-img-size">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-line"></div>
                    </div>
                </div>
            </div>

        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentОrders);
    };
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

    function CreateContentReviews(){
        let ContentSupport = '';
        ContentSupport = `
            <div class="support-category-wp persAcc-data-active">
                    Отзывы
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentSupport);
    };
     /* корзина рендер контент */
     function OrdersManagementRender(){
        let ContentBasket = '';
        ContentBasket += `
            <div class="favourites-category-wp persAcc-data-active">
                <h2 class="heading-favourites-text">Управление заказами</h2>
                <div class="OrdersManagemen-item-list-wp">
                    <div class='order-mg-list-wp'>
                        <div class='ordes-info-wp'>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Номер
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Статус
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Дата
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Еще
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <button class='button btn-orders-delete'>Удалить</button>
                            <button class='button btn-orders-change'>Изменить</button>
                        </div>

                        <div class='ordes-info-wp'>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Номер
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Статус
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Дата
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Еще
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <button class='button btn-orders-delete'>Удалить</button>
                            <button class='button btn-orders-change'>Изменить</button>
                        </div>

                        <div class='ordes-info-wp'>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Номер
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Статус
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Дата
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Еще
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <button class='button btn-orders-delete'>Удалить</button>
                            <button class='button btn-orders-change'>Изменить</button>
                        </div>

                        <div class='ordes-info-wp'>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Номер
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Статус
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Дата
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Еще
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <button class='button btn-orders-delete'>Удалить</button>
                            <button class='button btn-orders-change'>Изменить</button>
                        </div>

                        <div class='ordes-info-wp'>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Номер
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Статус
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Дата
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Еще
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <button class='button btn-orders-delete'>Удалить</button>
                            <button class='button btn-orders-change'>Изменить</button>
                        </div>
                    </div>
                    <div class='orders-mg-input-btn-wp'>
                        <label for='search-orders' class='search-orders-wp'> Введите ID заказа
                            <input class='search-orders' name='search-orders' id='search-orders'>
                        </label>
                        <button class=' button btn-orders-search'>Поиск</button>
                    </div>
                </div>
            </div>
        `;
        InfoCatefgoty.insertAdjacentHTML("beforeend", ContentBasket);
    };
    function OrdesRender(base){
            base.forEach(element => {
                let Html = '';
                Html += `
                        <div class='ordes-info-wp'>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Номер
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Статус
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>Дата
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                            <div class='info-input-ordres-wp'>
                                <label for='' class=''>
                                    <input name='' id='' class=''>
                                </label>
                            </div>
                        </div>

                `;
            });
    }


/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

    Clickelemet.addEventListener('click', function(e){
        if (AccId == e.target.id){
            Clickelemet.classList.add('categor-text-active');
            
           
            switch(AccId){
                case'Products':
                    InfoCatefgoty.innerHTML="";
                    CreateContentAcc();
                break;
                case'Users':
                    InfoCatefgoty.innerHTML="";
                    CreateContentUsers();
                break;
                case'OrdersManagement':
                    InfoCatefgoty.innerHTML="";
                    OrdersManagementRender();

                    InfoCatefgoty.addEventListener('click', BtnSearchOrders)
                    function BtnSearchOrders(event){
                        const Btn = event.target.closest('.btn-orders-search')
                        if(!Btn){
                            return
                        }
                        document.querySelector('.order-mg-list-wp').innerHTML = '';
                        let Zapros = document.querySelector('.search-orders').value
                        console.log(Zapros)

                        
                    }
                break;
                case'Orders':
                    InfoCatefgoty.innerHTML="";
                    CreateContentОrders();
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
                        /* const ButtonOrderExp = HRef.parentElement.parentElement.querySelector('.order-info-more')
                        ButtonOrderExp.addEventListener('click', function(){
                            let OrderInfo = HRef.parentElement.parentElement.querySelector('.number-of-order')
                            OrderInfo.classList.toggle('number-of-order-exp')
                        }) */
                        });
        
                break;
                case'Support':
                    InfoCatefgoty.innerHTML="";
                    CreateContentSupport();
                break;
                case'Brand':
                    InfoCatefgoty.innerHTML="";
                    CreateContentBrand();
                    InfoCatefgoty.addEventListener('click', BtnAdd)
                    InfoCatefgoty.addEventListener('click', BtnChang)
                    InfoCatefgoty.addEventListener('click', BtnDelete)
                    function BtnAdd(event){
                        const Btn = event.target.closest('.btn-brand-create')
                        if(!Btn){
                            return
                        }
                        document.querySelector('.brand-info-wp').innerHTML = '';
                        CreateContentBrandCartAdd()
                    }
                    function BtnChang(event){
                        const Btn = event.target.closest('.btn-brand-change')
                        if(!Btn){
                            return
                        }
                        document.querySelector('.brand-info-wp').innerHTML = '';
                        CreateContentBrandCartChange();
                    }
                    function BtnDelete(event){
                        const Btn = event.target.closest('.btn-brand-delete')
                        if(!Btn){
                            return
                        }
                        document.querySelector('.brand-info-wp').innerHTML = '';
                        CreateContentBrandCartDelete();
                        
                    }
                break;
                case'Reviews':
                    InfoCatefgoty.innerHTML="";
                    CreateContentReviews();
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
            let count = 0;
            Categori.forEach(({id}) => {   
                if(id !== AccId){
                    let NoClickelement = document.getElementById(id);
                    console.log(NoClickelement)
                    let NoTargetRoditelCase = NoClickelement.parentElement;
                    console.log(`onnn ${NoTargetRoditelCase}`)
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
                    count +=1
                    if(count == 6){
                        return
                    }
                    
                }
            });
        }
    });
});


/* --------------------------------------------------------------------------------------------------------------------------- */
