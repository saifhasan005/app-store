import React from 'react';
import { useParams } from 'react-router';
import USeApp from '../Hooks/USeApp';
import Error404 from '../ErrorFetch/Error404';
import { HashLoader } from 'react-spinners';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = USeApp();
    const expectedApps = apps.find((app) => app.id == id);
    if (loading) {
        return <HashLoader color='purple'/>;
    }
    if (!expectedApps) {
        return <Error404/>;
    }
    console.log(id, expectedApps);
    return (
        <div className='container mx-auto'>
            <div className='shadow p-8 mt-[85px]'>
                <img className='w-[250px]' src={expectedApps.image} alt="" />
                <p className='font-bold text-xl'>{expectedApps.title}</p>
                <p className='font-semibold' >Build By: {expectedApps.companyName}</p>
            </div>
        </div>
    );
};

export default AppDetails;