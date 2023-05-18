import RightBar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className=" w-full grid grid-cols-12  h-[calc(100vh-50px)]">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
