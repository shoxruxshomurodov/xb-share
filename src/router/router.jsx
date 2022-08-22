import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import RiskDepartmentPage from "../modules/departaments/risk-department/pages/RiskDepartmentPage";
import SoftwareDepartmentPage from "../modules/departaments/software-department/pages/SoftwareDepartmentPage";
import DocumentPage from "../modules/main/pages/DocumentPage";
import HomePage from "../modules/main/pages/HomePage";
import NewsPage from "../modules/news/pages/NewsPage";

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
          <Route path="/department-news" element={<NewsPage />} />
          <Route path="/department-document" element={<DocumentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
