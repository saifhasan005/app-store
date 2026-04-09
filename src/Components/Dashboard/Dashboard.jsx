import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallAppsContext } from '../ContextApps/ContextApps';
import USeApp from '../Hooks/USeApp';
const Dashboard = () => {
    const { installApp } = useContext(InstallAppsContext);
    const {apps, } = USeApp();
    const totalUninstallApps = apps.length - installApp.length
    // console.log(apps);
    const data = [
        { name: 'Installed', value: installApp.length, fill: '#89AC76' },
        { name: 'Uninstalled', value:totalUninstallApps, fill: '#524f48' },

    ]
    return (
        <div className='flex shadow p-10 rounded-md border border-slate-300 container mx-auto flex-col justify-center items-center my-10'>
            <h2 className='text-3xl font-semibold mb-16'>Installed and Uninstalled Apps</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Dashboard;