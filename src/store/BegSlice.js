import { createSlice } from "@reduxjs/toolkit";
const Begslice=createSlice(
    {
        name: 'beg',
        initialState: [],
        reducers:
        {
            additembeg: (state,action)=>
            {
                state.push(action.payload);

            },
            deleteitem: (state,action) =>
            {
                return state.filter(itemId=>itemId !== action.payload);
            }

        }
    }
)
export const BegAction=Begslice.actions;
export default Begslice