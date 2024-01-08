import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo.jpg"; 
import { Box, Grid, Button, Typography, styled, IconButton, InputBase } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Text = styled(Typography)({
  color: "black",
  textTransform: "uppercase",
  padding: "12px 10px",
  fontSize: "12px",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: "#88cafd",
  },
});

const WhiteBox = styled(Box)({
  background: "white",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "16px",
});

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const getCurrentUser = () => {
      const obj = localStorage.getItem("user");
      if (obj) {
        setUser(JSON.parse(obj));
      }
    };
    getCurrentUser();
  }, []);

  return (
    <WhiteBox>
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Logo and navigation links */}
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <img src={logo} alt="Logo" style={{ width: "70px", height: "40px" }} />
            <Text sx={{ mx: 2 }}>
              Bài Viết
            </Text>
            <Text sx={{ mx: 2 }}>
              Hỏi Đáp
            </Text>
            <Text sx={{ mx: 2 }}>
              Thảo Luận
            </Text>
          </Box>
        </Grid>
        
        {/* Rest of the header */}
        <Grid item container alignItems="center" xs={4} >
          {/* Search bar */}
   
            <Box display="flex" alignItems="center" >
              <InputBase placeholder="Tìm kiếm..." />
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
 
          {/* Menu icon */}
        
            <IconButton aria-label="menu">
              <MoreVertIcon />
            </IconButton>
   
          {/* User info or login button */}
         
            {!user?.email ? (
              <Button size="small" href="/login">
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <PersonIcon sx={{ color: "black" }} />
                  <Typography color={"black"} fontSize={12} fontWeight={"bold"}>
                    Đăng Nhập / Đăng Ký
                  </Typography>
                </Box>
              </Button>
            ) : (
              <Box display={"flex"} alignItems={"center"}>
                <AccountCircleIcon />
                <Typography variant="body2" sx={{ mx: 1 }}>
                  {user?.email}
                </Typography>
                <Button onClick={handleLogout}>
                  <Typography fontSize={12} color={"black"} fontWeight={"bold"}>
                    Đăng Xuất
                  </Typography>
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>

    </WhiteBox>
  );
}

export default Header;
