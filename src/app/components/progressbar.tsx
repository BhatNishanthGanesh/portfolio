// components/progressbar.js
import React from 'react';

const VerticalProgressBar = ({ progress }:any) => (
  <div className="relative w-4 h-40 bg-gray-200 rounded">
    <div className="absolute inset-0 flex flex-col justify-end">
      <div
        className="w-full bg-teal-200 rounded"
        style={{ height: '100%' }}
      >
        <div
          className="bg-teal-500 rounded"
          style={{ height: `${progress}%`, transition: 'height 0.5s ease' }}
        ></div>
      </div>
    </div>
  </div>
);

export default VerticalProgressBar;
