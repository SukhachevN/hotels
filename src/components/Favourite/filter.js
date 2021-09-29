import selectHigh from '../../img/icons/select.svg';
import selectLow from '../../img/icons/selectState2.svg';
import selectUnactive from '../../img/icons/selectUnactive.svg';

const NATURAL_ORDER = 'NATURAL_ORDER';
const HIGHER_RATING = 'HIGHER_RATING';
const LOWER_RATING = 'LOWER_RATING';
const HIGHER_PRICE = 'HIGHER_PRICE';
const LOWER_PRICE = 'LOWER_PRICE';

function higherRating(a, b) {
  if (a.starts < b.stars) {
    return 1;
  }
  if (a.stars > b.stars) {
    return -1;
  }
  return 0;
}

function lowerRating(a, b) {
  if (a.starts > b.stars) {
    return 1;
  }
  if (a.stars < b.stars) {
    return -1;
  }
  return 0;
}

function higherPrice(a, b) {
  if (a.priceFrom < b.priceFrom) {
    return 1;
  }
  if (a.priceFrom > b.priceFrom) {
    return -1;
  }
  return 0;
}

function lowerPrice(a, b) {
  if (a.priceFrom > b.priceFrom) {
    return 1;
  }
  if (a.priceFrom < b.priceFrom) {
    return -1;
  }
  return 0;
}

function chooseCompareFun(type) {
  switch (type) {
    case HIGHER_RATING:
      return higherRating;
    case HIGHER_PRICE:
      return higherPrice;
    case LOWER_RATING:
      return lowerRating;
    case LOWER_PRICE:
      return lowerPrice;
    default:
      return () => 0;
  }
}

function chooseFilterTypeForRating(filterType) {
  switch (filterType) {
    case HIGHER_RATING:
      return LOWER_RATING;
    default:
      return HIGHER_RATING;
  }
}

function chooseFilterTypeForPrice(filterType) {
  switch (filterType) {
    case HIGHER_PRICE:
      return LOWER_PRICE;
    default:
      return HIGHER_PRICE;
  }
}

function chooseSelectForRating(filterType) {
  switch (filterType) {
    case HIGHER_RATING:
      return selectHigh;
    case LOWER_RATING:
      return selectLow;
    default:
      return selectUnactive;
  }
}

function chooseSelectForPrice(filterType) {
  switch (filterType) {
    case HIGHER_PRICE:
      return selectHigh;
    case LOWER_PRICE:
      return selectLow;
    default:
      return selectUnactive;
  }
}

export {
  NATURAL_ORDER,
  HIGHER_RATING,
  LOWER_RATING,
  HIGHER_PRICE,
  LOWER_PRICE,
  chooseCompareFun,
  chooseFilterTypeForRating,
  chooseFilterTypeForPrice,
  chooseSelectForRating,
  chooseSelectForPrice,
};
