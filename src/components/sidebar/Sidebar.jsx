import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import {users} from '../../assets/data/dummyData'
import p from '../../assets/person/profile1copy.jpg'

const Sidebar = () => {
  return (
    <div className=" col-span-3 top-12 p-5">
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
        <hr className="my-5 "/>
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        {/* {console.log(user.profilePicture)} */}
                        <img src={p} alt="" />
                        <span>{user.username}</span>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
