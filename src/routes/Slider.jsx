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
        <div id="carouselExampleInterval" className="carousel slide hisetforslider " data-bs-ride="carousel">
  <div className="carousel-inner mt-5">
    <div className="carousel-item active"  >
      <img src={img[1]} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src={img[5]} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img[4]} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    )

}
export default Slider
