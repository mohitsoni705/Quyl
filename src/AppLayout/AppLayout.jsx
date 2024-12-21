import React from 'react';
import LeftNav from '../components/LeftNav';
import Header from '../components/Header';
import Hero from '../components/Hero'; // Assuming you have a Hero component

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[258px] h-[789px] bg-white text-white">
        <LeftNav />
      </div>
      <div className="flex-1 flex flex-col mt-[20px]">
        <Header />
        <main className="flex-1 p-6">
        <Hero/>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
