import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
  const [color, setColor] = useState( getLastColor() );
  const [colorsList, setColorslist] = useState(getColorList());

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    const copyColorsList = [color, ...colorsList];
    setColorslist(copyColorsList);
  };

  const handleClickClearColors = () => {
    setColor("#cacaca");
    setColorslist([]);
    localStorage.removeItem("colors");
  };

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorsList));
  }, [colorsList]);

  return {
    color,
    colorsList,
    handleChangeColor,
    handleSubmitSaveColor,
    handleClickClearColors
  }
}