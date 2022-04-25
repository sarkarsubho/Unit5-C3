import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>{/* Routes here */}
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/employees" element={<EmployeeList></EmployeeList>}></Route>
      <Route path="/employees/:id" element={<EmployeeDetails></EmployeeDetails>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="/logout" element={<Logout></Logout>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
