/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { StoreContext } from "../../Context-API/StoreContext";
import Fooditem from "./Fooditem";

export default function Foodlist({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div id="menu" className=" w-10/12 mx-auto">
      <div>
        <h1 className=" text-center my-[2rem] font-heading text-[2rem]">
          Top Dishes near you
        </h1>
        <div className=" flex flex-wrap justify-evenly gap-[2rem]">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <Fooditem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
