import {act} from 'react';

/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Board} from "../../Board"
import { checkWinner } from '../../checkWinner';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

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


it("checkWinner",async()=>{

  const PlayerWinner = 
  [
    ["X", "O", "O"],
    ["O", "X", "O"],
    ["O", "O", "X"],
  ]


  const OponnentWinner = 
  [
    ["O", "O", "O"],
    ["O", "X", "O"],
    ["O", "O", "X"],
  ]

  expect(checkWinner(OponnentWinner)).toBe("O")
})