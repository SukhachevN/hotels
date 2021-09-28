import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHotelsRequestFetch } from '../../redux/hotels';
import { InputSectionView } from './InputSectionView';

function InputSectionContainer() {
  const [requestData, setRequestData] = useState({
    location: 'Moscow',
    startDate: Date.now(),
    days: 1,
  });
  const [openCalendar, setOpenCalendar] = useState(false);
  const [calendarValue, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const { location, dayNum } = e.target.elements;
    const start = `${calendarValue.getFullYear()}-${calendarValue.getMonth()}-${calendarValue.getDate()}`;
    const endDate = calendarValue;
    endDate.setDate(calendarValue.getDate() + Number(dayNum.value));
    const end = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`;
    dispatch(fetchHotelsRequestFetch({ location: location.value, start, end }));
  };

  return (
    <InputSectionView
      openCalendar={openCalendar}
      setOpenCalendar={setOpenCalendar}
      calendarValue={calendarValue}
      onChange={onChange}
      dispatch={dispatch}
      setRequestData={setRequestData}
      onSubmit={onSubmit}
    />
  );
}

export { InputSectionContainer };
