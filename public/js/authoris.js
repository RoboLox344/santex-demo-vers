

const url2 = window.location.href
const lastPart = url2.split('/')[url2.split('/').length - 1]; // Получаем последний элемент



const btnRew = document.querySelector('.rew-open ')
btnRew ? btnRew.addEventListener('click' ,  async function(){
    try {
        const res = await fetch('/user/my');
        if(res.ok){
            const loginInput  = document.getElementById('input-rew-name')
            const {data} = await GetUserStart()
            loginInput.value = data[0].login
        }
        return
    } catch (error) {
        
    }
}):null

document.addEventListener('DOMContentLoaded', ()=>{
    loadProtectedContentJson()
    async function loadProtectedContentJson() {
        const response = await fetch('/user/my'); // Запрашиваем защищенный контент
        if (response.ok) {
            // const data = await response.json();
            const {data} = await GetUserStart()
            console.log(window.location.href)
            if(lastPart ===  "MakingAnOrder"){
                document.getElementById('inputName').value = data[0].first_name
                document.getElementById('inputSurname').value = data[0].last_name
                document.getElementById('inputMail').value = data[0].email
                document.getElementById('inputTel').value = data[0].phone
                let city = data[0].city
                const address = data[0].address
                if(city === "Moscow"){
                    city = "г Москва"
                }
                document.getElementById('inputAdress').value = `${city}, ${address}`
                
            }
            // console.log(data);
        } else {
            return
        }
    }
})
const btn = document.querySelector('.button-login');
btn.addEventListener('click', () => {
        loadProtectedContent()
        async function loadProtectedContent() {
            const response = await fetch('/user/my'); // Запрашиваем защищенный контент
            if (response.ok) {
                // const data = await response.json();
                window.location.href = "/user/my";

                // console.log(data);
            } else {
                return
            }
        }
});
/**загрузочная инфа Полчение информации о пользов */
async  function GetUserStart() {
    try {
        const res = await fetch('/my');
        if (!res.ok) {
            throw new Error(`Ошибка получения заказов: ${res.status}`);
        }
        const data  = await res.json(); 
        console.log(data)
        return {data: data}
    } catch (error) {
        console.error('Ошибка получения заказов:', error);
        // Обработка ошибки
        return null;
    }
}

// Авторизация
document.getElementById('ButtonEntrance') ? document.getElementById('ButtonEntrance').addEventListener('click', async function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const loginoremail = document.getElementById('Login').value;
    const password = document.getElementById('Password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ loginoremail, password })
        });

        const res = await response.json();

        if (!response.ok) {
            LoginError();
            console.error(res.error);
            return;
        }

        console.log('Авторизация успешна:', res);

        

        window.location.href = "/user/my";

    } catch (error) {
        LoginError();
        console.log('Ошибка:', error.message);
    }
}) : null;

/* сброс инпутов  */
document.getElementById('Login').addEventListener('click', function(){
  document.getElementById('Login').style.boxShadow = 'none'
  document.querySelector('.error-messeg-text') ? document.querySelector('.error-messeg-text').classList.remove('error-messeg-text'):null
  document.querySelector('.form-entry-label').textContent = (document.querySelector('.form-entry-label').textContent !== 'Введите логин и пароль'?
  'Введите логин и пароль' : 'Введите логин и пароль')
})
document.getElementById('Password').addEventListener('click', function(){
  document.getElementById('Password').style.boxShadow = 'none'
  document.querySelector('.error-messeg-text') ? document.querySelector('.error-messeg-text').classList.remove('error-messeg-text'):null
  document.querySelector('.form-entry-label').textContent = (document.querySelector('.form-entry-label').textContent !== 'Введите логин и пароль'?
  'Введите логин и пароль' : 'Введите логин и пароль')
})
/* вывод ошбики */
function LoginError(){
  let loginInput = document.getElementById('Login')
  let LoginPassword = document.getElementById('Password')
  loginInput.style.boxShadow = 'inset 0px 0px 10px 1px #D95D5D'
  LoginPassword.style.boxShadow = 'inset 0px 0px 10px 1px #D95D5D';
  let div = document.createElement('div');
  document.querySelector('.form-entry-label').textContent = 'Введен неверный логин или пароль'
  document.querySelector('.form-entry-label').classList.add('error-messeg-text')
  /* div.classList.add('error-messeg-text')
  document.querySelector('.form-entry').prepend(div) */

}
/**регистрсиция */
document.getElementById('btnRedister') ? document.getElementById('btnRedister').addEventListener('click', async function(){
    const login = document.getElementById('Username')
    const email = document.getElementById('EmailRegister')
    const password = document.getElementById('CreatePassword')
    const passwordSuccess = document.getElementById('PasswordConfrm')
    const data = {}
    let valid  = true
    stringInputValidationLogin(login.value) ? data.login  = successValid(login) : errorValid(login)
    stringInputValidationMail(email.value) ? data.email  = successValid(email) : errorValid(email)
    passwordValid(password.value) ? data.password  = successValid(password) : errorValid(password)
    password.value === passwordSuccess.value && passwordSuccess.value !== '' ?  successValid(passwordSuccess) : errorValid(passwordSuccess)
    
    if(valid){
        try {
            const res = await fetch(`/reg`,{
                method:'POST', 
                headers:{
                    'Content-Type': 'appliaction/json'
                },
                body:JSON.stringify(data)
            })
            if(!res.ok){
                throw new Error("error", res.status);
                
            }
            window.location.href = `/user/my`
        } catch (error) {
            console.log('Ошибка:', error.message);
        }
    }

}) : null

function stringInputValidationLogin(string){
    const validateLogin = string => /^[а-яА-ЯёЁa-zA-Z-0-9]{2,20}$/.test(string);
    return validateLogin(string)
    
}

function successValid(item){
    item.style.boxShadow = 'inset 0px 0px 10px 1px green'
    return item.value
}

function noColorInput(event){
    const item = event.target.closest(`.input-entry-pers-info`)
    if(!item){
        return
    }
    item.style.boxShadow = 'none'
}
function errorValid(item){
    item.style.boxShadow = 'inset 0px 0px 10px 1px #D95D5D'
    const valid  = false
    return valid
}
function stringInputValidationMail(string){
    const validateLogin = string => /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(string);
    return validateLogin(string) 
}
function passwordValid(string){
    const validateLogin = string => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(string);
    return validateLogin(string)
}