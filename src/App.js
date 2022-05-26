import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Homepage/Purchase/Purchase';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';



function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/home' element={<Homepage></Homepage>} />
        <Route path='/tools/:_id' element=
          {
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route path='dashboard' element=
          {
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>} ></Route>
          <Route path='review' element={<AddAReview></AddAReview>} ></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>} ></Route>
        </Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/contactus' element={<ContactUs></ContactUs>} />
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
