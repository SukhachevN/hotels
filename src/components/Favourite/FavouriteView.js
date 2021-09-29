import classNames from 'classnames';
import { HotelElement } from '../HotelElement';
import {
  chooseFilterTypeForPrice,
  chooseFilterTypeForRating,
  chooseSelectForPrice,
  chooseSelectForRating,
  HIGHER_PRICE,
  HIGHER_RATING,
  LOWER_PRICE,
  LOWER_RATING,
} from './filter';

function FavouriteView({
  dispatch,
  startDate,
  endDate,
  favourite,
  filterType,
  setFilterType,
}) {
  const selectRating = chooseSelectForRating(filterType);
  const selectPrice = chooseSelectForPrice(filterType);
  const ratingFilter = chooseFilterTypeForRating(filterType);
  const priceFilter = chooseFilterTypeForPrice(filterType);
  const activeRating =
    filterType === HIGHER_RATING || filterType === LOWER_RATING;
  const activePrice = filterType === HIGHER_PRICE || filterType === LOWER_PRICE;
  return (
    <div className='favouriteContent customScroll'>
      <h3>Избранное</h3>
      <div className='filterBlock'>
        <button
          className={classNames('filterButton', {
            unactiveButton: !activeRating,
          })}
          onClick={() => setFilterType(ratingFilter)}
        >
          Рейтинг
          <img src={selectRating} alt='selector' />
        </button>
        <button
          className={classNames('filterButton', {
            unactiveButton: !activePrice,
          })}
          onClick={() => setFilterType(priceFilter)}
        >
          Цена
          <img src={selectPrice} alt='selector' />
        </button>
      </div>
      <div className='favouriteHotelsBlock customScroll'>
        {favourite.dataList.map((hotel) => (
          <HotelElement
            hotel={hotel}
            key={hotel.hotelId}
            time={{ startDate: startDate, endDate: endDate }}
            inFavourite={favourite.idList.includes(hotel.hotelId)}
            dispatch={dispatch}
            isMain={false}
          />
        ))}
      </div>
    </div>
  );
}

export { FavouriteView };
