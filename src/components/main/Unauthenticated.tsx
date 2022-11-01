import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import {RegisterPage} from "../../pages/RegisterPage";
import {PAGES_PATHS} from "../../utils/constants";

export const Unauthenticated = (): JSX.Element => {
  return (
    <Routes>
      <Route path={'*'} element={<LoginPage />} />
      <Route path={PAGES_PATHS.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};
