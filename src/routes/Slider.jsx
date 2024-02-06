import { GrNext } from "react-icons/gr";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sliderAction } from "../store/SliderSlice";
import { GrPrevious } from "react-icons/gr";

const Slider = () => {
    const sliderfolder = useSelector((store) => store.sliderslice);
    const img = sliderfolder.imagedata;
    const imgnumber = sliderfolder.imagestatus;
    const dispatch=useDispatch();
    return (
        <div className="cover">

            <div>
                {img.map((one) => <img src={one} style={(imgnumber === img.indexOf(one)+1) ? { display: "block" } : { display: "none" }} alt="sab thik tah hai" />)}
            </div>
            <div className="dotdev">
                {img.map((one) => <div className="dot" style={(imgnumber === img.indexOf(one)+1) ? { backgroundColor: "#837676" } : null}    ></div>)}
              </div>

            <div className="button_box">
                <button className="left" style={(imgnumber === 1) ? { visibility: "hidden" } : null} onClick={()=>dispatch(sliderAction.sidehandleleft())} ><GrPrevious /></button>
                <button className="right" style={(imgnumber === img.length) ? { visibility: "hidden" } : null} onClick={()=>dispatch(sliderAction.sidehandleright())} ><GrNext /></button>
            </div>

        </div>

    )

}
export default Slider