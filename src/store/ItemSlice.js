import { createSlice } from '@reduxjs/toolkit'

const ItemSlice=createSlice(
{
    name: 'items',
   initialState: [],
   reducers: 
   {
    addinitalvalue : ( state, action) =>
    {
        
        return action.payload;
    }
   }

}
);
export const ItemAction=ItemSlice.actions;
export default ItemSlice