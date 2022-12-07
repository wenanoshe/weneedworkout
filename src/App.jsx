import { Route, Routes } from "react-router-dom";

/**** COMPONENTS ****/
import { Navbar, Footer } from "./components";

/**** PAGES ****/
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import ErrorPage from "./pages/ErrorPage";

import "./styles/index.scss";
import "./styles/App.scss";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
