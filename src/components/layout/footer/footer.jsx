import { Grid, Typography, styled, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";


const CenteredGridItem = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: '20px', // Thay đổi khoảng cách ở đây
});

const WhiteFrame = styled(Grid)({
  padding: '10px',
  display: 'flex',
  justifyContent: 'center', // Điều chỉnh vị trí sang phải
});

const WhiteBox = styled(Grid)({
  background: "white",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "16px",
});

function Footer() {
  return (
    <WhiteBox>
      <WhiteFrame container spacing={1}>
        <CenteredGridItem item sx={{ width: '12%' }}>
          <Grid container direction="column" alignItems="center">
            <Typography variant="h8" color="#1a5792" mb={1} fontWeight="bold" style={{marginTop: '-20px'}}>
              TÀI NGUYÊN
            </Typography>

            <Typography fontSize={12} color="#1a5792" mb={1}>
              Bài viết
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Câu hỏi
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Thảo luận
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Videos
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Công cụ
            </Typography>
          </Grid>
        </CenteredGridItem>

        <CenteredGridItem item sx={{ width: '10%' }}>
          <Grid container direction="column" alignItems="center">
            <Typography fontSize={12} color="#1a5792" mb={1} style={{marginTop: '-16px'}}>
              Tổ chức
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Tác giả
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Tags
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Đề xuất hệ thống
            </Typography>
          </Grid>
        </CenteredGridItem>

        <CenteredGridItem item sx={{ width: '20%' }}>
          <Grid container direction="column" alignItems="center" style={{marginTop: '-20px'}}>
            <Typography variant="h8" color="#1a5792" mb={1} fontWeight="bold">
              DỊCH VỤ
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Blog
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Blog Code
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Blog CV
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Blog Learning
            </Typography>
            <Typography fontSize={12} color="#1a5792" mb={1}>
              Blog Interview
            </Typography>
          </Grid>
        </CenteredGridItem>

        <CenteredGridItem item >
          <Grid container direction="column" alignItems="center" style={{marginTop: '-10px'}}>
            <Typography variant="h8" color="#1a5792" fontWeight="bold" >
              LIÊN KẾT
            </Typography>
            <Grid container direction="row" spacing={2} justifyContent="center">
              <Grid item>
                <IconButton style={{ color: "#3b5998" }}>
                  <FacebookIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{ color: "#c4302b" }}>
                  <YouTubeIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{ color: "#bc2a8d" }}>
                  <InstagramIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Typography variant="h8" color="#1a5792" mb={1} fontWeight="bold" style={{marginTop: '15px'}}>
                LIÊN HỆ
              </Typography>

              <Typography display="flex" alignItems="center" fontSize={12} color="#1a5792" mb={0}>
                <PhoneIcon sx={{ marginRight: '4px' }} />
                1900 123 123
              </Typography>
        
              <Typography display="flex" alignItems="center" fontSize={12} color="#1a5792" mb={2}>
                <MailOutlineIcon sx={{ marginRight: '4px' }} />
                <div>
                  demonblogwebsite@gmail.com
                </div>
              </Typography>
            </Grid>
          </Grid>
        </CenteredGridItem>
      </WhiteFrame>
    </WhiteBox>      
  );
}

export default Footer;
