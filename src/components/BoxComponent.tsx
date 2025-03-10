import React from 'react';

const BoxComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full flex justify-start items-center flex-wrap">
      <a className="relative inline-block box-2 w-[50vw] pb-[50vw] m-[1vw] uppercase font-extrabold overflow-hidden cursor-pointer md:w-[35vw] md:pb-[35vw] hover:box-2:box__btn:bg-yellow-500 hover:box-2:box__btn:text-black hover:box-2:box__background:animate-paused">
        <svg className="absolute top-0 left-0 w-[100%] h-auto text-[34px]" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="line1" d="M251.994 21.5L251.995 190.5C251.995 212.591 269.903 230.5 291.995 230.5L517.5 230.5C539.592 230.5 557.5 248.409 557.5 270.5L557.5 275.5C557.5 297.591 575.409 315.5 597.5 315.5L759 315.5" stroke="black" strokeWidth="40" strokeLinecap="round" />
        <path id="line2" d="M20.5001 451L226 451C248.091 451 266 468.909 266 491L266 530C266 552.091 283.908 570 306 570L475.5 570C497.591 570 515.5 587.909 515.5 610L515.5 776.5" stroke="black" strokeWidth="40" strokeLinecap="round" />
        <text fill="#fff">
          <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line1">
          300+ Projects
          <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="9s" repeatCount="indefinite" />
          </textPath>
        </text>
        <text fill="#fff">
          <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line1">
          25+ Years of Experience
          <animate attributeName="startOffset" from="-40%" to="100%" begin="3s" dur="9s" repeatCount="indefinite" />
          </textPath>
        </text>
        <text fill="#fff">
          <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line2">
          200+ Trusted Clients
          <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="9s" repeatCount="indefinite" />
          </textPath>
        </text>
        <text fill="#fff">
          <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line2">
          Multiple branches
          <animate attributeName="startOffset" from="-40%" to="100%" begin="3s" dur="9s" repeatCount="indefinite" />
          </textPath>
        </text>
        </svg>
        <div className="absolute top-[-2rem] left-0 right-0 bottom-0 p-[2vw] flex flex-wrap justify-between items-center content-center text-black">
          <p className="text-[1.5rem] font-bold text-center w-full">
            Why choose Saudi Controls ?
          </p>
        {/* <span className="text-[8rem] block text-white">Us</span> */}
        {/* <div className="leading-[4vw] text-center max-w-[80%] p-[0_2vw] text-[1.8rem] mt-[1vw] transition-[all_0.3s] transform-scale-[1] bg-black text-white border border-black">shop now</div> */}
        </div>
      </a>
      </div>
    </div>
  );
};

export default BoxComponent;