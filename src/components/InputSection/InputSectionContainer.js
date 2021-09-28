import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHotelsRequestFetch } from '../../redux/hotels';
import { addInfo } from '../../redux/mainInfo';
import { formatDate } from '../../utils/formatDate';
import { InputSectionView } from './InputSectionView';

function InputSectionContainer() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [calendarValue, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const { location, dayNum } = e.target.elements;
    const start = formatDate(calendarValue);
    const endDate = calendarValue;
    endDate.setDate(calendarValue.getDate() + Number(dayNum.value));
    const end = formatDate(endDate);
    dispatch(addInfo({ location: location.value, date: start }));
    dispatch(fetchHotelsRequestFetch({ location: location.value, start, end }));
  };

  return (
    <InputSectionView
      openCalendar={openCalendar}
      setOpenCalendar={setOpenCalendar}
      calendarValue={calendarValue}
      onChange={onChange}
      dispatch={dispatch}
      onSubmit={onSubmit}
    />
  );
}

export { InputSectionContainer };
