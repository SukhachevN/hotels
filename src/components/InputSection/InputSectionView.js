/* eslint-disable react/jsx-boolean-value */
import Calendar from 'react-calendar';

function InputSectionView({
  openCalendar,
  setOpenCalendar,
  onChange,
  calendarValue,
  onSubmit,
}) {
  // console.log(calendarValue);
  // const newDate = calendarValue;
  // newDate.setDate(calendarValue.getDate() + 1);
  // console.log(newDate);
  // `${calendarValue.getFullYear()}-${calendarValue.getMonth()}-${calendarValue.getDate()}`
  return (
    <form className='inputSectionContent' onSubmit={onSubmit}>
      <div className='inputField'>
        <label htmlFor='location' aria-required='true'>
          Локация
        </label>
        <input id='location' />
      </div>
      <div className='inputField'>
        <label htmlFor='date' aria-required='true'>
          Дата заселения
        </label>
        <input
          id='date'
          onClick={() => setOpenCalendar(true)}
          value={calendarValue.toLocaleDateString('ru-Ru')}
          readOnly={true}
        />
        {openCalendar && (
          <div className='calendarBlock'>
            <Calendar
              onClickDay={(value) => {
                setOpenCalendar(false);
                onChange(value);
              }}
              value={calendarValue}
            />
          </div>
        )}
      </div>
      <div className='inputField'>
        <label htmlFor='dayNum' aria-required='true'>
          Количество дней
        </label>
        <input id='dayNum' type='number' min='1' />
      </div>
      <button type='submit' className='signInButton signInButtonInputSection'>
        Войти
      </button>
    </form>
  );
}

export { InputSectionView };
