import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../Layout/Applayout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout content={<Deneme />} />} />
        <Route
          path="/deneme"
          element={<AppLayout content={<DenemeMemeler />} />}
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
