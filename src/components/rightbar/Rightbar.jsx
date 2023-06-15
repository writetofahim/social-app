import cake from "../../assets/cake.jpg";
import gift from "../../assets/icons/gift.png";
import Online from "../online/Online";
import { users } from "../../assets/data/dummyData";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <div className="p-5">
        <div className="flex items-center gap-2">
          <img className="w-12 h-12" src={gift} alt="" />
          <p>
            <span className="font-bold">Tonmoy Ahmed</span> and{" "}
            <span className="font-bold">3 other friends</span> have a birthday
            today
          </p>
        </div>
        <img className="w-[80%] rounded-lg my-8" src={cake} alt="" />
        <h4 className="font-semibold">Online Friends</h4>
        <ul>
          {users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <div className="p-5">
        <h4 className="text-sm font-light">User information</h4>
        <div className="text-sm font-thin">
          <div>
            <span>City:</span>
            <span>Dhaka</span>
          </div>
          <div>
            <span>From:</span>
            <span>Brahmanbaria</span>
          </div>
          <div>
            <span>Relationship:</span>
            <span>Single</span>
          </div>
        </div>

      </div>
    );
  };
  return <div className="col-span-4">{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>;
};

export default Rightbar;
