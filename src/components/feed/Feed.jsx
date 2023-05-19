import { MoreVert } from '@mui/icons-material';
import img from '../../assets/person/profile1copy.jpg';
import Share from "../share/Share";

const Feed = () => {
    return (
        <div className="p-5 col-span-5">
            <Share />
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

            </div>
        </div>
    );
};

export default Feed;