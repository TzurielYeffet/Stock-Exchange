


export function showResults(results){
    const $results = $(".results");
    $results.empty();
    results.forEach(item =>{
        $results.append(`<li class="px-2 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors"> <a href="company.html?symbol=${item.symbol}"> <img class="mx-auto inline-block h-10 rounded-full sm:mx-0 sm:shrink-0"  src=${item.image}> ${item.name} (${item.symbol}) (${item.changes}%)</a>  </li>`)
    })

}