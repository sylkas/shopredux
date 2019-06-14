import React from "react";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";

import { Provider } from "react-redux";
import store from "../../store";
import TabletsContainer from "../../container/TabletsContainer";
import DesktopsContainer from "../../container/DesktopsContainer";


const HomePage = () => (
  <>
    <Provider store={store}>
      <HeaderBig>Welcome to our store</HeaderBig>
      <HeaderSmall>Desktops</HeaderSmall>
      <DesktopsContainer />
      <HeaderSmall>Tablets</HeaderSmall>
      <TabletsContainer />
    </Provider>
  </>
);

export default HomePage;
