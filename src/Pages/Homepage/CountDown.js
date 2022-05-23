// import React, { useEffect, useState } from 'react';
// import { Countdown } from 'react-daisyui';

// const CountDown = () => {
//     const [value, setValue] = useState

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setValue((v) => (v <= 0 ? value : v - 1))
//         }, 1000)

//         return () => {
//             clearTimeout(timer)
//         }
//     }, [])
//     return (
//         <div>
//             <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
//                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//                     <Countdown className="font-mono text-5xl" value={15} />
//                     days
//                 </div>
//                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//                     <Countdown className="font-mono text-5xl" value={10} />
//                     hours
//                 </div>
//                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//                     <Countdown className="font-mono text-5xl" value={24} />
//                     min
//                 </div>
//                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//                     <Countdown className="font-mono text-5xl" value={value} />
//                     sec
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CountDown;