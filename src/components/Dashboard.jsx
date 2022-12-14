import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

const Dashboard = () => {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
};

export default Dashboard;
