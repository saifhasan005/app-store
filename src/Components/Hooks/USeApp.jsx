import React, { use, useState } from 'react';
const appdata = fetch('/data.json').then((res) => res.json());
const USeApp = () => {
    const [apps, setApps] = useState([]);
    const [loading, setloading] = useState(true);
    const data = use(appdata);
    setTimeout(() => {
        setApps(data);
        setloading(false);
    }, 2000)
    return {apps, loading};
};

export default USeApp;