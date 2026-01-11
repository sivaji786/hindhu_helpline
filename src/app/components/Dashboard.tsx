import { useState } from 'react';
import { tokenManager } from '../../services/api';

export function Dashboard() {
    const user = tokenManager.getUser();
    const [activeTab, setActiveTab] = useState('overview');

    const handleLogout = () => {
        tokenManager.removeToken();
        tokenManager.removeUser();
        window.location.reload();
    };

    const stats = [
        { label: 'Total Members', value: '1,234', icon: '👥', color: 'bg-blue-500' },
        { label: 'Active Cases', value: '45', icon: '📋', color: 'bg-green-500' },
        { label: 'Pending Requests', value: '12', icon: '⏳', color: 'bg-yellow-500' },
        { label: 'Resolved Today', value: '8', icon: '✅', color: 'bg-purple-500' },
    ];

    const recentActivities = [
        { id: 1, user: 'Rajesh Kumar', action: 'Registered as new member', time: '2 hours ago', type: 'success' },
        { id: 2, user: 'Priya Sharma', action: 'Submitted help request', time: '3 hours ago', type: 'info' },
        { id: 3, user: 'Amit Patel', action: 'Updated profile information', time: '5 hours ago', type: 'warning' },
        { id: 4, user: 'Lakshmi Reddy', action: 'Completed verification', time: '6 hours ago', type: 'success' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-[#FF9933] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                GH
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Global Hindu Help Line</h1>
                                <p className="text-xs text-gray-500">Towards Restoring of Hindu Heritage</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">{user?.name} {user?.surname}</p>
                                <p className="text-xs text-gray-500">{user?.email}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-8">
                        {['overview', 'members', 'requests', 'reports'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${activeTab === tab
                                    ? 'border-[#FF9933] text-[#FF9933]'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome back, {user?.name}! 👋
                    </h2>
                    <p className="text-gray-600">Here's what's happening with your organization today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                                    {stat.icon}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${activity.type === 'success' ? 'bg-green-500' :
                                            activity.type === 'info' ? 'bg-blue-500' :
                                                activity.type === 'warning' ? 'bg-yellow-500' : 'bg-gray-500'
                                            }`}>
                                            {activity.user.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                                            <p className="text-sm text-gray-600">{activity.action}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#FF9933] hover:bg-orange-50 transition-all group">
                        <div className="text-4xl mb-3">➕</div>
                        <h4 className="font-semibold text-gray-900 mb-1">Add New Member</h4>
                        <p className="text-sm text-gray-600">Register a new member to the system</p>
                    </button>

                    <button className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#FF9933] hover:bg-orange-50 transition-all group">
                        <div className="text-4xl mb-3">📝</div>
                        <h4 className="font-semibold text-gray-900 mb-1">Create Request</h4>
                        <p className="text-sm text-gray-600">Submit a new help request</p>
                    </button>

                    <button className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#FF9933] hover:bg-orange-50 transition-all group">
                        <div className="text-4xl mb-3">📊</div>
                        <h4 className="font-semibold text-gray-900 mb-1">View Reports</h4>
                        <p className="text-sm text-gray-600">Generate and view analytics</p>
                    </button>
                </div>
            </main>
        </div>
    );
}
