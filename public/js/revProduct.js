 class revProduct{

    constructor(){
        this.revWp  = document.querySelector('.reviews-wrapper')
        this.btnFormOpen = document.querySelector('.rew-open')
        this.mainBody = document.querySelector('.dark-theme')
        this.windowActive = false
        this.rewBody = document.querySelector('.wp-rev-product')
        this.product_id = 0
        
        this.rewBody.addEventListener('click', this.rewOpen.bind(this))
        this.mainBody.addEventListener('click', this.rewClose.bind(this))
        this.mainBody.addEventListener('click', this.revPost.bind(this))
        
    }
    /**getRevProduct */
    async getRevProdcut(){
        const url = new URL(document.location);
        this.product_id  = Number(url.href.split('/').reverse().slice(0, 1))
        
        try {
            const res = await fetch('/reviews/all')
            if(!res.ok){
                throw new Error("erroe", res.status);
            }
            const data  = await res.json()
            const dataFilter  = data.filter((el) => el.product_id === this.product_id).slice(0 , Math.min(6 , data.length))
           
            if(dataFilter.length > 0){
                this.revRender(dataFilter)
            }else {
                console.log('sdfsdf')
                this.NoItem()
            }
            
        } catch (error) {
            
        }
    }
    revRender(date){
        this.revWp.innerHTML = ''
        date.forEach(element => {
            const html = `

            <div class="rewiews-item">
                        <div class="rewiews-content-wp">
                            <div class="rewiews-content-header">
                                <div class="img-rewiews-wp--profil">
                                    <img src="/img/porfil-foto.jpg" alt="" class="img-profil">
                                </div>
                                <div class="rew-name-time">
                                    <p class="reviews-name--profil">${element.login}</p>
                                    <time datetime="2023-03-13T12:00:00Z" class="text-rew">${element.review_date.split('T').slice(0,1)}</time>
                                </div>
                                <div class="rew-estimation">
                                    <div>${element.rating}</div>
                                    <img class="Star-img-size" src="/img/i-star.png" alt="Рейтинг места 4 из 5">
                                </div>
                            </div>
                            <div class="text-rewiews-wp">
                                <p class="text-rew">${element.text}</p>
                            </div>
                        </div>
            </div>
            
            `
            this.revWp.insertAdjacentHTML("beforeend", html)
        });
    }
    NoItem(wp){
        
        
        const html = `<div class="wp-item-none">
            Список пока пуст
            </div>`
        this.revWp.insertAdjacentHTML("beforeend", html);
    }
    rewOpen(event){
        const item  = event.target.closest('.rew-open')
        if(!item){
            return
        }
        if(!this.windowActive){
            this.rewForm()
            this.windowActive = true
            document.getElementById('rew-grade').value = 5
        }else{
           document.querySelector('.rew-form-wp').remove()
           this.windowActive = false
        }
    }
    /** rew close  */
    rewClose(event){
        const item  = event.target.closest('.btn-rew-close')
        if(!item){
            return
        }
        if(this.windowActive){
            document.querySelector('.rew-form-wp').remove()
            this.windowActive = false
        }
    }
    /**rew form */
    rewForm(){
        const html = `
            <div class="rew-form-wp">
                <div class="flex-input">
                    <p>Введите ваше имя</p>
                    <input type="text" class="rew-input" placeholder="ваше имя" id="input-rew-name">
                </div>  
                 
                <div class="flex-input">  
                    <p>Комментарий</p>      
                    <textarea type="text" class="rew-input-text" placeholder="введите отзыв" id="input-rew-descr"></textarea>
                </div>  
                <div class="flex-input">
                    <p>Выберите оценку</p>
                    <div>
                        <input type="number" min="1" max="5" class="rew-grade" id="rew-grade" placeholder=5>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6963 6.37248C13.9719 6.10392 14.0692 5.70976 13.9503 5.34336C13.8312 4.97696 13.5208 4.71541 13.1396 4.6599L9.74976 4.16735C9.60539 4.14633 9.48064 4.05578 9.41616 3.92486L7.90066 0.853497C7.7305 0.508403 7.38512 0.293945 7.00022 0.293945C6.6156 0.293945 6.27023 0.508403 6.10006 0.853497L4.58428 3.92514C4.51981 4.05606 4.39478 4.14661 4.2504 4.16763L0.860575 4.66018C0.479597 4.71541 0.168985 4.97724 0.0498417 5.34364C-0.0690209 5.71004 0.0282558 6.1042 0.303826 6.37276L2.75649 8.76347C2.86106 8.86551 2.90899 9.01241 2.88432 9.15594L2.30571 12.5318C2.25441 12.8289 2.33234 13.1179 2.52465 13.3458C2.82349 13.701 3.3452 13.8092 3.76234 13.59L6.79389 11.996C6.92061 11.9296 7.08012 11.9301 7.20655 11.996L10.2384 13.59C10.3858 13.6677 10.5431 13.7069 10.7054 13.7069C11.0017 13.7069 11.2826 13.5752 11.4758 13.3458C11.6684 13.1179 11.746 12.8283 11.6947 12.5318L11.1158 9.15594C11.0912 9.01213 11.1391 8.86551 11.2437 8.76347L13.6963 6.37248Z" fill="#F0BF5F"/>
                         </svg>
                    </div>
                </div>
                <div class="btn-rew-close">
                    <svg class="svg-order-info-close-rew" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"  fill-rule="evenodd"></path></g></svg>
                </div>
                <button class=" btn-post-rew">Отправить отзыв</button>
            </div>
        `;
        this.mainBody.insertAdjacentHTML("beforeend", html)
    }
    /**post rew */
    revPost(event){
        const item  = event.target.closest('.btn-post-rew')
        if(!item){
            return
        }
       this.postRew()
    }
    async postRew(){
        let valid  = true
        const date = {}
        date.product_id = this.product_id
        const name  = document.getElementById('input-rew-name')
        this.stringInputValidationLogin(name.value) ? date.login =  this.successValid(name) : valid  = this.errorValid(name)
        const comment  = document.getElementById('input-rew-descr')
        comment.value !== '' ? date.text = comment.value : valid  = this.errorValid(comment) 
        date.review_date = new Date()
        const rating = document.getElementById('rew-grade')
        this.validReating(Number(rating.value)) ? date.rating= Number(rating.value)  : valid  = this.errorValid(rating)
        
       


        
        if(valid){
            try {
                const res  = await fetch('/reviews',{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(date)
                })
                if(res.ok){
                    console.log('success')
                    const rev  =document.querySelector('.rew-form-wp')
                    rev.remove()
                }
            } catch (error) {
                
            }
        }
        
    }
    stringInputValidation(string){
        const validateLogin = string => /^[а-яА-ЯёЁa-zA-Z-]{2,15}$/.test(string);
        return validateLogin(string)
        
    }
    stringInputValidationLogin(string){
        const validateLogin = string => /^[а-яА-ЯёЁa-zA-Z-0-9]{2,20}$/.test(string);
        return validateLogin(string)
        
    }
    validReating(number){
        if(number != 'e' && typeof(number) === 'number' && (number >= 1 || number <= 5)){
            return true
        }else return false
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
}
const revProd = new revProduct()
revProd.getRevProdcut()

