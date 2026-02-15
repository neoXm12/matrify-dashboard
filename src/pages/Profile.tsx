import { Swipe } from "@mui/icons-material";
import SwipeableTemporaryDrawer from "../components/SideNav";
import { Layout } from "../components/Layout";

export default function Profile() {
  return (
    <div>
      <SwipeableTemporaryDrawer />
      <Layout>
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p>This is the profile page. User details will go here.</p>
      </Layout>
    </div>
  );
}
