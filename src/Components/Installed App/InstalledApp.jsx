import React, { useContext } from 'react';
import { InstallAppsContext } from '../ContextApps/ContextApps';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const InstalledApp = () => {
    const { installApp, setinstallApp } = useContext(InstallAppsContext);
    
    const handleUninstall = (App) => {
        const restApps = installApp.filter((installedApp) => installedApp.id != App.id);
        setinstallApp(restApps);
        toast.warn(`${App.title} is Uninstalled`);
        
    }

    return (
        <div className='container mx-auto px-4 mt-[85px]'>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold'>
                    Installed Apps 
                    <span className='ml-2 bg-purple-100 text-purple-600 text-sm px-2 py-1 rounded-full'>
                        {installApp.length}
                    </span>
                </h2>
                <Link to='/apps'>
                    <button className='btn bg-purple-500 text-white text-sm'>+ Install More</button>
                </Link>
            </div>

            {installApp.length === 0 ? (
                <div className='flex flex-col items-center justify-center gap-4 h-[60vh]'>
                    <div className='text-6xl'>📭</div>
                    <h2 className='text-center font-bold text-2xl text-gray-700'>No Apps Installed Yet</h2>
                    <p className='text-gray-400 text-sm'>Browse the store and install your favorite apps</p>
                    <Link to='/apps'>
                        <button className='btn bg-purple-500 text-white px-6'>Go To Apps Section</button>
                    </Link>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {installApp.map((app, index) => (
                        <div key={index} className='shadow-md rounded-xl p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow'>
                            <img className='w-[80px] h-[80px] object-contain rounded-xl' src={app.image} alt={app.title} />
                            <div>
                                <p className='font-bold text-[17px]'>{app.title}</p>
                                <p className='text-sm text-gray-500'>By {app.companyName}</p>
                            </div>
                            <button 
                                className='btn btn-error btn-sm text-white mt-auto w-full' 
                                onClick={() => handleUninstall(app)}
                            >
                                🗑 Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InstalledApp;