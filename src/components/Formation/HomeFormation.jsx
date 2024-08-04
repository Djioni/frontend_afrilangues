// ======= IMPORTING COMPONENTS FROM HOME PAGE FOLDER =======
import {
  Banner,
  DownloadApp,
  ReferenceAfricanLanguage,
  Pricing,
  Testimonials,
  FrequentlyQuestions,
  Media,
  Footer,
  Navigation,
} from "./components/index";
import NewsLetter from "./components/newsletter/NewsLetter";

export const HomeFormation = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navigation />
      <Banner />
      <ReferenceAfricanLanguage />
      <div>
        <DownloadApp />
      </div>
      <br />
      <br />
      <Pricing />
      <FrequentlyQuestions />
      <Media />
      <Footer />
      {/* <NewsLetter />  */}
    </div>
  );
};
