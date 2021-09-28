import { Spinner } from '../Spinner';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import { HotelElement } from '../HotelElement';
import { formatHotelWord } from '../../utils/formatHotelWord';

function MainContentView({
  location,
  startDate,
  endDate,
  hotels,
  favourite,
  dispatch,
}) {
  const isReady = hotels.initialized && !hotels.loading;
  return (
    <>
      <div className='mainContentHeader'>
        <h2 className='mainContentH2'>{`Отели > ${location}`}</h2>
        <div className='startDate'>{startDate}</div>
      </div>
      <div className='imagesBlock customScroll'>
        <img src={img1} alt='img1' className='imageBlockImg' />
        <img src={img2} alt='img2' className='imageBlockImg' />
        <img src={img3} alt='img3' className='imageBlockImg' />
        <img src={img1} alt='img1' className='imageBlockImg' />
        <img src={img2} alt='img2' className='imageBlockImg' />
        <img src={img3} alt='img3' className='imageBlockImg' />
      </div>
      <p className='hotelsInFavourite'>
        Добавлено в избранное : <span>{favourite.length}</span>{' '}
        {formatHotelWord('отел', favourite.length)}
      </p>
      {!isReady && (
        <div className='middleSpinner'>
          <Spinner />
        </div>
      )}
      <div className='hotelElementContainer customScroll'>
        {isReady &&
          hotels.hotels.map((hotel) => (
            <HotelElement
              hotel={hotel}
              key={hotel.hotelId}
              time={{ startDate: startDate, endDate: endDate }}
              inFavourite={favourite.includes(hotel.hotelId)}
              dispatch={dispatch}
            />
          ))}
      </div>
    </>
  );
}

export { MainContentView };
