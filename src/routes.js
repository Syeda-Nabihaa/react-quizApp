

// // Admin Imports
// import MainDashboard from "views/admin/default";
// import NFTMarketplace from "views/admin/marketplace";
// import Profile from "views/admin/profile";
// import DataTables from "views/admin/tables";
// import RTLDefault from "views/rtl/default";

import routeHelpers from "./helpers/RouteHelpers";

// // Auth Imports
// import SignIn from "views/auth/SignIn";

// Icon Imports
// import {
//   MdHome,
//   MdOutlineShoppingCart,
//   MdBarChart,
//   MdPerson,
//   MdLock,
// } from "react-icons/md";
// import AdminDashboard from "./layout/AdminLayout";

const routes = [
  {
    name: "Main Dashboard",
    layout: routeHelpers.admin.dashboardRoutes, // Admin dashboard base path
    path: "", // This will lead to `/admin/dashboard/`
  },
  {
    name: "Show Question",
    layout: routeHelpers.admin.dashboardRoutes,
    path: "showquestion", // This will lead to `/admin/dashboard/showquestion`
  },
  {
    name: "Add Question",
    layout: routeHelpers.admin.dashboardRoutes,
    path: "addquestion", // This will lead to `/admin/dashboard/addquestion`
  },
  {
    name: "Update Question",
    layout: routeHelpers.admin.dashboardRoutes,
    path: "updatequestion", // This will lead to `/admin/dashboard/updatequestion`
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
