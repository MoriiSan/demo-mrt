import React from 'react';
import './App.css';
import MrtMap from './components/mrtMap';

function MRTPay() {
    const UID = 123456789;
    const Bal = 500;
    const Fare = 13;
    const distance = 11;
    const loc = "Ayala Station";
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'short' })}`;

    return (
        <div className="map-container">
            <MrtMap/>
            <div className="objects">
                <div className="LOGO font-sans text-8xl font-bold text-black absolute left-12 top-6">MRT</div>
                <div className="LOGO font-sans text-xl absolute left-20 top-28">put LOGO here</div>
                <div className= "flex flex-wrap flex-col absolute top-20 right-48 place-items-center"> 
                    <div className="currentLoc font-sans text-6xl "> You are currently in</div>
                    <div className="font-sans text-6xl font-black">{loc}</div>
                </div>
                <div className="CARD w-96 h-56 bg-white rounded-lg drop-shadow-lg fixed bottom-5 right-5 ">
                    <div className="bg-gradient-to-r from-indigo-500"></div>
                    <div className="firstLine p-3 flex justify-between pb-0">
                        <div className='text1 font-semibold'>UID {UID}</div>
                        <div className='container w-40 h-6 bg-lime-400 rounded-lg'>
                            <div className='text2 font-normal text-black px-2'>BALANCE: {Bal} PHP </div>
                        </div>
                    </div>
                    <div className="secondLine p-3 flex justify-between pb-0">
                        <div className='text4 font-semibold'>You traveled {distance} KM </div>
                        <div className='container w-40 h-6 bg-amber-400 rounded-lg'>
                            <div className='text3 font-normal text-black px-2'>FARE: {Fare} PHP</div>
                        </div>
                    </div>
                    <div className="thirdLine p-6 flex justify-between pb-0">
                        <div className="text5 font-normal">{formattedDate}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MRTPay;
