import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Testimonials from "./Testimonials";
import HomePage from "./HomePage";

const Main = ({ token }) => {
  return (
    <>
      <div className={`flex md:flex-col flex-col p-[1rem]`}>
        <div className={`flex-col`}>
          <Header />
          <Outlet />
          <HomePage token={token} />
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Main;
