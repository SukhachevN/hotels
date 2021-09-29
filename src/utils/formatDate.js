function formatDate(date) {
  const days = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const months =
    date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  return `${date.getFullYear()}-${months}-${days}`;
}

export { formatDate };
