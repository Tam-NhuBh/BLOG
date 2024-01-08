import AdminHome from "../../pages/admin/AdminHome";
import AccountManagement from "../../pages/admin/AccountManagement";
import PostManagement from "../../pages/admin/PostManagement";
import HomePage from "../../pages/guest/HomePage";
import UserHome from "../../pages/user/UserHome";

export const listRouter = {
    admin: [
      { path: "/", element: <AdminHome /> },
      { path: "/accountManagement", element: <AccountManagement /> },
      { path: "/postManagement", element: <PostManagement /> },

    ],

    user: [
      { path: "/", element: <UserHome /> },
    ],

    guest: [
      { path: "/", element: <HomePage/> },

    ],
}