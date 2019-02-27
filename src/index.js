// PLEASE DON'T change function name

const coins = {
  "H": 50,
  "Q": 25,
  "D": 10,
  "N": 5,
  "P": 1,
}

module.exports = function makeExchange(currency) {
  let amountOfMoney = currency;
  const exchange = {};
  if (amountOfMoney <= 0) return {};
  if (amountOfMoney > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

  Object.keys(coins).forEach(coinName => {
    const coinValue = coins[coinName];
    if (amountOfMoney < coinValue) return;
    const coinAmount = Math.floor( amountOfMoney / coinValue);
    if (coinAmount > 0) {
      exchange[coinName] = coinAmount;
      amountOfMoney -= coinValue * coinAmount;
    }
  });

  return exchange;
}
