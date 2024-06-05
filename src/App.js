import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Payment from './Pages/Payment';  
import Itenary from './components/PackageDetails';
import IndianDestination from './components/IndianDestinations';
import PackageDetails from './components/PackageDetails';
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import Kerala from './Pages/PackageDetails.js/Kerala';
import RegisterForm from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Destination from './Pages/Destination';
import SpecialPackage from './components/SpceialPackage';
import Family from './Pages/Family';
import TourView from './Pages/AdminDashboard/TourView';
import DashNav from './Pages/DashNav';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import TourPackageList from './Pages/PackageDetails.js/TourPackageList';
import BookingsDashboard from './Pages/AdminDashboard/Bookings';
import ClientDashboard from './Pages/ClientDashboard/ClientDashboard';
import UPIPayment from '../src/PaymentComponent/Payment'
import PaymentPage from './PaymentComponent/PaymentPage';
import HoneymoonPackage from './Pages/HoneymoonPackage';
import HoneymoonTourView from './Pages/HoneymoonTourView';
import Whatisether from './Pages/Ether';
import { AuthProvider, useAuth  } from './Pages/AuthContext'; 


function App() {
  
  return (
     <Router>
        <AuthProvider> 
    <div className="App">
        <Navbar />

        <Routes> 
        
        <Route path="/" element={<Home />} /> 
        <Route path="/Destinations" element={<Destination />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />
     
        <Route path="/Register" element={<RegisterForm />} />

        <Route path="/Package" element={<Itenary />} />
        <Route path="/Destination/:id" element={<IndianDestination />} />

         <Route path="/package/:id" element={<TourView />} />
        
         <Route path="/Family" element={<Family />} />
         <Route path="/package/:id" element={<TourView />} />


         <Route path="/Honeymoon" element={<HoneymoonPackage />} />
         <Route path="/package/:id" element={<HoneymoonTourView />} />

        {/* <Route path="/package/:id" element={<PackageDetails />} /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Special" element={<SpecialPackage />} />

        {/* Dshboard Pages */}
        <Route path="/DashNav" element={<DashNav />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/Bookings" element={<BookingsDashboard />} />
        <Route path="/tour" element={<TourPackageList />} />
       
         {/* Client Dashboard pages */}
         <Route path="/client" element={<ClientDashboard/>} />

         {/* Payment in rupees */}
         <Route path="/payment" element={<UPIPayment/>} />
        
        {/* Payment in ether */}
        <Route path="/PaymentPage" element={<PaymentPage/>} />


        {/* What is ether page */}
        <Route path="/ether" element={<Whatisether/>} />

        </Routes>
        
    </div>
    <Footer/>
    </AuthProvider>
    </Router>
  );
}


function PrivateRoute({ element, ...rest }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? element : <Navigate to="/Login" />;
}

function LoginPage() {
  const { isAuthenticated } = useAuth();

  // If user is already authenticated, redirect to Dashboard
  if (isAuthenticated()) {
    return <Navigate to="/Dashboard" />;
  }

  return <Login />;
}

export default App;


