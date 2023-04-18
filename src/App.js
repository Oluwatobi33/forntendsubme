import { Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './component/Nav';
import Error from './component/Error';
import Home from './component/Home';
import SubmeBann from './component/SubmeBann';
import Register from './component/Register';
// import Login from './component/Login';
import Signin from './component/Signin';
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
function App() {
  return (
    <>
      {/* <FormikForm /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/nav" element={<Nav />} />
        <Route path="/SubmeBann" element={<SubmeBann />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
