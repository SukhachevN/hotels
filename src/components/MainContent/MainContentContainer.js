import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHotelsRequestFetch } from '../../redux/hotels';
import { useFavourite, useHotels, useMainInfo } from '../../redux/selectors';
import { formatDate } from '../../utils/formatDate';
import { MainContentView } from './MainContentView';

const dateNow = new Date();

const defaultHotelRequest = {
  location: 'Москва',
  start: formatDate(dateNow),
  end: formatDate(dateNow),
};

function MainContentContainer() {
  const dispatch = useDispatch();
  const hotels = useHotels();
  const favourite = useFavourite();
  const { location, startDate, endDate } = useMainInfo();

  useEffect(() => {
    dispatch(fetchHotelsRequestFetch(defaultHotelRequest));
  }, []);

  return (
    <MainContentView
      location={location}
      startDate={startDate}
      endDate={endDate}
      hotels={hotels}
      favourite={favourite}
      dispatch={dispatch}
    />
  );
}

export { MainContentContainer };
