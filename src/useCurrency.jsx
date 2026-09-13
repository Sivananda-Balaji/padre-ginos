const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const priceConverter = (price) => intl.format(price);

const useCurrency = (price) => {
  return priceConverter(price);
};

export { useCurrency, priceConverter };
