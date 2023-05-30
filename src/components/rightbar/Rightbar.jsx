import cake from '../../assets/cake.jpg';
import gift from '../../assets/icons/gift.png';
import Online from '../online/Online';
import {users} from '../../assets/data/dummyData'

const Rightbar = () => {
    return (
        <div className='col-span-4 p-5'>
            <div className='flex items-center gap-2'>
                <img className='w-12 h-12' src={gift} alt="" />
                <p><span className='font-bold'>Tonmoy Ahmed</span> and <span className='font-bold'>3 other friends</span> have a birthday today</p>
            </div>
            <img className='w-[80%] rounded-lg my-8' src={cake} alt="" />
            <h4 className='font-semibold'>Online Friends</h4>
            <ul>
                {
                    users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Rightbar;