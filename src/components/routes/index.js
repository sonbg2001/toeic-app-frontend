import layouts from "../layouts";
import pages from "../pages";
import paths from "./paths";

const publicRoutes = [
  {
    path: paths.home,
    component: pages.home,
    layout: layouts.defaultLayout,
  },
];
const privateRoutes = [
  {
    path: paths.home,
    component: pages.home,
    layout: layouts.defaultLayout,
  },
];

export { publicRoutes, privateRoutes };
