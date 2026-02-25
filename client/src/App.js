import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import Alert from "./components/layout/Alert";
import { loaduser } from "./actions/auth";
import setAuthToken from "./utils/SetAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from './components/profiles/Profile';
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <Routes>
            {/* Public route */}
            <Route path="/" element={<Landing />} />

            {/* Layout route */}
            <Route
              element={
                <section className="container">
                  <Alert />
                  <Outlet />
                </section>
              }
            >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profiles" element={<Profiles />} />

               <Route path="/profile/:id" element={<Profile />} />

              {/* Protected routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
               <Route element={<PrivateRoute />}>
                <Route path="/create-profile" element={<CreateProfile/>} />
              </Route>
               <Route element={<PrivateRoute />}>
                <Route path="/edit-profile" element={<EditProfile/>} />
              </Route>
               
               <Route element={<PrivateRoute />}>
                <Route path="/add-experience" element={<AddExperience/>} />
              </Route>
               <Route element={<PrivateRoute />}>
                <Route path="/add-education" element={<AddEducation/>} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/posts" element={<Posts />} />
              </Route>
              <Route element={<PrivateRoute />}>
             <Route path="/posts/:id" element={<Post />} />
               </Route>
              
              
              
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
