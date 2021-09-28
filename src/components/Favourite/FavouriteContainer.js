import { useDispatch } from 'react-redux';
import { useFavourite, useHotels, useMainInfo } from '../../redux/selectors';
import { FavouriteView } from './FavouriteView';

function FavouriteContainer() {
  const { startDate, endDate } = useMainInfo();
  const dispatch = useDispatch();
  const hotels = useHotels();
  const favourite = useFavourite();
  return (
    <FavouriteView
      hotels={hotels}
      dispatch={dispatch}
      startDate={startDate}
      endDate={endDate}
      favourite={favourite}
    />
  );
}

export { FavouriteContainer };
