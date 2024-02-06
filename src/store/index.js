import { configureStore } from '@reduxjs/toolkit'
import ItemSlice from './ItemSlice'
import Begslice from './BegSlice'
import SliderSlice from './SliderSlice'
import FecthStatusSlice from './FecthStatusSllice'
const mintraStore =configureStore(
    {
        reducer : 
        {
            items: ItemSlice.reducer,
            fecthstatus: FecthStatusSlice.reducer,
            beg: Begslice.reducer,
            sliderslice: SliderSlice.reducer
        }
    }
)
export default mintraStore
