import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Splash from "./screens/Splash";
import OnBoarding1 from "./screens/OnBoarding1";
import OnBoarding2 from "./screens/OnBoarding2";
import OnBoarding3 from "./screens/OnBoarding3";
import OnBoarding4 from "./screens/OnBoarding4";
import HomePage from "./screens/MainScreens/HomePage";
import Doctors from "./screens/MainScreens/Doctors";
import Surrogacy from "./screens/MainScreens/Surrogacy";
import DoctorList from "./screens/MainScreens/Doctor/DoctorList";
import Appointment from "./screens/MainScreens/Doctor/Appointment";
import Payments from "./screens/MainScreens/Doctor/Payments";
import IntakeForm from "./screens/MainScreens/Doctor/IntakeForm";
import Help from "./screens/MainScreens/Doctor/Help";
import Age from "./screens/MainScreens/SympthomChecker/Age";
import Gender from "./screens/MainScreens/SympthomChecker/Gender";
import Pregnant from "./screens/MainScreens/SympthomChecker/Pregnant";
import Country from "./screens/MainScreens/SympthomChecker/Country";
import Describe from "./screens/MainScreens/SympthomChecker/Describe";
import Result from "./screens/MainScreens/SympthomChecker/Result";
import SelectProfile from "./screens/MainScreens/Profile/SelectProfile";
import Profile from "./screens/MainScreens/Profile/Profile";
import Consults from "./screens/MainScreens/Profile/Consults";
import DoctorConsults from "./screens/MainScreens/Profile/DoctorConsults";
import DoctorPayment from "./screens/MainScreens/Profile/DoctorPayment";
import BeforeCall from "./screens/MainScreens/Profile/BeforeCall";
import Call from "./screens/MainScreens/Profile/Call";
import Drawer from "./screens/Components/Drawer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Bottomtab from "./screens/Components/Bottomtab";
import TopUsaHospitals from "./screens/MainScreens/TopUsaHospitals";
import { useEffect } from "react";
import { UserProfile } from "./screens/MainScreens/Profile/UserProfile";
import axios from "axios";
import { SkipPopup } from "./screens/Components/SkipPopup";

const client = new ApolloClient({
  uri: "https://app.medipocket.world/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
  },
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [displayPopup,setDisplayPopup] = useState(false);

  function ready(callback) {
    if (window.JSBridge) {
      callback && callback();
    } else {
      document.addEventListener("JSBridgeReady", callback, false);
    }
  }

  function callback() {
    console.log("logging in");
    window.JSBridge.call(
      "paytmFetchAuthCode",
      {
        clientId: "merchant-medipocket-prod",
      },
      async function (result) {
        if (result.data) {
          const url = "https://paytm.sentinelhz.tech/api/getUserInfo";
          const body = {
            data: result.data,
          };
          const response = await axios.post(url, body);
          const userInfo = await response.data;
          if (userInfo) {
            setLoggedIn(true);
            setUserInfo(userInfo);
          }
        } else {
          setDisplayPopup(true)
        }
      }
    );
  }

  useEffect(() => {
    console.log("login use effect");
    setDisplayPopup(true)

    ready(callback);
  }, []);

  const Layout = () => {
    return (
      <div>
        {displayPopup?<SkipPopup loginFlow = {callback} />:null}
        <Drawer />
        <Outlet />
        <Bottomtab />
      </div>
    );
  };

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Splash />} />
            <Route path="onBoarding1" element={<OnBoarding1 />} />
            <Route path="onBoarding2" element={<OnBoarding2 />} />
            <Route path="onBoarding3" element={<OnBoarding3 />} />
            <Route path="onBoarding4" element={<OnBoarding4 />} />
            {/* Main */}
            {/* <Route path="home" element={<Home />} /> */}
            <Route
              path="home"
              element={
                <HomePage
                  loggedIn={loggedIn}
                />
              }
            />
            <Route path="hospitals" element={<TopUsaHospitals />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="surrogacy" element={<Surrogacy />} />
            {/* Doctor */}
            <Route path="doctorList" element={<DoctorList />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="payment" element={<Payments />} />
            <Route path="intakeForm" element={<IntakeForm />} />
            <Route path="help" element={<Help />} />
            {/* Sympthom checker */}
            <Route path="age" element={<Age />} />
            <Route path="gender" element={<Gender />} />
            <Route path="pregnant" element={<Pregnant />} />
            <Route path="country" element={<Country />} />
            <Route path="describe" element={<Describe />} />
            <Route path="result" element={<Result />} />
            {/* Profile */}
            <Route path="selectProfile" element={<SelectProfile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="consults" element={<Consults />} />
            <Route path="doctorConsults" element={<DoctorConsults />} />
            <Route path="doctorPayment" element={<DoctorPayment />} />
            <Route path="beforecall" element={<BeforeCall />} />
            <Route path="call" element={<Call />} />
            <Route
              path="userProfile"
              element={<UserProfile userInfo={userInfo} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
