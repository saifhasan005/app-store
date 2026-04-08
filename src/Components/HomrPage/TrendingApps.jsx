import { FaStar } from 'react-icons/fa';
import { FaDownLong } from 'react-icons/fa6';
import AppCard from '../UI/AppCard';
import { HashLoader, } from 'react-spinners';
import { Link } from 'react-router';
import USeApp from '../Hooks/USeApp';


const TrendingApps = () => {
 const {apps, loading} = USeApp(); 
    // console.log(data);
    return (
        <div className='container mx-auto mt-[45px]'>
            <p className='text-center font-bold text-4xl'>Trending Apps</p>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur</p>
            {loading ? (
                <div className='flex items-center justify-center'>
                    <HashLoader color='purple' />
                </div>
            ) : (
                <div className='grid grid-cols-3 gap-8 mt-[80px]'>
                    {
                        apps.slice(0, 6).map((app, ind) => {
                            return (
                                <AppCard app={app} key={ind}></AppCard>
                            )
                        })
                    }
                </div>
            )}
            <div className='text-center'>
                <Link to={'/apps'}>
                    <button className='btn bg-purple-500 text-white font-semibold mt-[24px]'>View All</button>
                </Link>
            </div>

        </div>
    );
};

export default TrendingApps;