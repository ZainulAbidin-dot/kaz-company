import React from 'react';

const CircleComponent: React.FC = () => {
    return (
        <div className="relative w-full h-full"> {/* Make it fill the grid cell */}
            <svg className="absolute top-[-12.5%] left-[-12.5%] w-[125%] h-[125%] transform-origin-center animate-[rotateReverse_calc(0.3s*50)_linear_infinite]" viewBox="0 0 540 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="circle2" stroke="black" d="M480 270C480 385.98 385.98 480 270 480C154.02 480 60 385.98 60 270C60 154.02 154.02 60 270 60C385.98 60 480 154.02 480 270Z" strokeWidth="60" />

                <text className='text-[2rem] font-bold' fill="#fff">
                    <textPath startOffset="0%" textAnchor="start" alignmentBaseline="middle" fill='#fff' xlinkHref="#circle2">
                        <animate attributeName="startOffset" from="0%" to="100%" dur="10s" repeatCount="indefinite" keyTimes="0;1" values="0%;101%;" />
                        We have leveraged cutting-edge technological savvy and a wide network of high profile partners.
                    </textPath>
                </text>
                
            </svg>

        </div>
    );
};

export default CircleComponent;