export const calculateDiscountPrice = (actualPrice, discountPercentage) => {
  const discountDecimal = discountPercentage / 100;

  const discountedPrice = Math.round(
    actualPrice - actualPrice * discountDecimal
  );

  return discountedPrice;
};
