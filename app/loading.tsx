'use client';

import React, { useEffect, useState } from 'react';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000); // Show for 6 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          width="500"
          height="300"
          viewBox="0 0 500 300"
          className="w-full max-w-2xl h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Stylized handwritten signature */}
          
          {/* Main signature path - flowing cursive style */}
          <path
            d="M 80 200 Q 90 150 110 140 Q 130 135 150 145 Q 165 155 170 175 Q 172 190 165 200 L 140 200 Q 120 200 100 195 Q 85 190 80 200 Z"
            stroke="none"
            fill="#1e40af"
            opacity="0"
            style={{
              animation: 'fadeIn 0.8s ease-in-out 0.3s forwards',
            }}
          />

          {/* A - Stylized */}
          <g style={{ animation: 'drawSig 3s ease-in-out forwards' }}>
            <path
              d="M 60 220 L 90 80 L 120 220 M 70 160 L 110 160"
              stroke="#000000"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{
                animation: 'drawLine 2.8s ease-in-out forwards',
              }}
            />
          </g>

          {/* A - Stylized */}
          <g style={{ animation: 'drawSig 3s ease-in-out 0.4s forwards' }}>
            <path
              d="M 150 220 L 180 80 L 210 220 M 160 160 L 200 160"
              stroke="#000000"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{
                animation: 'drawLine 2.8s ease-in-out forwards',
              }}
            />
          </g>

          {/* R - Flowing style */}
          <g style={{ animation: 'drawSig 3s ease-in-out 0.8s forwards' }}>
            <path
              d="M 245 220 L 245 80 L 280 80 Q 310 80 310 110 Q 310 140 280 140 L 245 140 M 280 140 Q 320 140 330 220"
              stroke="#000000"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="250"
              strokeDashoffset="250"
              style={{
                animation: 'drawLine 2.8s ease-in-out forwards',
              }}
            />
          </g>

          {/* O - Circular elegant */}
          <g style={{ animation: 'drawSig 3s ease-in-out 1.2s forwards' }}>
            <path
              d="M 355 100 Q 390 100 390 150 Q 390 200 355 220 Q 320 220 320 150 Q 320 100 355 100"
              stroke="#000000"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="220"
              strokeDashoffset="220"
              style={{
                animation: 'drawLine 2.8s ease-in-out forwards',
              }}
            />
          </g>

          {/* N - Diagonal flowing */}
          <g style={{ animation: 'drawSig 3s ease-in-out 1.6s forwards' }}>
            <path
              d="M 415 220 L 415 80 L 460 220 L 460 80"
              stroke="#000000"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="250"
              strokeDashoffset="250"
              style={{
                animation: 'drawLine 2.8s ease-in-out forwards',
              }}
            />
          </g>

          {/* Decorative flourish underline */}
          <path
            d="M 60 240 Q 150 260 280 240 Q 350 230 460 245"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
            strokeDasharray="300"
            strokeDashoffset="300"
            style={{
              animation: 'drawLine 2s ease-in-out 1.2s forwards',
            }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 300;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes drawSig {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
