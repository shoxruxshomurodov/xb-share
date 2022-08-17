import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import Header from "../../components/header";
const MainLayout = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Outlet />
    </>
  );
};

export default MainLayout;
