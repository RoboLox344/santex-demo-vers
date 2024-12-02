/* class ReqWest{
   
    async PriceUpdate(minPr, maxPr) {
        try {
            let res = await fetch(`/product/heating`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await res.json(); // Преобразуем ответ в JSON
            let filteredData = data.filter((el) => el.price >= minPr && el.price <= maxPr);
            console.log(filteredData);
            return filteredData; // Возвращаем отфильтрованные данные
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
  }
module.exports =   new ReqWest(); */