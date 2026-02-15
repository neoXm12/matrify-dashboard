import { Layout } from "../components/Layout";
import { StatsStrip } from "../sections/StatsStrip";
import { FilterBar } from "../components/FilterBar";
import { MatchGrid } from "../sections/MatchGrid";
import { Recommendations } from "../sections/Recommendations";
import { ActivitySection } from "../sections/ActivitySection";
import SwipeableTemporaryDrawer from "../components/SideNav";

const Dashboard = () => {
  return (
    <div>
      <SwipeableTemporaryDrawer />
      <Layout>
        <div className="space-y-6">
          <StatsStrip />
          <FilterBar />
          <MatchGrid />
          <Recommendations />
          <ActivitySection />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
