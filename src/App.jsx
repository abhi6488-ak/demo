import {Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import "./styles/pages.css";

const App = () => {
  return(
    <div className="ankita">
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
        </Routes>
      </Router>
    </div>

  )
}
export default App;