import React, { useContext, } from 'react';
import { useParams } from 'react-router';
import USeApp from '../Hooks/USeApp';
import Error404 from '../ErrorFetch/Error404';
import { HashLoader } from 'react-spinners';
import { InstallAppsContext } from '../ContextApps/ContextApps';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = USeApp();
    const expectedApps = apps.find((app) => app.id == id);
    const { installApp, setinstallApp } = useContext(InstallAppsContext);

    if (loading) {
        return <div className='flex justify-center items-center'>
            <HashLoader color='purple' />
        </div>;
    }
    if (!expectedApps) {
        return <Error404 />;
    }

    const handleInstallApp = () => {
        const alreadyInstalled = installApp.find(app => app.id == expectedApps.id);
        if (alreadyInstalled) {
            toast.warn(`${expectedApps.title} is already installed!`);
            return;
        }
        setinstallApp([...installApp, expectedApps]);
        toast.success(`${expectedApps.title} Installed!`);
    }

    return (
        <div className='container mx-auto'>
            <div className='shadow p-8 mt-[85px]'>
                <img className='w-[250px]' src={expectedApps.image} alt="" />
                <p className='font-bold text-xl'>{expectedApps.title}</p>
                <p className='font-semibold'>Build By: {expectedApps.companyName}</p>
                <p className='text-gray-400'>{expectedApps.description}</p>
                <button className='btn mt-[8px] bg-purple-500 text-white' onClick={handleInstallApp}>
                    Install Now
                </button>
            </div>
        </div>
    );
};

export default AppDetails;