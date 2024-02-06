import { createSlice } from "@reduxjs/toolkit";
const FecthStatusSlice=createSlice(
    {
        name: 'fecthstatus',
        initialState:
        {
            fetchDone: false,
            currentlyFetching: false,
        },
        reducers:
        {
            markFetchDone: (state) => {
                state.fetchDone = true;
              },
              markFetchingStarted: (state) => {
                state.currentlyFetching = true;
              },
              markFetchingFinished: (state) => {
                state.currentlyFetching = false;
              }
        }
    }
)
export const fecthAction=FecthStatusSlice.actions;
export default FecthStatusSlice