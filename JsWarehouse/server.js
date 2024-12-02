/* const { name } = require("ejs"); */
/* 
document.getElementById('ButtonEntrance').addEventListener('click', async function(event) {
        let loginoremail = document.getElementById('Login').value
        console.log(loginoremail)
        let password = document.getElementById('Password').value
        console.log(password )
        event.preventDefault(); // Предотвращаем отправку формы
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ loginoremail, password })
            });
    
            const res = await response.json(); // Обработка ответа
            
    
            if (!response.ok) {
                // Если ответ не успешный, выбрасываем ошибку
               /*  alert(res.error) 
                LoginError()
               /*  throw new Error(error.messag || 'Ошибка регистрации'); 
            }
            
            console.log('Регистрация успешна:', res);
            location.replace("./profile");
            
            // Здесь можно перенаправить пользователя или показать сообщение об успехе
    
        } catch (error) {
            LoginError()
            console.log('Ошибка:', error.message); // Логирование ошибки
        }
    });

    
    
    document.getElementById('Login').addEventListener('click', function(){
        document.getElementById('Login').style.boxShadow = 'none'
        document.querySelector('.error-messeg-text') ? document.querySelector('.error-messeg-text').classList.remove('error-messeg-text'):null
        (document.querySelector('.form-entry-label').textContent != 'Введите логин и пароль') ? document.querySelector('.form-entry-label').textContent = 'Введите логин и пароль': null
    })
    document.getElementById('Password').addEventListener('click', function(){
        document.getElementById('Password').style.boxShadow = 'none'
        document.querySelector('.error-messeg-text') ? document.querySelector('.error-messeg-text').classList.remove('error-messeg-text'):null
        (document.querySelector('.form-entry-label').textContent != 'Введите логин и пароль') ? document.querySelector('.form-entry-label').textContent = 'Введите логин и пароль':null
    })

function LoginError(){
    let loginInput = document.getElementById('Login')
    let LoginPassword = document.getElementById('Password')
    loginInput.style.boxShadow = 'inset 0px 0px 10px 1px #D95D5D'
    LoginPassword.style.boxShadow = 'inset 0px 0px 10px 1px #D95D5D';
    let div = document.createElement('div');
    document.querySelector('.form-entry-label').textContent = 'Введен неверный логин или пароль'
    document.querySelector('.form-entry-label').classList.add('error-messeg-text')
    /* div.classList.add('error-messeg-text')
    document.querySelector('.form-entry').prepend(div) 

} */


/* async function fetchData() {
    try{
        let res  = await fetch('/product/santeh')
        if(!res.ok){
            alert(res.error)
            console.log(res)
        }
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        console.log('Ошибка:', error.message); // Логирование ошибки
    }
    
}
fetchData() */

/* async function getData(cat, type) {
    const category = cat
    let url = `/product/${category}`;
    if (type != null){
        const Type  = type
        url = `/product/${category}/${Type}`;
        
    }
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  getData('santeh', 'Toilet')

    let body = document.body
    body.addEventListener('click', ClikFilter)
  function ClikFilter(event){
    const Btn = event.target.closest('.round-menu-down-items-2')
    if(!Btn){
        return
    }
  } */