import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./Components/context/AuthContext";
import Navbar from "./Components/Main/Navbar";
import About from "./Components/Main/About";
import Camps from "./Components/Main/Camps";
import Contact from "./Components/Main/Contact";
import Banks from "./Components/Main/Banks";
import Auth from "./Components/Auth/Auth";
import User from "./Components/User/User";
import Bank from "./Components/Bank/Bank";
import "./App.css";
import Hero from "./Components/Hero/Hero";

export default function App() {
  const { loggedIn, user } = useContext(AuthContext);

  // Check if `user` is not null before accessing its properties
  const userType = loggedIn && user && user.latitude ? "bank" : "user";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              logIn={loggedIn}
              user={userType}
            />
          }
        >
          <Route index element={<Hero />} />
          {!loggedIn && (
            <>
              <Route
                path="/:type/:handle"
                element={<Auth logIn={loggedIn} />}
              />
            </>
          )}
          {loggedIn && user ? (
            user.hospital ? (
              <Route
                path="/bank/:handle?"
                element={<Bank />}
              />
            ) : (
              <Route
                path="/user/:handle?"
                element={<User />}
              />
            )
          ) : null}
          <Route path="about" element={<About />} />
          {/* <Route path="aboutBloodDonation" element={<AboutDonation />} /> */}
          <Route path="bloodDirect" element={<Banks />} />
          <Route path="bloodCamps" element={<Camps />} />
          <Route path="contactUs" element={<Contact />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
