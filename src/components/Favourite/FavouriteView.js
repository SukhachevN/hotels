import { HotelElement } from '../HotelElement';
import select from '../../img/select.svg';
import selectState2 from '../../img/selectState2.svg';
import selectUnactive from '../../img/selectUnactive.svg';

function FavouriteView({ dispatch, startDate, endDate, favourite }) {
  return (
    <div className='favouriteContent customScroll'>
      <h3>Избранное</h3>
      <div className='filterBlock'>
        <button className='filterButton'>
          Рейтинг
          <img src={select} alt='selector' />
        </button>
        <button className='filterButton'>
          Цена
          <img src={select} alt='selector' />
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
