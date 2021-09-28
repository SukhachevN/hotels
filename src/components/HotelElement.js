import { memo } from 'react';
import classNames from 'classnames';
import hotelImg from '../img/hotel.svg';
import unactiveStar from '../img/unactiveStar.svg';
import activeStar from '../img/activeStar.svg';
import heart from '../img/heart.svg';
import activeHeart from '../img/activeHeart.svg';
import { addToFavourite, removeFromFavourite } from '../redux/favourite';
import { comparator } from '../utils/comparator';

const HotelElement = memo(
  ({ hotel, isMain = 'true', time, inFavourite, dispatch }) => {
    const dispatchFun = inFavourite
      ? removeFromFavourite({ id: hotel.hotelId, data: hotel })
      : addToFavourite({ id: hotel.hotelId, data: hotel });
    return (
      <div key={hotel.hotelId} className='hotelElement'>
        {isMain && (
          <img src={hotelImg} alt={`${hotel.name}`} className='hotelImg' />
        )}

        <a
          href='#hotelID'
          className={classNames('textInfo1', { textInfo1Favourite: !isMain })}
        >
          <h3 className='hotelElementH3'>{hotel.hotelName}</h3>
          <p className='hotelElementP'>{`${time.startDate} - ${time.endDate}`}</p>
          <div className='stars'>
            <img
              src={hotel.stars > 1 ? activeStar : unactiveStar}
              alt='start'
            />
            <img
              src={hotel.stars > 2 ? activeStar : unactiveStar}
              alt='start'
            />
            <img
              src={hotel.stars > 3 ? activeStar : unactiveStar}
              alt='start'
            />
            <img
              src={hotel.stars > 4 ? activeStar : unactiveStar}
              alt='start'
            />
            <img
              src={hotel.stars > 5 ? activeStar : unactiveStar}
              alt='start'
            />
          </div>
        </a>
        <div
          className={classNames('textInfo2', { teztInfo2Favourite: !isMain })}
        >
          <button className='likeButton' onClick={() => dispatch(dispatchFun)}>
            <img src={inFavourite ? activeHeart : heart} alt='favourite' />
          </button>
          <p className='hotelElementP hotelElementPSmall'>
            Price : <span>{hotel.priceFrom}₽</span>
          </p>
        </div>
      </div>
    );
  },
  comparator
);

export { HotelElement };
