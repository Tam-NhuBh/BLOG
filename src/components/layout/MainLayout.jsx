import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import {
  userSideBar,
  adminSideBar,
  guestSideBar,
} from "../../constants/sidebar/sidebar";
import Footer from "./footer/footer";
// import backgroundImage from '../../assets/img/bg.jpg';

function MainLayout({ children }) {
  const containerWrapperStyles = {
    // backgroundImage: `url(${backgroundImage})`, // Đường dẫn tương đối đến hình ảnh của bạn
    backgroundSize: "cover", 
    minHeight: "100vh",
  };

  const [listSidebar, setListSidebar] = useState([]);
  useEffect(() => {
    const getListSidebar = () => {
      const obj = localStorage.getItem("user");
      const type = JSON?.parse(obj)?.role;
      switch (type) {
        case 1:
          setListSidebar(adminSideBar);
          break;
        case 0:
          setListSidebar(userSideBar);
          break;
        default:
          setListSidebar(guestSideBar);
          break;
      }
    };
    getListSidebar();
  }, []);
  return (
    <div className="container-wrapper" style={containerWrapperStyles}>

        <Header />
        <Box py={4}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Sidebar listSidebar={listSidebar} />
            </Grid>
            <Grid item xs={9}>
              {children}
            </Grid>
          </Grid>
        </Box>
        <Footer />

    </div>
  );
}

export default MainLayout;
