import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import RiskDepartmentPage from "../modules/departaments/risk-department/pages/RiskDepartmentPage";
import SoftwareDepartmentPage from "../modules/departaments/software-department/pages/SoftwareDepartmentPage";
import DepartmentNewsPage from "../modules/main/pages/DepartmentNewsPage";
import DocumentPage from "../modules/main/pages/DocumentPage";
import HomePage from "../modules/main/pages/HomePage";
import DepartmentPage from "../modules/news/pages/DepartmentPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path={"software-department"}
            element={<SoftwareDepartmentPage />}
          />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/department-documents" element={<DocumentPage />} />
          <Route path="/department-news" element={<DepartmentNewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
