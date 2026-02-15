import { Layout } from "../components/Layout";
import SwipeableTemporaryDrawer from "../components/SideNav";

export default function Setting() {
  return (
    <div>
      <SwipeableTemporaryDrawer />
      <Layout>
        <h1 className="text-2xl font-bold mb-4">Settings & Preferences</h1>
        <p>
          This is the settings and preferences page. Most of the User
          preferences will go here
        </p>
      </Layout>
    </div>
  );
}
