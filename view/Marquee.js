  import { getListOfStock } from "../model/marqueeData.js";
  import { mockStockListData } from "../model/mockRequestData.js";

  // const marqueeContent = await getListOfStock();

  export class Marquee {
    #element
    constructor(element) {
      this.#element = element;
    }

    #generateSpan(stockData) {
      let span = "";
      // const loopedStockArr = [...stockData, ...stockData]; -> Uncomment when finish testing
      console.log("inside generateSpan");
      
      const loopedStockArr = [...mockStockListData, ...mockStockListData];
      const $marquee = $(`<div class="inline-block animate-marquee">
          </div>`);
      loopedStockArr.forEach((item) => {
        let change = this.randomUpdateStockPrice();
        let newPrice = item.price + change;
        let isUp = change > 0;
        item.price = newPrice;
        span += `<span class=" border-l-2 border-l-gray-200 ">
                  <span class= "mx-2  inline-block">${item.symbol}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <span class="${isUp ? "text-green-400" : "text-red-400"}"> ${
          isUp ? "▲" : "▼"
        }</span>
                  </span>`;
      });
      return $marquee.append(span);
    }
    render(data) {
      $(this.#element).empty();
      $(this.#element).append(this.#generateSpan(data.slice(0,50)));
    }

    randomUpdateStockPrice() {
      const maxChange = 2;
      const minChange = -2;
      return parseFloat(
        (Math.random() * (maxChange - minChange) + minChange).toFixed(2)
      );
    }
  }
