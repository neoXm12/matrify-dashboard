import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import Activity from "../pages/Activity";

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  protected: boolean;
}

export const routes: RouteConfig[] = [
  { path: "/", component: Login, protected: false },
  { path: "/login", component: Login, protected: false },
  { path: "/dashboard", component: Dashboard, protected: true },
  { path: "/profile", component: Profile, protected: true },
  { path: "/setting", component: Setting, protected: true },
  { path: "/activity", component: Activity, protected: true },
  // Add new routes here
];
