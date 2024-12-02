

class FilterMhetods{

    constructor( ){
        this.category = ''
        // this.startPriceMin =startPriceMin ;
        // this.startPriceMax = startPriceMax;
        this.FilterWp = document.querySelector('.filter-wp');
        this.FilterCatgoryActive = []
        this.bodyQ = document.body
        this.Wp = document.querySelector('.catalog-wp')
        this.arrCards =  0;
        this.arrProducts = [];
        this.NewCartCount = 0
        this.defPriceMin = 0
        this.defPriceMax = 0
        this.PriceMin = document.querySelector('.filter-price-min')
        this.PriceMax = document.querySelector('.filter-price-max')
        this.btnResest = document.querySelector('.button-filter-reset')
        this.BtnFilter = document.querySelector('.button-filter');

        this.BtnLeftFilter = document.querySelector('.stick-left');
        this.BtnRightFilter = document.querySelector('.stick-right')
        this.FileterMainLine = document.querySelector('.controller-line')

        this.FilterWp.addEventListener('click', this.targetItem.bind(this))
        this.bodyQ.addEventListener('click', this.BtnMore2.bind(this))
        this.BtnFilter.addEventListener('click', this.btnFilterCLick.bind(this))
        this.btnResest.addEventListener('click', this.btnResetCick.bind(this))
        this.bodyQ.addEventListener('click', this.FillterOpenClose.bind(this))

        this.BtnLeftFilter.addEventListener("mousedown" ,this.GoLeft.bind(this))
        this.BtnLeftFilter.addEventListener("touchstart" ,this.SwipeLeft.bind(this))

        this.BtnRightFilter.addEventListener("mousedown" ,this.GoRight.bind(this))
        this.BtnRightFilter.addEventListener("touchstart" ,this.SwipeRight.bind(this))
    }

      
    /** Таргет нажатого фильтра, активация деактив выбр филтьра  */
    targetItem(event) {
        const Item = event.target.closest('.characteristic-list-item');
        if (!Item) {
            return;
        }
        console.log('clikc')
        let Value = Item.querySelector('.characteristic-name').textContent;
        let Category = Item.parentElement.parentElement.id; // Получение категории
        // console.log(Category);
    
        // Создание объекта для хранения пары Category-Value
        const pair = { category: Category, value: Value };
    
        // Логика добавления/удаления пары
        const index = this.FilterCatgoryActive.findIndex(item => item.category === Category && item.value === Value);
    
        if (index === -1) {
            // Если пара не найдена, добавляем её
            this.FilterCatgoryActive.push(pair);
        } else {
            // Если пара найдена, удаляем её
            this.FilterCatgoryActive.splice(index, 1);
        }
    
        Item.classList.toggle('characteristic-list-item-active');
        console.log(pair);
        console.log(this.FilterCatgoryActive);
        
        return pair;
    }
    async filterStart(){
        const url = new URL(document.location);;
        const pathParts = url.pathname.split('/'); 
        this.category = pathParts.slice(2).join('/');
        try {
            const res  = await fetch(`/${this.category}`)
            if(!res.ok){
                throw new Error("error333", res.status);
            }
            
            const data  =  await res.json()
            let min = 100000000
            let max = 0
            data.forEach((el) => {
                
                min  = Math.min(min , el.final_price )
                max  = Math.max(max , el.final_price )
            })
            
            this.defPriceMin = min;
            this.defPriceMax = max
            this.PriceMin.textContent = `${min.toLocaleString('ru')}₽`
            this.PriceMax.textContent = `${Number(max.toLocaleString('ru'))}₽`
            this.FilterPrice(max, min)
        } catch (error) {
            console.log('Error fetching data:', error)
        }
    }
    btnFilterCLick(){
        
        let min = this.PriceMin.textContent.replace('₽', '')
        let max = this.PriceMax.textContent.replace('₽', '')
        max = max.replaceAll(' ', '')
        max  = Number(max)
        min = Number(min)
        this.FilterPrice(max, min);

    }
    btnResetCick(){
        this.FilterReset(this.defPriceMin, this.defPriceMax)
    }
    
    /** Фильтрация по цене*/
    async FilterPrice( maxPr, minPr){
        
        const Wprapper = document.querySelector('.catalog-wp')
      /*  console.log('Current active filters before PriceUpdate:', this.FilterCatgoryActive); */
        await this.PriceUpdate(minPr, maxPr, Wprapper)
        return
       
       
    };   
    /** Получени данных по цене */
    async PriceUpdate(minPr, maxPr, wp) {
        try {
            let res = await fetch(`/${this.category}`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await res.json();
            
    
            // Фильтрация по цене
            let filteredData = data.filter((el) => {
                let price = Number(el.final_price);
                return Math.round(price) >= minPr && Math.round(price) <= maxPr;
            });
            /* this.clickItemFilter() */
           /*  console.log('Initial filteredData:', filteredData);
            
            console.log('Active Filters before filtering:', this.FilterCatgoryActive ); */

            if (this.FilterCatgoryActive.length > 0) {
             
                console.log(this.FilterCatgoryActive)
                filteredData = filteredData.filter(product => {
                   
                    return this.FilterCatgoryActive.some(filter => {

                        const productValue = product[filter.category];
                        const filterValue = filter.value;
                        
                        return productValue === filterValue;
                    });
                });

       
            }
            
            this.NumberOfProducts(filteredData)
            this.SubCatalog(filteredData)
            this.arrProducts.length = 0
            this.arrProducts.push(filteredData)
            filteredData.length > 0 ? this.FertsCart(filteredData, wp) : this.NoProduct(wp)
            return { arr: filteredData };
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    /**Сброс фильтров */
    async FilterReset( min, max){
        
        const Filters = document.querySelectorAll('.characteristic-list-item-active')
        Filters.forEach((el) =>{
            el.classList.remove(`characteristic-list-item-active`)
        })
        
        this.FilterCatgoryActive.length = 0
        await this.PriceUpdate(min, max, this.Wp)

    }
    /** Создание карт товара*/
    CreadeCart(base, wp){
        // console.log(base)
        wp.innerHTML = ''
        base.forEach(({id, name, price, img, sku, disc , final_price}) => {
            let HtmlCatalog = '';
            HtmlCatalog +=`
                    
                         <div class="cart-wrapper wp-sale" id='${id}'>
                                  <div class="cart catalog-cart">
                                       <span class="nav-cart">
                                          <a class="nav-cart-cont nav-cart-cont-basket" >
                                              <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                                  <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                              </svg>
                                          </a>
                                          <a class="nav-cart-cont nav-cart-fav">
                                              <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-like">
                                                  <g clip-path="url(#clip0_203_1038)">
                                                  <rect x="0.0742188" width="20" height="20" fill="#252525"/>
                                                  <path d="M10.0742 18.8873C9.78949 18.8873 9.51498 18.7842 9.30106 18.5968C8.4931 17.8903 7.71414 17.2264 7.02689 16.6408L7.02338 16.6377C5.00845 14.9207 3.26849 13.4378 2.05786 11.9771C0.70456 10.3441 0.0742191 8.79578 0.074219 7.10434C0.0742189 5.46097 0.637726 3.94485 1.66083 2.83508C2.69614 1.71219 4.11673 1.09375 5.66138 1.09375C6.81586 1.09375 7.87314 1.45874 8.80377 2.1785C9.27344 2.54181 9.69916 2.98645 10.0742 3.5051C10.4494 2.98645 10.875 2.54181 11.3448 2.1785C12.2755 1.45874 13.3327 1.09375 14.4872 1.09375C16.0317 1.09375 17.4525 1.71219 18.4878 2.83508C19.5109 3.94485 20.0742 5.46097 20.0742 7.10434C20.0742 8.79578 19.444 10.3441 18.0907 11.9769C16.8801 13.4378 15.1403 14.9205 13.1257 16.6374C12.4372 17.224 11.657 17.8889 10.8472 18.5971C10.6335 18.7842 10.3588 18.8873 10.0742 18.8873ZM5.66138 2.26532C4.44785 2.26532 3.33304 2.74963 2.52203 3.62915C1.69897 4.52194 1.24564 5.75607 1.24564 7.10434C1.24564 8.52692 1.77435 9.79919 2.95981 11.2296C4.10559 12.6122 5.80985 14.0645 7.78311 15.7462L7.78677 15.7492C8.47662 16.3371 9.25864 17.0036 10.0725 17.7153C10.8913 17.0023 11.6746 16.3347 12.3658 15.7458C14.3389 14.0642 16.043 12.6122 17.1888 11.2296C18.3741 9.79919 18.9028 8.52692 18.9028 7.10434C18.9028 5.75607 18.4495 4.52194 17.6264 3.62915C16.8156 2.74963 15.7006 2.26532 14.4872 2.26532C13.5982 2.26532 12.782 2.54791 12.0614 3.10516C11.4191 3.60199 10.9717 4.23004 10.7094 4.66949C10.5746 4.89548 10.3371 5.03036 10.0742 5.03036C9.81131 5.03036 9.57388 4.89548 9.439 4.66949C9.17685 4.23004 8.72946 3.60199 8.08707 3.10516C7.36639 2.54791 6.5502 2.26532 5.66138 2.26532Z" />
                                                  </g>
                                              </svg>
                                          </a>
                                          <a class="nav-cart-cont" href="TovarPage.html?id=${id}">
                                              <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-lups">
                                                  <g clip-path="url(#clip0_203_1042)">
                                                  <rect x="0.078125" y="-0.00439453" width="19.9913" height="20" fill="#252525"/>
                                                  <path d="M14.6439 15.9978C10.6487 19.1814 5.0638 18.3005 2.1056 14.6492C-0.749577 11.1241 -0.571012 6.03872 2.52642 2.82017C5.72686 -0.505158 10.7585 -0.949076 14.406 1.77874C15.7128 2.75586 16.6887 3.99895 17.3243 5.50365C17.9636 7.01709 18.1578 8.59172 17.9361 10.2157C17.7151 11.8321 17.0702 13.2725 16.0206 14.6168C16.1055 14.6723 16.1961 14.7123 16.261 14.7772C17.4148 15.926 18.5642 17.0792 19.7181 18.228C19.9915 18.5003 20.1276 18.8174 20.0465 19.1995C19.8854 19.96 18.9801 20.2535 18.3994 19.7315C18.1272 19.4874 17.8768 19.2183 17.6183 18.9598C16.6706 18.0126 15.7234 17.0649 14.7757 16.1177C14.7363 16.0803 14.6951 16.0453 14.6439 15.9978ZM16.0312 8.98194C16.0412 5.12217 12.9251 2.00163 9.05655 1.99601C5.19866 1.9904 2.085 5.08596 2.06814 8.94323C2.05128 12.8124 5.1612 15.9416 9.04157 15.9598C12.8839 15.9779 16.0212 12.8455 16.0312 8.98194Z" />
                                                  </g>
                                              </svg>
                                          </a>
                                      </span>${ disc != 0 ? `<div class="cart--sale">
                                        <div class="sale">
                                            <p class="sale-text">${disc}%</p>
                                        </div>
                                        <div class="action">
                                            <p>акция</p>
                                        </div>
                                    </div> `: '<div class="cart--sale"> </div>'

                                      }
                                      
                                      <a href="TovarPage.html?id=${id}" class="wrapper-tover--ref">
                                          <div class="img-tover-center">
                                              <img class="img-tovar" src="${img}" alt="товар" >
                                          </div>
                                          
                                          <div class="cart--descr">
                                              <p class="tovar--opisane">${name}</p>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="container-art-cost">
                                      <p class="text-art">
                                          Арт:${sku}
                                      </p>
                                      <div class="text-cost">

                                        <div>${Math.round(final_price).toLocaleString('ru')}₽.</div>
                                        ${
                                            disc != 0 ? `<div class="old-price">${Math.round(price*10000).toLocaleString('ru')}₽.</div>`:''
                                        }
                                      </div>
                                  </div>
                              </div>
            `;
            
            wp.insertAdjacentHTML("beforeend",HtmlCatalog);
          });
    };
    /**Отображение общего колличества числа товаров */
    NumberOfProducts(data){
        const totalCount  = document.querySelector('.total-count')
        totalCount.textContent = data.length
    }
    /** Дополнение карт товара*/
    CreadCartDop(base, wp){
        
        base.forEach(({id, name, price, img, sku, disc,final_price}) => {
            let HtmlCatalog = '';
            HtmlCatalog +=`
                    
                          <div class="cart-wrapper wp-sale" id='${id}'>
                                  <div class="cart catalog-cart">
                                       <span class="nav-cart">
                                          <a class="nav-cart-cont nav-cart-cont-basket" >
                                              <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-corzina">
                                                  <path d="M14.3682 16.8745L8.31499 16.8745C5.73077 16.8745 3.62834 14.7721 3.62834 12.1879L3.62834 7.38404C3.62834 4.98174 2.43098 2.75812 0.425444 1.43578C0.0652751 1.19832 -0.03416 0.71388 0.203297 0.353711C0.440754 -0.0064969 0.925158 -0.105971 1.28541 0.131564C2.43028 0.886427 3.35909 1.88203 4.02327 3.0283C4.1668 3.1891 5.32416 4.41583 7.22148 4.41583L16.2162 4.41583C18.6702 4.36993 20.591 6.83265 19.9494 9.20136L18.914 13.3283C18.3901 15.4163 16.5208 16.8745 14.3682 16.8745ZM4.99348 5.53675C5.12334 6.13669 5.19056 6.75528 5.19056 7.38404L5.19056 12.1879C5.19056 13.9107 6.59218 15.3123 8.31499 15.3123L14.3682 15.3123C15.8033 15.3123 17.0495 14.3401 17.3987 12.9482L18.4341 8.8212C18.8154 7.41372 17.6739 5.95082 16.2162 5.97804L7.22144 5.97804C6.36335 5.97804 5.61645 5.79304 4.99348 5.53675ZM7.92443 19.0226C7.92443 18.4833 7.48729 18.0462 6.94805 18.0462C5.6525 18.0978 5.65364 19.9479 6.94805 19.9989C7.48729 19.9989 7.92443 19.5618 7.92443 19.0226ZM15.6965 19.0225C15.6965 18.4833 15.2593 18.0462 14.7201 18.0462C13.4245 18.0978 13.4257 19.9479 14.7201 19.9989C15.2593 19.9989 15.6965 19.5618 15.6965 19.0225ZM16.9973 8.32137C16.9973 7.88996 16.6476 7.54026 16.2162 7.54026L7.53388 7.54026C6.49751 7.5815 6.49829 9.06158 7.53388 9.10248L16.2162 9.10248C16.6476 9.10248 16.9973 8.75277 16.9973 8.32137Z" />
                                              </svg>
                                          </a>
                                          <a class="nav-cart-cont nav-cart-fav">
                                              <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-like">
                                                  <g clip-path="url(#clip0_203_1038)">
                                                  <rect x="0.0742188" width="20" height="20" fill="#252525"/>
                                                  <path d="M10.0742 18.8873C9.78949 18.8873 9.51498 18.7842 9.30106 18.5968C8.4931 17.8903 7.71414 17.2264 7.02689 16.6408L7.02338 16.6377C5.00845 14.9207 3.26849 13.4378 2.05786 11.9771C0.70456 10.3441 0.0742191 8.79578 0.074219 7.10434C0.0742189 5.46097 0.637726 3.94485 1.66083 2.83508C2.69614 1.71219 4.11673 1.09375 5.66138 1.09375C6.81586 1.09375 7.87314 1.45874 8.80377 2.1785C9.27344 2.54181 9.69916 2.98645 10.0742 3.5051C10.4494 2.98645 10.875 2.54181 11.3448 2.1785C12.2755 1.45874 13.3327 1.09375 14.4872 1.09375C16.0317 1.09375 17.4525 1.71219 18.4878 2.83508C19.5109 3.94485 20.0742 5.46097 20.0742 7.10434C20.0742 8.79578 19.444 10.3441 18.0907 11.9769C16.8801 13.4378 15.1403 14.9205 13.1257 16.6374C12.4372 17.224 11.657 17.8889 10.8472 18.5971C10.6335 18.7842 10.3588 18.8873 10.0742 18.8873ZM5.66138 2.26532C4.44785 2.26532 3.33304 2.74963 2.52203 3.62915C1.69897 4.52194 1.24564 5.75607 1.24564 7.10434C1.24564 8.52692 1.77435 9.79919 2.95981 11.2296C4.10559 12.6122 5.80985 14.0645 7.78311 15.7462L7.78677 15.7492C8.47662 16.3371 9.25864 17.0036 10.0725 17.7153C10.8913 17.0023 11.6746 16.3347 12.3658 15.7458C14.3389 14.0642 16.043 12.6122 17.1888 11.2296C18.3741 9.79919 18.9028 8.52692 18.9028 7.10434C18.9028 5.75607 18.4495 4.52194 17.6264 3.62915C16.8156 2.74963 15.7006 2.26532 14.4872 2.26532C13.5982 2.26532 12.782 2.54791 12.0614 3.10516C11.4191 3.60199 10.9717 4.23004 10.7094 4.66949C10.5746 4.89548 10.3371 5.03036 10.0742 5.03036C9.81131 5.03036 9.57388 4.89548 9.439 4.66949C9.17685 4.23004 8.72946 3.60199 8.08707 3.10516C7.36639 2.54791 6.5502 2.26532 5.66138 2.26532Z" />
                                                  </g>
                                              </svg>
                                          </a>
                                          <a class="nav-cart-cont" href="TovarPage.html?id=${id}">
                                              <svg width="21" height="20" viewBox="0 0 21 20" fill="#7880B5" xmlns="http://www.w3.org/2000/svg" class="svg-lups">
                                                  <g clip-path="url(#clip0_203_1042)">
                                                  <rect x="0.078125" y="-0.00439453" width="19.9913" height="20" fill="#252525"/>
                                                  <path d="M14.6439 15.9978C10.6487 19.1814 5.0638 18.3005 2.1056 14.6492C-0.749577 11.1241 -0.571012 6.03872 2.52642 2.82017C5.72686 -0.505158 10.7585 -0.949076 14.406 1.77874C15.7128 2.75586 16.6887 3.99895 17.3243 5.50365C17.9636 7.01709 18.1578 8.59172 17.9361 10.2157C17.7151 11.8321 17.0702 13.2725 16.0206 14.6168C16.1055 14.6723 16.1961 14.7123 16.261 14.7772C17.4148 15.926 18.5642 17.0792 19.7181 18.228C19.9915 18.5003 20.1276 18.8174 20.0465 19.1995C19.8854 19.96 18.9801 20.2535 18.3994 19.7315C18.1272 19.4874 17.8768 19.2183 17.6183 18.9598C16.6706 18.0126 15.7234 17.0649 14.7757 16.1177C14.7363 16.0803 14.6951 16.0453 14.6439 15.9978ZM16.0312 8.98194C16.0412 5.12217 12.9251 2.00163 9.05655 1.99601C5.19866 1.9904 2.085 5.08596 2.06814 8.94323C2.05128 12.8124 5.1612 15.9416 9.04157 15.9598C12.8839 15.9779 16.0212 12.8455 16.0312 8.98194Z" />
                                                  </g>
                                              </svg>
                                          </a>
                                      </span>${ disc != 0 ? `<div class="cart--sale">
                                        <div class="sale">
                                            <p class="sale-text">${disc}%</p>
                                        </div>
                                        <div class="action">
                                            <p>акция</p>
                                        </div>
                                    </div> `: '<div class="cart--sale"> </div>'

                                      }
                                      
                                      <a href="TovarPage.html?id=${id}" class="wrapper-tover--ref">
                                          <div class="img-tover-center">
                                              <img class="img-tovar" src="${img}" alt="товар" >
                                          </div>
                                          
                                          <div class="cart--descr">
                                              <p class="tovar--opisane">${name}</p>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="container-art-cost">
                                      <p class="text-art">
                                          Арт:${sku}
                                      </p>
                                      <div class="text-cost">

                                        <div>${Math.round(final_price).toLocaleString('ru')}₽.</div>
                                        ${
                                            disc != 0 ? `<div class="old-price">${Math.round(price*10000).toLocaleString('ru')}₽.</div>`:''
                                        }
                                      </div>
                                  </div>
                              </div>
            `;
            
            wp.insertAdjacentHTML("beforeend",HtmlCatalog);
          });
    }
    /**Отображение первых 12 карт*/ 
    FertsCart(date, wp){
        const COUNT_SHOW_CART = 12;
        const arrCards = date.slice(0,  COUNT_SHOW_CART);
        this.CreadeCart(arrCards, wp)
        this.arrCards = arrCards.length
        this.NewCartCount = 0
        this.btnOpcaiti()
 
    }
    btnOpcaiti(){

        const btn  = document.querySelector('.more');
        if(this.arrProducts[0].length <= this.arrCards){
            btn.style.display = 'none';
        }else btn.style.display = 'block' 
        
    }
    BtnMore2(event){
        const Item  = event.target.closest(`.more`)
        if(!Item){
            return
        }
        const Wp = document.querySelector('.catalog-wp')
        this.NewCartCount  = this.arrCards
        const date  = this.arrProducts 

        
        if(date.length <= this.NewCartCount){
            Item.style.display = 'none';
        }else Item.style.display = 'block'
        
        
        this.NewCartCount +=4;


        const  dopCart = date[0].slice(this.NewCartCount-4, Math.min(this.NewCartCount, date[0].length));

        this.CreadCartDop(dopCart, Wp)

        if(date[0].length <= this.NewCartCount){
        Item.style.display = 'none';
        }else Item.style.display = 'block'
        
        
    }
    /**Нет продуктов */ 
    NoProduct(wp){
        wp.innerHTML = ''
        let NoProd = `<div class='no-content'>
            <p>К сожалению таких товаров нет </p>
            
        </div>`
        wp.insertAdjacentHTML("beforeend",NoProd);
        
        
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**Cаздание подкатегорий */
    SubCatalog(data){
        const Wp = document.querySelector('.sub-catalog-wp')
        data  = new Set( data.map((el) => el = el.product_type))
        
        Wp ? this.SubCatalogItem(data, Wp): null
    }
    /**Html render subCatalog */
    SubCatalogItem(data, wp){
        wp.innerHTML = ''
        const newData = Array.from(data)
        
        
        newData.map((item, index) => {
            const url  = window.location.href.split('/')
            let itsBrand =''
            let id  = 0
            let formatted = item.replace(' ','').toLowerCase()
            url.forEach((el) => {
                if (el === 'brandejs'){
                    itsBrand = 'brand'
                    id = url[url.length - 1]
                    formatted= formatted.charAt(0).toUpperCase() + formatted.slice(1)
                }return
            })
            
            
            
            
            const {RuName} = this.Translit(item)
            const Item =`

                        <a  href='/product/santeh/${itsBrand.length > 0 ? `${itsBrand}/${formatted}/${String(id)}` : `${formatted}` }' id='${index}' class="sub-catalog--item">
                            <div>${RuName}</div> 
                        </a>

                `;
                
                wp.insertAdjacentHTML("beforeend",Item);
                
        });
    }

    //////////////////БЛОКИ ФИЛЬТРА//////////////////////////////////////////////////
    /** Создание данных для блоков фильтра*/
    countMaterials(products, type) {
        const materialCount = new Map();
    
        products.forEach(product => {
            const material = product[type];
    
            if (material !== null && material !== undefined) { // Проверка на null и undefined
                if (materialCount.has(material)) {
                    materialCount.set(material, materialCount.get(material) + 1);
                } else {
                    materialCount.set(material, 1);
                }
            }
        });
    
        
        materialCount.delete(undefined);
        /* if(materialCount)  */
    
        return materialCount;
    }
    /**Фильтрация данных для блоков */
    async FilterCategory(type) {
            console.log(this.category)
            try {
                let res = await fetch(`/${this.category}`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await res.json(); 
                const  filteredData = this.countMaterials(data, type)
                /* console.log(filteredData.size <= 0 ? 'a':'b') */
                const formattedData = Array.from(filteredData, ([key, value]) => ({ key, value }));
                formattedData.length <=  0 ? null : this.CharList(formattedData, type)
                
                /* this.CharClick(filteredData) */
            } catch (error) {
                console.log('Error fetching data:', error);
            }
    };
    /** Создание блоков фильтра*/
    CharList (date, type){
        const ROOT_characteristic = document.querySelector('.filter-wp');//список характеристик
        let ListChar = '';
        const  {RuName}= this.Translit(type)
        date.forEach(({key,value}) => {
            const id = Math.random()
            ListChar += `
            
                <li class="characteristic-list-item">
                    <div class="characteristic-name" id='${id}'>${key}</div>
                    <div class="characteristic-count">(${value})</div>
                </li>
            `;
            
        });
        let filterBlock = `
        
            <div class="characteristic-wp filter-passiv" id="${type}">
                <div class="filter-name-cont " >
                <h3 class="haeding-filter">${RuName}</h3>
                <svg class="svg-filter-item" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke="#bdbdbd"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.08884 14.7055C5.26942 14.2784 5.69482 14 6.16669 14H9V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V14H17.8333C18.3052 14 18.7306 14.2784 18.9112 14.7055C19.0917 15.1326 18.9919 15.6241 18.6583 15.951L12.825 21.6653C12.3693 22.1116 11.6307 22.1116 11.175 21.6653L5.34174 15.951C5.00808 15.6241 4.90826 15.1326 5.08884 14.7055Z" ></path> </g>
                </svg>
                </div>
                <ul class="characteristic-list-item--wp">
                    ${ListChar}
                 </ul>
            </div>
        `;
        ROOT_characteristic.insertAdjacentHTML("beforeend", filterBlock);
        
    };
    /** Отркрытие филтра*/
    FillterOpenClose(event){
        const Btn  = event.target.closest('.filter-name-cont');
        if(!Btn){
        return
        }
        let conntainer = Btn.parentElement
        conntainer.classList.toggle('filter-passiv')
        conntainer.querySelector('.svg-filter-item').classList.toggle('svg-filter-item-active')
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    /**stick */
    GoLeft(event){
        event.preventDefault()
     
        let shiftX = event.clientX - event.currentTarget.offsetLeft;
     
        
     
        const onMouseMove = (event) => {
            let newLeft = event.clientX  - shiftX ;
     
            
     
            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) {
              newLeft = 0;
            }
            let rightEdge = this.FileterMainLine.offsetWidth - this.BtnLeftFilter.offsetWidth ;
            if (newLeft > rightEdge) {
              newLeft = rightEdge;
            }
     
            this.BtnLeftFilter.style.left = newLeft  + 'px';
            let a = this.BtnLeftFilter.style.left
            this.Price(a, this.PriceMin)
     
          }
     
     
          const onMouseUp = () => {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
          }

          document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
     
          this.BtnLeftFilter.ondragstart = function() {
            return false;
          };
          
        //   return PriceMin
     
    };
    SwipeLeft(event) {
          event.preventDefault();
      
          let touch = event.touches[0]; // Получаем первое касание
          let shiftX = touch.clientX - event.currentTarget.offsetLeft;
      
         
      
          const onTouchMove = (event) => {
              let touch = event.touches[0]; // Получаем первое касание
              let newLeft = touch.clientX - shiftX;
      
              // Ограничиваем перемещение внутри границ
              if (newLeft < 0) {
                  newLeft = 0;
              }
              let rightEdge = this.FileterMainLine.offsetWidth - this.BtnLeftFilter.offsetWidth;
              if (newLeft > rightEdge) {
                  newLeft = rightEdge;
              }
      
              this.BtnLeftFilter.style.left = newLeft + 'px';
              let a = this.BtnLeftFilter.style.left;
              this.Price(a, this.PriceMin);
          }
      
          const onTouchEnd = () => {
              document.removeEventListener('touchend', onTouchEnd);
              document.removeEventListener('touchmove', onTouchMove);
          }

          document.addEventListener('touchmove', onTouchMove);
          document.addEventListener('touchend', onTouchEnd);
      
          this.BtnLeftFilter.ondragstart = function() {
              return false;
          };
    };
    /** Сенсор*/
    GoRight(event){
     
            event.preventDefault()

            
            let shiftX = event.clientX - event.currentTarget.offsetLeft

        
            
        
            const  onMouseMove = (event) => {
                let newLeft = event.clientX - shiftX  ;

        
                // курсор вышел из слайдера => оставить бегунок в его границах.
                if (newLeft < 0) {
                  newLeft = 0;
                }
                let rightEdge = this.FileterMainLine.offsetWidth - this.BtnRightFilter.offsetWidth ;
                if (newLeft > rightEdge) {
                  newLeft = rightEdge;
                }
        
                this.BtnRightFilter.style.left = newLeft  + 'px';

     
                let a = this.BtnRightFilter.style.left
                
                this.Price(a, this.PriceMax)
                }
        
     
              const onMouseUp = () => {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
              }
     

              document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

              this.BtnRightFilter.ondragstart = function() {
                return false;
              };
        
    };
    SwipeRight(event) {
              event.preventDefault();

          
              let touch = event.touches[0]; // Получаем первое касание
              let shiftX = touch.clientX - event.currentTarget.offsetLeft;

          
              
          
              const onTouchMove = (event) => {
                  let touch = event.touches[0]; // Получаем первое касание
                  let newLeft = touch.clientX - shiftX;

          
                  // Ограничиваем перемещение внутри границ
                  if (newLeft < 0) {
                      newLeft = 0;
                  }
                  let rightEdge = this.FileterMainLine.offsetWidth - this.BtnRightFilter.offsetWidth;
                  if (newLeft > rightEdge) {
                      newLeft = rightEdge;
                  }
          
                  this.BtnRightFilter.style.left = newLeft + 'px';

          
                  let a = this.BtnRightFilter.style.left;
                  this.Price(a, this.PriceMax);
              }
          
              const onTouchEnd   = () => {
                  document.removeEventListener('touchend', onTouchEnd);
                  document.removeEventListener('touchmove', onTouchMove);
              }

              document.addEventListener('touchmove', onTouchMove);
              document.addEventListener('touchend', onTouchEnd);
          
              BtnRightFilter.ondragstart = function() {
                  return false;
              };
    };
    Price(cursor, textPos) {
        let minPrice = this.defPriceMin
        let maxPrice = this.defPriceMax
        // Преобразование курсора из px в число
        let cursorValue = parseFloat(cursor.replace('px', ''));
        
        // Расчет цены на основе пропорции, с планкой на минимальное значение
        let price = Math.trunc((maxPrice * ((cursorValue ) / this.FileterMainLine.offsetWidth)));
    
        // Проверка, чтобы цена не была ниже минимальной
        if (price < minPrice) {
            price = minPrice;
        }
        
        // Установка текста с ценой
        textPos.textContent = `${price} ₽`;

        return price;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    /** Перевод названий*/
    Translit(word) {
        const translationMap = {
            'material': 'материал',               
            'connection_type': 'тип соединения',
            'power': 'мощность',
            "Towel Warmer": "Подогреватель полотенец",
            "Toilet": "Туалет",
            "Urinal": "Писсуар",
            
        };
    
        
        word =  translationMap[word] || word; 
        return {RuName: word}
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
}


const Test = new FilterMhetods 

window.addEventListener('DOMContentLoaded', async function()  {
    await Test.filterStart()
    
    const FilterCategory = ['material','connection_type', 'power']
    FilterCategory.forEach(el =>{
        Test.FilterCategory(el)
    })

})


