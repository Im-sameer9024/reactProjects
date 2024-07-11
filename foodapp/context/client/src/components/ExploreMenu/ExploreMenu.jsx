/* eslint-disable react/prop-types */
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className=" w-10/12 mx-auto mt-4">
      <div className="flex flex-col my-[1rem] text-center">
        <h1 className=" font-heading text-[3rem]">Explore our menu</h1>
        <p className="font-content text-[1.2rem]">Choose from a diverse menu featuring a array</p>
      </div>
      <div className="list flex justify-around gap-[30px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div className=" flex flex-col justify-center items-center font-content text-[1.2rem]" key={index} onClick={()=>setCategory(prev => prev === item.menu_name ? "All":item.menu_name)}>
              <div className="w-[full]">
              <img  className ={`${category === item.menu_name ? 'active':''} w-[7rem]`}   src={item.menu_image} alt="" />
              </div>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      {/* line  */}
      <div className=" w-full h-[0.5px] bg-slate-400 my-[3rem]"></div>
    </div>
  );
};

export default ExploreMenu;
