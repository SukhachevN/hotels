# Web приложение для поиска отелей

https://competent-elion-2c0f15.netlify.app/

- Ссылка на макет: https://www.figma.com/file/Qe8Tr0nX7HB2L4RnfGNQRv/React-Test%2FSimple-Hotel-Check?node-id=0%3A1

- Стек технологий: React + Redux-saga + React Router, остальные библиотеки по желанию.


- API, которое можно использовать: https://support.travelpayouts.com/hc/ru/articles/115000343268-API-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D0%B9#price


Описание интерфейса:
1. страница авторизации. Почта и пароль могут быть любыми, но должны проходить стандартную валидацию.
2. страница отображения отелей, где можно ввести название города, дату заселения и количество дней. По результатам этих данных отображаются отели и информация о них, которые можно добавить в избранное. Избранные отели, в соответствующем блоке, можно отсортировать по стоимости и количеству звезд. На странице отображается карусель захардкоженных изображений. Изображение в карусели можно прокручивать.
## Описание логики работы экранов:

1) Если пароль и логин не прошли валидацию, отображать предупреждение о не правильности введенных данных.

#### Правила валидации:

Логин - любая почта

Пароль - без кириллицы, минимум 8 символов

2) По клику на кнопку вход и наличии валидных данных происходит перенаправление на страницу отелей

3) На странице отелей по дефолту стоит город - Москва, день заезда - текущий (сегодняшний), количество дней - 1

4) Дата пикер может быть дефолтным

5) Поиск отелей осуществляется при нажатии на кнопку найти, но при первой загрузке страницы с дефолтными данными, соответствующие отели должны быть

6) На странице отелей, добавить в избранное можно по нажатию на сердечко, удалить так же. В блоке избранных отелей также можно выполнить удаление из избранных

7) При выборе новых данных для поиска, список избранных не должен сбрасываться. При перезагрузке страницы - может

8) При перезагрузке страницы с отелями авторизация не должна сбрасываться

9) По клику на кнопку “Выход” авторизация сбрасывается и происходит переход на страницу авторизации
