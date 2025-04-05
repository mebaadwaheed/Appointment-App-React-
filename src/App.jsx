import Navbar from './components/navbar.jsx';
import MainHome from './components/main-home.jsx';
import SearchDoc from './components/search-doc.jsx';
import HowItWorks from './components/how-it-works.jsx';
import Specs from './components/specs.jsx';
import DoctorRated from './components/rated.jsx';
import DoctorCardCompiler from './components/doc-card-cmplr.jsx';
import AppAdv from './components/app-adv.jsx';
import WhyChooseUs from './components/why-choose-us.jsx';
import Reviews from './components/reviews.jsx';
import AccordionComp from './components/accordion-comp.jsx';
import ApplySign from './components/apply.jsx';
import Footer from './components/footer.jsx';
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <MainHome />
      <SearchDoc />
      <HowItWorks />
      <Specs />
      <DoctorRated />
      <DoctorCardCompiler />
      <AppAdv />
      <WhyChooseUs />
      <Reviews />
      <AccordionComp />
      <ApplySign />
      <Footer />
    </>
  )
}

export default App;
