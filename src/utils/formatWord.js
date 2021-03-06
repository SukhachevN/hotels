function formatHotelWord(word, number) {
  switch (number % 10) {
    case 2:
    case 3:
    case 4:
      if (number % 100 > 10 && number % 100 < 20) {
        return `${word}ей`;
      }
      return `${word}я`;
    case 1:
      if (number % 100 === 11) {
        return `${word}ей`;
      }
      return `${word}ь`;
    default:
      return `${word}ей`;
  }
}

function formatDayWord(number) {
  switch (number % 10) {
    case 2:
    case 3:
    case 4:
      return `${number} дня`;
    case 1:
      if (number % 100 === 11) {
        return `${number} дней`;
      }
      return `${number} день`;
    default:
      return `${number} дней`;
  }
}

export { formatHotelWord, formatDayWord };
