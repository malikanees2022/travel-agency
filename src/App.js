import './App.css';
import CategorySection from './components/categorysection/CategorySection';
import MainSection from './components/mainsection/MainSection';
import TopSelling from './components/topsellingsection/TopSelling';
import StepSection from './components/stepsection/StepSection';
import TestimonialsSection from './components/testimonialsection/TestimonialsSection';
import SubscribeSection from './components/subscribesection/SubscribeSection';
import Footer from './components/footersection/Footer';
function App() {
  return (
  <section>
      {/* first main section inlcudes navbar and the home page */}
      <MainSection/>
      {/* the sceond category section  */}
      <CategorySection/>
      {/* the third top selling section  */}
      <TopSelling/>
      {/* the fourth easy steps section  */}
      <StepSection/>
      {/* the next Testimonials section  */}
      <TestimonialsSection/>
      {/* last subsribe and sponsers section  */}
      <SubscribeSection/>
      {/* footer section  */}
      <Footer/>

  </section>

  );
}

export default App;
