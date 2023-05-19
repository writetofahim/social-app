import Post from '../post/Post';
import Share from "../share/Share";

const Feed = () => {
    return (
        <div className="p-5 col-span-5">
            <Share />
            <Post />
            <Post />
        </div>
    );
};

export default Feed;