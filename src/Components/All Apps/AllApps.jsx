import React, { use, useState } from 'react';
import { HashLoader } from 'react-spinners';
import AppCard from '../UI/AppCard';
const appdata = fetch('/data.json').then((res) => res.json());
const AllApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setloading] = useState(true);
    const data = use(appdata);
    setTimeout(() => {
        setApps(data);
        setloading(false);
    }, 2000)
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