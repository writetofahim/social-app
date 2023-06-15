import Topbar from "../../../components/topbar/Topbar";
import Rightbar from "../../../components/rightbar/Rightbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import cover from "../../../assets/person/cover.jpeg";
import proPic from "../../../assets/person/profile1copy.jpg";
import Feed from "../../../components/feed/Feed";

const Profile = () => {
  return (
    <div>
      <Topbar />

      <div className="w-full grid grid-cols-12  h-[calc(100vh-50px)]">
        <Sidebar />
        <div className="col-span-9 relative ">
          <div className="h-[400px] border flex flex-col justify-between">
            <div className="">
              <img
                className="w-full h-[250px] object-cover"
                src={cover}
                alt="cover photo"
              />
              <img
                className="w-52 h-52 rounded-full absolute left-1/2 -translate-x-1/2 top-32 border-4 border-white"
                src={proPic}
                alt=""
              />
            </div>
            <div className="flex z-[9] flex-col items-center mb-0">
              <h4 className="text-xl font-semibold">Fahim Ahammad</h4>
              <span className="font-light">Hello my friends!</span>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">

          <Feed />
            </div>
            <div className="col-span-1">

          <Rightbar profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
