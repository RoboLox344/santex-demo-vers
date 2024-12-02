class rewAdd{

    constructor(){
        this.btnFormOpen = document.querySelector('.rew-open')
        this.rewBody = document.getElementById('reviews')
        this.mainBody = document.querySelector('.dark-theme')
        this.windowActive = false
        this.revWp = document.querySelector('.reviews-wrapper')

        this.rewBody.addEventListener('click', this.rewOpen.bind(this))
        this.mainBody.addEventListener('click', this.rewClose.bind(this))
        this.mainBody.addEventListener('click', this.revPost.bind(this))
    }

    /**rew open modal */
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
    /**no rev */
    NoItem(wp){
        
        this.revWp.innerHTML = ''
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
        this.revWp.insertAdjacentHTML("beforeend", html);
        this.EasyAnimation('pupil');
        this.EasyAnimation('pupil2');
        this.EasyAnimation('pupil3');
        this.EasyAnimation('pupil4');
        // this.goToProduct(this.revWp)
       /*  window.addEventListener('load', this.EasyAnimation.bind(this)); */
    }
    /**Анимация глаз */
    EasyAnimation(id) {
        const container = this.rewBody;
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
    /**create rew */
    rewCreate(date){
        this.revWp.innerHTML = ''
        date.forEach(element => {
            const html = `

            <div class="rewiews-item">
                        <div class="rewiews-content-wp">
                            <div class="rewiews-content-header">
                                <div class="img-rewiews-wp--profil">
                                    <img src="img/porfil-foto.jpg" alt="" class="img-profil">
                                </div>
                                <div class="rew-name-time">
                                    <p class="reviews-name--profil">${element.login}</p>
                                    <time datetime="2023-03-13T12:00:00Z" class="text-rew">${element.review_date.split('T').slice(0,1)}</time>
                                </div>
                                <div class="rew-estimation">
                                    <div>${element.rating}</div>
                                    <img class="Star-img-size" src="img/i-star.png" alt="Рейтинг места 4 из 5">
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
    /**get rev info */
    async getRewInfo(){
        try {
            const res = await fetch(`/reviews/all`)
            if(!res.ok){
                throw new Error("error", res.status);   
            }
            const date  = await res.json()
            if(date.length > 0){
                const filterData  = date.slice(0, Math.min(5, date.length))
                this.rewCreate(filterData)
            }else{
                this.NoItem()
            }
            
        } catch (error) {
            
        }
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
        date.product_id = 78
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


const testRew  = new rewAdd
testRew.getRewInfo()