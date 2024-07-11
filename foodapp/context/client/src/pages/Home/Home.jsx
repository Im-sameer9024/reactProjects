import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import Foodlist from "../../components/Foodlist/Foodlist";
import AppDownload from "../../components/Appdownload/AppDownload";


export default function Home() {

  const[category,setCategory]= useState('All')

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Foodlist category={category}/>
      <AppDownload/>
    </div>
  )
}
