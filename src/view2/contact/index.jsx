import { GoogleMap } from "@react-google-maps/api";
import React from "react";
import "../common/scss/style.scss";

export default function Contact(){
    return(
        <>
            <div className="container-fluid bg-beige height-250">
            </div>
            <div className="height-600">

            </div>
            {/* <div className="row">
                <GoogleMap
                    onLoad={map => {
                    const bounds = new window.google.maps.LatLngBounds();
                    map.fitBounds(bounds);
                }}
                onUnmount={map => {
                // do your stuff before map is unmounted
                }}
                />
            </div> */}
        </>
    );
}