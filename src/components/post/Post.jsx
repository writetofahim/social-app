import { MoreVert } from '@mui/icons-material';
import like from '../../assets/icons/like.png';
import love from '../../assets/icons/love.png';
import img from '../../assets/person/profile1copy.jpg';

const Post = () => {
    return (
        <div>
            <div className="w-full rounded-sm shadow-md my-8 p-3">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <img className='w-7 h-7 rounded-full' src={img} alt="" />
                        <span>Fahim Ahammad</span>
                        <span className='text-xs'>5 min ago</span>

                    </div>
                    <div>
                        <MoreVert />
                    </div>
                </div>

                <div className='my-5'>
                    <span>This my first post :)</span>
                    <img className='mt-5 w-full max-h-[500px] object-contain' src={img} alt="" />
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-1'>
                        <img className='w-5 h-5' src={like} alt="" />
                        <img className='w-5 h-5' src={love} alt="" />
                        <span>53 people like it</span>
                    </div>
                    <div>
                        <span>9 comments</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;