import { useState } from "react";

import {UserButton} from '@clerk/clerk-react'

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-4 flex flex-col">
        <div className="mb-4">
          <img src="/logo.png" alt="Logo" className="w-32 mx-auto" />
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li className="font-semibold">Cost-Savings Dashboard</li>
            <li className="flex items-center space-x-2">
              <span>📊</span> <span>All Savings</span>
            </li>
            <li className="font-semibold flex items-center space-x-2">
              <span>🟣</span> <span>Datadog</span>
            </li>
            <li className="pl-4">Custom Metrics</li>
            <li className="pl-4">Instances</li>
            <li className="pl-4">Indexed Spans</li>
            <li className="pl-4">Ingested Spans</li>
            <li className="pl-4">Profiling Hosts</li>
            <li className="pl-4">Browser Tests</li>
            <li className="font-semibold flex items-center space-x-2">
              <span>🟢</span> <span>New Relic</span>
            </li>
            <li className="pl-4">User Costs</li>
            <li className="pl-4">RUM Costs</li>
            <li className="font-semibold flex items-center space-x-2">
              <span>🟠</span> <span>AWS Savings</span>
            </li>
            <li className="pl-4">Cloudwatch Put</li>
            <li className="pl-4">Cloudwatch Stream</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-300 p-6 flex flex-col">
        {/* Top Bar */}
        <header className="bg-gray-100 p-4 flex justify-between items-center">
          <div></div>
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
            <UserButton />
          </div>
        </header>

        {/* Content */}
        <section className="flex-1 flex items-center justify-center">
          <h1 className="font-bold">Lorem Ipsum</h1>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
