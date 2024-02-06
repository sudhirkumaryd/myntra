import { createSlice } from "@reduxjs/toolkit";
const SliderSlice=createSlice(
    {
        name: 'sliderslice',
        initialState:
        {
           imagedata: ["images/cover1.jpeg","images/cover2.jpg","images/cover3.jpg","images/cover4.jpg","images/cover5.jpg","images/cover6.jpg","images/cover7.png"],
           
            imagestatus: 1,
        },
        reducers:
        {
            sidehandleleft: (state) => {
                state.imagestatus =state.imagestatus-1 ;
              },
              sidehandleright: (state) => {
                state.imagestatus =state.imagestatus+1 ;
              }
             
        }
    }
)
export const sliderAction=SliderSlice.actions;
export default SliderSlice