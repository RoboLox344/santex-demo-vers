
class search{
    constructor(){
        this.Body = document.body   
        this.searchList =  []
        this.timer = null
        
    }
    
    /**Отчистка формы*/
    FormSerchInputRemove(classListWp, classList, event){
        let Btn = event.target.closest('.btn-cross-wp')
        if(!Btn){
          return
        }
        let Input  = document.querySelector(`.${classListWp}`)
        Input.value = '';
        const wpList = document.querySelector(`.${classList}`)
        wpList.style.display = "none"
        
    }
    /**Запрос поиска */
    async SerchItems(param, wp) {
        try {
          let res = await fetch(`/heating`);
          if (!res.ok) {
              throw new Error('Network response was not ok');
          }
          let data = await res.json();
          let filteredData
          if(param.slice(0,3).toLowerCase() === 'sku'){
            
            filteredData = data.filter((el) => el.sku.toLowerCase().startsWith(param.toLowerCase()))
            
          }else{
            filteredData = data.filter((el) => el.name.toLowerCase().startsWith(param.toLowerCase()))
            
          }
          filteredData.length > 0 ? this.SearchList(filteredData, wp) : this.SerchCategory(data, param,wp)
          
           
          
        }catch (error) {
          console.log('Error fetching data:', error);
        }
    }
    /**Нет результата  */
    async Noneitem(date, wp){
        wp.innerHTML = ''
        this.searchList.length = 0
        
        const { htmlItem } =  await this.searchOfferBrands(date)
        
        const item = `<div>Нет результатов</div>
          ${htmlItem}
        `
        wp.insertAdjacentHTML("beforeend",item );
        
    }
    /**Вывод брендов*/
    async searchOfferBrands(date) {
        try {
           
          const res = await fetch(`/brandjson`)
          if(!res.ok){
            res.status(404) ? window.location.href = '/page404':null
          }
          
          const data = await res.json()
          
          if(date.length > 0 ){
            let filterData
            date.forEach((elem) =>{
                filterData = data.filter((el) => el.brand_id === elem.brand_id)
            })
            
            return this.brandsFilterHtml(filterData)
          }else{
            
            return this.brandsFilterHtml(data)
          }
          
        } catch (error) {
          
        }
    }
    /**Вторичный поис по категориям */
    SerchCategory(date, req, wp){
        const filterData = date.filter((el) => el.category.toLowerCase().startsWith(req.toLowerCase()))
        filterData.length > 0 ? this.SearchList(filterData, wp) : this.Noneitem(filterData, wp)
    }
    /**Вывод брендов html */
    brandsFilterHtml(date){
      //   console.log('true')
        
        const container  = `
          <div class="brand-filter-flex">
            <div>Возможно вам интересны эти бренды:</div>
            
              ${date.map((el) => `
                <a class='brand-filter' href="/brandejs/id/${el.brand_id}">${el.name}</a>
              `).join('')}
            
          </div>
        `
       
       return {htmlItem : container}
      
    }
    /**Вывод результата поиска html */
    async  SearchList(data, wpList){
        wpList.innerHTML = ''
        const {htmlItem }  =  await this.searchOfferBrands(data )
        this.searchList.length = 0
        data.forEach((el) => {
          this.searchList.push(el)
         })
        let Item  = ``;
        data.forEach(({name, product_id}) => {
            
            Item += `
            <div class="item-search-list-wp">
              <a class='item-search-list' href="/product/santeh/id/${product_id}">
                ${name}
              </a>
            </div>
            
            
            `;
        })
        wpList.insertAdjacentHTML("beforeend",Item);
        wpList.insertAdjacentHTML("beforeend",htmlItem);  
    }
    /**Обработка ввода */
    inputProcessing( classListWp, classList){
        const InputSearch = document.querySelector(`.${classListWp}`)

        InputSearch ? InputSearch.addEventListener('input', this.input.bind(this, InputSearch, classList)): null

        // InputSearch ? InputSearch.addEventListener('change', this.change.bind(this, InputSearch, classList)):null
    }
    /**input*/
    input(InputSearch, classList){
      const onTimeout = () => {
        const wpList = document.querySelector(`.${classList}`)
        InputSearch.value.length > 3 ? wpList.style.display = "flex" : wpList.style.display = "none"
        InputSearch.value.length > 3 ? this.SerchItems(InputSearch.value, wpList) : null
      }

      clearTimeout(this.timer); // Очищаем предыдущий таймер
      this.timer = setTimeout(onTimeout, 500);

     
    }
    /**change*/
    change(InputSearch, classList){
        const wpList = document.querySelector(`.${classList}`)
        InputSearch.value.length > 3 ? wpList.style.display = "flex" : wpList.style.display = "none"
    }
    displayFlex(){

    }
    displayNone(){
        
    }
}

/**Основаная версия  */
class main extends search{
    constructor(){
        super();
        this.classList2 = 'input-search-header'
        this.classList = 'search-list-wp'
        this.btnSearch = document.querySelector('.button-search')
        this.btnSearch.addEventListener('click', this.formOpen.bind(this))
        this.Body.addEventListener('click', this.FormSerchRemove.bind(this))
        this.Body.addEventListener('click', this.FormSerchInputRemove.bind(this , this.classList2, this.classList))
        this.Body.addEventListener('keyup', this.inputEnter.bind(this))
    }

    /**Отпрвака через enter */   
    inputEnter(event){
      let Input = event.target.closest('.input-search-header')
      if(!Input){
        return
      }
      if(event.code === 'Enter'){
         console.log(this.searchList)
         this.searchList.length > 0 ? this.locationNew():null

      }
    }
    /**new location  */
    locationNew(){
      // let ref = ''
      let map  = new Map()
      this.searchList.forEach((el) => {
     
        if (map.size === 0) {
          map.set(el.product_type ,1)
        }else{
          for(let elem of map){
        
            if (elem[0] === el.product_type){
               elem[1] += 1
               map.set(el.product_type ,elem[1])

            }else {
              map.set(el.product_type ,1)
              
            }
          }
        }
        
        
      })
      let maxValue = -Infinity;
      let maxKey = null;
        
        for (let [key, value] of map.entries()) {
            if (value > maxValue) {
                maxValue = value;
                maxKey = key; 
            }
        }
        
        let url = maxKey.replace(' ','').toLowerCase()
        
        window.location.href = `/product/santeh/${url}`
      
    }
    /**Открытие формы */
    formOpen(){
        const formWp = document.querySelector('.wrapper-header')
        formWp ? this.launchForm(formWp):null
    }
    /**Запуск формы*/
    launchForm(wp){
        this.FormSerch(wp)
        this.inputProcessing(this.classList2 ,this.classList)
    }
    /** Создание формы*/
    FormSerch (wp){
        let Html = '';
        Html += `
        
          <div class='header-form-search'>
            <div class='input-search-header-wp'>
              <input class='input-search-header' placeholder="Тут можно найти">
              <button class='btn-cross-wp'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class='svg-cross-header'>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <
                /g>
                </svg>
              </button>
            </div>
            <button class='search-button-header'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg" class='svg-search-header'>
                  <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" />
              </svg> 
            </button>
            <button class='button btn-search-haeder-main'>Закрыть</button>
          </div>
      
        `;
        wp.insertAdjacentHTML("beforeend", Html)
    }

    FormSerchRemove(event){
        let Btn = event.target.closest('.btn-search-haeder-main')
        if(!Btn){
            return
        }
        let SearchWp = document.querySelector('.header-form-search')
        SearchWp.remove() 
        window.addEventListener('resize', ()=> {
            SearchWp ? SearchWp.remove() : null;
        })
        
        const wpList = document.querySelector('.search-list-wp')
        wpList.style.display = "none"
    }
}
/**Мобильная */
class mobail extends search{
    constructor(){
        super()
        this.classListWp2 = 'input-search-header-mobile'
        this.classList2 = 'search-list-wp-mobile'
        this.Body.addEventListener('click', this.SearchFormMobile.bind(this))
        this.Body.addEventListener('click', this.FormSerchRemoveMobile.bind(this))
        window.addEventListener('resize', this.FormSerchRemoveMobileResize.bind(this))
        this.Body.addEventListener('click', this.FormSerchInputRemove.bind(this , this.classListWp2, this.classList2))
    }

    /**html modile */
    FormMobileRender(wp){
        let Html = '';
        Html += `
        <div class='wp-search-form'>
          <div class='header-form-search header-seacrch-mobile'>
            <div class='input-search-header-wp'>
              <input class='input-search-header-mobile' placeholder="Тут можно найти">
              <button class='btn-cross-wp'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class='svg-cross-header'>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <
                /g>
                </svg>
              </button>
            </div>
            <button class='search-button-header'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg" class='svg-search-header'>
                  <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" />
              </svg> 
            </button>
            <button class='button btn-search-haeder-main'>Закрыть</button>
          </div>
          <div class="search-list-wp-mobile"></div>
        </div>
      
        `;
        wp.insertAdjacentHTML("beforeend", Html)
    }
    /**open form */
    SearchFormMobile(event){
        const Btn = event.target.closest('.round-menu-down-items-2')
        if(!Btn){
          return
        }
        this.FormMobileRender(this.Body)
        this.inputProcessing(this.classListWp2 , this.classList2)
    }
    /**form close */
    FormSerchRemoveMobile(event){
        let Btn = event.target.closest('.btn-search-haeder-main')
        if(!Btn){
          return
        }else if (window.innerWidth <= 480){
          let SearchWp = document.querySelector('.wp-search-form')
        SearchWp.remove();
        }else return 0 
        const wpList = document.querySelector('.search-list-wp')
        wpList.style.display = "none"
    }
     /**form resize */
    FormSerchRemoveMobileResize(){
        if (window.innerWidth <= 480){
          let SearchWp = document.querySelector('.wp-search-form')
            SearchWp.remove();
        }
    }
}
const test  = new main
const modiletset = new mobail
// window.addEventListener('resize', ()=> {
//     console.log(window.innerWidth)
// })
