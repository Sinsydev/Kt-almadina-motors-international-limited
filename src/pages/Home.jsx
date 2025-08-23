 import HomeHero from "../components/HomeHero";
 import HomeSummary from "../components/HomeSummary";
 import HomeIcons from "../components/HomeIcons";
 import HomeAdds from "../components/HomeAdds";
 import HomeCars from "../components/HomeCars";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeSummary />
      <HomeCars />
      <HomeIcons />
      <HomeAdds />
      
    </div>
  );
}

