/* eslint-disable react/jsx-boolean-value */
import { memo } from 'react';
import Calendar from 'react-calendar';
import { comparator } from '../../utils/comparator';

const InputSectionView = memo(
  ({ openCalendar, setOpenCalendar, onChange, calendarValue, onSubmit }) => (
    <form className='inputSectionContent' onSubmit={onSubmit}>
      <div className='inputField'>
        <label htmlFor='location' aria-required='true'>
          Локация
        </label>
        <input id='location' type='text' defaultValue='Москва' />
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
        <input id='dayNum' type='number' min='1' max='100' defaultValue='1' />
      </div>
      <button type='submit' className='signInButton signInButtonInputSection'>
        Войти
      </button>
    </form>
  ),
  comparator
);

export { InputSectionView };
