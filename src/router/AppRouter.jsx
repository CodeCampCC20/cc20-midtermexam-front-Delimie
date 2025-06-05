import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import MyToDo from "../pages/MyToDo";
import Movie from "../pages/Movie";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route index element={<LoginPage />} />
        <Route path="mytodo" element={<MyToDo />} />
        <Route path="movie" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
