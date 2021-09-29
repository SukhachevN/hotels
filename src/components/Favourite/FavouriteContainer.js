import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFavourite, useMainInfo } from '../../redux/selectors';
import { FavouriteView } from './FavouriteView';
import { chooseCompareFun, NATURAL_ORDER } from './filter';

function FavouriteContainer() {
  const [filterType, setFilterType] = useState(NATURAL_ORDER);
  const { startDate, endDate } = useMainInfo();
  const dispatch = useDispatch();
  const favourite = useFavourite();
  const compareFun = chooseCompareFun(filterType);
  const favouriteDataList = favourite.dataList;
  const filteredHotels = {
    ...favourite,
    dataList: favouriteDataList.sort(compareFun),
  };
  return (
    <FavouriteView
      dispatch={dispatch}
      startDate={startDate}
      endDate={endDate}
      favourite={filteredHotels}
      filterType={filterType}
      setFilterType={setFilterType}
    />
  );
}

export { FavouriteContainer };
