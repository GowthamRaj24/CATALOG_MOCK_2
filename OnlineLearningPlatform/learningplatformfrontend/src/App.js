import { BrowserRouter , Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
// @ts-ignore
import Login from "./pages/loginPage/loginPage";
// @ts-ignore
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./pages/signupPage/signupPage";
import CourseList from "./pages/CourseList/CourseList";
import CourseDetails from "./pages/CourseDetails/CourseDetails";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/landing" element={<h1>Landing</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;