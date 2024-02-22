import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../Layout/Applayout";
import { List as CategoryList } from "../../features/categories/index";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout content={<Deneme />} />} />
        <Route
          path="/deneme"
          element={<AppLayout content={<DenemeMemeler />} />}
        />
        <Route
          path="/categories"
          element={<AppLayout content={<CategoryList />} />}
        />
      </Routes>
    </>
  );
};

const Deneme = () => {
  return <>Deneme Sayfası</>;
};
const DenemeMemeler = () => {
  return <>DenemeMemeler Sayfası</>;
};

export default Router;
