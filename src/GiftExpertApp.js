import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import GiftGrid from "./GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategory] = useState(["Tokyo Ghoul"]);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategory={setCategory} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
