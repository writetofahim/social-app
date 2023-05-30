import Post from '../post/Post';
import Share from "../share/Share";
import {Posts} from '../../assets/data/dummyData'

const Feed = () => {
    return (
        <div className="p-5 col-span-5">
            <Share />
            {
                Posts.map(post=>(
                    <Post key={post.id} post = {post}/>
                ))
            }
        </div>
    );
};

export default Feed;