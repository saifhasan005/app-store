import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaDownLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    return (
        <Link to={`/apps/${app.id}`} className="bg-base-100 shadow-sm rounded-xl overflow-hidden">
            <figure className="px-4 pt-4">
                <img
                    className="rounded-xl w-[250px] object-cover mx-auto"
                    src={app.image}
                    alt="app"
                />
            </figure>
            <div className="grid grid-rows-[auto_1fr_auto] gap-2 p-3 sm:p-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold line-clamp-2">
                    {app.title}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                    <span className="flex justify-center items-center gap-1 font-semibold rounded-md px-2 py-1 text-xs sm:text-sm bg-green-100 text-green-500">
                        <FaDownLong /> {app.downloads}
                    </span>
                    <span className="flex justify-center items-center gap-1 font-semibold rounded-md px-2 py-1 text-xs sm:text-sm bg-orange-100 text-orange-500">
                        <FaStar /> {app.ratingAvg}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;