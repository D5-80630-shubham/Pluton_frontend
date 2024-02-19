import { Route,Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";
import Signin from "./pages/signin";
import HomePage from "./pages/home";
import Signup from "./pages/signup";
import UserProfile from "./users/pages/user_profile";
import AdminProfile from './admin/pages/admin_profile';
import Loan from "./pages/loans";
import LoanApplicationForm from "./components/applyLoan";
import EmiCalculator from "./components/emiCalculator";
import UserDashboard from "./users/pages/dashboard";
import AdminDashboard from './admin/pages/dashboard';


function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/user/profile" element={<UserProfile/>}/>
        <Route path="/admin/profile" element={<AdminProfile/>}/>
        <Route path="/loan" element={<Loan/>}/>
        <Route path="/loan/apply" element={<LoanApplicationForm/>}/>
        <Route path="/emicalculator" element={<EmiCalculator/>}/>
        <Route path="/user/dashboard" element={<UserDashboard/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>

      </Routes>


      <ToastContainer/>
    </div>
  );
}

export default App;
