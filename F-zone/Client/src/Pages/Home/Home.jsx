import BestSeller from "../../components/BestSeller";
import Hero from "../../components/Hero";
import LatestCollection from "../../components/LatestCollection";
import Animation from "../../components/Animation";
import OurPolicy from "../../components/OurPolicy";
import NewsLetter from "../../components/NewsLetter";

export default function Home() {
  return (
    <Animation>
      <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy/>
        <NewsLetter/>
      </div>
    </Animation>

  )
}
