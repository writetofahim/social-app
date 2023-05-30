

const Online = ({user}) => {
    return (
        <li className="flex items-center gap-3 my-3">
            <div className="relative ">
                <img className="h-10 w-10 rounded-full object-cover" src={user.profilePicture} alt="friend img" />
                <span className="h-3 w-3 rounded-full bg-green-500 border border-white absolute top-0 right-0"></span>
            </div>
                <span>{user.username}</span>
        </li>
    );
};

export default Online;