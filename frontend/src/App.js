// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminDetail from './components/AdminDetail';
import RegisterAdmin from './components/RegisterAdmin';
import UpdateAdminForm from './components/updateAdminForm';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import AddTagForm from './components/AddTagForm';
import AddEventForm from './components/AddEventForm';
import EventDetails from './components/EventDetails';
import UpdateEventForm from './components/UpdateEventForm';
import AddEventFlowForm from './components/AddEventFlowForm';
import AddUserForm from './components/AddUserForm';
import UserDetail from './components/UserDetail';
import UpdateUserForm from './components/UpdateUserForm';
import EventFlowDetail from './components/EventFlowDetail';
import AddStepFlow from './components/AddStepFlow';
import ClientInfoPage from './pages/ClientInfoPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/client" element={<ClientInfoPage />} />
        
        {/* No requiredTag, both admin and subAdmin can access */}
        <Route 
          path="/dashboard/*" 
          element={<PrivateRoute element={<Dashboard />}  />} 
        />    {/*requiredTag="someRequiredTag"*/}
        <Route path="/admin/:id" element={<PrivateRoute element={<AdminDetail />} requiredTag="REGISTRATION DESK ATT" />}  />
        <Route path="/admin/register" element={<PrivateRoute element={<RegisterAdmin />}  />}  />
        <Route path="/tag/register" element={<PrivateRoute element={<AddTagForm />}  />}  />
        <Route path="/event/register" element={<PrivateRoute element={<AddEventForm />}  />}  />
        <Route path="/event/:id" element={<PrivateRoute element={<EventDetails />} requiredTag="REGISTRATION DESK ATT" />}  />
        <Route path="/eventflow/register" element={<PrivateRoute element={<AddEventFlowForm />}  />}  />
        <Route path="/user/register" element={<PrivateRoute element={<AddUserForm />}  />}  />
        <Route path="/user/:id" element={<PrivateRoute element={<UserDetail />} requiredTag="someRequiredTag" />}  />
        <Route path="/eventflow/:id" element={<PrivateRoute element={<EventFlowDetail />}  />}  />
        <Route path="/eventflow/:id/addstepflow" element={<PrivateRoute element={<AddStepFlow />} />}  />

        <Route
          path="/admin/:id/edit"
          element={<PrivateRoute element={<UpdateAdminForm />} />}
        />
        <Route
          path="/event/:id/edit"
          element={<PrivateRoute element={<UpdateEventForm />} />}
        />
        <Route
          path="/user/:id/edit"
          element={<PrivateRoute element={<UpdateUserForm />} />}
        />


        
      </Routes>
    </Router>
  );
}

export default App;
