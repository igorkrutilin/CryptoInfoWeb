function get_price(cryptocurrency) {
    // sending request to get JSON with price of cryptocurrency in USD
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=" + cryptocurrency + "&tsyms=USD", false);
    xhttp.send();
    // getting price from JSON we've got
    var price = xhttp.responseText;
    price = JSON.parse(price);
    price = price.USD;
    // returning price
    return price;
}
