


export function showResults(results){
    const $results = $(".results");
    $results.empty();
    results.forEach(item =>{
        $results.append(`<li> <a href="company.html?symbol=${item.symbol}"> <img src=${item.image}> ${item.name} (${item.symbol}) (${item.changes}%)</a>  </li>`)
    })

}