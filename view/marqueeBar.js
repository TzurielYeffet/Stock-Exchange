import { getListOfStock } from "../model/marquee.js";
import { mockStockListData } from "../model/mockRequestData.js";

// const marqueeContent = await getListOfStock();

export function initMarquee() {
  console.log("Inside initMarquee()");

  let span = "";
  const loopedStockArr = [...mockStockListData, ...mockStockListData];
  const $marquee = $(`<div class="inline-block animate-marquee">
        </div>`);
  loopedStockArr.forEach((item) => {
    let change = randomUpdtaeStockPrice();
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
  $marquee.append(span);
  $("#marquee").append($marquee);
}

function randomUpdtaeStockPrice() {
  const maxChange = 2;
  const minChange = -2;
  return parseFloat(
    (Math.random() * (maxChange - minChange) + minChange).toFixed(2)
  );
}
