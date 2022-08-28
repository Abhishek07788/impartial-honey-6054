import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Details from "../components/Details";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import Mens from "../components/Mens";
import Payment from "../components/Payment";
import SearchData from "../components/SearchData";
import Womens from "../components/Womens";
import PrivateRoutes from "./PrivateRoutes";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/women" element={<Womens />} />
      <Route path="/search" element={<SearchData />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route path="/*" element={<Error />}></Route>
      <Route
        path="/details"
        element={
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/payment"
        element={
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Allroutes;
