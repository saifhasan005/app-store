import { HashLoader } from 'react-spinners';
import AppCard from '../UI/AppCard';
import USeApp from '../Hooks/USeApp';

const AllApps = () => {
    const {apps, loading} = USeApp();

    return (
        <div className='container mx-auto mt-[45px]'>
               <p className='text-center font-bold mb-[15px] text-4xl '>Trending Apps</p>
            <p className='text-gray-500 font-semibold text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur</p>
            {loading ? (
                <div className='flex mt-[40px] items-center justify-center'>
                    <HashLoader color='purple' />
                </div>
            ) : (
                <div className='grid  grid-cols-3 gap-8 mt-[80px]'>
                    {
                        apps.map((app, ind) => {
                            return (
                                <AppCard app={app} key={ind}></AppCard>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
};

export default AllApps;