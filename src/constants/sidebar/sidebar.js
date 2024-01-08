import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SwitchCameraOutlinedIcon from "@mui/icons-material/SwitchCameraOutlined";

// Create an array containing empty items
const emptyItems = Array.from({ length: 10 }).map(() => ({ name: "" }));

export const adminSideBar = [
  {
    name: "Post Management",
    icon: <HomeOutlinedIcon />,
    href: "/",
  },
  {
    name: "Account Management",
    icon: <PersonOutlineIcon />,
    href: "/accountManagement",
  },


  ...emptyItems,

];

export const userSideBar = [

  ...emptyItems,
];

export const guestSideBar = [
  ...emptyItems,
];
