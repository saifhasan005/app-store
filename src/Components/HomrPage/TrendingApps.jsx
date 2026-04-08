import React, { use } from 'react';

const appdata = fetch('/data.json').then((res)=>res.json());
const TrendingApps = () => {
const data = use(appdata);
console.log(data);
    return (
        <div>
            <p>Trending Apps</p>
        </div>
    );
};

export default TrendingApps;