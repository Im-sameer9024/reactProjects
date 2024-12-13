import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import Newsletter from "../components/Newsletter"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[8rem]">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </div>
  )
}

export default Home
