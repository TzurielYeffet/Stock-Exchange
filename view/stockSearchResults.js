


export function showResults(results){
    const $results = $(".results");
    $results.empty();
    results.forEach(item =>{
        $results.append(`<li> <a href="company.html?symbol=${item.symbol}">${item.name} (${item.symbol})</a></li>`)
    })

}