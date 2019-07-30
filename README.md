# money-exchange
The smallest money conversion library that actually works.\
`25` lines of code, `0` dependencies.

## Usage

```js
const Money = require("money-exchange");
const fx = new Money();

fx.init().then(() => {
    fx.convert(68, "USD", "EUR"); // 60.9647
});
```

## API

#### .init(source)
You'll need to init the library first to make it work. Init installs currency data from https://api.exchangeratesapi.io/latest.\
If this API will die you can set other, there's a lot of websites providing same JSON syntax tree.\
\
Returns promise.
#### .convert(amount, from, to)
Converts money. you can see all currencies with `.rates`.

Returns number.
#### .rates
Object with currency rates. 


## Running without currency data provider

You can set your own currencies in `.rates` object. Don't forget that base currency should equal `1`.

*Example:*
```js
const Money = require("money-exchange");
const fx = new Money();

fx.rates = {
    "BTC": 1,
    "ETH": 0.022,
    "DASH": 0.0111
};

fx.convert(15, "ETH", "BTC");
```