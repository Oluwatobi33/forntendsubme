import { Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './component/Nav';
import Error from './component/Error';
import Home from './component/Home';
import SubmeBann from './component/SubmeBann';
function App() {
  return (
    <>
      {/* <FormikForm /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/nav" element={<Nav />} />
        <Route path="/SubmeBann" element={<SubmeBann />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
