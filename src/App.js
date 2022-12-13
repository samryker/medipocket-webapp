import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Splash from "./screens/Splash";
import OnBoarding1 from "./screens/OnBoarding1";
import OnBoarding2 from "./screens/OnBoarding2";
import OnBoarding3 from "./screens/OnBoarding3";
import OnBoarding4 from "./screens/OnBoarding4";
import Home from "./screens/MainScreens/Home";
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
import { useSelector } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Hospitals from "./screens/MainScreens/Hospitals";

const cache = new InMemoryCache();
// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://app.medipocket.world/graphql/",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

function App() {
  const Layout = () => {
    return (
      <div>
        <Drawer />
        <Outlet />
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
            <Route path="home" element={<HomePage />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="surrogacy" element={<Surrogacy />} />
            <Route path="hospitals" element={<Hospitals />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
