import React from "react";
import GiftGridItem from "./Components/GiftGridItem";
import { useFetchGifts } from "./hooks/useFetchGifts";

export default function GiftGrid({ category }) {
  const { data:images, loading } = useFetchGifts(category);


  return (
    <>
      <h3>{category}</h3>

      {loading && <p className="card animate__animated animate__flash">Loading ...</p> }
        "Cargando ..."
        <div className="card-grid">
          {images.map((img) => {
            return <GiftGridItem key={img.id} {...img} />;
          })}
        </div>
    </>
  );
}
