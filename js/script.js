// initialising array of our cryptocurrencies
var cryptocurrencies = [
    "Bitcoin",
    "Ethereum",
    "EOS",
    "XRP",
    "Dash",
    "Litecoin",
    "ZCash",
    "Ethereum Classic",
    "QTUM",
    "Monero",
    "NEO",
    "Bitcoin Cash",
    "Waves",
    "TRON",
    "Tether",
    "Stellar"
];

// initialising array of number codes of our cryptocurrencies
// code from this array correspond by index to cryptocurrency from the first array
var cryptocurrency_codes = [
    "BTC",
    "ETH",
    "EOS",
    "XRP",
    "DASH",
    "LTC",
    "ZEC",
    "ETC",
    "QTUM",
    "XMR",
    "NEO",
    "BCH",
    "WAVES",
    "TRX",
    "USDT",
    "XLM"
];

// creating image elements
var btc_img = document.createElement("img");
var eth_img = document.createElement("img");
var eos_img = document.createElement("img");
var xrp_img = document.createElement("img");
var dash_img = document.createElement("img");
var ltc_img = document.createElement("img");
var zec_img = document.createElement("img");
var etc_img = document.createElement("img");
var qtum_img = document.createElement("img");
var xmr_img = document.createElement("img");
var neo_img = document.createElement("img");
var bch_img = document.createElement("img");
var waves_img = document.createElement("img");
var trx_img = document.createElement("img");
var usdt_img = document.createElement("img");
var xlm_img = document.createElement("img");

// setting src property to corresponding image
btc_img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1000px-Bitcoin.svg.png";
eth_img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png";
eos_img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Eosio_logo.svg/150px-Eosio_logo.svg.png";
xrp_img.src = "https://s2.coinmarketcap.com/static/img/coins/200x200/52.png";
dash_img.src = "https://s2.coinmarketcap.com/static/img/coins/200x200/131.png";
ltc_img.src = "https://s2.coinmarketcap.com/static/img/coins/200x200/2.png";
zec_img.src = "https://myfin.by/images/cryptoCurrency/zec.png";
etc_img.src = "https://s2.coinmarketcap.com/static/img/coins/200x200/1321.png";
qtum_img.src = "https://s2.coinmarketcap.com/static/img/coins/200x200/1684.png";
xmr_img.src = "https://pbs.twimg.com/profile_images/473825289630257152/PzHu2yli_400x400.png";
neo_img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/NEO_%28cryptocurrency%29_logo.svg/1200px-NEO_%28cryptocurrency%29_logo.svg.png";
bch_img.src = "https://prostocoin.com/assets/coins/12-bitcoin-cash-square-crop-small-grn.png";
waves_img.src = "https://s2.coinmarketcap.com/static/img/coins/200x200/1274.png";
trx_img.src = "https://cdn.worldvectorlogo.com/logos/tron.svg";
usdt_img.src = "https://cgi.cryptoreport.com/images/coins/usdt.svg";
xlm_img.src = "https://www.stellar.org/wp-content/themes/stellar/images/stellar-rocket-300.png";

// initialising array of images of our cryptocurrencies
// imge from this array correspond by index to cryptocurrency from the first array
var cryptocurrency_imgs = [
    btc_img,
    eth_img,
    eos_img,
    xrp_img,
    dash_img,
    ltc_img,
    zec_img,
    etc_img,
    qtum_img,
    xmr_img,
    neo_img,
    bch_img,
    waves_img,
    trx_img,
    usdt_img,
    xlm_img
];

setInterval(function() {
    // clearing previous data
    try {
        $(".name").text("");
        $(".price").text("");
    } catch(err) {
        // doing nothing if function executes first time when we do not have divs with classes .name and .price
    }

    // filling columns with info
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            var name = cryptocurrencies[(j-1)*4+i-1];
            var price = get_price(cryptocurrency_codes[(j-1)*4+i-1]);
            var name_div = "<div class='name'>" + name + "</div>";
            var price_div = "<div class='price'>" + price + "$</div>";
            var img = cryptocurrency_imgs[(j-1)*4+i-1];
            $(name_div).appendTo("#column" + i + " .card:nth-child(" + j + ")");
            $(price_div).appendTo("#column" + i + " .card:nth-child(" + j + ")");
            $(img).appendTo("#column" + i + " .card:nth-child(" + j + ")");
        }
    }
}, 1000);
