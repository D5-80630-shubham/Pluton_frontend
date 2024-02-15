import { Route,Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";
import Signin from "./pages/signin";
import HomePage from "./pages/home";
import Signup from "./pages/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>


      <ToastContainer/>
    </div>
  );
}

export default App;
