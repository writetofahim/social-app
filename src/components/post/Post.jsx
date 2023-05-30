import { MoreVert } from '@mui/icons-material';
import like from '../../assets/icons/like.png';
import love from '../../assets/icons/love.png';
import {users} from '../../assets/data/dummyData'

const Post = ({post}) => {
console.log(users.find(user=>user.id===post?.userId).profilePicture)
    return (
        <div>
            <div className="w-full rounded-sm shadow-md my-8 p-3">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <img className='w-7 h-7 rounded-full' src={users.find(user=>user.id===post?.userId).profilePicture} alt="" />
                        <span>{users.find(user=>user.id===post?.userId).username}</span>
                        <span className='text-xs'>{post.date}</span>

                    </div>
                    <div>
                        <MoreVert />
                    </div>
                </div>

                <div className='my-5'>
                    <span>{post?.desc}</span>
                    <img className='mt-5 w-full max-h-[500px] object-contain' src={post?.photo} alt="" />
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-1'>
                        <img className='w-5 h-5' src={like} alt="" />
                        <img className='w-5 h-5' src={love} alt="" />
                        <span>{post.like} people like it</span>
                    </div>
                    <div>
                        <span>{post?.comment} comments</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;