//root
const ROOT_MAKING_STEP = document.querySelector('.MakingOrder-stages-main-wp');
const Button_next = document.querySelectorAll('.button-makorder');
const Button_Back = document.querySelectorAll('.status-text');
const INPUTS_FORM = document.querySelector('.inputs-basket-info-delivir-method-wp');
const INPUTS_FORMr = document.querySelector('.inputs-basket-info-payment-method-wp');
/* console.log(INPUTS_FORM); */
let payment  = 'Card';
INPUTS_FORMr.addEventListener('click', function(e){
    var Input_Items = INPUTS_FORMr.getElementsByTagName("input")
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
            payment = id;
            
        }else if(id != e.target.id &&  (e.target.id).length >  null){
            let a = document.getElementById(id);
            let b = a.parentElement.querySelector('.payment-method-radio-custom-before');
            b.classList.remove('payment-method-radio-custom-before-active');
            let round = b.querySelector('.payment-method-radio-custom-after');
            round.classList.remove('payment-method-radio-custom-after-active');
           
            
        }
    });
})


//объект проверки формы номер 1
const userInfo = {
    name: '',
    surname: '',
    mail: '',
    tel: '',
    comment: '',
    result:false,
    
    ChekInput(param) {
        for (const element of param) {
            if (typeof(element) === 'number') {
                alert(`Введеное значение ${param} не соответствует нормам`); 
                this.result = false
                return false;
            }
        }
        return true; 
    },
    ValidMail(mail) {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        
        var valid = re.test(mail);
        if (valid){
             this.mail = mail;
             return true
        }
        else {
             /* alert('Адрес электронной почты введен неправильно!') */
             this.mail = ''
             this.result = false
             return false
        }
        
    },
    ValidPhone(tel) {
        var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        
        var valid = re.test(tel);
        if (valid) {
            this.tel = tel
            return true
        }
        else{
            /* alert('Номер телефона  введен неправильно!') */
            this.tel = ''
            this.result = false
            return false
        }
    } ,
    checkInputImperative(name, surname, mail, tel, comment) {
        if (this.ChekInput(name)) {
            this.name = name; 
        }
        if (this.ChekInput(surname)) {
            this.surname = surname; 
        }
        this.ValidMail(mail)
        this.ValidPhone(tel)
        if(comment.length !== 0){this.comment = comment}

        
        console.log(this.name, this.surname, this.mail, this.tel, this.comment);
    },
    clientInput(){
        let name = document.getElementById('inputName').value
        let surname = document.getElementById('inputSurname').value
        let mail = document.getElementById('inputMail').value
        let tel = document.getElementById('inputTel').value
        let comment = document.getElementById('inputComment').value
        this.checkInputImperative(name, surname, mail, tel, comment)
        this.Result()
    },
    Result() {
        this.result = true; 

        Object.fromEntries(
            Object.entries(this).slice(0, 4).map(([key, value]) => {
                
                if (value === undefined || value === null || (typeof value === 'string' && value.length === 0) || (Array.isArray(value) && value.length === 0)) {
                    this.result = false; 
                }
                return [key, value]; 
            })
        );
    },
};
//объект проверки формы номер 2
const placeInfo = {
    deliveryMethod: 'Courier',
    deliveryAddress: '',
    result: false,

    setDeliveryMethod(method) {
        this.deliveryMethod = method;
    },

    setAddress() {
        const input = document.querySelector('.input-entry-PlaceAndMethod-info').value.trim();
        const validCities = new Set(['г Москва', 'г Санкт-Петербург']);
        const city = input.split(',')[0].trim(); // Берем первый элемент и убираем лишние пробелы
        

        if (input.length === 0) {
            console.log('Поле пустое');
            this.result = false
            return false;
        } else if (validCities.has(city)) {
            this.deliveryAddress = input;
            this.result = true
            return true;
        } else {
            alert('В указанный город доставки нет!!');
            this.result = false
            return false;
        }
    }
};
//объект проверки формы номер 3
const BasketInfo = {
    
    result:false,

    prodcutLenght(){
        document.querySelector('.kozina-cart-wp-page') ? this.result = true : this.result = false
    }
}
//проверка всех трех форма для достпуа к операции закзать 
const stateForms = {
    RecipientDetailButton:false,
    PlaceAndMethodButton:false,
    ProductsInTheOrderButton:false,
    ButtonOrder:false,

    chekform(id){
            const errorMessge = document.querySelector('.errorPush')
           if(id == 'RecipientDetailButton'){
                userInfo.clientInput();
                
                if(userInfo.result ===  true){
                    this.RecipientDetailButton = true
                    this.orderButton()
                    errorMessge  ? errorMessge.remove():null
                    return true
                }else{
                    this.errorPush('RecipientDetails')
                    this.RecipientDetailButton = false
                    return false
                } 
                
           }

           else if(id == 'PlaceAndMethodButton'){
                placeInfo.setAddress();
                
                /* console.log(placeInfo) */
                if(placeInfo.result ===  true){
                    this.PlaceAndMethodButton = true
                    this.orderButton()
                    errorMessge  ? errorMessge.remove():null
                    return true
                }else{
                    this.errorPush('PlaceAndMethod')
                    this.PlaceAndMethodButton = false
                    return false
                } 
           }

           else if(id == 'ProductsInTheOrderButton'){
            BasketInfo.prodcutLenght()
            
            if(BasketInfo.result){
                this.ProductsInTheOrderButton = true
                this.orderButton()
                errorMessge  ? errorMessge.remove():null
                return true
            }else{
                this.errorPush('ProductsInTheOrder')
                this.PlaceAndMethodButton = false
                return false
            }
            
            
           }
    },
    backForm(id){
        if(id == 'RecipientDetails'){
            this.RecipientDetailButton= false
            this.PlaceAndMethodButton = false
            this.ProductsInTheOrderButton = false
            this.orderButton()
        }
        else if(id == 'PlaceAndMethod'){
            this.PlaceAndMethodButton = false
            this.ProductsInTheOrderButton = false
            this.orderButton()
        }
        else if(id == 'ProductsInTheOrder'){
            this.ProductsInTheOrderButton = false
            this.orderButton()
        }
    },
    orderButton(){
        this.ButtonOrder = true
        Object.fromEntries(
            Object.entries(this).slice(0, 3).map(([key, value]) => {
                
                if (value !== true) {
                    this.ButtonOrder = false
                }
                return [key, value]; 
            })
        );
        let Button = document.querySelector('.button-MakingOrder')
        if(this.ButtonOrder === true){
            Button.style.transform = `translateY(0px)`
            Button.style.opacity = 1
        }else{
            Button.style.transform = `translateY(50px)`
            Button.style.opacity = 0
        }
        console.log(this.ButtonOrder)
    },
    errorPush(id){
        if(document.querySelector('.errorPush')){
            return 0 
        }else{
        let body = document.getElementById(id);
        let wp = document.createElement('div')
        wp.classList.add('errorPush')
        let tetxDiv = document.createElement('div')
        tetxDiv.textContent = 'Обзятальные поля заполнены не верно'
        let Button = document.createElement('div')
        Button.classList.add('button-error')
        function Gosvg(wp){
            let Html = ''
            Html += `
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class='svg-cross-error'>
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <
                    /g>
                </svg>
            `
            wp.insertAdjacentHTML('beforeend', Html)
        }
        Gosvg(Button)
        wp.append(tetxDiv)
        wp.append(Button)
        body.append(wp)
        Button.addEventListener('click', function(){
            wp.remove()
        })
    }

    },
    backToProduct(){
        this.ProductsInTheOrderButton = false
        this.orderButton()
    }
    
    
    
}
const btnCardOpen  = document.querySelector('.button-cart')
const btnMakeOrder = document.querySelector('.button-MakingOrder')

btnCardOpen.addEventListener('click', () => {
    if(stateForms.PlaceAndMethodButton){
        stateForms.backToProduct()
        BackNext(document.getElementById('ProductsInTheOrder'))
    }
})
btnMakeOrder.addEventListener('click', () => {
    const orderInfo  = {}
    const deliveryType = {
        '1':'Courier',
        '2':'SelfCall',
        '3':'TransferLine'
    }
    const delivery_id = Object.keys(deliveryType).find(k => deliveryType[k] === placeInfo.deliveryMethod)
    
    orderInfo.delivery_type = delivery_id
    orderInfo.delivery_address = placeInfo.deliveryAddress
    if(payment === "Card"){
        orderInfo.payment_type = "Card"
    }else{
        orderInfo.payment_type = "Cash"
    }
    orderInfo.phone = userInfo.tel
    createOrder(orderInfo)
    

})
async function createOrder(orderInfo){
    const res = await fetch('/order/confirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderInfo)
    })
    if(res.ok){
        console.log('success')
    }
    console.log(res.status)
}

//события
Button_next.forEach(({id}) => {
    let TargetId = document.getElementById(id);
    TargetId.addEventListener('click', function(e){

        if(e.target.id == id && stateForms.chekform(id) ===  true){
                console.log(stateForms)

                let container =  TargetId.parentElement.parentElement;

                if(container.id == 'ProductsInTheOrder'){
                    Next(container)  
                }else{
                    Next(container)
                    let Nextelement = container.nextElementSibling
                    Nextelement.classList.remove('MakingOrder-stages-wp-ready')
                }
        }
    })
});

Button_Back.forEach(({id}) => {
    let TargetElement = document.getElementById(id);
    TargetElement.addEventListener('click', function(e){
        if(e.target.id = id){
            let container =  TargetElement.parentElement.parentElement.parentElement;
            stateForms.backForm(container.id)

            if(container.id == 'ProductsInTheOrder'){
                BackPrew(container)
            }
            else if(container.id == 'RecipientDetails'){
                BackNext(container)

            }else{
                BackPrew(container)
                BackNext(container)
            }

        }
    })
});

INPUTS_FORM.addEventListener('click', function(e){
    var Input_Items = INPUTS_FORM.getElementsByTagName("input")

    let Arr_Inputs_Items = Array.from(Input_Items);

    Arr_Inputs_Items.forEach(({id}) => {

        if(id == e.target.id){
            
            Radioactive(id)
        }else if(id != e.target.id &&  (e.target.id).length >  null){
           
            RadioPassiv(id)
        }
    });
})

//funcs
function Next(pram){
    pram.classList.add('MakingOrder-stages-wp-ready')
    let ButtonCahang = pram.querySelector('.MakingOrder-status-wp')
    ButtonCahang.classList.add('MakingOrder-status-wp-ready')
}
function BackPrew(param){
    param.classList.remove('MakingOrder-stages-wp-ready');
    let Prew = param.previousElementSibling;
    Prew.classList.add('MakingOrder-stages-wp-ready')
}
function BackNext(param){
    param.classList.remove('MakingOrder-stages-wp-ready');
    let Next = param.nextElementSibling;
    Next.classList.add('MakingOrder-stages-wp-ready')
}
function RadioPassiv(id){
    let a = document.getElementById(id);
    let b = a.parentElement.querySelector('.deliviri-method-radio-custom-before');
    b.classList.remove('deliviri-method-radio-custom-before-active');
    let round = b.querySelector('.deliviri-method-radio-custom-after');
    round.classList.remove('deliviri-method-radio-custom-after-active');
}
function Radioactive(id){
    let a = document.getElementById(id);
    let b = a.parentElement.querySelector('.deliviri-method-radio-custom-before');
    b.classList.add('deliviri-method-radio-custom-before-active');
    let round = b.querySelector('.deliviri-method-radio-custom-after');
    round.classList.add('deliviri-method-radio-custom-after-active');
    placeInfo.setDeliveryMethod(id)
}

// не работает ejs
// var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
// var token = "91533efbe42b8bf6d5709ea08d90e2889e03962c";
// var query = "г москва ул пудовкина ";

// var options = {
//     method: "POST",
//     mode: "cors",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         "Authorization": "Token " + token
//     },
//     body: JSON.stringify({query: query})
// }

// fetch(url, options)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log("error", error));