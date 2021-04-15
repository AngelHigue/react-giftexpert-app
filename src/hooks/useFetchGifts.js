import { useState, useEffect } from "react";
import { getGifts } from "../helpers/GetGifts";


export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // Traer imagenes de Giphy
  useEffect(() => {
    getGifts(category).then(imgs => {
            setState({
                data: imgs,
                loading: false  
            })
    });
  }, [category]);

  return state;
};
