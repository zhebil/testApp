export const transformText = (text) => {
    if (!text) return null
    const textArr = text.split(' ');
    const firstWord = textArr[0][0].toUpperCase() + textArr[0].substring(1);
    return [firstWord, ...textArr.splice(1)].join(' ');
  };