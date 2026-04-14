import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import Mentors from "./Components/Mentors/Mentors";
import Pricing from "./Components/Pricing/Pricing";
import Testimonials from "./Components/Testimonials/Testimonials";
import Groups from "./Components/Groups/Groups";
import "./App.css";


function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Courses />
      <Mentors />
      <Groups />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
