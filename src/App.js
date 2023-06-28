import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import AdminHomePage from './pages/AdminHomePage';
import MissingPage from './pages/MissingPage';
import MyReservations from './pages/MyReservations/MyReservations';
import PublicationDetails from './pages/PublicationDetails/PublicationDetails';
import AuthorDetails from './pages/AuthorDetails/AuthorDetails';
import Add from './pages/Add/Add';
import AllReservations from './pages/AllReservations/AllReservations';
import UserAdministration from './pages/UserAdministration/UserAdministration';
import AddAuthor from './pages/Add/AddAuthor/AddAuthor';
import AddGenre from './pages/Add/AddGenre/AddGenre';
import AddPublication from './pages/Add/AddPublication/AddPublication';
import AddPublisher from './pages/Add/AddPublisher/AddPublisher';
import HomePage from './pages/HomePage/HomePage';
import EditUser from './pages/UserAdministration/EditUser/EditUser';
import EditPublication from './pages/EditPublication/EditPublication';
import AddNewReservation from './pages/AddNewReservation/AddNewReservation';

// HOC to check if the user is authenticated and has the admin role
const ProtectedAdminRoute = ({ element: Component, ...props }) => {
  const isAuthenticated = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (isAuthenticated && userRole === 'Admin') {
    return <Component {...props} />;
  } else {
    // Redirect to a different page if not authenticated or not an admin
    return <Navigate to="/userhome" />;
  }
};


function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="*" element={<MissingPage />} />
          <Route path="/welcome" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={<HomePage />} 
          />
          
          <Route
            path="/adminhome"
            element={<ProtectedAdminRoute element={<AdminHomePage />} />}
          />
          <Route path="/myreservations" element={<MyReservations />} />
          <Route path="/publication" element={<PublicationDetails />} />
          <Route path="/author" element={<AuthorDetails />} />
          <Route path="/add" element={<Add />} />
          <Route path="/allreservations" element={<AllReservations />} />
          <Route path="/useradministration" element={<UserAdministration />} />
          <Route path="/add/author" element={<AddAuthor />} />
          <Route path="/add/genre" element={<AddGenre />} />
          <Route path="/add/publication" element={<AddPublication />} />
          <Route path="/add/publisher" element={<AddPublisher />} />
          <Route path="/useradministration/edit/id" element={<EditUser />} />
          <Route path="/publication/edit/id" element={<EditPublication />} />
          <Route path="/myreservations/new" element={<AddNewReservation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
