import {act} from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });
// describe("React App",()=>{
//   test("Test renders text",()=>{
//     render(<App/>)
//     const text = screen.getByText("React Testing")
//   })
// })

/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Board} from "../src/components/Board"
import { checkWinner } from './components/checkWinner';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { useAppSelector } from '../../../hooks';

it("snapshot",async ()=>{
    
  //   type boardProps = {
  //     board: any,
  // }
  
      const {container} = await act(async () => render(
          <Provider store={store}>
          <Board />
          </Provider>
  ))
      expect(container.querySelector("h3")).toMatchSnapshot();
  
  })
  


// it("checkWinner",async()=>{
//   const PlayerWinner = 
//   [
//     ["X", "O", "O"],
//     ["O", "X", "O"],
//     ["O", "O", "X"],
//   ]


//   const OponnentWinner = 
//   [
//     ["O", "O", "O"],
//     ["O", "X", "O"],
//     ["O", "O", "X"],
//   ]

//   expect(checkWinner(OponnentWinner)).toBe("O")
// })