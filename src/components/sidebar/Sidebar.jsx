import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline
} from "@mui/icons-material";
import { useEffect, useState } from "react";


const Sidebar = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/users')
      const jsonData = await res.json()
      console.log(jsonData.users);
      setData(jsonData.users)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" col-span-3 top-12 p-5 overflow-y-scroll my-scroll">
      <div className="p-5">
        <ul>
          <li className="mb-5">
            <RssFeed className="mr-4" />
            <span className="font-semibold">Feed</span>
          </li>
          <li className="mb-5">
            <Chat className="mr-4" />
            <span className="font-semibold">Chats</span>
          </li>
          <li className="mb-5">
            <PlayCircleFilledOutlined className="mr-4" />
            <span className="font-semibold">Videos</span>
          </li>
          <li className="mb-5">
            <Group className="mr-4" />
            <span className="font-semibold">Groups</span>
          </li>
          <li className="mb-5">
            <Bookmark className="mr-4" />
            <span className="font-semibold">Bookmarks</span>
          </li>
          <li className="mb-5">
            <HelpOutline className="mr-4" />
            <span className="font-semibold">Questions</span>
          </li>
          <li className="mb-5">
            <WorkOutline className="mr-4" />
            <span className="font-semibold">Jobs</span>
          </li>
          <li className="mb-5">
            <Event className="mr-4" />
            <span className="font-semibold">Events</span>
          </li>
          <li className="mb-5">
            <School className="mr-4" />
            <span className="font-semibold">Courses</span>
          </li>
        </ul>
        <button className="py-2 px-3 border rounded-md">Show more</button>
        <hr className="my-5 " />
        <ul>
          {
            data.map((user) => (
              <li key={user.id} className="flex gap-3 items-center mb-4" >
                <img className="w-8 h-w-8 rounded-full object-cover border" src={user.image} alt="" />
                <span>{user.firstName + ' ' + user.lastName}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
