export const getColorList = () => {
  return JSON.parse(localStorage.getItem("colors")) || [];
}

export const getLastColor = () => {
  const colorsList = getColorList();
  return colorsList[0] || "#ff0000";
}