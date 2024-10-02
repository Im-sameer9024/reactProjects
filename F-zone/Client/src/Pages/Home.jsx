import Bestseller from "../components/Bestseller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Newsletter from "../components/Newsletter";
import OurPolicy from "../components/OurPolicy";

export default function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}
