import AboutHero from "../components/AboutHero";
import AboutServices from "../components/AboutServices";
import AboutStory from "../components/AboutStory";
// import AboutTeam from "../components/AboutTeam";

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutStory /> 
      <AboutServices />
      {/* <AboutTeam /> */}
    </div>
  );
}

