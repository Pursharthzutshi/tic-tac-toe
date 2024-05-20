// import React from "react";

// type BoardProps = {
//   board: Array<Array<string | null>>;
//   handleClick: (row: number, col: number) => void;
// };
// export const Board = ({ board, handleClick }): BoardProps => {
//   return (
//     <div className=" flex justify-center align-middle flex-col gap-10">
//       {board.map((row: number, rowIndex: number) => {
//         return (
//           <div key={rowIndex} className=" flex">
//             {row.map((cell: number, cellIndex: number) => {
//               <button
//                 key={cellIndex}
//                 className=" w-24 h-24 rounded text-center text-xl"
//                 onClick={() => handleClick(rowIndex, cellIndex)}
//               >
//                 {cell}
//               </button>;
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// };