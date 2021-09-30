/* eslint-disable no-global-assign */
import {
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import faker from 'faker';
import { render } from './render';
import { App } from '../screens/App';

afterEach(() => localStorage.clear());

let origErrorConsole;

beforeEach(() => {
  // avoid submit not implemented error in tests
  origErrorConsole = window.console.error;

  window.console.error = (...args) => {
    const firstArg = args.length > 0 && args[0];

    const shouldBeIgnored =
      firstArg &&
      typeof firstArg === 'string' &&
      firstArg.includes('Not implemented: HTMLFormElement.prototype.submit');

    if (!shouldBeIgnored) {
      origErrorConsole(...args);
    }
  };
});

function generateHotels() {
  return [
    {
      hotelId: faker.datatype.number(),
      hotelName: faker.company.companyName(),
      priceFrom: faker.datatype.number({
        min: 1000,
        max: 100000,
      }),
      stars: faker.datatype.number({
        min: 0,
        max: 5,
      }),
    },
  ];
}

afterEach(() => {
  window.console.error = origErrorConsole;
});

const invalidLogin = faker.internet.userName();
const validLogin = faker.internet.email();
const inValidPassword = faker.internet.password(
  faker.datatype.number({
    min: 0,
    max: 7,
  })
);
const validPassword = faker.internet.password(
  faker.datatype.number({
    min: 8,
    max: 20,
  })
);
const originalFetch = window.fetch;
const hotels = generateHotels();
const hotelsFetch = /https:\/\/engine.hotellook.com\/api.*/;
const authKey = 'auth';
const hotel = hotels[0];

fetch = async (link) => {
  if (link.match(hotelsFetch)) {
    return {
      ok: true,
      json: () => hotels,
    };
  }

  return originalFetch(link);
};

const invalid = () => {
  expect(screen.queryByText(/login is invalid/)).toBeInTheDocument();
  expect(screen.queryByText(/password is invalid/)).toBeInTheDocument();
};

const valid = () => {
  expect(screen.queryByText(/login is invalid/)).not.toBeInTheDocument();
  expect(screen.queryByText(/password is invalid/)).not.toBeInTheDocument();
};

async function waitLoading() {
  const loading = screen.queryAllByText(/loading/i);
  if (loading.length > 0) {
    await waitForElementToBeRemoved(() => screen.getAllByText(/loading/i));
  }
}

const authPage = () => {
  expect(
    screen.getByRole('textbox', {
      name: /логин/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument();
};

const notAuthPage = () => {
  expect(
    screen.queryByRole('textbox', {
      name: /логин/i,
    })
  ).not.toBeInTheDocument();
  expect(screen.queryByLabelText(/пароль/i)).not.toBeInTheDocument();
};

const hotelsPage = () => {
  expect(
    screen.getByRole('heading', {
      name: /отели > москва/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /избранное/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('textbox', {
      name: /локация/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('textbox', {
      name: /дата заселения/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('spinbutton', {
      name: /количество дней/i,
    })
  ).toBeInTheDocument();
};

const nothotelsPage = () => {
  expect(
    screen.queryByRole('heading', {
      name: /отели > москва/i,
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('heading', {
      name: /избранное/i,
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('textbox', {
      name: /локация/i,
    })
  ).not.toBeInTheDocument();

  expect(
    screen.queryByRole('textbox', {
      name: /дата заселения/i,
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('spinbutton', {
      name: /количество дней/i,
    })
  ).not.toBeInTheDocument();
};

const beforeAddToFavourite = () => {
  expect(
    screen.getByText(/добавлено в избранное : отелей/i)
  ).toBeInTheDocument();
  expect(
    screen.queryAllByRole('heading', { name: hotel.hotelName })
  ).toHaveLength(1);
  expect(screen.queryAllByText(`${hotel.priceFrom}₽`)).toHaveLength(1);
  expect(screen.queryAllByAltText('active star')).toHaveLength(hotel.stars);
  expect(screen.queryAllByAltText('unactive star')).toHaveLength(
    5 - hotel.stars
  );
};

const afterAddToFavourite = () => {
  expect(
    screen.getByText(/добавлено в избранное : отель/i)
  ).toBeInTheDocument();
  expect(
    screen.queryAllByRole('heading', { name: hotel.hotelName })
  ).toHaveLength(2);
  expect(screen.queryAllByText(`${hotel.priceFrom}₽`)).toHaveLength(2);
  expect(screen.queryAllByAltText('active star')).toHaveLength(2 * hotel.stars);
  expect(screen.queryAllByAltText('unactive star')).toHaveLength(
    2 * (5 - hotel.stars)
  );
};

const autentificate = () => {
  const password = screen.getByLabelText(/пароль/i);
  const login = screen.getByRole('textbox', {
    name: /логин/i,
  });
  const logInButton = screen.getByRole('button', {
    name: /войти/i,
  });
  fireEvent.change(login, { target: { value: validLogin } });
  fireEvent.change(password, { target: { value: validPassword } });
  fireEvent.click(logInButton);
};

const prepareHotelPage = async () => {
  const route = 'auth';
  window.history.pushState({}, 'Test page', route);
  render(<App />);
  autentificate();
  await waitLoading();
};

test('test auth page + auth page redirect', () => {
  const route = 'auth';
  window.history.pushState({}, 'Test page', route);
  render(<App />);
  authPage();
  nothotelsPage();
  const logInButton = screen.getByRole('button', {
    name: /войти/i,
  });
  const login = screen.getByRole('textbox', {
    name: /логин/i,
  });
  const password = screen.getByLabelText(/пароль/i);
  expect(logInButton).toBeDisabled();
  valid();
  fireEvent.change(login, { target: { value: invalidLogin } });
  fireEvent.change(password, { target: { value: inValidPassword } });
  invalid();
  fireEvent.change(login, { target: { value: validLogin } });
  fireEvent.change(password, { target: { value: validPassword } });
  valid();
  expect(logInButton).not.toBeDisabled();
  fireEvent.click(logInButton);
  notAuthPage();
  hotelsPage();
  fireEvent.click(
    screen.getByRole('button', {
      name: /выйти logout/i,
    })
  );
  authPage();
  nothotelsPage();
});

test('test that hotel screen display hotels', async () => {
  await prepareHotelPage();
  expect(
    screen.getByRole('heading', { name: hotel.hotelName })
  ).toBeInTheDocument();
  expect(screen.getByText(`${hotel.priceFrom}₽`)).toBeInTheDocument();
  expect(screen.queryAllByAltText('active star')).toHaveLength(hotel.stars);
  expect(screen.queryAllByAltText('unactive star')).toHaveLength(
    5 - hotel.stars
  );
});

test('test add/remove to/from favourite', async () => {
  await prepareHotelPage();
  beforeAddToFavourite();
  fireEvent.click(screen.getByLabelText(/add to favourite/i));
  afterAddToFavourite();
  fireEvent.click(screen.queryAllByLabelText(/remove from favourite/i)[0]);
  beforeAddToFavourite();
});
