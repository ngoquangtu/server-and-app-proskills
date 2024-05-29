import React, { useEffect, useState } from 'react';
import adminService from '../services/adminService';

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await adminService.viewStats();
                console.log(result);
                setStats(result.pageviews);
            } catch (error) {
                setError('Error fetching stats');
                console.error('Error fetching stats:', error);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Thống kê truy cập</h2>
            {stats !== null ? (
                <p>Tổng số lượt truy cập: {stats}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Stats;
