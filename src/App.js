import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Registration from './pages/Registration';
import LocatorPanel from './components/LocatorPanel';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import BuyNow from './components/Buynow';
import Cart from './components/Cart';

function App() {

  return (
    <div>
      {/* //Step 1 Code Will Go in NavBar */}
      <NavBar />
      <Routes>
        {/* Each component will render when its URL path matches the current route. */}
        {/* //Step 3 Now Link Tag Search For URL /login If Find Then Excuit That path Element i.e Login component will Show on UI */}
        <Route path="/" element={<LocatorPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buy-now/:productId" element={<BuyNow />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

// Inside your NavBar component, you'll typically have some buttons or links (like a "Login" button) that the user can click to navigate to different routes in your application.
//These buttons or links are usually implemented using the Link component from react-router-dom or with plain anchor tags (<a>).
