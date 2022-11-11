import { Route, Routes } from "react-router-dom";

/**** COMPONENTS ****/
import { Navbar, Footer } from "./components";

/**** PAGES ****/
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
