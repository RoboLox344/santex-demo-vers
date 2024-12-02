
class modalCart{

    constructor(){
        this.totalPrice = document.querySelector('.total-basket-pirce')
        this.bodyCart = document.querySelector('.kozina-modal-wp') 
        this.btnOpen  = document.querySelector('.button-cart')
        this.cartCountHeader = document.querySelector('.item-basket-pop-count')
        this.modalCartWp = document.querySelector('.kozina-modal-container-wp')
        this.butttonOreder = document.querySelector('.button-MakingOrder')
        this.main  = document.body
        this.deliveryType = 'Доставка'
        this.productsClient = []
        this.porducTotalCount  = 0
        this.itemCount  = 0
        
        this.btnOpen.addEventListener('click', this.GetCart.bind(this))
        this.main.addEventListener('click', this.addToProductClient.bind(this))
        this.modalCartWp.addEventListener('click' , this.deleteProduct.bind(this))
        this.modalCartWp.addEventListener('click' , this.productMinus.bind(this))
        this.modalCartWp.addEventListener('click' , this.productPlus.bind(this))
        this.modalCartWp.addEventListener('click', this.reseetBasketPage.bind(this))

        //mak_oreder
        this.cartPageWp = document.getElementById('ProductsInTheOrder')
        this.cartPageWp  ? this.cartPageWp.addEventListener('click' , this.productItemPlus.bind(this)) : null
        this.cartPageWp  ? this.cartPageWp.addEventListener('click' , this.productItemMinus.bind(this)) : null
        this.cartPageWp  ? this.cartPageWp.addEventListener('click', this.deleteItem.bind(this)) : null

        //order
        this.butttonOreder ? this.main.addEventListener('click', this.postOrder.bind(this)) : null
        
    }
    deleteItem(event){
        const item = event.target.closest('.basket-modal-button-delete-page')
        if(!item){
            return
        }
        const elem  = item.parentElement.parentElement.parentElement
        const id = Number(elem.id)
        let tottalPrice = document.querySelector('.MakingOrder-information-item-end')
        this.postDeletePrduct(elem, id, tottalPrice )
    }
    async productItemMinus(event){
        const item  = event.target.closest('.item-basket-minus')
        if(!item){
            return
        }
        const elem = item.parentElement.parentElement.parentElement
        let newPrice  = elem.querySelector('.item-sum-price-pop-basket')
        const id = Number(elem.id)
        const newQuantity = Number(elem.querySelector('.count-basket-item').textContent) - 1
        let tottalPrice = document.querySelector('.MakingOrder-information-item-end')
        if(newQuantity > 0){
            tottalPrice.textContent = Number(tottalPrice.textContent) - Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent)
            newPrice.textContent = Math.round(Number(newPrice.textContent)  - Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent))
            const status = await this.changeQuantity(id,newQuantity)
            if(!status.bool){
                return
            }else{
                this.porducTotalCount -= 1
                this.cartCountHeader.textContent = this.porducTotalCount
                elem.querySelector('.count-basket-item').textContent -= 1
            }
           
        }
    }
    async productItemPlus(event){
        const item  = event.target.closest('.item-basket-plus')
        if(!item){
            return
        }
        const elem = item.parentElement.parentElement.parentElement
        const id = Number(elem.id)
        let newPrice  = elem.querySelector('.item-sum-price-pop-basket')
        let tottalPrice = document.querySelector('.MakingOrder-information-item-end')
        const newQuantity = Number(elem.querySelector('.count-basket-item').textContent) + 1
        if(newQuantity < 100){
            tottalPrice.textContent = Number(tottalPrice.textContent) + Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent)
            newPrice.textContent = Math.round(Number(newPrice.textContent)  + Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent))
            const status = await this.changeQuantity(id,newQuantity)
            if(!status.bool){
                return
            }else{
                this.porducTotalCount += 1
                this.cartCountHeader.textContent = this.porducTotalCount
                elem.querySelector('.count-basket-item').textContent = newQuantity
            }
           
        }
    }
    /**Запрос корзины */
    async GetCart(){
        try {
            const res  = await fetch(`/cart`)
            if(res.ok){
                const data = await res.json()
                this.cartOpen(data)
                
                return {data:data}
            }
            throw new Error(`error:${res.status}`);
            
        } catch (error) {
            
        }
    }
    async reseetBasketPage(event){
        const item = event.target.closest('.button-korzina')
        if(!item){
            return
        }
        const {data} = await this.GetCart()
        this.cartPageWp ? this.cartInMakingAnOrder(data.products) : null
    }
    /**полцчение числа айтм корзины пи загрузке */
    async getLoad(){
        const {data} = await this.GetCart()
        this.getTottalCount(data.products)
        
        this.cartPageWp ? this.cartInMakingAnOrder(data.products) : null
    }
    /**отображение на странице офомрления  */
    cartInMakingAnOrder(data){
        
        const wpProd = this.cartPageWp.querySelector('.inputs-makingOrder-main-container-basket')
        wpProd.innerHTML = ''   
        
        if (data.length > 0 ){
            data.forEach((el) => {
                const hrml  = `
                <div class="kozina-cart-wp-page" id='${el.product_id}'>
                        <div class='basket-pop-item-ferst'>
                        <div class='count-basket-item'>${el.quantity}</div>
                        <div class='basket-photo-item'><img src='/img/${el.productImage}.webp' alt='${el.productName}' class='photo-basket-item-size'></div>
                        <div class="kozina-cart-item">${el.productName}</div>
                        <div class="kozina-button-wp">
                            <button class="basket-modal-button-delete-page">
                                <a class="nav-cart-cont">
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                        <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>  
                            </button>
                        </div> 
                        </div>
                        <div class='basket-pop-item-second'>
                            <div class='item-count-basket-pop-wp'>
                                <div class='item-basket-minus'>
                                    <svg fill="#e3e3e3" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#e3e3e3" class='svg-basket-pop-minus'>
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <path d="M216,140H40a12,12,0,0,1,0-24H216a12,12,0,0,1,0,24Z"></path> </g>
                                    </svg>
                                </div>
                                <div class='item-basket-plus'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e3e3e3" class='svg-basket-pop-plus'>
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#ffffff">
                                    </path> </g>
                                    </svg>
                                </div>
                            </div>
                            <div class='item-sum-price-pop-basket--wp'>
                            <p class='item-sum-price-pop-basket--text'>Цена:</p>
                            <div class='item-sum-price-pop-basket'>${Math.round(el.productPrice)* el.quantity}</div>
                            </div>
                        </div>
                </div>
                `;
                wpProd.insertAdjacentHTML('beforeend', hrml)
                document.querySelector('.MakingOrder-information-item-end').textContent = this.totalPrice.textContent
            })
        } else{
            this.popText2(wpProd, 'Корзина пуста')
        }
        

    }
    
    /**Запрос на довбление товара */
    async addProduct(product) {
        
        try {
            const res = await fetch(`/addtocart`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    delivery_type: this.deliveryType,
                    products: [{ product_id: product[0][0], quantity: product[0][1] }], // Изменение здесь
                })
            });
            const result = await res.json();
    
            if (res.ok) { // Ваша проверка должна быть res, а не response
                
                this.cartCountHeader.textContent = Number(this.cartCountHeader.textContent) + 1
               
                // Здесь вы можете обновить UI, чтобы показать, что товары добавлены
            } else {
                console.error('Ошибка:', result.message);
                alert(`Ошибка: ${result.status}`);
            }
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
            alert('Ошибка на сервере');
        }
    }
    
    addToProductClient(event) {
        const Item = event.target.closest('.nav-cart-cont-basket');
        if (!Item) {
            return;
        }
        const product = [];
        const productItem = Item.parentElement.parentElement.parentElement;
        product.push([Number(productItem.id),1]);
        
        
        this.addProduct(product); 
        
    }
    /**убавление */
    async productMinus(event){
        const item  = event.target.closest('.item-basket-minus')
        if(!item){
            return
        }
        const elem = item.parentElement.parentElement.parentElement
        let newPrice  = elem.querySelector('.item-sum-price-pop-basket')
        const id = Number(elem.id)
        const newQuantity = Number(elem.querySelector('.count-basket-item').textContent) - 1
        let tottalPrice = document.querySelector('.total-basket-pirce')
        if(newQuantity > 0){
            tottalPrice.textContent = Number(tottalPrice.textContent) - Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent)
            newPrice.textContent = Math.round(Number(newPrice.textContent)  - Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent))
            const status = await this.changeQuantity(id,newQuantity)
            if(!status.bool){
                return
            }else{
                this.porducTotalCount -= 1
                this.cartCountHeader.textContent = this.porducTotalCount
                elem.querySelector('.count-basket-item').textContent -= 1
            }
           
        }
    }
    
    /**добавление */
    async productPlus(event){
        const item  = event.target.closest('.item-basket-plus')
        if(!item){
            return
        }
        const elem = item.parentElement.parentElement.parentElement
        const id = Number(elem.id)
        let newPrice  = elem.querySelector('.item-sum-price-pop-basket')
        let tottalPrice = document.querySelector('.total-basket-pirce')
        const newQuantity = Number(elem.querySelector('.count-basket-item').textContent) + 1
        if(newQuantity < 100){
            tottalPrice.textContent = Number(tottalPrice.textContent) + Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent)
            newPrice.textContent = Math.round(Number(newPrice.textContent)  + Number(newPrice.textContent) / Number(elem.querySelector('.count-basket-item').textContent))
            const status = await this.changeQuantity(id,newQuantity)
            if(!status.bool){
                return
            }else{
                this.porducTotalCount += 1
                this.cartCountHeader.textContent = this.porducTotalCount
                elem.querySelector('.count-basket-item').textContent = newQuantity
            }
           
        }
        
        
    }
    /**Запрос изменение кол-ва товара  */
    async changeQuantity(id, quantity){
        try {
            const res  = await fetch(`/cart/updatequantity/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity})
            })
            if(!res.ok){
                throw new Error(`error:${res.status}`);
            }
            return {bool: true }
        } catch (error) {
            
        }
    }
    
    /**Удаление кол-ва товара  */
    deleteProduct(event){
        const Item  = event.target.closest('.basket-modal-button-delete')
        if(!Item){
            return
        }
        const productItem = Item.parentElement.parentElement.parentElement;
        const id = Number(productItem.id)
        let tottalPrice = document.querySelector('.total-basket-pirce')
        this.postDeletePrduct(productItem,id, tottalPrice)
       

    }
    async postDeletePrduct(item,id, newPrice){
        try {
            const res = await fetch(`/cart/delete/${id}`, {
                method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id})
            })
            if(!res.ok){
                throw new Error(`error:${res.status}`);
            }
            let count  = item.querySelector('.count-basket-item')
            this.porducTotalCount -= Number(count.textContent)
            console.log(this.porducTotalCount)
            this.cartCountHeader.textContent = this.porducTotalCount
            this.itemCount -= 1
            newPrice.textContent = Number(newPrice.textContent) -  Number(item.querySelector('.item-sum-price-pop-basket').textContent)
            item.remove()
            if(this.itemCount === 0){
                this.popText('Корзина пуста')
            }
            
        } catch (error) {
            
        }
    }
    /**Передача данных в корзину */
    cartOpen({message,products, totalPrice}){
        this.totalPrice.innerHTML  = Math.round(totalPrice)
        
        products.length > 0 ? this.cartItem(products) : this.popText(message)
        
    }
    getTottalCount(data){
        let totalCount = 0
        data.forEach((el) =>{
            totalCount += el.quantity
        })
        this.porducTotalCount = totalCount
        this.cartCountHeader.textContent = totalCount
    }
    /**hmtl cart*/
    cartItem(products){
        this.bodyCart.innerHTML = ''
        this.itemCount = 0
        products.forEach((el) => {
        
            this.itemCount += 1
            
            
            const html = `
            <div class="kozina-cart-wp" id='${el.product_id}'>
                        <div class='basket-pop-item-ferst'>
                        <div class='count-basket-item'>${el.quantity}</div>
                        <div class='basket-photo-item'><img src='/img/${el.productImage}.webp' alt='${el.productName}' class='photo-basket-item-size'></div>
                        <div class="kozina-cart-item">${el.productName}</div>
                        <div class="kozina-button-wp">
                            <button class="basket-modal-button-delete">
                                <a class="nav-cart-cont" href="#">
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                        <path d="M1 21L11 11L1 21ZM21 1L11 11L21 1ZM11 11L1 1L11 11ZM11 11L21 21L11 11Z" fill="#7880B5"/>
                                        <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="#7880B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>  
                            </button>
                        </div> 
                        </div>
                        <div class='basket-pop-item-second'>
                            <div class='item-count-basket-pop-wp'>
                                <div class='item-basket-minus'>
                                    <svg fill="#e3e3e3" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#e3e3e3" class='svg-basket-pop-minus'>
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <path d="M216,140H40a12,12,0,0,1,0-24H216a12,12,0,0,1,0,24Z"></path> </g>
                                    </svg>
                                </div>
                                <div class='item-basket-plus'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e3e3e3" class='svg-basket-pop-plus'>
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#ffffff">
                                    </path> </g>
                                    </svg>
                                </div>
                            </div>
                            <div class='item-sum-price-pop-basket--wp'>
                            <p class='item-sum-price-pop-basket--text'>Цена:</p>
                            <div class='item-sum-price-pop-basket'>${Math.round(el.productPrice)* el.quantity}</div>
                            </div>
                        </div>
                </div>

        `;
        this.bodyCart.insertAdjacentHTML("beforeend", html);
        });
        this.getTottalCount(products)
    }
    /**Пустая корзина*/
    popText(message){
        this.bodyCart.innerHTML=  ''
        const html = `
            <div class="basket-pop-promo-text" id="Text-lorem">${message}</div>
        `
        this.bodyCart.insertAdjacentHTML('beforeend', html)
    }
    popText2(wp, message){
        
        const html = `
            <div class="basket-pop-promo-text-page" id="Text-lorem">${message}</div>
        `
        wp.insertAdjacentHTML('beforeend', html)
    }

    postOrder(event){
        
        if(event.target !== this.butttonOreder){
            return
        }
        console.log('go ofrmlyat')
    }
    
}
const TestModalCart = new modalCart()

document.addEventListener('DOMContentLoaded', ()=>{
    TestModalCart.getLoad()

    // if(window)
})


