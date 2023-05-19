
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import img from '../../assets/person/profile1copy.jpg';

const Share = () => {
    return (
        <div>
            <div className="w-full h-[170px] shadow-md rounded-md p-3">
                <div className=' flex gap-3'>
                    <img className='w-9 h-9 rounded-full object-cover cursor-pointer' src={img} alt="" />
                    <input type="text" placeholder="What's on your mind Fahim?"
                        className='outline-none w-[80%]' />

                </div>
                <hr className='my-3' />
                <div className='flex gap-3'>
                    <div>
                        <PermMedia className='text-green-500' />
                        <span className="ml-1">Photo or Video</span>
                    </div>
                    <div>
                        <Label className='text-blue-500' />
                        <span className="ml-1">Tag</span>
                    </div>
                    <div>
                        <Room className='text-green-800' />
                        <span className="ml-1">Location</span>
                    </div>
                    <div>
                        <EmojiEmotions className='text-orange-400' />
                        <span className="ml-1">Feelings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;