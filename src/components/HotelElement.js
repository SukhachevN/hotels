import hotelImg from '../img/hotel.svg';
import unactiveStar from '../img/unactiveStar.svg';
import activeStar from '../img/activeStar.svg';
import heart from '../img/heart.svg';
import activeHeart from '../img/activeHeart.svg';
import { addToFavourite, removeFromFavourite } from '../redux/favourite';

function HotelElement({ hotel, isMain = 'true', time, inFavourite, dispatch }) {
  const dispatchFun = inFavourite
    ? removeFromFavourite(hotel.hotelId)
    : addToFavourite(hotel.hotelId);
  return (
    <div key={hotel.hotelId} className='hotelElement'>
      <img src={hotelImg} alt={`${hotel.name}`} className='hotelImg' />
      <div className='textInfo1'>
        <h3 className='hotelElementH3'>{hotel.hotelName}</h3>
        <p className='hotelElementP'>{`${time.startDate} - ${time.endDate}`}</p>
        <div className='stars'>
          <img src={hotel.stars > 1 ? activeStar : unactiveStar} alt='start' />
          <img src={hotel.stars > 2 ? activeStar : unactiveStar} alt='start' />
          <img src={hotel.stars > 3 ? activeStar : unactiveStar} alt='start' />
          <img src={hotel.stars > 4 ? activeStar : unactiveStar} alt='start' />
          <img src={hotel.stars > 5 ? activeStar : unactiveStar} alt='start' />
        </div>
      </div>
      <div className='textInfo2'>
        <button className='likeButton' onClick={() => dispatch(dispatchFun)}>
          <img src={inFavourite ? activeHeart : heart} alt='favourite' />
        </button>
        <p className='hotelElementP'>
          Price : <span>{hotel.priceFrom}₽</span>
        </p>
      </div>
    </div>
  );
}

export { HotelElement };
