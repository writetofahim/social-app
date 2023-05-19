import { Chat, Notifications, Person } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import profilePic from '../../assets/person/profile1copy.jpg';

const Topbar = () => {
  return (
    // container
    <div className="w-full h-[50px] bg-[#1876F3] grid grid-cols-12 items-center sticky top-0 z-[999]">
      {/* left */}
      <div className="flex items-center col-span-3">
        <h1 className="font-extrabold text-3xl ml-5 text-white">FahimSocial</h1>
      </div>

      {/* center */}
      <div className=" col-span-5 w-full h-[30px] bg-white rounded-3xl flex items-center">
        <SearchIcon className="ml-3" />
        <input
          className="outline-none border-none w-[70%]"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* right */}
      <div className=" col-span-4 flex items-center justify-around">
        {/* links */}
        <div className="text-white">
          <span className="mr-3 cursor-pointer">Home Page</span>
          <span className="mr-3 cursor-pointer">Timeline</span>
        </div>
        {/* icons */}
        <div className="flex gap-3 ">
          {/* person icon */}
          <div className="relative">
            <Person className=" text-white" />
            <span className="absolute -top-[5px] -right-[5px] text-white bg-red-600 rounded-full text-xs w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          {/* Chat icon */}
          <div className="relative">
            <Chat className="text-white" />
            <span className="absolute -top-[5px] -right-[5px] text-white bg-red-600 rounded-full text-xs w-4 h-4 flex items-center justify-center">
              5
            </span>
          </div>
          {/* person icon */}
          <div className="relative">
            <Notifications className="text-white" />
            <span className="absolute -top-[5px] -right-[5px] text-white bg-red-600 rounded-full text-xs w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
        </div>
        <div className="  ">
          <img className="w-9 h-9 rounded-full object-cover cursor-pointer" src={profilePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
