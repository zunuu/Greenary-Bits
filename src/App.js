import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='home' element={<Homepage></Homepage>} />
        <Route path='purchase' element=
          {
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route path='login' element={<Login></Login>} />
        <Route path='register' element={<Register></Register>} />
        <Route path='contactus' element={<ContactUs></ContactUs>} />
        <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>} />
        <Route path='blogs' element={<Blogs></Blogs>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
