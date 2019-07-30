const { get } = require('https');

class Money {
    constructor() {
        this.rates = null;
    }
    convert (amount, from, to) { return ((amount / this.rates[from]).toFixed(4) * this.rates[to]).toFixed(4) };
    init (source = "https://api.exchangeratesapi.io/latest") {
        return new Promise(resolve => {
            get(source, res => {
                let data = "";

                res.on("data", chunk => data += chunk);
                res.on("end", () => {
                    data = JSON.parse(data);
                    data.rates[data.base] = 1;
                    this.rates = data.rates;
                    resolve(true);
                })
            });
        })
    }
}

module.exports = Money;