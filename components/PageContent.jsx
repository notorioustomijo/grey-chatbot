import WalletsContainer from "./WalletsContainer";
import QuickActions from "./QuickActions";
import RecentTxns from "./RecentTxns";

export default function PageContent() {
    return (
        <main>
            <WalletsContainer />
            <QuickActions />
        </main>
    )
}