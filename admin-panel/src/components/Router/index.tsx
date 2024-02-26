import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import {
  List as CategoryList,
  Create as CreateCategory,
} from "../../features/categories/index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout content={<Deneme />} />} />
        <Route
          path="/category/index"
          element={<AppLayout content={<CategoryList />} />}
        />
        <Route
          path="/category/create"
          element={<AppLayout content={<CreateCategory />} />}
        />
      </Routes>
    </>
  );
};

const Deneme = () => {
  return <>Deneme Sayfası</>;
};
 
export default Router;
