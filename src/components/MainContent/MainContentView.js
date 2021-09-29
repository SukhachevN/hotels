import { memo } from 'react';
import { Spinner } from '../Spinner';
import img1 from '../../img/mainSection/img1.jpg';
import img2 from '../../img/mainSection/img2.jpg';
import img3 from '../../img/mainSection/img3.jpg';
import error from '../../img/icons/error.svg';
import notFound from '../../img/icons/not-found.svg';
import { HotelElement } from '../HotelElement';
import { formatHotelWord } from '../../utils/formatWord';
import { comparator } from '../../utils/comparator';

const MainContentView = memo(
  ({ location, startDate, endDate, hotels, favourite, dispatch }) => {
    const isReady = hotels.initialized && !hotels.loading;
    const isError = hotels?.error?.status === 'error' && isReady;
    const isNoEmpty = hotels?.hotels?.length > 0;
    const isEmptyAndNoError = !isNoEmpty && !isError && isReady;
    const isReadyAndNoEmpty = isReady && isNoEmpty;
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
          Добавлено в избранное : <span>{favourite.idList.length}</span>{' '}
          {formatHotelWord('отел', favourite.idList.length)}
        </p>
        {!isReady && (
          <div className='middleSpinner'>
            <Spinner />
          </div>
        )}
        {isError && (
          <div className='errorMsg'>
            <p className='errorP'>{hotels.error.message}</p>
            <img src={error} alt='error' />
          </div>
        )}
        {isEmptyAndNoError && (
          <div className='errorMsg'>
            <img src={notFound} alt='not found' />
          </div>
        )}
        <div className='hotelElementContainer customScroll'>
          {isReadyAndNoEmpty &&
            hotels.hotels.map((hotel) => (
              <HotelElement
                hotel={hotel}
                key={hotel.hotelId}
                time={{ startDate: startDate, endDate: endDate }}
                inFavourite={favourite.idList.includes(hotel.hotelId)}
                dispatch={dispatch}
              />
            ))}
        </div>
      </>
    );
  },
  comparator
);

export { MainContentView };
