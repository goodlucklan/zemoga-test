export const trimmer = (text, limit) => {
  var puntosSuspensivos = "...";
  if (text.length > limit) {
    text = text.substring(0,limit) + puntosSuspensivos;
  }
  return text;
};
